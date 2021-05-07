// import React from 'react';
// import App from '../../src/containers/App';
// import { render,fireEvent, screen } from '../../__utils__/test-utils';
// import { testEnterScoreData1 } from '../../__testdata__/testIntergrationData/testEnterScoreData1';
// import { queryByAttribute } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';


// var expectData = testEnterScoreData1[1];

// it('Renders the connected app with initialState', () => {
//     // const app = render(<App />, { initialState: initData })
//     var initData = testEnterScoreData1[0];

//     const app = render(<App />, { initialState: initData });

//     const getById = queryByAttribute.bind(null, 'id');
//     const button8 = getById(app.container, 'pin8');
  
//     fireEvent.click(button8);
//     const cell = getById(app.container, 'r8User1');

//     expect(cell.innerHTML).toBe("8");
// })