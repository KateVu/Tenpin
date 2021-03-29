
import isStrike from '../utils/isStrike';
import isSpare from '../utils/isSpare';


const initialState = {
  isManager: false,
  currentLane: 0,
  lanes: [
    {
      laneid: "1",
      laneTitle: "Lane 1",
      started: true,
      players: [
        {
          playerName: "Player 1",
          frames: [[6, 2], [6, 2]],
          strike: [
            {
              isStrike: false,
              nextScores: []
            },
            {
              isStrike: false,
              nextScores: []
            }
          ],
          square: [
            {
              isSquare: false,
              nextScores: []
            },
            {
              isSquare: false,
              nextScores: []
            }
          ],
          cumulativeScores: [8, 8],
          currentRoll: 1,
          maxRolls: 2,
          lastScore: 0,
        },
        {
          playerName: "Player 2",
          frames: [[6, 3]],
          strike: [
            {
              isStrike: false,
              nextScores: []
            },
          ],
          square: [
            {
              isSquare: false,
              nextScores: []
            },
          ],
          cumulativeScores: [9],
          maxRolls: 2,
          currentRoll: 1,
          lastScore: 0,
        },

        {
          playerName: "Player 3",
          frames: [[6, 3]],
          strike: [
            {
              isStrike: false,
              nextScores: []
            },
          ],
          square: [
            {
              isSquare: false,
              nextScores: []
            },
          ],
          cumulativeScores: [9],
          maxRolls: 2,
          currentRoll: 1,
          lastScore: 0,
        },


      ],
      currentPlayer: 1,
      currentFrame: 1,
      winner: "User1",
      ended: false
    },
    {
      laneid: "2",
      laneTitle: "Lane 2",
      started: false,
      players: [],
      currentPlayer: 0,
      currentFrame: 0,
      winner: "",
      ended: false
    },
    {
      laneid: "3",
      laneTitle: "Lane 3",
      started: false,
      players: [],
      currentPlayer: 0,
      currentFrame: 0,
      winner: "",
      ended: false
    },

  ],

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ENTERSCORE':
      // let newState = {...state}; 
      let newLanes = [...state.lanes];
      let newLane = newLanes[state.currentLane];
      let currentFrame = newLane.currentFrame;
      let currentPlayer = newLane.players[newLane.currentPlayer];
      let numberPlayers = newLanes[state.currentLane].players.length - 1;

      console.log(newLane.players[newLane.currentPlayer].frames);
      //UPDATE SCORE TO FRAMES
      if (typeof newLane.players[newLane.currentPlayer].frames[currentFrame] === 'undefined') {
        // console.log('UPDATE with not currentframe:');
        let newScore = [[action.payload]];
        // console.log('newValue:');
        // console.log(newScore);

        let frames = newLane.players[newLane.currentPlayer].frames;
        // console.log('currentValue:');
        // console.log(frames);

        frames.push(newScore);

        // console.log('UPDATE FRAMES:');
        // console.log(frames);
        // console.log('Current frame:');
        // console.log(currentFrame);
        // console.log('Type of:');
        // console.log(typeof newLane.players[newLane.currentPlayer].frames[currentFrame]);

      } else {
        // console.log('UPDATE with existing currentframe:');

        newLane.players[newLane.currentPlayer].frames[currentFrame].push(action.payload);
        // console.log('UPDATE FRAMES:');
        // console.log(newLane.players[newLane.currentPlayer].frames);
      }

      // //UPDATE PREVIOUS STRIKE
      if (currentFrame > 0) {
        if (currentFrame === 1) {
          if (currentPlayer.strike[0].isStrike) {
            currentPlayer.strike[0].nextScores.push(action.payload);
            if (currentPlayer.strike[0].nextScores.length === 2) {
              currentPlayer.cumulativeScores[0] = 10 + currentPlayer.strike[0].nextScores[0] + currentPlayer.strike[0].nextScores[1];
            }
          }
        } else {

          if (currentPlayer.strike[currentFrame - 1].isStrike === true) {
            if (currentPlayer.strike[currentFrame - 1].nextScores.length < 2) {
              currentPlayer.strike[currentFrame - 1].nextScores.push(action.payload);
              if (currentPlayer.strike[currentFrame - 1].nextScores.length === 2) {
                currentPlayer.cumulativeScores[currentFrame - 1] = 10 + currentPlayer.strike[currentFrame - 1].nextScores[0] + currentPlayer.strike[currentFrame - 1].nextScores[1];
              }
            }
          }

          if (currentPlayer.strike[currentFrame - 2].isStrike === true) {
            if (currentPlayer.strike[currentFrame - 2].nextScores.length < 2) {
              currentPlayer.strike[currentFrame - 2].nextScores.push(action.payload);
              if (currentPlayer.strike[currentFrame - 2].nextScores.length === 2) {
                currentPlayer.cumulativeScores[currentFrame - 2] = 10 + currentPlayer.strike[currentFrame - 2].nextScores[0] + currentPlayer.strike[currentFrame - 2].nextScores[1];
              }
            }
          }

        }
      }

      //UPDATE PREVIOUS SQUARE
      if (currentFrame > 0) {
        console.log("CURRENT FRAME:");
        console.log(currentFrame);

        if (currentPlayer.square[currentFrame - 1].isSquare) {
          if (currentPlayer.square[currentFrame - 1].nextScores.length < 1) {
              currentPlayer.cumulativeScores[currentFrame - 1] = 10 + action.payload;
          }
        }
      }



      //STRIKE: ADD NEW ROLL IF THE LAST FRAME, RECORD STRIKE ARRAY
      if (isStrike(currentPlayer.currentRoll, action.payload)) {
        //if it is the 10th frame, increase amount of delivery/roll times:
        console.log("ISSTRIKE");
        if (currentFrame == 9) {
          currentPlayer.maxRolls = 3;
          if (typeof currentPlayer.cumulativeScores[currentFrame] === 'undefined') {
            //first time add cumulative scores
            currentPlayer.cumulativeScores.push(action.payload);
          }

        } else {
          //update strike array information
          currentPlayer.strike.push({ isStrike: true, nextScores: [] });
          currentPlayer.square.push({ isSquare: false });
          console.log("UPDATE STRIKE:");
          console.log(currentPlayer.strike);
  
          //add -1 to cumulative scores
          if (typeof currentPlayer.cumulativeScores[currentFrame] === 'undefined') {
            //first time add cumulative scores
            currentPlayer.cumulativeScores.push(-1);
          }
        }
        //Not a strike
      } else {
        //update strike array information
        currentPlayer.strike.push({ isStrike: false });
        //handle if is spare
        if (currentPlayer.currentRoll > 1) {
          if (isSpare(currentPlayer.lastScore, action.payload)) {
            //if it is the 10th frame, increase amount of delivery/roll times:
            if (currentFrame == 9) {
              currentPlayer.maxRolls = 3;
              currentPlayer.cumulativeScores[currentFrame] = currentPlayer.cumulativeScores[currentFrame] + action.payload;
            } else {
            //update square array information
            currentPlayer.square.push({ isSquare: true, nextScores: [] });
            console.log("UPDATE SQUARE:");
            console.log(currentPlayer.square);  
            //update cumulativeScores
            currentPlayer.cumulativeScores[currentFrame] = -1;
            }
          } else {
            //update square array information
            currentPlayer.square.push({ isSquare: false });
            console.log("UPDATE SQUARE:");
            console.log(currentPlayer.square);  
            //update cumulativeScores
            currentPlayer.cumulativeScores[currentFrame] = currentPlayer.cumulativeScores[currentFrame] + action.payload;

          }
        } else {
          //update cumulativeScores
          currentPlayer.cumulativeScores.push(action.payload);
        }
      }

      //update user infor:lastScore
      currentPlayer.lastScore = action.payload;
      //check if endgame
      if ((currentFrame == 9) && (newLane.currentPlayer == numberPlayers) && (currentPlayer.currentRoll == currentPlayer.maxRolls)) {
        // console.log("END GAME");
        //change status of the game
        newLane.ended = true;
        // console.log(newLane.ended);

      } else {
        //check if need to move to next player
        if (currentPlayer.currentRoll < currentPlayer.maxRolls) {
          if (!isStrike(currentPlayer.currentRoll, action.payload)) {
            //update current roll
            currentPlayer.currentRoll = currentPlayer.currentRoll + 1;
          } else {
            if (currentFrame < 9) {
              //Move to next player if score a strike and not the last frame
              if (newLane.currentPlayer === numberPlayers) {
                //last player in the list: update index of current player, current roll and lastScore
                newLane.currentPlayer = 0;
                newLane.currentFrame++;
                currentPlayer.lastScore = 0;
              } else {
                newLane.currentPlayer = newLane.currentPlayer + 1;
                currentPlayer.lastScore = 0;
              }
              currentPlayer.currentRoll = 1;
            } else {
              //Continue to roll if score a strike and the last frame
              currentPlayer.currentRoll = currentPlayer.currentRoll + 1;
            }
          }
        } else {
          //move to next player
          if (newLane.currentPlayer == numberPlayers) {
            //last player in the list: update index of current player, current roll and lastScore
            newLane.currentPlayer = 0;
            newLane.currentFrame++;
            currentPlayer.lastScore = 0;
          } else {
            newLane.currentPlayer = newLane.currentPlayer + 1;
            currentPlayer.lastScore = 0;
          }
          currentPlayer.currentRoll = 1;

        }
      }
      return {
        ...state,
        lanes: newLanes,
      }
    case 'ENTERLANE':

      return {
        ...state,
        currentLane: action.payload,
      }

  }
  
  return state
}

export default reducer;