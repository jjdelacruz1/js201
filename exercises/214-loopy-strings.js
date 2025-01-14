// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
function reverse(str) {
  var splitString = str.split("")
  var reverseArray = splitString.reverse()
  var joinArray = reverseArray.join("")
  return joinArray
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord(str) {
  var strSplit = str.split(' ');
   var longestWord = '';
   for(var i = 0; i < strSplit.length; i++){
     if(strSplit[i].length > longestWord.length){
     longestWord = strSplit[i];
      }
   }
   return longestWord;
 }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

// Now the string is an Array. Compare each word against the badWords Array. 
// Remove the bad words. if not a bad word push to a new Array. then array to string
// then return the new string.

function nicer(sentence) {
  badWords = ['heck', 'darn', 'dang', 'crappy']
  words = sentence.split(' ')
  newArr = []
  for(i = 0; i < words.length; i++){
    if(badWords.includes(words[i]) != true){
      newArr.push(words[i])
    }
  }
  let filteredString = newArr.toString()
  let completeString = filteredString.replace(/,/g,' ')
  return completeString
}

// function nicer(str) {
//   // ANOTHER WAY TO COMPLETE THIS USING REGULAR EXPRESSIONS!!!
//   var newString = str.replace(/heck|darn|dang|crappy/gi, "")
//   var newCleanString = newString.replace(/\s\s/g, " ")
//   return newString

// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll(str){
  str = str.split(" ")
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1)
  }
  return str.join(" ")
}

//look up .map takes an iterator and a function

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
function split(string, delimiter) {
  let splitString = [ ];

  for (var i = 0; i < string.length; i++) {
      if (string[i] == delimiter) {
        // console.log(string.indexOf(i))
      } else {
          splitString.push(string[i])
      }
  }
  return splitString
}

function split(string, delimiter) {
var results = []
var delimiterLength = delimiter.length

  for(var index = 0; index < string.length; index++) {
    let characters = string.substr(index, delimiterLength)
    // let chunkStart = 
    // let chunkEnd
    // console.log(characters, index)
    if (characters === delimiter) {
      console.log(string.substr(0, index))
    }
  }
}

//look at string.indexOf(delimiter) MDN javascript string indexOf to find arguments