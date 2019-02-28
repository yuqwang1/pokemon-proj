import React from 'react'
import {
  BarChart, Bar,  XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

const margin = {top: 5, right: 30, bottom: 5, left: 20};

const StatGraph = ({poke}) => {
  const color = value => {
    if (value < 20){
      return 'DarkGrey'
    } else if (value >= 50){
      return 'Crimson'
    } else {
      return 'Gold'
    }
  }

  if (poke) {
    var attack = poke.stats[4].base_stat
    var defense = poke.stats[3].base_stat
    var stamina = poke.stats[5].base_stat
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

  return (
    <div className='stat-graph'>
      {poke ?
      <BarChart
        width={700}
        height={400}
        data={data}
        margin={margin}
      >
        <XAxis dataKey='text'/>
        <YAxis type='number' domain={[0, dataMax => Math.ceil((dataMax+11)/10)*10]}/>
        <Tooltip />
        <Legend />
        <Bar legendType='star' type='monotone' barSize={80} dataKey='Attack' fill={color(attack)} />
        <Bar legendType='circle' type='monotone' barSize={80} dataKey='Defense' fill={color(defense)} />
        <Bar legendType='cross' type='monotone' barSize={80} dataKey='Stamina' fill={color(stamina)} />
      </BarChart> : null}
    </div>
  )
}


export default StatGraph;
