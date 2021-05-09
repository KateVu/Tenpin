import { queryByAttribute } from '@testing-library/react';

//unitily func
export function isScoreboardDisplay (dom) {
    const getById = queryByAttribute.bind(null, 'id');
    //get Scoreboard component
    const scoreboard = getById(dom.container, 'scoreboard');
    var isScoreboardDisplay = (scoreboard) ? true : false;
    return isScoreboardDisplay;
} 

export function isResetButtonDisplay (dom) {
    const getById = queryByAttribute.bind(null, 'id');
    const resetButton = getById(dom.container, 'reset-button');
    var isResetButtonDisplay = (resetButton) ? true : false
    return isResetButtonDisplay;
} 

export function isRestartButtonDisplay(dom) {
    const getById = queryByAttribute.bind(null, 'id');
    const restartButton = getById(dom.container, 'restart-button');
    const isRestartButtonDisplay = (restartButton) ? true : false
    return isRestartButtonDisplay;
} 
export function isRollStatusDisplay(dom) {
    const getById = queryByAttribute.bind(null, 'id');
    //get Scoreboard component
    const rollStatus = getById(dom.container, 'roll-status');
    const isRollStatusDisplay = (rollStatus)? true : false
    return isRollStatusDisplay;
} 

export function isRollControllerDisplay(dom) {
    const getById = queryByAttribute.bind(null, 'id');
    const rollController = getById(dom.container, 'roll-controller');
    var isRollControllerDisplay = (rollController) ? true : false
    return isRollControllerDisplay;
} 

export function isMessageDisplay (dom) {
    const getById = queryByAttribute.bind(null, 'id');
    const message = getById(dom.container, 'infor-notstartgame');
    const isMessageDisplay = (message)? true : false
    return isMessageDisplay;
}

export function isAddPlayerDisplay (dom) {
    const getById = queryByAttribute.bind(null, 'id');
    const addPlayer = getById(dom.container, 'add-player');
    var isAddPlayerDisplay = (addPlayer) ? true : false
    return isAddPlayerDisplay;
}

export function isListPlayerDisplay (dom) {
    const getById = queryByAttribute.bind(null, 'id');
    const listPlayer = getById(dom.container, 'list-player');
    var isListPlayerDisplay = (listPlayer) ? true : false
    return isListPlayerDisplay;
} 

export function isStartButtonDisplay (dom) {
    const getById = queryByAttribute.bind(null, 'id');
    const startButton = getById(dom.container, 'start-button');
    const isStartButtonDisplay = (startButton) ? true : false
    return isStartButtonDisplay;
}


