import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import GameManager from './GameManager';
// eslint-disable-next-line jest/no-mocks-import
import { render, fireEvent, screen } from '../../../__mocks__/test-utils';
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
  isManager: true,
  currentLane: 0,
  lanes: initLanes(),
}


it('Renders the connected app with initialState', () => {
  render(<GameManager />, { initialState: initState1 })

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

  //Test that the manager-only reset and restart buttons are visible
  expect(screen.getByText("RESET")).toBeInTheDocument()
  expect(screen.getByText("RESTART")).toBeInTheDocument()

  //Test that all lane buttons are visible in the document
  for (let i = 0; i < initState1.lanes.length; i++)
  {
    expect(screen.getByText("Lane " + String(i + 1))).toBeInTheDocument()
  }
})