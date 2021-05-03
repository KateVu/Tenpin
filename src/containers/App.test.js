// import { render, screen } from '@testing-library/react';
// import App from './App';
// import React from "react";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import App from './App';
import { render, fireEvent, screen } from './test-utils';
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

it('Renders the connected app with initialState', () => {
  render(<App />, { initialState: initState1 })

  expect(screen.getByText('Manager')).toBeInTheDocument()
})


it('Renders the connected app with initialState', () => {
  render(<App />, { initialState: initState2 })

  expect(screen.getByText('Rules')).toBeInTheDocument()
})

