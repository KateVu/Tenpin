import React, { Component } from "react";
import { connect } from 'react-redux';
import '../App.css';

import Gamecontroler from '../../components/GameController/GameController';
import Introduce from '../../components/introduce';
import GameControllerManager from "../../components/GameControllerManager/GameControllerManager";

class GameManager extends Component { 
    handleClick = (index) => {
        this.props.enterLane(index);
      }
    
    render() {
        let lanes = (
            <div className="lanes">
                {this.props.lanes.map((lane, index) => {
                    return (
                        <button className="lane" onClick={() => this.handleClick(index)}>{lane.laneTitle}</button>      
                    )
                })}
            </div>
        )
        return (
            <div className="row">
                {lanes}
                <div className="laneContent">
                    <div>This is UI for Manager</div>
                    <GameControllerManager className="gameContain"/>
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        currentLane: state.currentLane,
        lanes: state.lanes,    
    };
}

const mapDispatchToProps = dispatch => {
    return {
        enterLane: (index) => dispatch({type: 'ENTERLANE', payload: index})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameManager);
