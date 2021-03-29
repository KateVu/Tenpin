import './App.css';
import React, { Component } from 'react';

import Role from '../components/Role/Role.js';
import Game from './Game/Game';


class App extends Component {

  state = {
    isManager: false,
  }

  switchRollHandler = () => {
    let newValue = !this.state.isManager;
    this.setState({
      isManager: newValue
    })
  }

  clickLaneHandler = (laneid) => {
    this.setState({
      currentLane: laneid
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title">Swinburne Tenpin Bowling</h1>
        </header>

        <div className="Intro">
          Wellcome to Swinburne Tenpin Bowling company
        </div>

        <div>
          <Role isManager={this.state.isManager} />
          <button onClick={this.switchRollHandler}>Switch Role</button>
        </div>

        <Game/>

      </div>
    );
  }

}

export default App;
