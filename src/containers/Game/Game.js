import React, { Component } from "react";
import { connect } from 'react-redux';

import Gamecontroler from '../../components/GameController/GameController';
import Introduce from '../../components/introduce';
import '../AppStyle.css';

class Game extends Component { 
    handleClick = (index) => {
        this.props.enterLane(index);
      }
    
    render() {
        let lanes = (
            <div className="lanes">
                {this.props.lanes.map((lane, index) => {
                    return (
                        <button key={lane.id} className="lane" onClick={() => this.handleClick(index)}>{lane.laneTitle}</button>      
                    )
                })}
            </div>
        )
        return (
            <div id='game' className="row">
                {lanes}
                <div className="laneContent">
                    <Introduce />
                    <Gamecontroler className="gameContain" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Game);
