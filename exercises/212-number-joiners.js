// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

function numberJoinerWhile(a, b) {
  let result = ""
  while (a <= b) {
    if (a < b){
      result += a + "_"
      a++
  } else if(a == b) {
      result += a
      a++
  }
  }
  return result
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
function numberJoinerFor(a, b) {
  let result = ""
  for (; a <= b; a++) {
    if (a < b){
      result += a + "_"
  } else if (a == b){
    result += a
  }
  }
  return result
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
function numberJoinerFancy(a, b, c) {
  let result = ""
  while (a <= b) {
    if (c === undefined) {
      if (a < b) {
        result += a + "_"
        a++
      } else if (a == b) {
        result += a
        a++
      }
    } else {
      if (a < b) {
        result += a + c
        a++
      } else if (a == b) {
        result += a
        a++
      }
    }
  }
  return result
}