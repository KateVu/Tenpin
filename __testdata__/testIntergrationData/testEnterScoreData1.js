
/**
 * @TC1: Strike not in last frame
 * @description: When the player gets a strike in normal frame, they will earn 10 pins plus a bonus of all the pins knocked down by the next two balls, 
 * no figure is entered until the next two balls are rolled
 * @param: [inputState, expectedState, id_button, id_scorecell, expected_score_cell_value, id_cumulate_score, expected_value_cumulateScore, id_pre_id_cumulate_score, expected_value_pre_cumulateScore, id_total_score, expect_value_total_score]
 */
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
    'r5User1',
    '10',
    'cumulative-score-f3User1',
    'X',
    'cumulative-score-f2User1',
    '2',
    'total-scoreUser1',
    '4'
];