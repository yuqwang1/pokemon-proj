import React, { Component } from 'react'
import './scss/main.scss'

import { connect } from 'react-redux'
import * as actions from './redux/actions'
import PokemonIndex from './components/pokemonIndex';
import SearchBar from './components/searchBar';

class App extends Component {
  componentDidMount () {
    this.props.setTitle('POKEMON`')
  }

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <SearchBar/>
        <PokemonIndex />

      </div>
    )
  }
}

const mapStateToProps = ({ title }) => {
  return {
    title
  }
}

const VisibleApp = connect(
  mapStateToProps,
  actions
)(App)

export default VisibleApp
