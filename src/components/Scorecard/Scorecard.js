
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Scoreitem';
import Scoreitem from './Scoreitem';
// import './ScorecardStyle.css'


class Scorecard extends Component {
  
  render() {
    let playerboards = (
      this.props.lanes[this.props.currentLane].players.map((player, index) => {
        return (
          <Scoreitem
            frames={player.frames}
            cumulativeScores={player.cumulativeScores}
            playerName={player.playerName}
            key={index}
          />

        )
      })
    )

    return (
      <div className='Container'>
        <h2>Scoreboard</h2>
        <table id='table' className='Scorecard' cellPadding='1' cellSpacing='0'>
          <tbody>
            <tr>
              <th id='c0' colSpan='6'>Players</th>
              <th id='c1' colSpan='6'>Frame 1</th>
              <th id='c2' colSpan='6'>Frame 2</th>
              <th id='c3' colSpan='6'>Frame 3</th>
              <th id='c4' colSpan='6'>Frame 4</th>
              <th id='c5' colSpan='6'>Frame 5</th>
              <th id='c6' colSpan='6'>Frame 6</th>
              <th id='c7' colSpan='6'>Frame 7</th>
              <th id='c8' colSpan='6'>Frame 8</th>
              <th id='c9' colSpan='6'>Frame 9</th>
              <th id='c10' colSpan='6'>Frame 10</th>
              <th id='c11' colSpan='6'>Total Score</th>
            </tr>
            {playerboards}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentLane: state.currentLane,
    lanes: state.lanes,
  };
}

const mapDispatchToProps = dispatch => {
  return {
      enterScore: (pins) => dispatch({type: 'ENTERSCORE', payload: pins})
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Scorecard);
