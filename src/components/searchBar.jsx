import React, { Component } from 'react';
import PokemonIndex from './pokemonIndex';
import StatGraph from './statGraph';
import MoveGraph from './moveGraph';
import AutoComplete from 'material-ui/AutoComplete';

class SearchBar extends Component {
    state = {
      search: 'pikachu',
      poke: null,
      error: null,
      on: false,
      pokemons: null
    }

  componentDidMount(){
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=964&offset=0')
      .then(res => res.json())
      .then(pokemons => this.setState({ pokemons}))
    }

  handleToggle = () => {
    this.setState({ on: !this.state.on })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.search}`)
    .then(res => res.json())
    .then(poke => this.setState({ poke }))
    .catch(error => this.setState({ error }))
  }


  updateForm(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  }


  render() {
    const { poke, error, on, search } = this.state
    // for (let i = 0; i < this.state.pokemons.length; i++) {
    //   pokes.push(this.state.pokemons[i].name)
    // }
    let pokes = [];
    if (this.state.pokemons){
       pokes = this.state.pokemons.results.map(poke => (
        poke.name
      ))
    }
    
    return(
      <div>
        <h1>Search Bar</h1>
        <form onSubmit={ this.handleSubmit }>
          <input
            type='text'
            placeholder='pikachu'
            value={search}
            onChange={this.updateForm('search')}
            />
          <input type='submit' value='Search'/>
        </form>
        <PokemonIndex poke={ poke } error={ error }/>
        <button onClick={ this.handleToggle}>Stats/Move</button>
        { !on ? <StatGraph poke={ poke }/> : <MoveGraph poke={ poke }/>}
      </div>

    )
  }
}

export default SearchBar;
