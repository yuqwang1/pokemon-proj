import React, { Component } from 'react'
import {
  BarChart, Bar,  XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

const margin = {top: 5, right: 30, bottom: 5, left: 20};
const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return <text x={x + width / 2} y={y} fill="#808000" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
};

class StatGraph extends Component {

  color(value) {
    if (value < 20 ){
      return 'DarkGrey'
    } else if (value >= 50){
      return 'Crimson'
    } else {
      return 'Gold'
    }
  }

  render() {
    if (this.props.poke){
      var attack = this.props.poke.stats[4].base_stat
      var defense = this.props.poke.stats[3].base_stat
      var stamina = this.props.poke.stats[5].base_stat
      var data = [
        { text1: 'Attack',
          Attack: attack
        },
        { text2: 'Defense',
          Defense: defense
        },
        { text3: 'Stamina',
          Stamina: stamina
        }
      ]
    }

  //  * X-axis: statistic name
  //  * Y-axis: value
  //  * If a value is >= 50, change the color of the bar to red.
  //  * If a value is <50 & >=20, change the color of the bar to yellow.
  //  * If a value is <20, change the color of the bar to grey.

    return (
      <div className='stat-graph'>
        { this.props.poke ?
        <BarChart
        width={700}
        height={400}
        data={data}
        margin={margin}
        >
        <XAxis dataKey='text'/>
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar type='monotone' barSize={30} dataKey='Attack' fill={ this.color(attack) } label={renderCustomBarLabel}/>
        <Bar type='monotone' barSize={30} dataKey='Defense' fill={ this.color(defense) } label={renderCustomBarLabel}/>
        <Bar type='monotone' barSize={30} dataKey='Stamina' fill={ this.color(stamina) } label={renderCustomBarLabel}/>

        </BarChart> : null }
      </div>
    );
  }
};

export default StatGraph;
