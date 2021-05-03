
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../../containers/App.css';


class ListPlayers extends Component {

    render() {
        console.log("LIST USER CALLED");
        let players = this.props.lanes[this.props.currentLane].players;
        let listPlayers;
        if (players.length < 1) {
            listPlayers = (
                <div>Do not have any players yet</div>
            )
        } else {
            console.log("LIST USERS");
            console.log(players);

            listPlayers = players.map((player, index) => {
                return (<div>{player.playerName}</div>); 
            });
        }
        return (
            <div>
                <div>LIST OF PLAYERS</div>
                {listPlayers}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentLane: state.currentLane,
        lanes: state.lanes,
    };
}

export default connect(mapStateToProps)(ListPlayers);

