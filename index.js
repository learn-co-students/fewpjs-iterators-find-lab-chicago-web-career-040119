// The find function behaves similar to others in JavaScript (like filter) that want a truthy/falsey result. find returns the first element for which the function returns true, a single element.

// Write a function called superbowlWin() in index.js that:

// Receives 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// Use find() to test each Object to see if the result is "W" — a win!
// superbowlWin() should return the year when the win occurred (if it occurred at all!). If no win is found, it should return, sadly, undefined
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"},
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "W"}
]
function superbowlWin(record) {
  let result = record.find( record => record.result === "W" )
  if (result === undefined) {
    return result
  } else {
    return result.year
  }
}

// superbowlWin = (record) => {
//   let result = record.find( record => record.result === "W" )
//   if (result === undefined) {
//     return result
//   } else {
//     return result.year
//   }
