import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '../../__utils__/test-utils';
import { queryByAttribute } from '@testing-library/react';
import RollController from '../../src/components/RollController/RollController';
import { currentState, expectedState } from '../../__testdata__/testIntergrationData/testRollControllerIntegration_changeTurn1'
import reducer from '../../src/store/reducer'
import { createStore } from 'redux'

it('10 - Last frame with only 2 rolls and 2 strikes', () => 
{
    //Create a store outside to track its data later
    let testStore = createStore(reducer, currentState);

    //Render the integration under test
    const app = render(<RollController />, { store: testStore });

    //Press a button as part of this test
    const getById = queryByAttribute.bind(null, 'id');
    const button2 = getById(app.container, 'pin2');
    fireEvent.click(button2);

    //Get the updated reducer data
    const reducerState = testStore.getState();

    expect(reducerState).toEqual(expectedState);
})