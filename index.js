const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let filteredRec = record.find( rec => rec.result === 'W');
  return filteredRec ? filteredRec.year : undefined;
}
