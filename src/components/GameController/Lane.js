import React from 'react';
import '../../containers/App.css';

const lane = (props) => {
    return (
        <div>
         <button className="lane" onClick={props.onClick}>{props.laneTitle}</button>      
        </div>
    );
}

export default lane;