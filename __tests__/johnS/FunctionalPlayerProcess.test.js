import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '../../__utils__/test-utils';
import { queryByAttribute } from '@testing-library/react';
import { test1Data } from '../../__testdata__/testFunctionalData/testPlayerProcessData';
import App from '../../src/containers/App';


it('1 - Player enters first score for first roll => ScoreBoard, RollController, and RollStatus all update', () => 
{
    //Ignore warnings during rendering
    const originalError = console.error;
    console.error = jest.fn();

    // const testData = 

    //Render the entire application
    const app = render(<App />, { initialState: test1Data.reducerState });

    //Player 1 presses button 5 to score
    const getById = queryByAttribute.bind(null, 'id');
    const buttonToClick = getById(app.container, test1Data.buttonIDToClick);
    
    fireEvent.click(buttonToClick);

//#region Test the ScoreBoard exists and is updated

    //Check that the whole scoreboard exists
    const scoreboard = getById(app.container, 'scoreboard');
    const isScoreboardDisplayed = (scoreboard) ? true : false;
    expect(isScoreboardDisplayed);

    //Check that the individual scoreitem exists that should be updated; ID is "r1" + *PlayerName*
    const scoreItem = getById(app.container, 'r1' + test1Data.reducerState.lanes[0].players[0].playerName);
    const isScoreItemDisplayed = (scoreItem) ? true : false;
    expect(isScoreItemDisplayed);
    //Check that the scoreitem displays the score just achieved
    expect(scoreItem.innerHTML).toBe(test1Data.expectedScore);

//#endregion

//#region Test RollController exists and is updated

    //Check that the whole RollController exists
    const rollController = getById(app.container, 'roll-controller');
    const isrollControllerDisplayed = (rollController) ? true : false;
    expect(isrollControllerDisplayed); 

    //Button list in the RollController's children
    const buttonsList = rollController.children[0].children;

    //Calculate the number of buttons that should be enabled (including button 0 (-))
    const enabledButtonsCount = 10 - Number(test1Data.expectedScore) + 1;
    //Check that the correct score buttons are disabled or enabled
    let i = 0;
    //Buttons 0 to 5 inclusive should be enabled and without the disabled attribute
    while (i < enabledButtonsCount)
    {
        expect(buttonsList[i].hasAttribute("disabled")).toBe(false);
        expect(buttonsList[i]).toBeEnabled();
        i++;
    }
    //Buttons 6 to 10 should be disabled, including with the attribute
    while(i < buttonsList.length)
    {
        expect(buttonsList[i].hasAttribute("disabled")).toBe(true);
        expect(buttonsList[i]).toBeDisabled();
        i++;
    }
//#endregion

//#region RollStatus component checking

    //Check that the RollStatus exists
    const rollStatus= getById(app.container, 'roll-status');
    const isrollStatusDisplayed = (rollStatus) ? true : false;
    expect(isrollStatusDisplayed); 

    //Check that the rollstatus displays the updated roll data
    expect(rollStatus.innerHTML).toContain("Current Roll: 2");

//#endregion


    //Return any error if there was one originally
    console.error = originalError;
})