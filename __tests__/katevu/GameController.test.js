/**
 * Testsuit for GameController component
 * author: KateVu
 */
import React from 'react'
import GameController from '../../src/components/GameController/GameController';
import {isScoreboardDisplay, isRollControllerDisplay, isRollStatusDisplay, isMessageDisplay } from '../../__utils__/check-display';

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
 * Expect: Message to contact manager, Components are displayed: Scoreboard, RollStatus, RollController
 */

it('TC1: Renders the connected app with with number of players is < 2 as nomal player role', () => {
    console.error = jest.fn();
    const dom = render(<GameController />, { initialState: initState1 })
    var display = isMessageDisplay(dom);
    var notDisplay = !isScoreboardDisplay(dom) || !isRollStatusDisplay(dom) || !isRollControllerDisplay(dom);
    var result = display && notDisplay;

    expect(result).toBe(true);
})


/**
 * TC2: When the game is over, the winner and final scoreboard should be displayed..
 * Input: Lane.start = true and Lane.ended = true
 * Expect: Display scoreboard, Component aren’t display: Message “The game has not started yet, ask manager for help”, RollStatus, RollController
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
it('TC2: Renders the connected app with game over status is true as normal player role', () => {
    console.error = jest.fn();
    const dom = render(<GameController />, { initialState: initState2 })

    var display = isScoreboardDisplay(dom);
    var notDisplay = !isMessageDisplay(dom) || !isRollStatusDisplay(dom) || !isRollControllerDisplay(dom);
    var result = display && notDisplay;

    expect(result).toBe(true);
})
// * Expect: Display scoreboard, Component aren’t display: Message “The game has not started yet, ask manager for help”, RollStatus, RollController


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

it('TC3: Renders the connected app with initialState4 with game is on as normal player role', () => {
    console.error = jest.fn();
    const dom = render(<GameController />, { initialState: initState3 })

    var display = isScoreboardDisplay(dom) && isRollStatusDisplay(dom) && isRollControllerDisplay(dom);
    var notDisplay = !isMessageDisplay(dom);
    var result = display && notDisplay;
    expect(result).toBe(true);
})

