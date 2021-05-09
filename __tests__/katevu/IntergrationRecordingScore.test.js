/**
 * Test suit for integration test RollController.js, ScoreItem.js, and Reducer
 * @author: KateVu
 */

import React from 'react';
import App from '../../src/containers/App';
import { render, fireEvent, screen } from '../../__utils__/test-utils';
import { queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import reducer from '../../src/store/reducer'
import { createStore } from 'redux'


import { testEnterScoreData0 } from '../../__testdata__/testIntergrationData/testEnterScoreData0';
import { testEnterScoreData1 } from '../../__testdata__/testIntergrationData/testEnterScoreData1';
import { testEnterScoreData11 } from '../../__testdata__/testIntergrationData/testEnterScoreData11';
import { testEnterScoreData2 } from '../../__testdata__/testIntergrationData/testEnterScoreData2';
import { testEnterScoreData3 } from '../../__testdata__/testIntergrationData/testEnterScoreData3';
import { testEnterScoreData4 } from '../../__testdata__/testIntergrationData/testEnterScoreData4';
import { testEnterScoreData5 } from '../../__testdata__/testIntergrationData/testEnterScoreData5';
import { testEnterScoreData6 } from '../../__testdata__/testIntergrationData/testEnterScoreData6';
import { testEnterScoreData7 } from '../../__testdata__/testIntergrationData/testEnterScoreData7';
import { testEnterScoreData8 } from '../../__testdata__/testIntergrationData/testEnterScoreData8';
import { testEnterScoreData9 } from '../../__testdata__/testIntergrationData/testEnterScoreData9';


/**
 * TC0: When the players do not score strike or square, they have up to two delivery and the score is shown correctly on the scoreboard
 *  Input: testEnterScoreData0.js
 * Expect: expected state = expectedData from testEnterScoreData0.js & cell with expected id loaded from testEnterScoreData0.js has text value = value input 
 */

it('TC0: Re Renders the connected app after enter score for normal case', () => {
    checkStateAndScreen(testEnterScoreData0);
})


/**
 * TC1: When the player gets a strike in normal frame, 
 * they will earn 10 pins plus a bonus of all the pins knocked down by the next two balls, 
 * no figure is entered until the next two balls are rolled.
 * Input: testEnterScoreData1.js
 * Expect: expected state = expectedData from testEnterScoreData1.js cell with expected id loaded from testEnterScoreData1.js has text value = value input 
 */
it('TC1: Re Renders the connected app after enter score for strike in normal frame', () => {
    checkStateAndScreen(testEnterScoreData1);
})


/**
 * @TC11: Strike not in last frame followed by open frame. 
 * @descriptionThe cumulative Scores for the strike frame should be updated
 * @param: testEnterScoreData11.js
 * @expect: expected state = expectedData from testEnterScoreData1.1.js && 
 * score, cumulate score and cumulate score for previous frame of the user is updated as expected in testEnterScoreData1.1.js
 */
 it('TC1.1: Re Renders the connected app after enter score with Strike not in last frame followed by open frame', () => {
    checkStateAndScreen(testEnterScoreData11);
})


/**
 * @TC2: strikes not in last frame
 * @description: When the player gets 2 strikes continuously in normal frame, the two continuous frames score
 * @param: testEnterScoreData2.js
 * @expect: expected state = expectedData from testEnterScoreData2.js && 
 * score, cumulate score and cumulate score for previous frame of the user is updated as expected in testEnterScoreData2.js
 */
 it('TC2: Re Renders the connected app after enter score with strikes not in last frame', () => {
    checkStateAndScreen(testEnterScoreData2);
})

/**
 * @TC3: Spare not in last frame
 * @description: When the player gets a square in normal frame, 
 * they will earn 10 pins plus a bonus of all the pins knocked down by the next ball, no figure is entered until the next ball is rolled
 * @expect: expected state = expectedData from testEnterScoreData3.js && 
 * score, cumulate score and cumulate score for previous frame of the user is updated as expected in testEnterScoreData3.js
 */
 it('TC3: Re Renders the connected app after enter score with Spare not in last frame', () => {
    checkStateAndScreen(testEnterScoreData3);
})


/**
 * @TC4: Spares not in last frame
 * @description: When the player gets 2 squares continuously in normal frame, 
 * the cumulative score of the first one should be updated and mark X for the later one 
 * @param: testEnterScoreData4.js
 * @expect: expected state = expectedData from testEnterScoreData4.js && 
 * score, cumulate score and cumulate score for previous frame of the user is updated as expected in testEnterScoreData4.js
 */
 it('TC4: Re Renders the connected app after enter score with Spares not in last frame', () => {
    checkStateAndScreen(testEnterScoreData4);
})

/**
 * @TC5: Strike and spare not in last frame
 * @description: When the player gest strike and then square, the cumulative score of the strike should be updated and mark X for the square one
 * @param: testEnterScoreData5.js
 * @expect: expected state = expectedData from testEnterScoreData5.js && 
 * score, cumulate score and cumulate score for previous frame of the user is updated as expected in testEnterScoreData5.js
 */
 it('TC5: Re Renders the connected app after enter score with Strike and spare not in last frame', () => {
    checkStateAndScreen(testEnterScoreData5);
})


/**
 * @TC6: Strike in last frame
 * @description: When the player gets strike in last frame, they have 3 rolls in total for last frame.
 * @param: testEnterScoreData6.js
 * @expect: expected state = expectedData from testEnterScoreData6.js && 
 * score, cumulate score and cumulate score for previous frame of the user is updated as expected in testEnterScoreData6.js
 */
 it('TC6: Re Renders the connected app after enter score with Strike in last frame', () => {
    checkStateAndScreen(testEnterScoreData6);
})

/**
 * @TC7: Spare in last frame
 * @description: When the player gets square in last frame they have 3 rolls in total for last frame.
 * @param: testEnterScoreData7.js
 * @expect: expected state = expectedData from testEnterScoreData7.js && 
 * score, cumulate score and cumulate score for previous frame of the user is updated as expected in testEnterScoreData6.js
 */
 it('TC7: Re Renders the connected app after enter score with Spare in last frame', () => {
    checkStateAndScreen(testEnterScoreData7);
})


/**
 * @TC8: Strike and 10 in last frame
 * @description: When the When the player gets strike and 10 in last frame, they still have last roll, and the cumulative score = 20
 * @param: testEnterScoreData7.js
 * @expect: expected state = expectedData from testEnterScoreData7.js && 
 * score, cumulate score and cumulate score for previous frame of the user is updated as expected in testEnterScoreData6.js
 */
 it('TC8: Re Renders the connected app after enter score with Strike and 10 in last frame', () => {
    checkStateAndScreen(testEnterScoreData8);
})


/**
 * @TC9: Spare and 10 in the last frame
 * @description: There is no more roll granted, move to next player
 * @param: testEnterScoreData7.js
 * @expect: expected state = expectedData from testEnterScoreData7.js && 
 * score, cumulate score and cumulate score for previous frame of the user is updated as expected in testEnterScoreData6.js
 */
 it('TC9: Re Renders the connected app after enter score with Spare and 10 in the last frame', () => {
    checkStateAndScreen(testEnterScoreData9);
})


function checkStateAndScreen(initDataset) {
    console.error = jest.fn();
    const testData = initDataset;
    const initData = testData[0];
    const expectedState = testData[1];

    const buttonId = testData[2];
    const cellId = testData[3];
    const cellValue = testData[4];
    const cellCumulateId = testData[5];
    const cellCumulateValue = testData[6];
    const preCellCumulateId = testData[7];
    const preCellCumulateValue = testData[8];
    const totalScoreId = testData[9];
    const totalScoreValue = testData[10];

    //Create a store outside to track its data later
    let testStore = createStore(reducer, initData);

    const app = render(<App />, { initialState: initData });

    const getById = queryByAttribute.bind(null, 'id');
    const button = getById(app.container, buttonId);

    fireEvent.click(button);

    //Get the updated reducer data
    const reducerState = testStore.getState();
    expect(reducerState).toEqual(expectedState);

    const cell = getById(app.container, cellId);
    const cellCumulate = getById(app.container, cellCumulateId);
    const preCellCumulate = getById(app.container, preCellCumulateId);
    const totalScore = getById(app.container, totalScoreId)


    expect(cell.innerHTML).toBe(cellValue);
    expect(cellCumulate.innerHTML).toBe(cellCumulateValue);
    expect(preCellCumulate.innerHTML).toBe(preCellCumulateValue);
    expect(totalScore.innerHTML).toBe(totalScoreValue);


}
