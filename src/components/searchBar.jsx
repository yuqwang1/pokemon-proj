import React, { Component } from 'react';
import PokemonIndex from './pokemonIndex';
import BarGraph from './barGraph'

class SearchBar extends Component {
    state = {
      search: 'pikachu',
      poke: null,
      error: null
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
    return(
      <div>
        <h1>Search Bar</h1>
        <form onSubmit={ this.handleSubmit }>
          <input
            type='text'
            placeholder='pikachu'
            value={this.state.search}
            onChange={this.updateForm('search')}
            />
          <input type='submit' value='Search'/>
        </form>
        <PokemonIndex poke={ this.state.poke } error={ this.state.error }/>
        <BarGraph poke={ this.state.poke }/>
      </div>

    )
  }
}

export default SearchBar;
