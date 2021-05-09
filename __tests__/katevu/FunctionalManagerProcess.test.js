/**
 * Test suit for functional test Change Role process
 * @author: KateVu
 */

import React from 'react';
import App from '../../src/containers/App';
import { render, fireEvent } from '../../__utils__/test-utils';
import { queryByAttribute } from '@testing-library/react';
import { isScoreboardDisplay, isRollControllerDisplay, isResetButtonDisplay, isRestartButtonDisplay, isRollStatusDisplay, isAddPlayerDisplay, isListPlayerDisplay } from '../../__utils__/check-display';
import '@testing-library/jest-dom/extend-expect';

import { testManagerProcessData1 } from '../../__testdata__/testfunctionalData/managerProcessData/testManagerProcessData1';
import { testManagerProcessData2 } from '../../__testdata__/testfunctionalData/managerProcessData/testManagerProcessData2';
import { testManagerProcessData3 } from '../../__testdata__/testfunctionalData/managerProcessData/testManagerProcessData3';
import { testManagerProcessData4 } from '../../__testdata__/testfunctionalData/managerProcessData/testManagerProcessData4';


/**
* TC1: View Game information before end of game
* @param: testMannagerProcessData2.js
* Expect: Scoreboard displayed, RollStatus displayed, Restart button, Reset button, no RollCotroller
*/

it('TC1: Renders the connected app when the game is still on with manager role', () => {
    console.error = jest.fn();
    const testData = testManagerProcessData1;
    const initData = testData[0];

    const app = render(<App />, { initialState: initData });

    var display = isScoreboardDisplay(app) && isResetButtonDisplay(app) && isRestartButtonDisplay(app) && isRollStatusDisplay;
    var notDisplay = !isRollControllerDisplay(app);

    var result = display && notDisplay;
    expect(result).toBe(true);
})

/**
 * TC2: View Game information at end of game
 * @param: testMannagerProcessData2.js
 * Expect: Scoreboard displayed, RollStatus disappeared, Restart button, Reset button
 */
it('TC2: Renders the connected app when the game is ended with manager role', () => {
    console.error = jest.fn();
    const testData = testManagerProcessData2;
    const initData = testData[0];

    const app = render(<App />, { initialState: initData });

    var display = isScoreboardDisplay(app) && isResetButtonDisplay(app) && isRestartButtonDisplay(app);
    var notDisplay = !isRollStatusDisplay(app);

    var result = display && notDisplay;
    expect(result).toBe(true);
})

/**
 * TC3: Manager click  restart button
 * @param: testMannagerProcessData3.js
 * Expect: Scoreboard updated, RollStatus updated, Restart button, Reset button
 */
