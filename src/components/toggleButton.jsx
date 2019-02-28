import React, {Component} from 'react';
import StatGraph from './statGraph';
import PokeMoves from './pokeMoves';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ToggleButton extends Component {
    state = {
      toggleOn: false
    }

    handleToggle = () => {
      this.setState({toggleOn: !this.state.toggleOn})
    }

    render() {
      const {error, poke} = this.props
      const {toggleOn} = this.state
      return (
        error || !poke ? <img className='stat-graph-toggle' alt='' src='https://barbarashdwallpapers.com/wp-content/uploads/2015/12/Pokemon-wallpaper-with-Mudkip-Pikachu-and-Chikorita.jpg'/> :
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

      )
    }
}

export default ToggleButton;
