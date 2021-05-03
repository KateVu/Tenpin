/**
 * Test suit for GameControllerManager component
 * author: KateVu
 */
import React from 'react'
import GameControllerManager from '../../src/components/GameControllerManager/GameControllerManager';
import { queryByAttribute } from '@testing-library/react';
// eslint-disable-next-line jest/no-mocks-import
import { render } from '../../__mocks__/test-utils';
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

let initState1 = {
    isManager: true,
    currentLane: 0,
    lanes: initLanes1(),
}


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

    return temp;
}

let initState2 = {
    isManager: true,
    currentLane: 0,
    lanes: initLanes2(),
}

/**
 * TC1: When there are two players, display 
 * Input: (Lane.start = false And Players.length = 2)
 * Output: display Add player, List player, Start Button
 */

it('Renders the connected app with initialState1', () => {
    const dom = render(<GameControllerManager />, { initialState: initState1 })

    const getById = queryByAttribute.bind(null, 'id');
    //get AddPlayer component
    const addPlayer = getById(dom.container, 'add-player');
    var isAddPlayerDisplay = (addPlayer) ? true : false
    //get ListPlayer component
    const listPlayer = getById(dom.container, 'list-player');
    var isListPlayerDisplay = (listPlayer) ? true : false
    //get StartButton componet
    const startButton = getById(dom.container, 'start-button');
    const isStartButtonDisplay = (startButton) ? true : false

    var result = isAddPlayerDisplay && isListPlayerDisplay && isStartButtonDisplay;

    expect(result).toBe(true);
})


/**
 * TC2: Cannot start a game with less than 2 players 
 * Input: (Lane.start = false And Players.length = 0)
 * Display Add player, List player
 */
it('Renders the connected app with initialState2', () => {
    const dom = render(<GameControllerManager />, { initialState: initState2 })

    const getById = queryByAttribute.bind(null, 'id');
    //get AddPlayer component
    const addPlayer = getById(dom.container, 'add-player');
    var isAddPlayerDisplay = (addPlayer) ? true : false
    //get ListPlayer component
    const listPlayer = getById(dom.container, 'list-player');
    var isListPlayerDisplay = (listPlayer) ? true : false
    //get StartButton componet
    const startButton = getById(dom.container, 'start-button');
    const isStartButtonDisplay = (startButton) ? true : false

    var result = isAddPlayerDisplay && isListPlayerDisplay && !isStartButtonDisplay;

    expect(result).toBe(true);
})


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
    temp[0].ended = true;

    return temp;
}

let initState3 = {
    isManager: true,
    currentLane: 0,
    lanes: initLanes3(),
}
/**
 * TC3: When the game is over, should display the final score and allow for restarting and resetting 
 * Input: (Lane.start = true And Lane.end = true)
 * Output: Display scoreboard, Reset button, Restart button
 */
it('Renders the connected app with initialState3', () => {
    const dom = render(<GameControllerManager />, { initialState: initState3 })

    const getById = queryByAttribute.bind(null, 'id');
    //get Scoreboard component
    const scoreboard = getById(dom.container, 'scoreboard');
    var isScoreboardDisplay = (scoreboard) ? true : false
    //get ResetButton component
    const resetButton = getById(dom.container, 'reset-button');
    var isResetButtonDisplay = (resetButton) ? true : false
    //get restartButton componet
    const restartButton = getById(dom.container, 'restart-button');
    const isRestartButtonDisplay = (restartButton) ? true : false

    var result = isScoreboardDisplay && isResetButtonDisplay && isRestartButtonDisplay;

    expect(result).toBe(true);
})


/**
 * TC4: While the game is still going, the current score should be displayed, as well as the current roll status of the players. 
 * Input: (Game.start = true And Game.end = false)
 * Output: Display scorecard, Display RollStatus, Reset button, Restart button
 */

//initdata for testcase 4
const initLanes4 = () => {
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

let initState4 = {
    isManager: true,
    currentLane: 0,
    lanes: initLanes4(),
}

it('Renders the connected app with initialState4', () => {
    const dom = render(<GameControllerManager />, { initialState: initState4 })

    const getById = queryByAttribute.bind(null, 'id');
    //get Scoreboard component
    const scoreboard = getById(dom.container, 'scoreboard');
    var isScoreboardDisplay = (scoreboard) ? true : false

    //get RollStatus component
    const rollStatus = getById(dom.container, 'roll-status');
    const isRollStatusDisplay = (rollStatus)? true : false

    //get ResetButton component
    const resetButton = getById(dom.container, 'reset-button');
    var isResetButtonDisplay = (resetButton) ? true : false
    //get restartButton componet
    const restartButton = getById(dom.container, 'restart-button');
    const isRestartButtonDisplay = (restartButton) ? true : false

    var result = isScoreboardDisplay && isResetButtonDisplay && isRestartButtonDisplay && isRollStatusDisplay;

    expect(result).toBe(true);
})





