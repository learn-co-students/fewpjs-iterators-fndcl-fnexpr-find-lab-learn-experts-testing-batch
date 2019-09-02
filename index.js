const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let match = array.find(game => game.result === "W")
  return match ? match.year : undefined
}
