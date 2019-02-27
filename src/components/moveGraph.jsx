import React, { Component } from 'react';
import { POKECOLOR } from './pokeColor';

class MoveGraph extends Component {

  capitalize(string) {
    let new_str = ''
    for (let i = 0; i < string.length; i++) {
      if (i === 0 || string[i - 1] === '-'){
        new_str += string[i].toUpperCase()
      } else {
        new_str += string[i]
      }
    }
    return new_str
  }
  render() {

    if (this.props.poke){
      var move1 = this.props.poke.moves[0].move.name
      var move2 = this.props.poke.moves[1].move.name
      var move3 = this.props.poke.moves[2].move.name
      var move4 = this.props.poke.moves[3].move.name
      var type1 = this.props.poke.types[0].type.name
    }

    const styles = {
      color: POKECOLOR[type1]
    }

    return(
      <div>
        { this.props.poke ?
          <div className='poke-move' style={ styles }>
            <h2>First Move: { this.capitalize(move1) }</h2>
            <h2>Second Move: { this.capitalize(move2) }</h2>
            <h2>Third Move: { this.capitalize(move3) }</h2>
            <h2>Fourth Move: { this.capitalize(move4) }</h2>
          </div> : null}
      </div>
    )
  }
}

export default MoveGraph;
