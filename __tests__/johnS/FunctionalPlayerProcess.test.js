import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, screen } from '../../__utils__/test-utils';
import { queryByAttribute } from '@testing-library/react';
import { test1Data, test2Data, test3Data, test4Data } from '../../__testdata__/testFunctionalData/testPlayerProcessData';
import App from '../../src/containers/App';


it('1 - Player enters first score for first roll => ScoreBoard, RollController, and RollStatus all update', () => 
{
    //Ignore warnings during rendering
    const originalError = console.error;
    console.error = jest.fn();


    const app = render(<App />, { initialState: test1Data.reducerState });

    //Player presses button to score
    const getById = queryByAttribute.bind(null, 'id');
    const buttonToClick = getById(app.container, test1Data.buttonIDToClick);
    fireEvent.click(buttonToClick);

    //Check that the whole scoreboard exists
    const currentPlayerName = getCurrentPlayerName(test1Data);
    testScoreBoard(getById, app, "r1", currentPlayerName, test1Data.expectedScore);

    //Check that the whole RollController exists and was updated
    testRollControllerUpdated(getById, app, test1Data);

    //Check that the RollStatus exists
    testRollStatusUpdated(getById, app);

    //Return any error if there was one originally
    console.error = originalError;
})


it('2 - Player plays in 5th frame => ScoreBoard, RollController, and RollStatus all update', () => 
{
    //Ignore warnings during rendering
    const originalError = console.error;
    console.error = jest.fn();

    
    const app = render(<App />, { initialState: test2Data.reducerState });

    //Player presses button to score
    const getById = queryByAttribute.bind(null, 'id');
    const buttonToClick = getById(app.container, test2Data.buttonIDToClick);
    fireEvent.click(buttonToClick);

    //Check that the whole scoreboard exists
    const currentPlayerName = getCurrentPlayerName(test2Data);
    testScoreBoard(getById, app, "r9", currentPlayerName, test2Data.expectedScore);

    //Check that the whole RollController exists and was updated
    testRollControllerUpdated(getById, app, test2Data);

    //Check that the RollStatus exists
    testRollStatusUpdated(getById, app);

    //Check that the totoal score is displaying correctly
    testTotalScore(getById, app, currentPlayerName, "37");


    //Return any error if there was one originally
    console.error = originalError;
})


it('3 - Player plays last frame => ScoreBoard updates, RollController and RollStatus disappear, endscreen shows', () => 
{
    //Ignore warnings during rendering
    const originalError = console.error;
    console.error = jest.fn();


    //Render the entire application
    const app = render(<App />, { initialState: test3Data.reducerState });

    //Player presses button to score
    const getById = queryByAttribute.bind(null, 'id');
    const buttonToClick = getById(app.container, test3Data.buttonIDToClick);
    
    fireEvent.click(buttonToClick);

    //Test the ScoreBoard exists and is updated
    const currentPlayerName = getCurrentPlayerName(test3Data);
    testScoreBoard(getById, app, "r20", currentPlayerName, test3Data.expectedScore)

//#region Test that some components have been removed

    //Check that the whole RollController is gone
    const rollController = getById(app.container, 'roll-controller');
    const isrollControllerDisplayed = (rollController) ? true : false;
    expect(isrollControllerDisplayed).toBe(false); 

    //Check that the RollStatus is gone
    const rollStatus = getById(app.container, 'roll-status');
    const isrollStatusDisplayed = (rollStatus) ? true : false;
    expect(isrollStatusDisplayed).toBe(false); 

//#endregion

    //Test the total score exists and is correctly updated
    testTotalScore(getById, app, currentPlayerName, "27");

    //Test that the correct endgame message is displayed
    expect(screen.getByText("The game has ended, the winner is User 2")).toBeInTheDocument();


    //Return any error if there was one originally
    console.error = originalError;
})


