
import isStrike from './isStrike'

const isBonusRoll = (currentFrame, pins) => {
    
    return (isStrike(pin) && (currentFrame === 9)) 
  }
  
  export default isBonusRoll