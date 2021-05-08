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
    }   
};