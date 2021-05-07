export default 
[
  //Initial state
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
          frames: [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[5,5]], 
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},               {isStrike: false}], 
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}], 
          cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 10],
          currentRoll: 3,
          maxRolls: 3,
          lastScore: 0,   //0 Because just got a spare
        },
        {
          playerName: 'User 2',
          frames: [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]],
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false}],
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}],
          cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2],
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
  //Expected result
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
          frames: [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[5,5,3]], 
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},               {isStrike: false}], 
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}],     //Gains 1 more element
          cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 13],
          currentRoll: 1, //Resets to 1
          maxRolls: 3,
          lastScore: 0,   //0 Because just got a spare
        },
        {
          playerName: 'User 2',
          frames: [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]],
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false}],
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}],
          cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2],
          currentRoll: 1,
          maxRolls: 2,
          lastScore: 0,
        }
        ],
        currentPlayer: 1,   //Updates to 1
        currentFrame: 9,
        winner: "",
        ended: false
      }
    ]
  }
];