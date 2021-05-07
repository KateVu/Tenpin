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
          frames: [[2,4],[5,3],[4,2], [3]], 
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false}], 
          spare: [{isSpare: false},{isSpare: false},{isSpare: false}], 
          cumulativeScores: [6, 8, 6, 3],
          currentRoll: 2,     //Changes to 2
          maxRolls: 2,
          lastScore: 3,
        },
        {
          playerName: 'User 2',
          frames: [[1,1],[1,1],[1,1]],
          strike: [{isStrike: false},{isStrike: false},{isStrike: false}],
          spare: [{isSpare: false},{isSpare: false},{isSpare: false}],
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
          frames: [[2,4],[5,3],[4,2], [3,6]], 
          strike: [{isStrike: false},{isStrike: false},{isStrike: false},{isStrike: false}], 
          spare: [{isSpare: false},{isSpare: false},{isSpare: false},{isSpare: false}], 
          cumulativeScores: [6, 8, 6, 9],
          currentRoll: 1,     //Resets to 1
          maxRolls: 2,
          lastScore: 0,       //Resets to 0
        },
        {
          playerName: 'User 2',
          frames: [[1,1],[1,1],[1,1]],
          strike: [{isStrike: false},{isStrike: false},{isStrike: false}],
          spare: [{isSpare: false},{isSpare: false},{isSpare: false}],
          cumulativeScores: [2, 2, 2],
          currentRoll: 1,
          maxRolls: 2,
          lastScore: 0,
        }
        ],
        currentPlayer: 1,     //Changes to 1
        currentFrame: 3,
        winner: "",
        ended: false
      }
    ]
  }
];