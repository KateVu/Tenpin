import React from 'react';

const introduce = (props) => {
    return (
        <div className="rules">
            <h2>Rules</h2>
            <ul>
                <li>
                    The minimum number of required players is two and maximum is 4. Players will take turn to play
                </li>

                <li>
                    A game consists of 10 frames. A maximum of two deliveries is made in each frame except in the 10th frame, when three deliveries are made if the player has scored a strike or a spare in that frame.
                </li>

                <li>
                    A strike is scored when all the pins are knocked down by the first ball rolled in a frame. It is marked with an X.  Because a strike earns 10 pins plus a bonus of all the pins knocked down by the next two balls, no figure is entered until the next two balls are rolled. A strike in the 10th frame earns two extra rolls.
                </li>
                
                <li>
                A spare is scored when all pins are knocked down with two deliveries. It is marked with a /.  Because a spare earns 10 pins plus a bonus of all the pins knocked down by the next single ball, no score is entered until the first ball of the next frame is rolled.  A spare in the 10th frame earns one extra roll.
                </li>
                
                <li>
                An open frame occurs when there are pins left standing after two balls. There is no penalty for an open frame, other than that of failing to gain the bonuses for a strike or a spare. When an open frame is made simply add those pins knocked down to the total in the previous frame.
                </li>
                
                <li>
                    Each player&quot;s final score is the sum of all knocked down pins plus bonus points for spares and strikes.
                </li>
            </ul>        
        </div>
    );
}

export default introduce;