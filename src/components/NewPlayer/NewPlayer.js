
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './NewPlayers.css'


class NewPlayer extends Component {
  state = {
    name: "",
  }

  disableButton = () => {
    if (this.props.lanes[this.props.currentLane].players.length < 4) {
      return false;
    }
    
    return true;
  }


  addPlayer = (submit_event) => {
    submit_event.preventDefault();

    // Call .dispatch on Redux store
    if ((this.state.name != '') && (this.props.lanes[this.props.currentLane].players.length < 4)) {
      this.props.addPlayer(this.state.name);
    }
    // Clear input
    this.setState(this.getInitialState());
  };

  setName = (change_event) => {
    this.setState({
      name: change_event.target.value
    });
  };

  getInitialState = () => {
    return { name: '' };
  };


  render() {
    return (
      <form onSubmit={this.addPlayer}>
        <h2>Add new player</h2>
        <input
          type="text"
          value={this.state.name}
          onChange={this.setName}
          placeholder="Enter player name" />
        <button type="submit" disabled={this.disableButton}>Add Player</button>
      </form>
    );

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
    addPlayer: (name) => dispatch({ type: 'ADDPLAYER', payload: name })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlayer);

