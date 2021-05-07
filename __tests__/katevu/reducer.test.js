import reducer from '../../src/store/reducer';
import { testreducerData2 } from '../../__testdata__/testReducerData/testreducerData2';
import { testreducerData3 } from '../../__testdata__/testReducerData/testreducerData3';
import { testreducerData4 } from '../../__testdata__/testReducerData/testreducerData4';
import { testreducerData5 } from '../../__testdata__/testReducerData/testreducerData5';
import { testreducerData6 } from '../../__testdata__/testReducerData/testreducerData6';
import { testreducerData7 } from '../../__testdata__/testReducerData/testreducerData7';


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

let initialState = {
    isManager: true,
    currentLane: 0,
    lanes: initLanes(),
}
//Data for testing Enterlanecase
let resultEnterLane = { ...initialState };
resultEnterLane.currentLane = 2;

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

/**
  * TC1: Check update lane
  * input: currentLane = 0, call "ENTERLANE" with payload = 2
  * expect output: currentlane = 2
  */
    it('should handle ENTERLANE', () => {
        expect(
            reducer(initialState,
                {
                    type: 'ENTERLANE',
                    payload: 2
                }
            )
        ).toEqual(resultEnterLane)
    })

/**
  * TC2: Need to check that the manager can restart a game for the current lane only. 
  * Restarting should clear all scores and data for a lane, but not clear the names of the players.
  * input & expected: load from testreducerData2
  */

    it('should handle RESTART', () => {
        var initData = testreducerData2[0];
        var expectData = testreducerData2[1];

        expect(
            reducer(initData,
                {
                    type: 'RESTART',
                }
            )
        ).toEqual(expectData)
    })



  /**
  * TC3: Manager should be able to reset a game. 
  * input & expected: load from testreducerData4
  */
     it('should handle RESET', () => {
        var initData = testreducerData3[0];
        var expectData = testreducerData3[1];

        expect(
            reducer(initData,
                {
                    type: 'RESET',
                }
            )
        ).toEqual(expectData)
    })


  /**
  * TC4: Users should be able to start the game. 
  * input & expected: load from testreducerData4
  */
       it('should handle START', () => {
        var initData = testreducerData4[0];
        var expectData = testreducerData4[1];

        expect(
            reducer(initData,
                {
                    type: 'START',
                }
            )
        ).toEqual(expectData)
    })


  /**
  * TC5: Managers should be able to add players. 
  * input & expected: load from testreducerData5
  */
   it('should handle ADDPLAYER', () => {
    var initData = testreducerData5[0];
    var expectData = testreducerData5[1];

    expect(
        reducer(initData,
            {
                type: 'ADDPLAYER',
                payload: "User 3"
            }
        )
    ).toEqual(expectData)
})


  /**
  * TC6: Users should be able to switch roles between player and manager. 
  * input & expected: load from testreducerData6
  */
   it('should handle SWITCHROLE', () => {
    var initData = testreducerData6[0];
    var expectData = testreducerData6[1];

    expect(
        reducer(initData,
            {
                type: 'SWITCHROLE',
            }
        )
    ).toEqual(expectData)
})


  /**
  * TC7: Entering a new score should progress the game. 
  * input & expected: load from testreducerData7
  */
   it('should handle ENTERSCORE', () => {
    var initData = testreducerData7[0];
    var expectData = testreducerData7[1];

    expect(
        reducer(initData,
            {
                type: 'ENTERSCORE',
                payload: 2
            }
        )
    ).toEqual(expectData)
})
})
