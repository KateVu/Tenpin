import React, {Component} from 'react'
import { connect } from 'react-redux';

import './RollStatus.css'

class RollStatus extends Component {
  
  render () {
    let currentLane = this.props.currentLane;
    let lane = this.props.lanes[currentLane];
    let frame = null;
    let turn = null;
    let roll = null;

    if (lane.currentFrame != null) {
        frame = lane.currentFrame;
    } 

    if (lane.currentPlayer != null) {
        turn = lane.players[lane.currentPlayer].playerName;
        roll = lane.players[lane.currentPlayer].currentRoll;
    } 

    return (
      <div id='roll-status' className='Container'>
        <h2>Game Information</h2>
        <div>Frame: {frame}</div>
        <div>Turn: {turn}</div>
        <div>Current Roll: {roll}</div>
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

export default connect(mapStateToProps)(RollStatus);