it('TC3: Renders the app after the manager click restart button', () => {
    console.error = jest.fn();
    const testData = testManagerProcessData3;
    const initData = testData[0];
    const expectData = testData[1]

    const app = render(<App />, { initialState: initData });
    const getById = queryByAttribute.bind(null, 'id');

    //check the UI before click restart
    var beforChangeRoleExpDisplay = isScoreboardDisplay(app) && isResetButtonDisplay(app) && isRestartButtonDisplay(app) && isRollStatusDisplay(app);

    var resultBefore = beforChangeRoleExpDisplay;
    expect(resultBefore).toBe(true);

    var listPlayers = initData.lanes[initData.currentLane].players;

    var length = listPlayers.length;
    for (var i = 0; i < length; i++) {
        //check name
        const playerName = listPlayers[i].playerName;
        const playCellID = "player" + playerName;
        const playerNamecell = getById(app.container, playCellID);
        expect(playerNamecell.innerHTML).toBe(playerName);
        //checktotalScore:
        let cumulativeScores = listPlayers[i].cumulativeScores;
        let scores = [...cumulativeScores];
        let totalScore = '';
        let filterScores = [];
        if (scores != null) {
            filterScores = scores.filter(x => x > -1);
            totalScore = filterScores.reduce((a, b) => a + b, 0);
        }
        const totalScoreId = 'total-score' + playerName;
        const totalScoreCell = getById(app.container, totalScoreId);
        expect(totalScoreCell.innerHTML).toBe(totalScore.toString());

        //check cumulative scores
        for (var j = 0; j < scores.length; j++) {
            const cumulateScoreId = 'cumulative-score-f' + (j + 1) + playerName;
            const cumulateScoreCell = getById(app.container, cumulateScoreId);
            expect(cumulateScoreCell.innerHTML).toBe(scores[j].toString());

        }

        for (var j=scores.length; j<9; j++) {
            const cumulateScoreId = 'cumulative-score-f' + (j + 1) + playerName;
            const cumulateScoreCell = getById(app.container, cumulateScoreId);
            expect(cumulateScoreCell.innerHTML).toBe("");
        }

        //check scores
        let frame = [];
        for (var number = 0; number < listPlayers[i].frames.length; number++) {
            let frameSmall = listPlayers[i].frames[number];
            for (var a = 0; a < frameSmall.length; a++) {
                frame.push(frameSmall[a]);
            }
        }
        // let frameScores = [...listPlayers[i].frames];
        for (var f = 0; f < frame.length; f++) {
            const frameScoreId = 'r' + (f + 1) + playerName;
            const frameScoreCell = getById(app.container, frameScoreId);
            expect(frameScoreCell.innerHTML).toBe(frame[f].toString());
        }

        //for empty score, display ""
        for (var f = frame.length; f < 20; f++) {
            const frameScoreId = 'r' + (f + 1) + playerName;
            const frameScoreCell = getById(app.container, frameScoreId);
            expect(frameScoreCell.innerHTML).toBe("");
        }
    }

    fireEvent.click(app.getByText('RESTART'));

    //check the UI after click restart
    var afterChangeRoleExpDisplay = isScoreboardDisplay(app) && isResetButtonDisplay(app) && isRestartButtonDisplay(app) && isRollStatusDisplay(app);

    var resultAfter = afterChangeRoleExpDisplay;
    expect(resultAfter).toBe(true);


    listPlayers = expectData.lanes[expectData.currentLane].players;

    length = listPlayers.length;
    for (var i = 0; i < length; i++) {
        //check name
        const playerName = listPlayers[i].playerName;
        const playCellID = "player" + playerName;
        const playerNamecell = getById(app.container, playCellID);
        expect(playerNamecell.innerHTML).toBe(playerName);
        //checktotalScore:
        let cumulativeScores = listPlayers[i].cumulativeScores;
        let scores = [...cumulativeScores];
        let totalScore = '';
        let filterScores = [];
        if (scores != null) {
            filterScores = scores.filter(x => x > -1);
            totalScore = filterScores.reduce((a, b) => a + b, 0);
        }
        const totalScoreId = 'total-score' + playerName;
        const totalScoreCell = getById(app.container, totalScoreId);
        expect(totalScoreCell.innerHTML).toBe(totalScore.toString());

        //check cumulative scores
        for (var j = 0; j < scores.length; j++) {
            const cumulateScoreId = 'cumulative-score-f' + (j + 1) + playerName;
            const cumulateScoreCell = getById(app.container, cumulateScoreId);
            expect(cumulateScoreCell.innerHTML).toBe(scores[j].toString());

        }

        for (var j=scores.length; j<9; j++) {
            const cumulateScoreId = 'cumulative-score-f' + (j + 1) + playerName;
            const cumulateScoreCell = getById(app.container, cumulateScoreId);
            expect(cumulateScoreCell.innerHTML).toBe("");
        }
        //check scores
        let frame = [];
        for (var number = 0; number < listPlayers[i].frames.length; number++) {
            let frameSmall = listPlayers[i].frames[number];
            for (var a = 0; a < frameSmall.length; a++) {
                frame.push(frameSmall[a]);
            }
        }
        // let frameScores = [...listPlayers[i].frames];
        for (var f = 0; f < frame.length; f++) {
            const frameScoreId = 'r' + (f + 1) + playerName;
            const frameScoreCell = getById(app.container, frameScoreId);
            expect(frameScoreCell.innerHTML).toBe(frame[f].toString());
        }

        //for empty score, display ""
        for (var f = frame.length; f < 20; f++) {
            const frameScoreId = 'r' + (f + 1) + playerName;
            const frameScoreCell = getById(app.container, frameScoreId);
            expect(frameScoreCell.innerHTML).toBe("");
        }
    }

})

