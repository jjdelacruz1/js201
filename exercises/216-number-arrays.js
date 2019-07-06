// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

function max(arr) {
  let max = 0

  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers(arr) {
  let sum = 0

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
function positives(arr) {
  let posOnly = []

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posOnly.push(arr[i])
    }
  }
  return posOnly;
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js

function evens(arr) {
  let newEven = [ ]
  for (var i = 0; i < arr.length; i++) {
  if(arr[i] % 2 == 0) {
    newEven.push(arr[i])
  }
  }
  return newEven
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

function odds(arr) {
  let newOdd = [ ]
  for (var i = 0; i < arr.length; i++) {
  if(arr[i] % 2 !== 0) {
    newOdd.push(arr[i])
  }
  }
  return newOdd
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

function integers(arr){
  let intOnly = []
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 1 == 0) {
    intOnly.push(arr[i])
    }
    }
    return intOnly
  }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance(arr){
  let newSquares = []
  for (var i = 0; i < arr.length; i++){
    newSquares.push(arr[i]*arr[i])
    }
    return newSquares
  }

  //exercises solved!