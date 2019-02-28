import React from 'react';
import { POKECOLOR, capitalize } from './util';

const InfoBox = ({poke, error}) => {

  if (poke) {
    var name = poke.name;
    var type1 = poke.types[0].type.name;
    if (poke.types[1]) {
      var type2 = poke.types[1].type.name;
    }
  }

  const styles = {
    color: POKECOLOR[type1]
  }

  return (
    error ?
      <h1 className='info-error'>{error}</h1> :
    poke ?
      <div className='info-box'>
        <img src={poke.sprites.front_default} alt='' className='poke-img'/>
        <br/>
        <div className='info-text' style={styles}>
          <h2 className='poke-name'>{capitalize(name)}</h2>
          <br/>
          <span className='poke-info'>Defense: {poke.stats[3].base_stat}</span>
          <br/>
          <span className='poke-info'>Attack: {poke.stats[4].base_stat}</span>
          <br/>
          <span className='poke-info'>Stamina: {poke.stats[5].base_stat}</span>
          <br/>
          { !poke.types[1] ?
            <span className='poke-info'>Type: {capitalize(type1)}</span> :
            <div>
              <span className='poke-info'>Type 1: {capitalize(type1)}</span>
              <br/>
              <span className='poke-info'>Type 2: {capitalize(type2)}</span>
            </div>
          }
        </div>
      </div> : null
  )
}

export default InfoBox
