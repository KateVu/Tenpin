/**
 * Testsuit for App component
 * author: KateVu
 */
import React from 'react'
import App from '../src/containers/App';
import { queryByAttribute } from '@testing-library/react';
// eslint-disable-next-line jest/no-mocks-import
import { render } from '../__mocks__/test-utils';
import '@testing-library/jest-dom/extend-expect';

//init data
const numberLane = 20;
const initLanes = () => {
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

let initState1 = {
  isManager: true,
  currentLane: 0,
  lanes: initLanes(),
}

let initState2 = {
  isManager: false,
  currentLane: 0,
  lanes: initLanes(),
}

/**
 * Managers should be redirected to the UI for mananers
 * Input: isManger = true
 * Output: found container with id = 'game-manager'
 */

it('Renders the connected app with initialState', () => {
  const app = render(<App />, { initialState: initState1 })

  const getById = queryByAttribute.bind(null, 'id');
  const content = getById(app.container, 'game-manager');

  var result = false;

  if (content) {
    result = true
  }

  expect(result).toBe(true);
})


/**
 * Players should only see the UI for normal users
 * Input: isManger = false
 * Output: found container with id = 'game'
 */
// eslint-disable-next-line jest/no-identical-title
it('Renders the connected app with initialState', () => {
  const app = render(<App />, { initialState: initState2 })

  const getById = queryByAttribute.bind(null, 'id');
  const content = getById(app.container, 'game');

  var result = false;

  if (content) {
    result = true
  }

  expect(result).toBe(true);
})


