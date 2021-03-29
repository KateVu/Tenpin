const redux = require('redux');
const createStore = redux.createStore;

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
            frames:[[6,2],[6,2]],
            cumulativeScores: [8,8],
            totalScore: 80,
            rollsLeft: 2,
            lastRoll: 2,
          }, 
        ],
        currentPlayer: 0,
        currentFrame:3,
        winner: "User1",
        ended: false
      },
      { laneTitle: "Lane 2" },
      { laneTitle: "Lane 3" },
      { laneTitle: "Lane 4" },
      { laneTitle: "Lane 5" }
    ],
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'ENTER_SCORE') {
        return {
            ...state,
            currentLane: state.currentLane + 1
        }
    }
    return state;
};

//Store
const store = createStore(rootReducer);
temp = store.getState();
console.log(temp);


//Dispatching Action
store.dispatch({type: 'ENTER_SCORE'});
console.log(store.getState());

//Subcription
store.subscribe(() => {
    
})