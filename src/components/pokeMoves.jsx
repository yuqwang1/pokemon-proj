import React from 'react';
import { POKECOLOR, capitalize } from './util';

const PokeMoves = ({poke}) => {

  if (poke){
    var move1 = poke.moves[0].move.name
    var move2 = poke.moves[1].move.name
    var move3 = poke.moves[2].move.name
    var move4 = poke.moves[3].move.name
    var type1 = poke.types[0].type.name
  }

  const styles = {
    color: POKECOLOR[type1]
  }

  return (
    <div>
        {poke ?
        <div className='poke-move' style={styles}>
          <h2>First Move: {capitalize(move1)}</h2>
          <h2>Second Move: {capitalize(move2)}</h2>
          <h2>Third Move: {capitalize(move3)}</h2>
          <h2>Fourth Move: {capitalize(move4)}</h2>
        </div> : null}
    </div>
  )
}


export default PokeMoves;
