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
          frames: [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]],
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false}],
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}], 
          cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2],
          currentRoll: 1,
          maxRolls: 2,
          lastScore: 0,
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
          frames: [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[7]],     //Updates
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false}],    //New element added
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}], 
          cumulativeScores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 7],    //Updates
          currentRoll: 2,   //Updates to next roll
          maxRolls: 2,
          lastScore: 7,     //Updates
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
  }
];