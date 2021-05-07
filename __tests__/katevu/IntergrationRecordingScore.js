/**
 * Test suit for integration test RollController.js, ScoreItem.js, and Reducer
 * author: KateVu
 */

import React from 'react';
import App from '../../src/containers/App';
import { render,fireEvent, screen } from '../../__utils__/test-utils';
import { testEnterScoreData0 } from '../../__testdata__/testIntergrationData/testEnterScoreData0';
import { queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

/**
 * TC0: When the players do not score strike or square, they have up to two delivery and the score is shown correctly on the scoreboard
 *  Input: testEnterScoreData0.js
 * Expect: cell with expected id loaded from testEnterScoreData0.js has text value = value input 
 */

it('Re Renders the connected app after enter score for normal case', () => {
    console.error = jest.fn();
    // const app = render(<App />, { initialState: initData })
    var initData = testEnterScoreData0[0];
    var buttonId = testEnterScoreData0[2];
    // 'pin8';
    var cellId = testEnterScoreData0[3];
    var value = testEnterScoreData0[4];

    const app = render(<App />, { initialState: initData });

    const getById = queryByAttribute.bind(null, 'id');
    const button = getById(app.container, buttonId);
  
    fireEvent.click(button);
    const cell = getById(app.container, cellId);

    expect(cell.innerHTML).toBe(value);
})


/**
 * When the player gets a strike in normal frame, 
 * they will earn 10 pins plus a bonus of all the pins knocked down by the next two balls, 
 * no figure is entered until the next two balls are rolled.
 * Input: testEnterScoreData1.js
 * Expect: cell with expected id loaded from testEnterScoreData1.js has text value = value input 
 */
