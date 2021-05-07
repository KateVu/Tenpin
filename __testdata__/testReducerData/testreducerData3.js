export const testreducerData3 = [
    {
        isManager: true,
        currentLane: 0,
        lanes: [
            {
                laneid: "1",
                laneTitle: "Lane 1",
                started: false,
                players: [
                    {
                        playerName: 'User 1',
                        frames: [[6, 1]],
                        strike: [{isStrike: false}],
                        spare: [{isSpare: false}],
                        cumulativeScores: [7],
                        currentRoll: 1,
                        maxRolls: 2,
                        lastScore: 0,
                    },
                    {
                        playerName: 'User 2',
                        frames: [],
                        strike: [],
                        spare: [],
                        cumulativeScores: [],
                        currentRoll: 1,
                        maxRolls: 2,
                        lastScore: 0,
                    },
                ],
                currentPlayer: 1,
                currentFrame: 0,
                winner: "",
                ended: false
            },
        ]
    },
    {
        isManager: true,
        currentLane: 0,
        lanes: [
            {
                laneid: "1",
                laneTitle: "Lane 1",
                started: false,
                players: [],
                currentPlayer: 0,
                currentFrame: 0,
                winner: "",
                ended: false            
            },
        ]
    }

];