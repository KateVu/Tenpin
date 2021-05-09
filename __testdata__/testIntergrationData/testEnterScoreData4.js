/**
 * @TC4: Spares not in last frame
 * @description: When the player gets 2 squares continuously in normal frame, 
 * the cumulative score of the first one should be updated and mark X for the later one 
 * @param: [inputState, expectedState, id_button, id_scorecell, expected_score_cell_value, id_cumulate_score, expected_value_cumulateScore, id_pre_id_cumulate_score, expected_value_pre_cumulateScore, id_total_score, expect_value_total_score]
 */


export const testEnterScoreData4 = [
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
                        frames: [[1, 1], [1, 1], [4, 6], [6]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: true, nextScores: [6] }],
                        cumulativeScores: [2, 2, 16, 6],
                        currentRoll: 2,     //Starts at 1
                        maxRolls: 2,
                        lastScore: 6,
                    },
                    {
                        playerName: 'User2',
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
                        frames: [[1, 1], [1, 1], [4, 6], [6, 4]],
                        strike: [{ isStrike: false }, { isStrike: false }, { isStrike: false }, { isStrike: false }],
                        spare: [{ isSpare: false }, { isSpare: false }, { isSpare: true, nextScores: [6] }, { isSpare: true, nextScores: [] }],
                        cumulativeScores: [2, 2, 16, -1],
                        currentRoll: 1,
                        maxRolls: 2,
                        lastScore: 0,
                    },
                    {
                        playerName: 'User2',
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
            }]
    },
    'pin4',
    'r8User1',
    '4',
    'cumulative-score-f4User1',
    'X',
    'cumulative-score-f3User1',
    '16',
    'total-scoreUser1',
    '20'

];