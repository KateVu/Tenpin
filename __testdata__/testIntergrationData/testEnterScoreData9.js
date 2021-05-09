/**
 * @TC9: Spare and 10 in the last frame
 * @description: There is no more roll granted, move to next player
 * @param: [inputState, expectedState, id_button, id_scorecell, expected_score_cell_value, id_cumulate_score, expected_value_cumulateScore, id_pre_id_cumulate_score, expected_value_pre_cumulateScore, id_total_score, expect_value_total_score]
 */

export const testEnterScoreData9 = [
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
                        cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 10],  //Updated for first roll, -1 when spare
                        currentRoll: 3,     //Starts at 1
                        maxRolls: 3,
                        lastScore: 0,
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
                        frames: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [2, 8, 10]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }, { isSpare: false }],
                        cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 20],  //Updated for first roll, -1 when spare
                        currentRoll: 1,
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
                currentPlayer: 1,
                currentFrame: 9,
                winner: "",
                ended: false
            }]
    },
    'pin10',
    'r21User1',
    '10',
    'cumulative-score-f10User1',
    '20',
    'cumulative-score-f9User1',
    '2',
    'total-scoreUser1',
    '38',
];