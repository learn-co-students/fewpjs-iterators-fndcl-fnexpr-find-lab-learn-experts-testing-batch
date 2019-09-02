const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  const match = array.find(game => game.result === "W")
  return match ? match.year : undefined
}
