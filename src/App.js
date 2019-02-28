import React, { Component } from 'react'
import './scss/main.scss'
import './scss/pokeMoves.scss'
import './scss/infoBox.scss';
import './scss/statGraph.scss';
import './scss/searchBar.scss';
import { connect } from 'react-redux'
import * as actions from './redux/actions'
import SearchBar from './components/searchBar';

class App extends Component {
  componentDidMount() {
    this.props.setTitle('Search for Pokémon')
  }

  render() {
    return (
      <div>
        <h1 className='title'>{this.props.title}</h1>
        <SearchBar/>
      </div>
    )
  }
}

const mapStateToProps = ({title}) => {
  return {
    title
  }
}

const VisibleApp = connect(
  mapStateToProps,
  actions
)(App)

export default VisibleApp
