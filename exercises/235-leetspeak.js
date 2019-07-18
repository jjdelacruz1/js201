// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"

function leetspeak(str) {
  var newChar = {
    A:4,
    E:3,
    G:6,
    I:1,
    O:0,
    S:5,
    T:7
  }
  var keys = Object.keys(newChar)
  var newStr = str.toUpperCase()
  var final = ''
  for (var i = 0; i < newStr.length; i++) {
    let character = newStr.charAt(i)
    if (keys.includes(character)) {
      final += newChar[character]
    } else final += character
  }
  return final.toLowerCase()
}
