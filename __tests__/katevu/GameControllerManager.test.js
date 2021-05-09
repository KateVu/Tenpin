/**
 * Test suit for GameControllerManager component
 * author: KateVu
 */
import React from 'react'
import GameControllerManager from '../../src/components/GameControllerManager/GameControllerManager';
import {isScoreboardDisplay, isResetButtonDisplay, isRestartButtonDisplay, isRollStatusDisplay, isAddPlayerDisplay, isListPlayerDisplay, isStartButtonDisplay } from '../../__utils__/check-display';
// eslint-disable-next-line jest/no-mocks-import
import { render } from '../../__utils__/test-utils';
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
 * Output: display Add player, List player, Start Button, Component aren’t display: Scoreboard, ResetButton, RestartButton
 */

it('TC1: Renders the connected app with number of players >=2 and game is not started yet as manager role', () => {
    console.error = jest.fn();
    const dom = render(<GameControllerManager />, { initialState: initState1 })
    var display = isAddPlayerDisplay(dom) && isListPlayerDisplay(dom) && isStartButtonDisplay(dom);
    var notDisplay = !isScoreboardDisplay(dom) || !isResetButtonDisplay(dom) || !isRestartButtonDisplay(dom) || !isRollStatusDisplay(dom);
    var result = display && notDisplay;

    expect(result).toBe(true);
})

/**
 * TC2: Cannot start a game with less than 2 players 
 * Input: (Lane.start = false And Players.length = 0)
 * Display Add player, List player, Component aren’t display: StartButton, Scoreboard, ResetButton, RestartButton
 */
it('TC2: Renders the connected app with inot enough players as manager role', () => {
    console.error = jest.fn();
    const dom = render(<GameControllerManager />, { initialState: initState2 })
    var display = isAddPlayerDisplay(dom) && isListPlayerDisplay(dom);
    var notDisplay = !isStartButtonDisplay(dom) || !isScoreboardDisplay(dom) || !isResetButtonDisplay(dom) || !isRestartButtonDisplay(dom)|| !isRollStatusDisplay(dom);
    var result = display && notDisplay;
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
 * Output: Display scoreboard, Reset button, Restart button. Component aren’t display: AddPlayer, ListPlayer, StartButton
 */
it('TC3: Renders the connected app with game over is true as manager role', () => {
    console.error = jest.fn();
    const dom = render(<GameControllerManager />, { initialState: initState3 })
    var display = isScoreboardDisplay(dom) && isResetButtonDisplay(dom) && isRestartButtonDisplay(dom);
    var notDisplay = !isAddPlayerDisplay(dom) || !isListPlayerDisplay(dom) || !isStartButtonDisplay(dom)|| !isRollStatusDisplay(dom);
    var result = display && notDisplay;

    expect(result).toBe(true);
})

/**
 * TC4: While the game is still going, the current score should be displayed, as well as the current roll status of the players. 
 * Input: (Game.start = true And Game.end = false)
 * Output: Display scorecard, Display RollStatus, Reset button, Restart button. Component aren’t display: AddPlayer, ListPlayer, StartButton
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

it('TC4: Renders the connected app with game is on as manager role', () => {
    console.error = jest.fn();
    const dom = render(<GameControllerManager />, { initialState: initState4 })

    var display = isScoreboardDisplay(dom) && isResetButtonDisplay(dom) && isRestartButtonDisplay(dom) && isRollStatusDisplay(dom) ;
    var notDisplay = !isAddPlayerDisplay(dom) || !isListPlayerDisplay(dom) || !isStartButtonDisplay(dom);
    var result = display && notDisplay;
    expect(result).toBe(true);
})

