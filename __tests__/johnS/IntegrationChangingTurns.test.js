import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '../../__utils__/test-utils';
import { queryByAttribute } from '@testing-library/react';
import RollController from '../../src/components/RollController/RollController';
import reducer from '../../src/store/reducer'
import { createStore } from 'redux'

it('10 - Last frame with only 2 rolls and 2 strikes => Next player', () => 
{
    const testData = require('../../__testdata__/testIntergrationData/testRollControllerIntegration_changeTurn1').default;
    const currentState = testData[0];
    const expectedState = testData[1];

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

it('11 - Player scores a strike in the non-final frame => Next player', () => 
{
    const testData = require('../../__testdata__/testIntergrationData/testRollControllerIntegration_changeTurn2').default;
    const currentState = testData[0];
    const expectedState = testData[1];

    //Create a store outside to track its data later
    let testStore = createStore(reducer, currentState);

    //Render the integration under test
    const app = render(<RollController />, { store: testStore });

    //Press a button as part of this test
    const getById = queryByAttribute.bind(null, 'id');
    const button10 = getById(app.container, 'pin10');
    fireEvent.click(button10);

    //Get the updated reducer data
    const reducerState = testStore.getState();

    expect(reducerState).toEqual(expectedState);
})

it('12 - Players scores a normal score in a non-final frame => Next roll', () => 
{
    const testData = require('../../__testdata__/testIntergrationData/testRollControllerIntegration_changeTurn3').default;
    const currentState = testData[0];
    const expectedState = testData[1];

    //Create a store outside to track its data later
    let testStore = createStore(reducer, currentState);

    //Render the integration under test
    const app = render(<RollController />, { store: testStore });

    //Press a button as part of this test
    const getById = queryByAttribute.bind(null, 'id');
    const button3 = getById(app.container, 'pin3');
    fireEvent.click(button3);

    //Get the updated reducer data
    const reducerState = testStore.getState();

    expect(reducerState).toEqual(expectedState);
})

it('13 - Non-final player in non-final frame on last roll => Next player', () => 
{
    const testData = require('../../__testdata__/testIntergrationData/testRollControllerIntegration_changeTurn4').default;
    const currentState = testData[0];
    const expectedState = testData[1];

    //Create a store outside to track its data later
    let testStore = createStore(reducer, currentState);

    //Render the integration under test
    const app = render(<RollController />, { store: testStore });

    //Press a button as part of this test
    const getById = queryByAttribute.bind(null, 'id');
    const button6 = getById(app.container, 'pin6');
    fireEvent.click(button6);

    //Get the updated reducer data
    const reducerState = testStore.getState();

    expect(reducerState).toEqual(expectedState);
})

it('14 - Non-final player in last frame on last roll => Next player', () => 
{
    const testData = require('../../__testdata__/testIntergrationData/testRollControllerIntegration_changeTurn5').default;
    const currentState = testData[0];
    const expectedState = testData[1];

    //Create a store outside to track its data later
    let testStore = createStore(reducer, currentState);

    //Render the integration under test
    const app = render(<RollController />, { store: testStore });

    //Press a button as part of this test
    const getById = queryByAttribute.bind(null, 'id');
    const button3 = getById(app.container, 'pin3');
    fireEvent.click(button3);

    //Get the updated reducer data
    const reducerState = testStore.getState();

    expect(reducerState).toEqual(expectedState);
})

it('15 - Non-final player in last frame on last roll => Next roll', () => 
{
    const testData = require('../../__testdata__/testIntergrationData/testRollControllerIntegration_changeTurn6').default;
    const currentState = testData[0];
    const expectedState = testData[1];

    //Create a store outside to track its data later
    let testStore = createStore(reducer, currentState);

    //Render the integration under test
    const app = render(<RollController />, { store: testStore });

    //Press a button as part of this test
    const getById = queryByAttribute.bind(null, 'id');
    const button7 = getById(app.container, 'pin7');
    fireEvent.click(button7);

    //Get the updated reducer data
    const reducerState = testStore.getState();

    expect(reducerState).toEqual(expectedState);
})