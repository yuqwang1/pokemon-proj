import React, { Component } from 'react';
import InfoBox from './infoBox';
import StatGraph from './statGraph';
import MoveGraph from './moveGraph';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { fetchPokes } from '../redux/actions/pokeActions';
import Toggle from 'material-ui/Toggle';



class SearchBar extends Component {
    state = {
      search: 'pikachu',
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
      <div>
        <div className='left'>
          <form onSubmit={ this.handleSubmit } className='search-form'>
            <MuiThemeProvider>
              <AutoComplete
                hintText="Search your favorite Pokémon"
                filter={AutoComplete.fuzzyFilter}
                dataSource={pokes}
                maxSearchResults={3}
                onUpdateInput={this.handleUpdateInput}
                />
            </MuiThemeProvider>

            <button className="searchbar-button" type='submit'><i className="fa fa-search fa-2x"></i></button>
          </form>

          <InfoBox poke={ poke } error={ error }/>
        </div>

        <div className='stat-graph'>
          <div className='toggle'>
            { this.state.poke ?
              <MuiThemeProvider>
                <Toggle
                  label="Stats/Move"
                  defaultToggled={false}
                  onToggle={this.handleToggle}
                  labelPosition="right"
                  style={{margin: 20}}
                  />
              </MuiThemeProvider> : null}
          </div>

          { !toggleOn ? <StatGraph poke={ poke }/> : <MoveGraph poke={ poke }/>}
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokes.pokemons
})

export default connect(mapStateToProps, { fetchPokes })(SearchBar);
