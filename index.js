const testVar = {}

function testFunc() {
  return "hi"
}

let superbowlWin = (array) => {
  let result = array.find( record => record.result === "W")
  if (!!result){
  return result.year
} else {
  return undefined
}
}
