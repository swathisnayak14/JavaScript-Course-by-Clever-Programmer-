// Test you code by forking this repl: 
// 👉 https://replit.com/@CleverLance/ConvertHoursToSeconds#solution.js

// https://www.loom.com/share/3de1aa5d007047ef82652530f04600b1

// Write a function that takes a parameter (hours) and converts
// it to seconds

//1 hr=60 mins
//1 min=60 seconds
//2 min=120 seconds
//3 minutes=180 seconds

//minute*60=seconds
//hours*60=minutes

function howManySeconds(hours) {
  // Your function should return an integer
  // of how many seconds are in the hour
  let minutes=hours*60
  let seconds=minutes*60
  return seconds
}

console.log(howManySeconds(2))
//Topics: Variables,functions, Math

