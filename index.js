const testVar = {}

function superbowlWin(array) {
  var win = array.find(function(obj) {
    return obj.result === "W"
  })
  return win ? win.year : win
}
