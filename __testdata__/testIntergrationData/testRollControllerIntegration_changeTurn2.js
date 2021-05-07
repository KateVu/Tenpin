export default [
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
          frames: [[3,5],[6,3],[4,4],[4,1]], 
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false}], 
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}], 
          cumulativeScores: [8, 9, 8, 5],
          currentRoll: 1,     //Starts at 1
          maxRolls: 2,
          lastScore: 0,
        },
        {
          playerName: 'User 2',
          frames: [[1,1],[1,1],[1,1],[1,1]],
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false}],
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}],
          cumulativeScores: [2, 2, 2, 2],
          currentRoll: 1,
          maxRolls: 2,
          lastScore: 0,
        }
        ],
        currentPlayer: 0,
        currentFrame: 4,
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
          frames: [[3,5],[6,3],[4,4],[4,1],[10]], 
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: true, nextScores:[]}],      //Updates to be true
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}], 
          cumulativeScores: [8, 9, 8, 5, -1],
          currentRoll: 1,     //Starts at 1
          maxRolls: 2,
          lastScore: 0,
        },
        {
          playerName: 'User 2',
          frames: [[1,1],[1,1],[1,1],[1,1]],
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false}],
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}],
          cumulativeScores: [2, 2, 2, 2],
          currentRoll: 1,
          maxRolls: 2,
          lastScore: 0,
        }
        ],
        currentPlayer: 1,   //Updates to 1
        currentFrame: 4,
        winner: "",
        ended: false
      }
    ]
  }
];