it('4 - Player can change a lane => Game updates, different roll status, different total score, different current lane text', () => 
{
    //Ignore warnings during rendering
    const originalError = console.error;
    console.error = jest.fn();


    //Render the entire application
    const app = render(<App />, { initialState: test4Data.reducerState });

    //Get the total score for player 1
    const getById = queryByAttribute.bind(null, 'id');
    const totalScore = getById(app.container, 'total-score'+getCurrentPlayerName(test4Data));
    const lane3Player1TotalScore = totalScore.innerHTML;

    //Get the initial roll status information
    const rollStatus = getById(app.container, 'roll-status');
    const lane3RollStatus = rollStatus.innerHTML;


    //Click the Lane 1 button to switch lanes
    const buttonToClick = app.container.getElementsByClassName("lane")[0];
    fireEvent.click(buttonToClick);

    //Check that the roll status and player1's total score has changed
    expect(totalScore.innerHTML).not.toBe(lane3Player1TotalScore);
    expect(rollStatus.innerHTML).not.toBe(lane3RollStatus);

    //Test that the correct lane message is displayed
    expect(screen.getByText("Lane: Lane 1")).toBeInTheDocument();


    //Return any error if there was one originally
    console.error = originalError;
})


//#region Support functions to keep test code cleaner

//Returns the string name of the current player
function getCurrentPlayerName(lTestData)
{
    const currentPlayerIndex = lTestData.reducerState.lanes[lTestData.reducerState.currentLane].currentPlayer;
    const currentPlayerName = lTestData.reducerState.lanes[lTestData.reducerState.currentLane].players[currentPlayerIndex].playerName;
    return currentPlayerName;
}

function testScoreBoard(getById, app, scoreitemRowIDPrefix, currentPlayerName, expectedScore)
{
    const scoreboard = getById(app.container, 'scoreboard');
    const isScoreboardDisplayed = (scoreboard) ? true : false;
    expect(isScoreboardDisplayed);

    //Check that the individual scoreitem exists that should be updated; eg, ID is "r1" + *PlayerName*
    const scoreItem = getById(app.container, scoreitemRowIDPrefix + currentPlayerName);
    const isScoreItemDisplayed = (scoreItem) ? true : false;
    expect(isScoreItemDisplayed);
    //Check that the scoreitem displays the score just achieved
    expect(scoreItem.innerHTML).toBe(expectedScore);
}

function testRollControllerUpdated(getById, app, lTestData)
{
    const rollController = getById(app.container, 'roll-controller');
    const isrollControllerDisplayed = (rollController) ? true : false;
    expect(isrollControllerDisplayed);

    //Button list in the RollController's children
    const buttonsList = rollController.children[0].children;

    //Calculate the number of buttons that should be enabled (including button 0 (-))
    const enabledButtonsCount = 10 - Number(lTestData.expectedScore) + 1;
    //Check that the correct score buttons are disabled or enabled
    let i = 0;
    //Buttons 0 to enabledButtonsCount inclusive should be enabled and without the disabled attribute
    while (i < enabledButtonsCount)
    {
        expect(buttonsList[i].hasAttribute("disabled")).toBe(false);
        expect(buttonsList[i]).toBeEnabled();
        i++;
    }
    //Buttons (enabledButtonsCount + 1) to 10 should be disabled and include with the disabled attribute
    while (i < buttonsList.length)
    {
        expect(buttonsList[i].hasAttribute("disabled")).toBe(true);
        expect(buttonsList[i]).toBeDisabled();
        i++;
    }
}

function testRollStatusUpdated(getById, app)
{
    const rollStatus = getById(app.container, 'roll-status');
    const isrollStatusDisplayed = (rollStatus) ? true : false;
    expect(isrollStatusDisplayed);

    //Check that the rollstatus displays the updated roll data
    expect(rollStatus.innerHTML).toContain("Current Roll: 2");
}

function testTotalScore(getById, app, playerName, expectedTotalScore)
{
    const totalScore = getById(app.container, 'total-score' + playerName);
    const istotalScoreDisplayed = (totalScore) ? true : false;
    expect(istotalScoreDisplayed);
    expect(totalScore.innerHTML).toBe(expectedTotalScore);
}

//#endregion