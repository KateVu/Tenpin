  
import React, {Component} from 'react'

import './Scorecard.css'

class Scoreitem extends Component {
  renderScores = (frame, roll) => {
    const {frames} = this.props
    if (frames[frame] != null) {
      if (frames[frame][roll] != null) {
        return frames[frame][roll]
      }
    }


    return '';
  }

  render () {
    const {cumulativeScores, playerName} = this.props
    let scores = [...cumulativeScores];
    let totalScore = '';
    if (scores != null) {
      let bonus = scores.filter(x => x==-1).length;
      totalScore = scores.reduce((a, b) => a + b, 0) + bonus;
    }

    return ([
        <tr>
        <td id='player'colSpan='6'>{playerName}</td>
        <td id='r1' colSpan='3'>{this.renderScores(0,0)}</td><td id='r2' colSpan='3'>{this.renderScores(0,1)}</td>
        <td id='r3' colSpan='3'>{this.renderScores(1,0)}</td><td id='r4' colSpan='3'>{this.renderScores(1,1)}</td>
        <td id='r5' colSpan='3'>{this.renderScores(2,0)}</td><td id='r6' colSpan='3'>{this.renderScores(2,1)}</td>
        <td id='r7' colSpan='3'>{this.renderScores(3,0)}</td><td id='r8' colSpan='3'>{this.renderScores(3,1)}</td>
        <td id='r9' colSpan='3'>{this.renderScores(4,0)}</td><td id='r10' colSpan='3'>{this.renderScores(4,1)}</td>
        <td id='r11' colSpan='3'>{this.renderScores(5,0)}</td><td id='r12' colSpan='3'>{this.renderScores(5,1)}</td>
        <td id='r13' colSpan='3'>{this.renderScores(6,0)}</td><td id='r14' colSpan='3'>{this.renderScores(6,1)}</td>
        <td id='r15' colSpan='3'>{this.renderScores(7,0)}</td><td id='r16' colSpan='3'>{this.renderScores(7,1)}</td>
        <td id='r17' colSpan='3'>{this.renderScores(8,0)}</td><td id='r18' colSpan='3'>{this.renderScores(8,1)}</td>
        <td id='r19' colSpan='2'>{this.renderScores(9,0)}</td><td id='r20' colSpan='2'>{this.renderScores(9,1)}</td><td id='r21' colSpan='2'>{this.renderScores(9,2)}</td>
        <td id='total-score' className='Total' colSpan='6'>{totalScore}</td>
      </tr>,
        <tr>
        <td colSpan='6'></td>
        <td id='cumulative-score-f1' colSpan='6'>{cumulativeScores[0] === -1? "X" : cumulativeScores[0]}</td>
        <td id='cumulative-score-f2' colSpan='6'>{cumulativeScores[1] === -1? "X" : cumulativeScores[1]}</td>
        <td id='cumulative-score-f3' colSpan='6'>{cumulativeScores[2] === -1? "X" : cumulativeScores[2]}</td>
        <td id='cumulative-score-f4' colSpan='6'>{cumulativeScores[3] === -1? "X" : cumulativeScores[3]}</td>
        <td id='cumulative-score-f5' colSpan='6'>{cumulativeScores[4] === -1? "X" : cumulativeScores[4]}</td>
        <td id='cumulative-score-f6' colSpan='6'>{cumulativeScores[5] === -1? "X" : cumulativeScores[5]}</td>
        <td id='cumulative-score-f7' colSpan='6'>{cumulativeScores[6] === -1? "X" : cumulativeScores[6]}</td>
        <td id='cumulative-score-f8' colSpan='6'>{cumulativeScores[7] === -1? "X" : cumulativeScores[7]}</td>
        <td id='cumulative-score-f9' colSpan='6'>{cumulativeScores[8] === -1? "X" : cumulativeScores[8]}</td>
        <td id='cumulative-score-f10' colSpan='6'>{cumulativeScores[9] === -1? "X" : cumulativeScores[9]}</td>
        <td id='total-score' colSpan='6'></td>
      </tr>,
      <tr className="drawline">
      </tr>,

    ]
    )
  }
}


export default Scoreitem;
