
import isStrike from '../utils/isStrike';
import isSpare from '../utils/isSpare';

const numberLane = 5;
const initLanes = () => {
  let temp = [];
  for (let i = 0; i < numberLane; i++) {
    temp.push(
      {
        laneid: i + 1,
        laneTitle: `Lane ${i + 1}`,
        started: false,
        players: [],
        currentPlayer: 0,
        currentFrame: 0,
        winner: "",
        ended: false
      }
    );
  }
  return temp;
}

let findWinners = (lane) => {
  let listPlayers = lane.players;
  let totalScores = listPlayers.map(player => {
    let scores = [...player.cumulativeScores];
    return scores.reduce((a, b) => a + b, 0);
  });
  const max = Math.max(...totalScores);
  // console.log("FIND WINNERS: ");
  // console.log(totalScores);

  // console.log(max);

  const res = [];
  totalScores.forEach((item, index) => item === max ? res.push(listPlayers[index].playerName): null);
  // console.log('WINNER: ');
  // console.log(res.toString());
  return res.toString();

}

let initialState = {
  isManager: true,
  currentLane: 0,
  lanes: initLanes(),
}
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ENTERSCORE':
      // let newState = {...state}; 
      let newLanes = [...state.lanes];
      // console.log("ENTER SCORE - LANES");
      // console.log(newLanes);

      let newLane = newLanes[state.currentLane];
      let currentFrame = newLane.currentFrame;
      let currentPlayer = newLane.players[newLane.currentPlayer];
      let numberPlayers = newLanes[state.currentLane].players.length - 1;

      console.log(newLane.players[newLane.currentPlayer].frames);
      //UPDATE SCORE TO FRAMES
      if (typeof newLane.players[newLane.currentPlayer].frames[currentFrame] === 'undefined') {
        // console.log('UPDATE with not currentframe:');
        let newScore = [[action.payload]];

        let frames = newLane.players[newLane.currentPlayer].frames;
        frames.push(newScore);
      } else {

        newLane.players[newLane.currentPlayer].frames[currentFrame].push(action.payload);
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
          currentPlayer.lastScore = 0;
          if (typeof currentPlayer.cumulativeScores[currentFrame] === 'undefined') {
            //first time add cumulative scores
            currentPlayer.cumulativeScores.push(action.payload);
          }

        } else {
          //update strike array information
          currentPlayer.strike.push({ isStrike: true, nextScores: [] });
          currentPlayer.square.push({ isSquare: false });
          // console.log("UPDATE STRIKE:");
          // console.log(currentPlayer.strike);

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
              // console.log("UPDATE SQUARE:");
              // console.log(currentPlayer.square);
              //update cumulativeScores
              currentPlayer.cumulativeScores[currentFrame] = -1;
            }
          } else {
            //update square array information
            currentPlayer.square.push({ isSquare: false });
            // console.log("UPDATE SQUARE:");
            // console.log(currentPlayer.square);
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
        newLane.winner = findWinners(newLane);

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

    case 'RESTART':
      let newLanes1 = [...state.lanes];
      let newLane1 = newLanes1[state.currentLane];
      let players = newLane1.players;

      let restartPlayers = players.map((player) => {
        return {
          playerName: player.playerName,
          frames: [],
          strike: [],
          square: [],
          cumulativeScores: [],
          currentRoll: 1,
          maxRolls: 2,
          lastScore: 0,
        }
      })

      newLane1.players = restartPlayers;
      newLane1.ended = false;
      newLane1.currentPlayer = 0;
      newLane1.currentFrame = 0;
      newLane1.winner = "";

      return {
        ...state,
        lanes: newLanes1,
      }

    case 'RESET':
      // newLanes = [...state.lanes];
      let newLanes2 = [...state.lanes];
      let newLane2 = newLanes2[state.currentLane];
      newLane2.players = [];
      newLane2.started = false;
      newLane2.ended = false;
      newLane2.currentPlayer = 0;
      newLane2.currentFrame = 0;
      newLane2.winner = "";

      return {
        ...state,
        lanes: newLanes2,
      }


      case 'START':
        // newLanes = [...state.lanes];
        let newLanesStart = [...state.lanes];
        let newLaneStart = newLanesStart[state.currentLane];
        newLaneStart.started = true;
        newLaneStart.ended = false;
  
        return {
          ...state,
          lanes: newLanesStart,
        }
  
    case 'ADDPLAYER':
      console.log("ADDPLAYER CALLED");
      console.log(action.payload)

      let newLanesAddPlayer = [...state.lanes];
      let newLaneAddPlayer = newLanesAddPlayer[state.currentLane];
      console.log('NEW LANE');
      console.log(newLaneAddPlayer);
      newLaneAddPlayer.players.push(
        {
          playerName: action.payload,
          frames: [],
          strike: [],
          square: [],
          cumulativeScores: [],
          currentRoll: 1,
          maxRolls: 2,
          lastScore: 0,
        });
        console.log('UPDATED');
        console.log(newLaneAddPlayer);
  
      return {
        ...state,
        lanes: newLanesAddPlayer
      }


    case 'SWITCHROLE':
      return {
        ...state,
        isManager: !state.isManager,
      }


  }

  return state
}

export default reducer;