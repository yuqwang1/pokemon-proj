import React, { Component } from 'react';

const POKECOLOR = {
  'bug': 'LawnGreen',
  'dark': 'DimGrey',
  'poison': 'DarkViolet',
  'electric': 'Gold',
  'dragon': 'DarkSlateBlue',
  'fairy': 'violet',
  'fighting': 'Crimson',
  'fire': 'OrangeRed',
  'flying': 'SteelBlue',
  'ghost': 'indigo',
  'grass': 'DarkGreen',
  'ground': 'DarkGoldenrod',
  'ice': 'Cyan',
  'normal': 'Goldenrod',
  'psychic': 'DeepPink',
  'rock': 'Peru',
  'steel': 'Silver',
  'water': 'RoyalBlue'
}

class InfoBox extends Component {

    render() {
      if (this.props.poke){
        var name = this.props.poke.name;
        var type1 = this.props.poke.types[0].type.name;
        if (this.props.poke.types[1]) {
          var type2 = this.props.poke.types[1].type.name;
        }
      }

      const styles = {
        color: POKECOLOR[type1]
      }


      return(
        this.props.poke ? <div className='info-box'>
          { console.log(this.props.poke) }
          <img src={ this.props.poke.sprites.front_default } alt='' className='poke-img'/>
          <br/>
          <div className='info-text' style={styles}>
            <h2 className='poke-name'>{ name[0].toUpperCase() + name.substring(1) }</h2>
            <br/>
            <span> Defense: { this.props.poke.stats[3].base_stat }</span>
            <br/>
            <span> Attack: { this.props.poke.stats[4].base_stat }</span>
            <br/>
            <span> Stamina: { this.props.poke.stats[5].base_stat }</span>
            <br/>
            <span>Types: { type1[0].toUpperCase() + type1.substring(1) }</span>
            <br/>
            { this.props.poke.types[1] ?
              <span className='poke-type2'>
                { type2[0].toUpperCase() + type2.substring(1) }
              </span> : null }
          </div>
        </div> : this.props.error ? <h1> Try another name please </h1> : null
      )
    }
}


export default InfoBox
