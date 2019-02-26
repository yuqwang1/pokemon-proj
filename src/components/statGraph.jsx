import React, { Component } from 'react'
import {
  BarChart, Bar,  XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

const margin = {top: 5, right: 30, bottom: 5, left: 20};

class StatGraph extends Component {


  render() {
    if (this.props.poke){
      var data = [
        { text: 'Attack', value: this.props.poke.stats[4].base_stat },
        { text: 'Defense', value: this.props.poke.stats[3].base_stat },
        { text: 'Stamina', value: this.props.poke.stats[5].base_stat }
      ]
    }

    return (
      <div>
        { this.props.poke ?
        <BarChart
        width={500}
        height={300}
        data={ data }
        margin={ margin }
        >
        <XAxis dataKey="text" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='value' fill='red' />

        </BarChart> : null }
      </div>
    );
  }
};

export default StatGraph;
