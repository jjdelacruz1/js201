// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

// function longLongVowels(sentence) {

//   var vowels = ['a', 'e', 'i', 'o', 'u']
//   var newSentence = []
//   var splitSentence = sentence.split('')
//     for (var i = 0; i < splitSentence.length; i++){
//       const currentChar = splitSentence[i]
//       const nextChar = splitSentence[i + i]

//       if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
//         newSentence.push(currentChar + currentChar + currentChar + currentChar)
//         console.log(newSentence)
//       } else {
//         newSentence.push(currentChar)
//         console.log(newSentence)
//       }
//     }
//  return newSentence.join('')
//  }

function longLongVowels(sentence) {

  var vowels = ['a', 'e', 'i', 'o', 'u']
  var newSentence = []
  var splitSentence = sentence.split('')
    for (var i = 0; i < splitSentence.length; i++){
      if (vowels.includes(splitSentence[i]) && splitSentence[i] === splitSentence[i + 1]) {
        newSentence.push(splitSentence[i] + splitSentence[i] + splitSentence[i] + splitSentence[i])
        console.log(newSentence)
      } else {
        newSentence.push(splitSentence[i])
        console.log(newSentence)
      }
    }
 return newSentence.join('')
 }
