import React, { Component } from 'react';
import InfoBox from './infoBox';
import AutoComplete from 'material-ui/AutoComplete';
import { connect } from 'react-redux';
import { fetchPokes } from '../redux/actions/pokeActions';
import ToggleButton from './toggleButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      poke: null,
      error: null
    }

  }

  componentDidMount() {
    this.props.fetchPokes();
  }




  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.search.trim()) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.search.trim().toLowerCase()}`)
      .then(res => res.json())
      .then(poke => this.setState({poke, error: null}))
      .catch(() => this.setState({error: 'Please try another name'}))
    } else {
      this.setState({error: 'Search box can not be empty'})
    }
  }


  handleUpdateInput = (search) => {
    this.setState({
      search
    });
  };




  render() {
    const {poke, error} = this.state
    let pokes = [];
    if (this.props.pokemons) {
       pokes = this.props.pokemons.results.map(poke => (
        poke.name
      ))
    }

    return (
      <div>
        <div className='search-bar-info-box'>
          <form onSubmit={this.handleSubmit} className='search-form'>
            <div className='auto-complete'>
              <MuiThemeProvider>
                <AutoComplete
                  hintText="Search your favorite Pokémon"
                  filter={AutoComplete.fuzzyFilter}
                  dataSource={pokes}
                  maxSearchResults={3}
                  onUpdateInput={this.handleUpdateInput}
                  />
              </MuiThemeProvider>
            </div>
            <button className="searchbar-button" type='submit'><i className="fa fa-search fa-2x"></i></button>
          </form>
          <InfoBox poke={poke} error={error}/>
        </div>
          <ToggleButton poke={poke} error={error}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokes.pokemons
})

export default connect(mapStateToProps, {fetchPokes})(SearchBar);
