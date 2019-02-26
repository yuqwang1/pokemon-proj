import React, { Component } from 'react';
import InfoBox from './infoBox';
import StatGraph from './statGraph';
import MoveGraph from './moveGraph';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { fetchPokes } from '../redux/actions/pokeActions'


class SearchBar extends Component {
    state = {
      search: '',
      poke: null,
      error: null,
      toggleOn: false
    }

  componentDidMount(){
    this.props.fetchPokes();
  }


  handleToggle = () => {
    this.setState({ toggleOn: !this.state.toggleOn })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.search}`)
    .then(res => res.json())
    .then(poke => this.setState({ poke }))
    .catch(error => this.setState({ error }))
  }


  handleUpdateInput = (search) => {
    this.setState({
      search,
    });
  };




  render() {
    const { poke, error, toggleOn,} = this.state
    let pokes = [];
    if (this.props.pokemons){
       pokes = this.props.pokemons.results.map(poke => (
        poke.name
      ))
    }

    return(
      <div className='search'>
        <form onSubmit={ this.handleSubmit }>
          <MuiThemeProvider>
            <AutoComplete
              floatingLabelText="Search your favorite pokemon"
              filter={AutoComplete.fuzzyFilter}
              dataSource={pokes}
              maxSearchResults={3}
              onUpdateInput={this.handleUpdateInput}
              />
          </MuiThemeProvider>
          <input type='submit' value='Search'/>
        </form>
        <InfoBox poke={ poke } error={ error }/>
        { this.state.poke ? <button onClick={ this.handleToggle }>Stats/Move</button> : null}

        { !toggleOn ? <StatGraph poke={ poke }/> : <MoveGraph poke={ poke }/>}
      </div>

    )
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokes.pokemons
})

export default connect(mapStateToProps, { fetchPokes })(SearchBar);
