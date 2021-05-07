
import React from 'react';
import App from '../../src/containers/App';
import { render,fireEvent, screen } from '../../__utils__/test-utils';
import { testEnterScoreData1 } from '../../__testdata__/testIntergrationData/testEnterScoreData1';
import { queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


var expectData = testEnterScoreData1[1];

const testEnterScoreData2 = [
    {
        isManager: false,
        currentLane: 0,
        lanes: [
            {
                laneid: "1",
                laneTitle: "Lane 1",
                started: true,
                players: [
                    {
                        playerName: 'User 1',
                        frames: [[1, 1], [1, 1], [10], [1]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: true, nextScores: [1] }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2, -1, 1],
                        currentRoll: 2,
                        maxRolls: 2,
                        lastScore: 1,
                    },
                    {
                        playerName: 'User 2',
                        frames: [[1, 1], [1, 1], [1, 1]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2, 2],
                        currentRoll: 1,
                        maxRolls: 2,
                        lastScore: 0,
                    }
                ],
                currentPlayer: 0,
                currentFrame: 3,
                winner: "",
                ended: false
            },
        ]
    },
    {
        isManager: false,
        currentLane: 0,
        lanes: [
            {
                laneid: "1",
                laneTitle: "Lane 1",
                started: true,
                players: [
                    {
                        playerName: 'User 1',
                        frames: [[1, 1], [1, 1], [10], [1, 8]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: true, nextScores: [1, 1] }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2, 12, 2],
                        currentRoll: 2,
                        maxRolls: 2,
                        lastScore: 0,
                    },
                    {
                        playerName: 'User 2',
                        frames: [[1, 1], [1, 1], [1, 1]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2, 2],
                        currentRoll: 1,
                        maxRolls: 2,
                        lastScore: 0,
                    }
                ],
                currentPlayer: 1,
                currentFrame: 3,
                winner: "",
                ended: false
            },
        ]
    }

];
it('Renders the connected app with initialState', () => {
    // const app = render(<App />, { initialState: initData })
    var initData = testEnterScoreData2[0];

    const app = render(<App />, { initialState: initData });

    const getById = queryByAttribute.bind(null, 'id');
    const content = getById(app.container, 'pin8');
  
    fireEvent.click(content);
    expect(screen.getByText("Rules")).toBeInTheDocument();
  })