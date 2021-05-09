/**
 * @TC7: Spare in last frame
 * @description: When the player gets square in last frame they have 3 rolls in total for last frame.
 * @param: [inputState, expectedState, id_button, id_scorecell, expected_score_cell_value, id_cumulate_score, expected_value_cumulateScore, id_pre_id_cumulate_score, expected_value_pre_cumulateScore, id_total_score, expect_value_total_score]
 */

export const testEnterScoreData7 = [
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
                        frames: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [2]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],  //Updated for first roll, -1 when spare
                        currentRoll: 2,     //Starts at 1
                        maxRolls: 2,
                        lastScore: 2,
                    },
                    {
                        playerName: 'User2',
                        frames: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        currentRoll: 1,
                        maxRolls: 2,
                        lastScore: 0,
                    }
                ],
                currentPlayer: 0,
                currentFrame: 9,
                winner: "",
                ended: false
            }
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
                        frames: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [2, 8]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 10],
                        currentRoll: 3,
                        maxRolls: 3,
                        lastScore: 0,
                    },
                    {
                        playerName: 'User2',
                        frames: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
                        currentRoll: 1,
                        maxRolls: 2,
                        lastScore: 0,
                    }
                ],
                currentPlayer: 0,
                currentFrame: 9,
                winner: "",
                ended: false
            }]
    },
    'pin8',
    'r20User1',
    '8',
    'cumulative-score-f10User1',
    '10',
    'cumulative-score-f9User1',
    '2',
    'total-scoreUser1',
    '28',
];