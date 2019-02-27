import React, { Component } from 'react';


class InfoBox extends Component {

    render() {
      return(
        this.props.poke ? <div className='info-box'>
          <span>{ this.props.poke.name }</span>
          <br/>
          <img src={ this.props.poke.sprites.front_default } alt=''/>
          <br/>
          <span> Defense: { this.props.poke.stats[3].base_stat }</span>
          <br/>
          <span> Attack: { this.props.poke.stats[4].base_stat }</span>
          <br/>
          <span> Stamina: { this.props.poke.stats[5].base_stat }</span>
          <br/>
          <span>Types: { this.props.poke.types[0].type.name }</span>
        </div> : this.props.error ? <h1> Try another name please </h1> : null
      )
    }
}


export default InfoBox
