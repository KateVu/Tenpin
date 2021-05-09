/**
 * @TC9: Spare and 10 in the last frame
 * @description: There is no more roll granted, move to next player
 * @param: [inputState]
 */

 export const testManagerProcessData2 = [
    {
        isManager: true,
        currentLane: 0,
        lanes: [
            {
                laneid: "1",
                laneTitle: "Lane 1",
                started: true,
                players: [
                    {
                        playerName: 'User1',
                        frames: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],  //Updated for first roll, -1 when spare
                        currentRoll: 1,     //Starts at 1
                        maxRolls: 2,
                        lastScore: 0,
                    },
                    {
                        playerName: 'User2',
                        frames: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],[1,1]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        currentRoll: 1,
                        maxRolls: 2,
                        lastScore: 0,
                    }
                ],
                currentPlayer: 1,
                currentFrame: 9,
                winner: "",
                ended: true
            }
        ]
    },
];