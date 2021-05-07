export default
[
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
          frames: [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[5]], 
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},               {isStrike: false}], 
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}],
          cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 5],  //Updated for first roll, -1 when spare
          currentRoll: 2,     //Starts at 2 (on 2nd roll)
          maxRolls: 2,
          lastScore: 0,
        },
        {
          playerName: 'User 2',
          frames: [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]],
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},               {isStrike: false}],
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}],
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
          cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2,7],
          currentRoll: 1,   //Changes back to 1
          maxRolls: 2,
          lastScore: 0,
        },
        {
          playerName: 'User 2',
          frames: [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]],
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},               {isStrike: false}],
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}],
          cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2],
          currentRoll: 1,
          maxRolls: 2,
          lastScore: 0,
        }
        ],
        currentPlayer: 1,
        currentFrame: 9,
        winner: "",
        ended: false
      }
    ]
  }
];