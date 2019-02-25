import React, { Component } from 'react';


class PokemonIndex extends Component {

    render() {
      console.log(this.props.poke)
      
      return(
        <div>
          <h1>Pokemon Index</h1>
          <span>{ this.props.poke && this.props.poke.name }</span>
          <br/>
          <span> Defense: { this.props.poke && this.props.poke.stats[3].base_stat }</span>
          <br/>
          <span> Attack: { this.props.poke && this.props.poke.stats[4].base_stat}</span>
          <br/>
          <span> Stamina: { this.props.poke && this.props.poke.stats[5].base_stat}</span>
          <br/>
          <span>Age: { this.props.poke && this.props.poke.age }</span>
        </div>
      )
    }
}


export default PokemonIndex
