import React, { Component } from 'react';

class MoveGraph extends Component {
  render() {
    return(
      <div>
        { this.props.poke ?
          <div>
            <h2>First Move: { this.props.poke.moves[0].move.name}</h2>
            <h2>Second Move: { this.props.poke.moves[1].move.name}</h2>
            <h2>Third Move: { this.props.poke.moves[2].move.name}</h2>
            <h2>Fourth Move: { this.props.poke.moves[3].move.name}</h2>
          </div> : null}
      </div>
    )
  }
}

export default MoveGraph;
