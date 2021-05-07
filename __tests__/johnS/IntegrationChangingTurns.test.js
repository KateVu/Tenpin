import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '../../__utils__/test-utils';
import { queryByAttribute } from '@testing-library/react';
import RollController from '../../src/components/RollController/RollController';
import reducer from '../../src/store/reducer'
import { createStore } from 'redux'

function executeSingleTest(testFileNumber, buttonIDToClick)
{
    const fileName = "../../__testdata__/testIntergrationData/testRollControllerIntegration_changeTurn" + String(testFileNumber);
    const testData = require(fileName).default;
    const currentState = testData[0];
    const expectedState = testData[1];

    //Create a store outside to track its data later
    let testStore = createStore(reducer, currentState);

    //Render the integration under test
    const app = render(<RollController />, { store: testStore });

    //Press a button as part of this test
    const getById = queryByAttribute.bind(null, 'id');
    const buttonToClick = getById(app.container, buttonIDToClick);
    fireEvent.click(buttonToClick);

    //Get the updated reducer data
    const reducerState = testStore.getState();

    expect(reducerState).toEqual(expectedState);
}

it('10 - Last frame with only 2 rolls and 2 strikes => Next player', () => 
{
    executeSingleTest(1, "pin2");
})

it('11 - Player scores a strike in the non-final frame => Next player', () => 
{
    executeSingleTest(2, "pin10");
})

it('12 - Players scores a normal score in a non-final frame => Next roll', () => 
{
    executeSingleTest(3, "pin3");
})

it('13 - Non-final player in non-final frame on last roll => Next player', () => 
{
    executeSingleTest(4, "pin6");
})

it('14 - Non-final player in last frame on last roll => Next player', () => 
{
    executeSingleTest(5, "pin3");
})

it('15 - Non-final player in last frame on last roll => Next roll', () => 
{
    executeSingleTest(6, "pin7");
})