/**
 * TC4: Manager click reset button
 * @param: testMannagerProcessData3.js
 * Expect: Scoreboard updated, RollStatus updated, Restart button, Reset button
 */

 it('TC4: Renders the app after the manager click reset button', () => {
    console.error = jest.fn();
    const testData = testManagerProcessData4;
    const initData = testData[0];
    const expectData = testData[1]

    const app = render(<App />, { initialState: initData });
    const getById = queryByAttribute.bind(null, 'id');

    //check the UI before click restart
    var beforChangeRoleExpDisplay = isScoreboardDisplay(app) && isResetButtonDisplay(app) && isRestartButtonDisplay(app) && isRollStatusDisplay(app);

    var resultBefore = beforChangeRoleExpDisplay;
    expect(resultBefore).toBe(true);

    var listPlayers = initData.lanes[initData.currentLane].players;

    var length = listPlayers.length;
    for (var i = 0; i < length; i++) {
        //check name
        const playerName = listPlayers[i].playerName;
        const playCellID = "player" + playerName;
        const playerNamecell = getById(app.container, playCellID);
        expect(playerNamecell.innerHTML).toBe(playerName);
        //checktotalScore:
        let cumulativeScores = listPlayers[i].cumulativeScores;
        let scores = [...cumulativeScores];
        let totalScore = '';
        let filterScores = [];
        if (scores != null) {
            filterScores = scores.filter(x => x > -1);
            totalScore = filterScores.reduce((a, b) => a + b, 0);
        }
        const totalScoreId = 'total-score' + playerName;
        const totalScoreCell = getById(app.container, totalScoreId);
        expect(totalScoreCell.innerHTML).toBe(totalScore.toString());

        //check cumulative scores
        for (var j = 0; j < scores.length; j++) {
            const cumulateScoreId = 'cumulative-score-f' + (j + 1) + playerName;
            const cumulateScoreCell = getById(app.container, cumulateScoreId);
            expect(cumulateScoreCell.innerHTML).toBe(scores[j].toString());

        }

        for (var j=scores.length; j<9; j++) {
            const cumulateScoreId = 'cumulative-score-f' + (j + 1) + playerName;
            const cumulateScoreCell = getById(app.container, cumulateScoreId);
            expect(cumulateScoreCell.innerHTML).toBe("");
        }

        //check scores
        let frame = [];
        for (var number = 0; number < listPlayers[i].frames.length; number++) {
            let frameSmall = listPlayers[i].frames[number];
            for (var a = 0; a < frameSmall.length; a++) {
                frame.push(frameSmall[a]);
            }
        }
        // display value based on input;
        for (var f = 0; f < frame.length; f++) {
            const frameScoreId = 'r' + (f + 1) + playerName;
            const frameScoreCell = getById(app.container, frameScoreId);
            expect(frameScoreCell.innerHTML).toBe(frame[f].toString());
        }

        //for empty score, display ""
        for (var f = frame.length; f < 20; f++) {
            const frameScoreId = 'r' + (f + 1) + playerName;
            const frameScoreCell = getById(app.container, frameScoreId);
            expect(frameScoreCell.innerHTML).toBe("");
        }
    }

    fireEvent.click(app.getByText('RESET'));

    //check the UI after click restart
    var afterChangeRoleExpDisplay = isAddPlayerDisplay(app) && isListPlayerDisplay(app);
    var afterChangeRoleExpNotDisplay = !isScoreboardDisplay(app) || !isResetButtonDisplay(app) || !isRestartButtonDisplay(app) ;


    var resultAfter = afterChangeRoleExpDisplay && afterChangeRoleExpNotDisplay;
    expect(resultAfter).toBe(true);

})