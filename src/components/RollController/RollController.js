import React, {Component} from 'react'
import { connect } from 'react-redux';

import './RollController.css'

class RollController extends Component {
  handleClick = pins => {
    this.props.enterScore(pins);
  }

  disableButton = number => {
    const {
      gameOver,
      lastScore,
    } = this.props

    if (gameOver) return true;
    if (lastScore === 10) return false;
    if (number > (10-lastScore)) return true;
    return false;
  }

  render () {
    return (
      <div id='roll-controller' className='Container'>
        <div>
          <button id='pin0' disabled={this.disableButton(0)} onClick={() => this.handleClick(0)}>-</button>
          <button id='pin1' disabled={this.disableButton(1)} onClick={() => this.handleClick(1)}>1</button>
          <button id='pin2' disabled={this.disableButton(2)} onClick={() => this.handleClick(2)}>2</button>
          <button id='pin3' disabled={this.disableButton(3)} onClick={() => this.handleClick(3)}>3</button>
          <button id='pin4' disabled={this.disableButton(4)} onClick={() => this.handleClick(4)}>4</button>
          <button id='pin5' disabled={this.disableButton(5)} onClick={() => this.handleClick(5)}>5</button>
          <button id='pin6' disabled={this.disableButton(6)} onClick={() => this.handleClick(6)}>6</button>
          <button id='pin7' disabled={this.disableButton(7)} onClick={() => this.handleClick(7)}>7</button>
          <button id='pin8' disabled={this.disableButton(8)} onClick={() => this.handleClick(8)}>8</button>
          <button id='pin9' disabled={this.disableButton(9)} onClick={() => this.handleClick(9)}>9</button>
          <button id='pin10' disabled={this.disableButton(10)} onClick={() => this.handleClick(10)}>X</button>
        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(RollController);
