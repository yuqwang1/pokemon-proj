import React, { Component } from 'react'
import BarChart from 'react-bar-chart';


const margin = {top: 20, right: 20, bottom: 30, left: 40};





class BarGraph extends Component {

  handleBarClick(element, id){
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }

  render() {
    return (
      this.props.poke ?
        <div ref='root'>
            <div style={{width: '50%'}}>
                <BarChart ylabel='Quantity'
                  width={500}
                  height={500}
                  margin={margin}
                  data={[
                    { text: 'Attack', value: this.props.poke.stats[4].base_stat },
                    { text: 'Defense', value: this.props.poke.stats[3].base_stat },
                    { text: 'Stamina', value: this.props.poke.stats[5].base_stat }
                  ]}
                  onBarClick={this.handleBarClick}/>
            </div>
        </div> : null
    );
  }
};

export default BarGraph;
