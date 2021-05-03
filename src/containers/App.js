import React, { Component } from 'react';
import { connect } from 'react-redux';

import Role from '../components/Role/Role.js';
import Game from './Game/Game';
import GameManager from './GameManager/GameManager';
import './AppStyle.css';


class App extends Component {

  switchRoleHandler = () => {
    this.props.switchRole();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title">Swinburne Tenpin Bowling</h1>
        </header>

        <div className="Intro">
          Wellcome to Swinburne Tenpin Bowling company - Click on buttons to enter your scores
        </div>

        <div className='rowTitle'>
          <button className='buttonSmall' onClick={this.switchRoleHandler}>Switch Role</button>
          <Role isManager={this.props.isManager} className='role' />
        </div>
        {
          this.props.isManager? <GameManager id='game-manager'/> : <Game/>
        }
        

      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
      isManager: state.isManager,
      currentLane: state.currentLane,
      lanes: state.lanes,    
  };
}

const mapDispatchToProps = dispatch => {
  return {
    switchRole: () => dispatch({type: 'SWITCHROLE'})
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
