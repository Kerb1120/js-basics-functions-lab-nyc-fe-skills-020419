const FromHqInBlocks = 42
const feetPerBlock = 264
// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - FromHqInBlocks)
}

function distanceFromHqInFeet(block){
  return Math.abs(block - FromHqInBlocks) * feetPerBlock
}

function distanceTravelledInFeet(block1, block2){
  Math.abs((block1 * feetPerBlock) - (block2 * feetPerBlock))
}