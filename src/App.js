import React, { Component } from 'react'
import './scss/main.scss'

import { connect } from 'react-redux'
import * as actions from './redux/actions'
import SearchBar from './components/searchBar';
import { Provider } from 'react-redux';
import store from './store'




class App extends Component {
  componentDidMount () {
    this.props.setTitle('POKEMON`')
  }

  render () {
    return (
      <Provider store={store}>
        <div>
          <h1>{this.props.title}</h1>
          <SearchBar/>
        </div>
      </Provider>
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
