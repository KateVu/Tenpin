/**
 * Test suit for functional test Change Role process
 * @author: KateVu
 */

 import React from 'react';
 import App from '../../src/containers/App';
 import { render, fireEvent } from '../../__utils__/test-utils';
 import {isScoreboardDisplay, isRollControllerDisplay, isResetButtonDisplay, isRestartButtonDisplay, isRollStatusDisplay } from '../../__utils__/check-display';
 import '@testing-library/jest-dom/extend-expect';
 
 import { testChangeRoleData } from '../../__testdata__/testfunctionalData/testChangeRoleData'; 
 /**
 * TC1: Change roles from the manager to normal user
 * @param: testChangeRoleData.js
 * Expect: Before click components displayed: scoreboad, rollstatus, reset and restart button, Component does not display before click: RollControler
 * Expect: After click components displayed: scoreboad, rollstatus, RollController, Component does not display before click: reset and restart button    
 */
it('TC1: Re Renders the connected app after enter to change from manager role to normal player role', () => {
    console.error = jest.fn();
    const testData = testChangeRoleData;
    const initData = testData[0];

    const app = render(<App />, { initialState: initData });

    //check the UI before click switch role: diplay UI for Manager: scoreboad, rollstatus, reset and restart button

    var beforChangeRoleExpDisplay = isScoreboardDisplay(app) && isRollStatusDisplay(app) && isResetButtonDisplay(app) && isRestartButtonDisplay(app);
    var beforChangeRoleExpNotDisplay = !isRollControllerDisplay(app);

    var resultBeforeChangeRole = beforChangeRoleExpDisplay && beforChangeRoleExpNotDisplay;
    expect(resultBeforeChangeRole).toBe(true);

    fireEvent.click(app.getByText('Switch Role'))
    
    var afterChangeRoleExpDisplay = isRollControllerDisplay(app) && isScoreboardDisplay(app) && isRollStatusDisplay(app);
    var afterChangeRoleExpNotDisplay =  !isResetButtonDisplay(app) || !isRestartButtonDisplay(app);

    var resulttAfterChangeRole = afterChangeRoleExpDisplay && afterChangeRoleExpNotDisplay;
    expect(resulttAfterChangeRole).toBe(true);


})

 /**
 * TC2: Change roles from normal user to manager
 * @param: testChangeRoleData.js
 * Expect: Before click components displayed: scoreboad, rollstatus, RollController, Component does not display before click: reset and restart button  
 * Expect: After click components displayed: scoreboad, rollstatus, reset and restart button, Component does not display before click: RollControler  
 */

it('TC2: Re Renders the connected app after enter to change from mananormal playerger role to manager role', () => {
    console.error = jest.fn();
    const testData = testChangeRoleData;
    const initData = testData[1];
    const app = render(<App />, { initialState: initData });

    //check the UI before click switch role
    var beforChangeRoleExpDisplay = isRollControllerDisplay(app) && isScoreboardDisplay(app) && isRollStatusDisplay(app);
    var beforChangeRoleExpNotDisplay = !isResetButtonDisplay(app) || !isRestartButtonDisplay(app);

    var resultBeforeChangeRole = beforChangeRoleExpDisplay && beforChangeRoleExpNotDisplay;
    expect(resultBeforeChangeRole).toBe(true);

    fireEvent.click(app.getByText('Switch Role'))
    //check the UI after click switch role
    var afterChangeRoleExpDisplay = isScoreboardDisplay(app) && isRollStatusDisplay(app) && isResetButtonDisplay(app) && isRestartButtonDisplay(app);
    var afterChangeRoleExpNotDisplay =  !isRollControllerDisplay(app);

    var resulttAfterChangeRole = afterChangeRoleExpDisplay && afterChangeRoleExpNotDisplay;
    expect(resulttAfterChangeRole).toBe(true);
})


