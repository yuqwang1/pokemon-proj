import React, { Component } from 'react';
import { POKECOLOR } from './pokeColor';


class InfoBox extends Component {

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
          <div className='info-text' style={ styles }>
            <h2 className='poke-name'>{ this.capitalize(name) }</h2>
            <br/>
            <span className='poke-info'> Defense: { this.props.poke.stats[3].base_stat }</span>
            <br/>
            <span className='poke-info'> Attack: { this.props.poke.stats[4].base_stat }</span>
            <br/>
            <span className='poke-info'> Stamina: { this.props.poke.stats[5].base_stat }</span>
            <br/>
            { !this.props.poke.types[1] ?
              <span className='poke-info'>Type: { this.capitalize(type1) }</span> :
              <div>
                <span className='poke-info'>Type 1: { this.capitalize(type1) }</span>
                <br/>
                <span className='poke-info'>Type 2: { this.capitalize(type2) }</span>
              </div>
            }
          </div>
        </div> : this.props.error ? <h1> Try another name please </h1> : null
      )
    }
}


export default InfoBox
