import isStrike from '../utils/isStrike';
import isSpare from '../utils/isSpare';

const numberLane = 20;
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
  const res = [];
  totalScores.forEach((item, index) => item === max ? res.push(listPlayers[index].playerName) : null);
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

  let rLanes;
  let rLane;
  let rCurrentPlayerOb;
  let rNumberPlayersIndex;

  switch (action.type) {
    case 'ENTERSCORE':
      rLanes = [...state.lanes];
      rLane = rLanes[state.currentLane];
      rCurrentPlayerOb = rLane.players[rLane.currentPlayer];
      rNumberPlayersIndex = rLane.players.length - 1;
      console.log("ENTER SCORE - LANES");
      // console.log(rLanes);

      //UPDATE SCORE TO FRAMES
      //if new frame, create an array for with first element = pins and push to frames
      if (typeof rCurrentPlayerOb.frames[rLane.currentFrame] === 'undefined') {
        // console.log('UPDATE with not currentframe:');
        let newScore = [action.payload];
        let frames = rCurrentPlayerOb.frames;
        frames.push(newScore);
        // console.log(frames);
      } else {
        // console.log('UPDATE with existing currentframe:');
        rCurrentPlayerOb.frames[rLane.currentFrame].push(action.payload);
        // console.log(rCurrentPlayerOb.frames);
      }

      //UPDATE PREVIOUS STRIKE - only check if not at first frame
      if (rLane.currentFrame > 0) {
        console.log('CHECK UPDATE PREVIOUS STRIKE for frame');
        console.log(rLane.currentFrame);
        //if at second frame, only check frame T-1 -> idex = 0
        if (rLane.currentFrame === 1) {
          console.log('CHECK UPDATE PREVIOUS STRIKE at frame 1');
          let nextScores = rCurrentPlayerOb.strike[0].nextScores;
          if (rCurrentPlayerOb.strike[0].isStrike) {
            console.log(`UPDATE PREVIOUS STRIKE for frame 0, player: ${rLane.currentPlayer}`);
            nextScores.push(action.payload);
            console.log('UPDATE PREVIOUS STRIKE: add next Scores ');
            console.log(rCurrentPlayerOb.strike[0].nextScores);
            console.log(nextScores);

            if (rCurrentPlayerOb.strike[0].nextScores.length === 2) {
              rCurrentPlayerOb.cumulativeScores[0] = 10 + nextScores[0] + nextScores[1];
              console.log('UPDATE PREVIOUS STRIKE: add cumulated Score ');
              console.log(rCurrentPlayerOb.cumulativeScores[0]);
            }
          }
        } else {
          //if from third frame (idex > 1), check frame T-1, T-2
          console.log('UPDATE PREVIOUS STRIKE if current frame != 1');
          if (rCurrentPlayerOb.strike[rLane.currentFrame - 2].isStrike) {
            console.log(`UPDATE PREVIOUS STRIKE for frame ${rLane.currentFrame - 2}, player: ${rLane.currentPlayer}`);
            let nextScores = rCurrentPlayerOb.strike[rLane.currentFrame - 2].nextScores;
            if (nextScores.length < 2) {
              nextScores.push(action.payload);
              console.log('UPDATE PREVIOUS STRIKE: add next Scores ');
              console.log(nextScores);
              if (nextScores.length === 2) {
                rCurrentPlayerOb.cumulativeScores[rLane.currentFrame - 2] = 10 + nextScores[0] + nextScores[1];
                console.log('UPDATE PREVIOUS STRIKE: add cumulated Score ');
                console.log(rCurrentPlayerOb.cumulativeScores[rLane.currentFrame - 2]);
              }
            }
          }

          if (rCurrentPlayerOb.strike[rLane.currentFrame - 1].isStrike) {
            console.log(`UPDATE PREVIOUS STRIKE for frame ${rLane.currentFrame - 1}, player: ${rLane.currentPlayer}`);
            let nextScores = rCurrentPlayerOb.strike[rLane.currentFrame - 1].nextScores;
            if (nextScores.length < 2) {
              nextScores.push(action.payload);
              console.log('UPDATE PREVIOUS STRIKE: add next Scores ');
              console.log(nextScores);
              if (nextScores.length === 2) {
                rCurrentPlayerOb.cumulativeScores[rLane.currentFrame - 1] = 10 + nextScores[0] + nextScores[1];
                console.log('UPDATE PREVIOUS STRIKE: add cumulated Score ');
                console.log(rCurrentPlayerOb.cumulativeScores[rLane.currentFrame - 1]);
              }
            }
          }

        }
      }

      //UPDATE PREVIOUS spare
      if (rLane.currentFrame > 0) {
        let nextScores = rCurrentPlayerOb.spare[rLane.currentFrame - 1].nextScores;
        if (rCurrentPlayerOb.spare[rLane.currentFrame - 1].isSpare) {
          if (rCurrentPlayerOb.spare[rLane.currentFrame - 1].nextScores.length < 1) {
            nextScores.push(action.payload);
            rCurrentPlayerOb.cumulativeScores[rLane.currentFrame - 1] = 10 + action.payload;
          }
        }
      }

      //IS_STRIKE: ADD NEW ROLL IF THE LAST FRAME, RECORD STRIKE ARRAY
      if (isStrike(rCurrentPlayerOb.currentRoll, action.payload)) {
        console.log("ISSTRIKE");
        //if it is the 10th frame, increase amount of delivery/roll times and add scores to cumulateScore for the frame
        if (rLane.currentFrame === 9) {
          rCurrentPlayerOb.maxRolls = 3;
          if (typeof rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] === 'undefined') {
            //first time add cumulative scores
            rCurrentPlayerOb.cumulativeScores.push(action.payload);
          } else {
            rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] = rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] + action.payload;
          }

        } else {
          //Not last frame: update strike, and spare array information
          rCurrentPlayerOb.strike.push({ isStrike: true, nextScores: [] });
          rCurrentPlayerOb.spare.push({ isSpare: false });
          // console.log(`UPDATE STRIKE for frame ${rLane.currentFrame}, player: ${rLane.currentPlayer}, value: ${rCurrentPlayerOb.strike[rLane.currentFrame].isStrike}, Strike: ${rCurrentPlayerOb.strike}`);
          // console.log(currentPlayer.strike);

          //add -1 to cumulative scores: strike is only for first role
          if (typeof rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] === 'undefined') {
            //first time add cumulative scores
            rCurrentPlayerOb.cumulativeScores.push(-1);
          }
        }
      } else {
        //Not a strike
        if (typeof rCurrentPlayerOb.strike[rLane.currentFrame] === 'undefined') {
          //first time add cumulative scores
          rCurrentPlayerOb.strike.push({ isStrike: false });
        };

        // console.log(`BEFORE UPDATE STRIKE for frame ${rLane.currentFrame}, player: ${rLane.currentPlayer}, Strike: ${rCurrentPlayerOb.strike}`);
        // console.log(`UPDATE STRIKE for frame ${rLane.currentFrame}, player: ${rLane.currentPlayer}, value: ${rCurrentPlayerOb.strike[rLane.currentFrame].isStrike}, Strike: ${rCurrentPlayerOb.strike}`);
        //call check quare   
        if (rCurrentPlayerOb.currentRoll > 1) {
          if (isSpare(rCurrentPlayerOb.lastScore, action.payload)) {
            //if it is the 10th frame, increase amount of delivery/roll times:
            if (rLane.currentFrame === 9) {
              rCurrentPlayerOb.maxRolls = 3;
              rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] = rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] + action.payload;
            } else {
              //update spare array information
              rCurrentPlayerOb.spare.push({ isSpare: true, nextScores: [] });
              // console.log("UPDATE spare:");
              // console.log(currentPlayer.spare);
              //update cumulativeScores
              rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] = -1;
            }
          } else {
            //update spare array information
            if (typeof rCurrentPlayerOb.spare[rLane.currentFrame] === 'undefined') {
              //first time add cumulative scores
              rCurrentPlayerOb.spare.push({ isSpare: false });
            }
    
            // console.log("UPDATE spare:");
            // console.log(currentPlayer.spare);
            //update cumulativeScores
            rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] = rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] + action.payload;
          }
        } else {
          //update cumulativeScores
          rCurrentPlayerOb.cumulativeScores.push(action.payload);
        }
      }

      function checkspare() {
        if (rCurrentPlayerOb.currentRoll > 1) {
          if (isSpare(rCurrentPlayerOb.lastScore, action.payload)) {
            //if it is the 10th frame, increase amount of delivery/roll times:
            if (rLane.currentFrame === 9) {
              rCurrentPlayerOb.maxRolls = 3;
              rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] = rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] + action.payload;
            } else {
              //update spare array information
              rCurrentPlayerOb.spare.push({ isSpare: true, nextScores: [] });
              // console.log("UPDATE spare:");
              // console.log(currentPlayer.spare);
              //update cumulativeScores
              rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] = -1;
            }
          } else {
            //update spare array information
            if (typeof rCurrentPlayerOb.spare[rLane.currentFrame] === 'undefined') {
              //first time add cumulative scores
              rCurrentPlayerOb.spare.push({ isSpare: false });
            }
    
            // console.log("UPDATE spare:");
            // console.log(currentPlayer.spare);
            //update cumulativeScores
            rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] = rCurrentPlayerOb.cumulativeScores[rLane.currentFrame] + action.payload;
          }
        } else {
          //update cumulativeScores
          rCurrentPlayerOb.cumulativeScores.push(action.payload);
        }
      }


      if ((rLane.currentFrame === 9) && (rLane.currentPlayer === rNumberPlayersIndex) && (rCurrentPlayerOb.currentRoll === rCurrentPlayerOb.maxRolls)) {
        console.log("END GAME");
        //change status of the game
        rLane.ended = true;
        // console.log(newLane.ended);
        rLane.winner = findWinners(rLane);

      } else {
        //check if need to move to next player
        if (rCurrentPlayerOb.currentRoll < rCurrentPlayerOb.maxRolls) {
          if (!isStrike(rCurrentPlayerOb.currentRoll, action.payload)) {
            //update current roll and last score
            rCurrentPlayerOb.currentRoll = rCurrentPlayerOb.currentRoll + 1;
            if (isSpare(rCurrentPlayerOb.lastScore, action.payload) && (rLane.currentFrame === 9)) {
              rCurrentPlayerOb.lastScore = 0;
            } else {
              rCurrentPlayerOb.lastScore = action.payload;
            }
          } else {
            if (rLane.currentFrame < 9) {
              //Move to next player if score a strike and not the last frame
              console.log("Move to next player");
              if (rLane.currentPlayer === rNumberPlayersIndex) {
                //last player in the list: update index of current player, current roll and lastScore
                rLane.currentPlayer = 0;
                rLane.currentFrame++;
                console.log(`NEXT FRAME: ${rLane.currentFrame}`);
              } else {
                rLane.currentPlayer = rLane.currentPlayer + 1;
              }
              rCurrentPlayerOb.lastScore = 0;
              rCurrentPlayerOb.currentRoll = 1;
              console.log(`Player ${rLane.currentPlayer}, Frame: ${rLane.currentFrame}`);

            } else {
              //Continue to roll if score a strike and the last frame
              rCurrentPlayerOb.currentRoll = rCurrentPlayerOb.currentRoll + 1;
              rCurrentPlayerOb.lastScore = 0;
            }
          }
        } else {
          //move to next player
          if (rLane.currentPlayer === rNumberPlayersIndex) {
            //last player in the list: update index of current player, current roll and lastScore
            rLane.currentPlayer = 0;
            rLane.currentFrame++;
            rCurrentPlayerOb.lastScore = 0;
          } else {
            rLane.currentPlayer = rLane.currentPlayer + 1;
            rCurrentPlayerOb.lastScore = 0;
          }
          rCurrentPlayerOb.currentRoll = 1;

        }
      }

      console.log("FOR TESTING PURPOSE");
      console.log(state.lanes[state.currentLane]);
      console.log("NEW LANE: ");
      console.log(rLanes);

      return {
        ...state,
        lanes: rLanes,
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
          spare: [],
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
      // console.log("ADDPLAYER CALLED");
      // console.log(action.payload)

      let newLanesAddPlayer = [...state.lanes];
      let newLaneAddPlayer = newLanesAddPlayer[state.currentLane];
      // console.log('NEW LANE');
      // console.log(newLaneAddPlayer);
      newLaneAddPlayer.players.push(
        {
          playerName: action.payload,
          frames: [],
          strike: [],
          spare: [],
          cumulativeScores: [],
          currentRoll: 1,
          maxRolls: 2,
          lastScore: 0,
        });
      // console.log('UPDATED');
      // console.log(newLaneAddPlayer);

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