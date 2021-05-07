export const testEnterScoreData1 = [
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
                        playerName: 'User1',
                        frames: [[1, 1], [1, 1]],
                        strike: [{ isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2],  //Updated for first roll, -1 when spare
                        currentRoll: 1,     //Starts at 1
                        maxRolls: 2,
                        lastScore: 0,
                    },
                    {
                        playerName: 'User2',
                        frames: [[1, 1], [1, 1]],
                        strike: [{ isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2],
                        currentRoll: 1,
                        maxRolls: 2,
                        lastScore: 0,
                    }
                ],
                currentPlayer: 0,
                currentFrame: 2,
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
                        playerName: 'User1',
                        frames: [[1, 1], [1, 1], [10]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: true, nextScores: [] }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2, -1],
                        currentRoll: 1,
                        maxRolls: 2,
                        lastScore: 0,
                    },
                    {
                        playerName: 'User2',
                        frames: [[1, 1], [1, 1]],
                        strike: [{ isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2],
                        currentRoll: 1,
                        maxRolls: 2,
                        lastScore: 0,
                    }
                ],
                currentPlayer: 1,
                currentFrame: 2,
                winner: "",
                ended: false
            }]
    },
    'pin10',
    'r8User1',
    '8'
];