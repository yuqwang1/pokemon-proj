import React, { Component } from 'react'
import './scss/main.scss'

import { connect } from 'react-redux'
import * as actions from './redux/actions'
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
