import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '../../__utils__/test-utils';
import { queryByAttribute } from '@testing-library/react';
import { ID1Data } from '../../__testdata__/testFunctionalData/testAddPlayerData';
import App from '../../src/containers/App';


it('Add first player', () => 
{
    //Ignore warnings during rendering
    const originalError = console.error;
    console.error = jest.fn();

    
    const app = render(<App />, { initialState: ID1Data });

    //Player presses button to score
    const getById = queryByAttribute.bind(null, 'id');
    const addPlayerForm = getById(app.container, "add-player");

    const formInput = addPlayerForm.children[0];

    //Test the initial state with no players
    const listPlayerDiv = getById(app.container, "list-player").parentElement;

    let firstListDiv = listPlayerDiv.children[1];
    //Check initial state
    expect(firstListDiv.innerHTML).toBe("Do not have any players yet");

    const addPlayerButton = addPlayerForm.children[1];
    //Enter the value to the form and submit it
    fireEvent.change(formInput, { target: {value: "Player 1"} });
    fireEvent.submit(addPlayerButton);

    //Debugging
    console.log(listPlayerDiv.outerHTML);

    //Update the first list div data
    firstListDiv = listPlayerDiv.children[1]
    //Check that the player is now listed
    expect(firstListDiv.innerHTML).toBe("Player 1");


    //Return any error if there was one originally
    console.error = originalError;
})