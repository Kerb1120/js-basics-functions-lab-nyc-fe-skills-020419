const FromHqInBlocks = 42
const feetPerBlock = 264
// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - FromHqInBlocks)
}
function distanceFromHqInFeet(block){
  return Math.abs(block - FromHqInBlocks) * feetPerBlock
}