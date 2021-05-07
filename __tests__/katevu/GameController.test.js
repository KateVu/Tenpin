/**
 * Testsuit for GameController component
 * author: KateVu
 */
import React from 'react'
import GameController from '../../src/components/GameController/GameController';
import { queryByAttribute } from '@testing-library/react';
// eslint-disable-next-line jest/no-mocks-import
import { render, screen } from '../../__utils__/test-utils';
import '@testing-library/jest-dom/extend-expect';

//init data
const numberLane = 20;
const initLanes1 = () => {
    let temp = [];
    for (let i = 0; i < numberLane; i++) {
        temp.push(
            {
                laneid: i + 1,
                laneTitle: `Lane ${i + 1}`,
                started: false,
                players: [],
                currentPlayer: 0,
                currentFrame: 0,
                winner: "",
                ended: false
            }
        );
    }

    temp[0].started = false;


    return temp;
}

let initState1 = {
    isManager: false,
    currentLane: 0,
    lanes: initLanes1(),
}



/**
 * TC1: Attempting to start a game without enough players should show an error message.
 * Input: Lane.start = false
 * Expect: Message to contact manager
 */

it('Renders the connected app with initialState1', () => {
    const dom = render(<GameController />, { initialState: initState1 })

    expect(screen.getByText('The game has not started yet, ask manager for help')).toBeInTheDocument();

})


/**
 * TC2: When the game is over, the winner and final scoreboard should be displayed..
 * Input: Lane.start = true and Lane.ended = true
 * Expect: Display scoreboard
 */

//initdata for testcase 2
const initLanes2 = () => {
    let temp = [];
    for (let i = 0; i < numberLane; i++) {
        temp.push(
            {
                laneid: i + 1,
                laneTitle: `Lane ${i + 1}`,
                started: false,
                players: [],
                currentPlayer: 0,
                currentFrame: 0,
                winner: "",
                ended: false
            }
        );
    }

    temp[0].started = true;
    temp[0].ended = true;

    return temp;
}

let initState2 = {
    isManager: false,
    currentLane: 0,
    lanes: initLanes2(),
}
it('Renders the connected app with initialState2', () => {
    const dom = render(<GameController />, { initialState: initState2 })

    const getById = queryByAttribute.bind(null, 'id');
    //get Scoreboard component
    const scoreboard = getById(dom.container, 'scoreboard');
    var isScoreboardDisplay = (scoreboard) ? true : false

    var result = isScoreboardDisplay ;

    expect(result).toBe(true);
})


/**
 * TC3: When the game is running the scoreboard should be kept updated and the RollStatus and RollController should be displayed
 * Input: Game.start = true And Game.end = false
 * Expect: Display scoreboard, Display RollStatus, RollController
 */
//initdata for testcase 3
const initLanes3 = () => {
    let temp = [];
    for (let i = 0; i < numberLane; i++) {
        temp.push(
            {
                laneid: i + 1,
                laneTitle: `Lane ${i + 1}`,
                started: false,
                players: [],
                currentPlayer: 0,
                currentFrame: 0,
                winner: "",
                ended: false
            }
        );
    }

    temp[0].started = true;
    temp[0].ended = false;
    let listPlayers = [
        {
            playerName: "test-player1",
            frames: [],
            strike: [],
            spare: [],
            cumulativeScores: [],
            currentRoll: 1,
            maxRolls: 2,
            lastScore: 0,
        },
        {
            playerName: "test-player2",
            frames: [],
            strike: [],
            spare: [],
            cumulativeScores: [],
            currentRoll: 1,
            maxRolls: 2,
            lastScore: 0,
        }
    ];
    temp[0].players = listPlayers;

    return temp;
}

let initState3 = {
    isManager: true,
    currentLane: 0,
    lanes: initLanes3(),
}

it('Renders the connected app with initialState4', () => {
    const dom = render(<GameController />, { initialState: initState3 })

    const getById = queryByAttribute.bind(null, 'id');
    //get Scoreboard component
    const scoreboard = getById(dom.container, 'scoreboard');
    var isScoreboardDisplay = (scoreboard) ? true : false

    //get RollStatus component
    const rollStatus = getById(dom.container, 'roll-status');
    const isRollStatusDisplay = (rollStatus)? true : false

    //get RollControler component
    const rollController = getById(dom.container, 'roll-controller');
    var isRollControllerDisplay = (rollController) ? true : false

    var result = isScoreboardDisplay && isRollControllerDisplay && isRollStatusDisplay;

    expect(result).toBe(true);
})