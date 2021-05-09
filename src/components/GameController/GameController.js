import React, { Component } from 'react';
import { connect } from 'react-redux';

import Scorecard from '../Scorecard/Scorecard';
import RollController from '../RollController/RollController';
import RollStatus from '../RollStatus/RollStatus';
import '../../containers/AppStyle.css';

class GameControler extends Component {
    render() {
        let lane = this.props.lanes[this.props.currentLane];
        if (!lane.started) {
            return (
                <div>
                    <h2>Lane: {this.props.lanes[this.props.currentLane].laneTitle}</h2>
                    <div id='infor-notstartgame'>The game has not started yet, ask manager for help</div>
                </div>
            );
        }

        if (lane.ended) {
            return (
                <div>
                    <h2>Lane: {this.props.lanes[this.props.currentLane].laneTitle}</h2>
                    <div>
                        The game has ended, the winner is {lane.winner}
                        <Scorecard />
                    </div>
                </div>
            );
        }

        return (
            <div>
                <h2>Lane: {this.props.lanes[this.props.currentLane].laneTitle}</h2>
                <Scorecard />
                <RollStatus />
                <div className='columnTitle'>
                    <div></div>
                    <RollController
                        gameOver={lane.ended}
                        lastScore={lane.players[lane.currentPlayer].lastScore}
                    />
                    <div></div>

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


export default connect(mapStateToProps)(GameControler);
