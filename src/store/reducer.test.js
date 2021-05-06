import reducer from './reducer';
import { testreducerData2 } from './testreducer2';

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
  * Check update lane
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

})
