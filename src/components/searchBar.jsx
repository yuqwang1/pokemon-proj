import React, { Component } from 'react';
import PokemonIndex from './pokemonIndex';
import BarGraph from './barGraph'

class SearchBar extends Component {
    state = {
      search: '',
      poke: null
    }


handleSubmit = (e) => {
  e.preventDefault();
  fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.search}`)
  .then(res => res.json())
  .then(poke => this.setState({ poke }))
}


  updateForm(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  }


  render() {
    return(
      <div>
        <h1>Search Bar</h1>
        <form onSubmit={ this.handleSubmit }>
          <input
            type='text'
            placeholder='pokemon'
            value={this.state.search}
            onChange={this.updateForm('search')}
            />
          <input type='submit' value='Search'/>
        </form>
        <PokemonIndex poke={ this.state.poke }/>
        <BarGraph poke={ this.state.poke }/>
      </div>

    )
  }
}

export default SearchBar;
