  
//A strike is scored when all the pins are knocked down by the first ball rolled in a frame.
const isStrike = (currentRoll, pins) => {
  const strike = 10;
  const roll = 1;
  return ((pins === strike) && (currentRoll ===roll))
}

export default isStrike