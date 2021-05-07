import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import Game from '../../src/containers/Game/Game';
// eslint-disable-next-line jest/no-mocks-import
import { render, fireEvent, screen } from '../../__utils__/test-utils';
import '@testing-library/jest-dom/extend-expect';



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

  temp[0].started = true;
  temp[0].players = 
  [
    {
      playerName: 'User 1',
      frames: [],
      strike: [],
      spare: [],
      cumulativeScores: [],
      currentRoll: 1,
      maxRolls: 2,
      lastScore: 0
    },
    {
      playerName: 'User 2',
      frames: [],
      strike: [],
      spare: [],
      cumulativeScores: [],
      currentRoll: 1,
      maxRolls: 2,
      lastScore: 0
    }
  ]

  return temp;
}

let initState1 = {
  isManager: false,
  currentLane: 0,
  lanes: initLanes(),
}

let initState2 = {
  isManager: false,
  currentLane: 0,
  lanes: initLanes(),
}

it('Renders the connected app with initialState', () => {
  render(<Game />, { initialState: initState1 })

  //Test that lane 1 is selected with the Lane: ... prefix
  expect(screen.getByText("Lane: Lane 1")).toBeInTheDocument()

  //Test that basic game details are displayed including players, frames, total score, turn, and current roll
  expect(screen.getByText("Players")).toBeInTheDocument()
  expect(screen.getByText("Frame 1")).toBeInTheDocument()
  expect(screen.getByText("User 1")).toBeInTheDocument()
  expect(screen.getByText("User 2")).toBeInTheDocument()
  expect(screen.getByText("Total Score")).toBeInTheDocument()
  expect(screen.getByText("Scoreboard")).toBeInTheDocument()
  expect(screen.getByText("Game Information")).toBeInTheDocument()
  expect(screen.getByText("Frame: 0")).toBeInTheDocument()
  expect(screen.getByText("Turn: User 1")).toBeInTheDocument()
  expect(screen.getByText("Current Roll: 1")).toBeInTheDocument()

  //Testing that the buttons are visible, this ensures that we are in a non-manager role
  expect(screen.getByText("-")).toBeInTheDocument()
  expect(screen.getByText("1")).toBeInTheDocument()
  expect(screen.getByText("2")).toBeInTheDocument()
  expect(screen.getByText("3")).toBeInTheDocument()
  expect(screen.getByText("4")).toBeInTheDocument()
  expect(screen.getByText("5")).toBeInTheDocument()
  expect(screen.getByText("6")).toBeInTheDocument()
  expect(screen.getByText("7")).toBeInTheDocument()
  expect(screen.getByText("8")).toBeInTheDocument()
  expect(screen.getByText("9")).toBeInTheDocument()
  expect(screen.getByText("X")).toBeInTheDocument()

  //Test that all lane buttons are visible in the document
  for (let i = 0; i < initState1.lanes.length; i++)
  {
    expect(screen.getByText("Lane " + String(i + 1))).toBeInTheDocument()
  }
})