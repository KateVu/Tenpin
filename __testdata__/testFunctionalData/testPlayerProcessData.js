module.exports = 
{
    test1Data:
    {
        buttonIDToClick: "pin5",
        expectedScore: "5",
        reducerState:
        {
            isManager: false,
            currentLane: 0,
            lanes: 
            [
                {
                    laneid: "1",
                    laneTitle: "Lane 1",
                    started: true,
                    players: [
                        {
                            playerName: 'User 1',
                            frames: [],
                            strike: [],
                            spare: [],
                            cumulativeScores: [],
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
                    currentPlayer: 0,
                    currentFrame: 0,
                    winner: "",
                    ended: false
                },
            ]
        }
    },

    test2Data:
    {
        buttonIDToClick: "pin8",
        expectedScore: "8",
        reducerState:
        {
            isManager: false,
            currentLane: 0,
            lanes: 
            [
                {
                    laneid: "1",
                    laneTitle: "Lane 1",
                    started: true,
                    players: [
                        {
                            playerName: 'User 1',
                            frames: [[1,2],[4,2],[4,5],[6,4],[4,4]],
                            strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false}],
                            spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: true, nextScore: [4]},{isSpare: false}],
                            cumulativeScores: [3,6,9,10,8],
                            currentRoll: 1,
                            maxRolls: 2,
                            lastScore: 0,
                        },
                        {
                            playerName: 'User 2',
                            frames: [[1,5],[7,2],[1,4],[5,4]],
                            strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false}],
                            spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}],
                            cumulativeScores: [6,9,5,9],
                            currentRoll: 1,
                            maxRolls: 2,
                            lastScore: 0,
                        },
                    ],
                    currentPlayer: 1,       //Player 2
                    currentFrame: 4,        //Frame 5
                    winner: "",
                    ended: false
                },
            ]
        }
    },

    test3Data:
    {
        buttonIDToClick: "pin8",
        expectedScore: "8",
        reducerState:
        {
            isManager: false,
            currentLane: 0,
            lanes: 
            [
                {
                    laneid: "1",
                    laneTitle: "Lane 1",
                    started: true,
                    players: [
                        {
                            playerName: 'User 1', 
                            frames: [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[5,2]], 
                            strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},               {isStrike: false}], 
                            spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}], 
                            cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 7],
                            currentRoll: 1,
                            maxRolls: 2,
                            lastScore: 0,
                          },
                          {
                            playerName: 'User 2',
                            frames: [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1]],
                            strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},               {isStrike: false}],
                            spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}],
                            cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                            currentRoll: 2,
                            maxRolls: 2,
                            lastScore: 1,
                          }
                    ],
                    currentPlayer: 1,       //Player 2
                    currentFrame: 9,        //Frame 10
                    winner: "",
                    ended: false
                },
            ]
        }
    },
};