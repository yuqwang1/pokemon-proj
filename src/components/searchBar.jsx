import React, { Component } from 'react';
import InfoBox from './infoBox';
import StatGraph from './statGraph';
import PokeMoves from './pokeMoves';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { fetchPokes } from '../redux/actions/pokeActions';
import Toggle from 'material-ui/Toggle';


class SearchBar extends Component {
  debugger
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      poke: null,
      error: null,
      toggleOn: false
    }

  }

  componentDidMount() {
    this.props.fetchPokes();
  }


  handleToggle = () => {
    this.setState({toggleOn: !this.state.toggleOn})
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
    const {poke, error, toggleOn} = this.state
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

        {error || !poke ? <img className='stat-graph-toggle' alt='' src='https://barbarashdwallpapers.com/wp-content/uploads/2015/12/Pokemon-wallpaper-with-Mudkip-Pikachu-and-Chikorita.jpg'/> :
        <div className='stat-graph-toggle'>
          <div className='toggle'>
            {poke ?
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
          {!toggleOn ? <StatGraph poke={poke}/> : <PokeMoves poke={poke}/>}
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokes.pokemons
})

export default connect(mapStateToProps, {fetchPokes})(SearchBar);
