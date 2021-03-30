import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../containers/App.css';

import Scorecard from '../Scorecard/Scorecard';
import RollStatus from '../RollStatus/RollStatus';
import NewPlayer from '../NewPlayer/NewPlayer';
import ListPlayers from '../NewPlayer/ListPlayers';

class GameControlerManager extends Component {


    handleClickReSet = () => {
        this.props.reset();
    }

    handleClickReStart = () => {
        this.props.restart();
    }

    handleClickStart = () => {
        this.props.start();
    }


    render() {
        let lane = this.props.lanes[this.props.currentLane];
        let players = lane.players;

        // console.log(lane.players);
        if (!lane.started) {

            if (players.length > 1) {
                return (
                    <div>
                        <h2>Lane: {this.props.lanes[this.props.currentLane].laneTitle}</h2>
                        <h2>ADD PLAYERS AND START THE GAME</h2>
                        <NewPlayer/>
                        <ListPlayers/>
                        <button className='buttonSmallBlue' onClick={this.handleClickStart}>Start</button>
                    </div>
                );
    
            } else {
                return (
                    <div>
                        <h2>Lane: {this.props.lanes[this.props.currentLane].laneTitle}</h2>
                        <div>The game has not started yet</div>
                        <div>ADD PLAYERS AND START THE GAME</div>
                        <NewPlayer/>
                        <ListPlayers/>
                    </div>
                );

            }

        }

        if (lane.ended) {
            return (
                <div>
                    <h2>Lane: {this.props.lanes[this.props.currentLane].laneTitle}</h2>
                    <div>
                        The game has ended, the winner is {lane.winner}
                        <Scorecard />
                        <button className='buttonSmallBlue' onClick={this.handleClickReSet}>RESET</button>
                        <button className='buttonSmallBlue' onClick={this.handleClickReStart}>RESTART</button>


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
                <div className='rowTitle'>
                    <button className='buttonSmallBlue' onClick={this.handleClickReSet}>RESET</button>
                    <button className='buttonSmallBlue' onClick={this.handleClickReStart}>RESTART</button>
                </div>
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
        restart: () => dispatch({ type: 'RESTART' }),
        reset: () => dispatch({ type: 'RESET' }),
        start: () => dispatch({ type: 'START' }),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameControlerManager);
