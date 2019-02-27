import React, { Component } from 'react'
import {
  BarChart, Bar,  XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

const margin = {top: 5, right: 30, bottom: 5, left: 20};

class StatGraph extends Component {

  render() {
    if (this.props.poke){
      var data = [
        { text: 'Attack', stat: this.props.poke.stats[4].base_stat },
        { text: 'Defense', stat: this.props.poke.stats[3].base_stat },
        { text: 'Stamina', stat: this.props.poke.stats[5].base_stat }
      ]
    }

    return (
      <div className='stat-graph'>
        { this.props.poke ?
        <BarChart
        width={600}
        height={400}
        data={ data }
        margin={ margin }
        >
        <XAxis dataKey="text" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='stat' fill='red' />

        </BarChart> : null }
      </div>
    );
  }
};

export default StatGraph;
