// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"

describe("messageCoder", () => {
    test ("returns a coded message", () => {
        expect (messageCoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect (messageCoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect (messageCoder(secretCodeWord3)).toEqual("3cc3ntr1c")
        
    })
})
// Good Failure!!!
// FAIL  ./code-challenges.test.js
// messageCoder
//   ✕ returns a coded message (2 ms)

// ● messageCoder › returns a coded message

//   ReferenceError: messageCoder is not defined

//     24 | describe("messageCoder", () => {
//     25 |     test ("returns a coded message", () => {
//   > 26 |         expect (messageCoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//        |         ^
//     27 |         expect (messageCoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     28 |         expect (messageCoder(secretCodeWord3)).toEqual("3cc3ntr1c")
//     29 |         

//     at Object.expect (code-challenges.test.js:26:9)

// Test Suites: 1 failed, 1 total



// b) Create the function that makes the test pass.
// Pseudo code:
// Create a function named messageCoder that takes in a string
// Use a combination of built-in methods .map, .split, .join, and a conditional statement for iteration and conversions
// Return a coded message

const messageCoder = (string) => {
    arrayMorph = string.split("")
    const vowelConvert = arrayMorph.map(value => {
        if (value === 'a' || value === 'A') {
            return '4';
        } if (value === 'e' || value === 'E') {
            return '3'
        } if (value === 'i' || value === 'I') {
            return '1'
        } if (value === 'o' || value === 'O') {
            return '0'
        } else
            return value
      });
    return vowelConvert.join('')
}
// // Test passed!!!
// // PASS  ./code-challenges.test.js
// // messageCoder
// //   ✓ returns a coded message (3 ms)

// // Test Suites: 1 passed, 1 total
// // Tests:       1 passed, 1 total
// // Snapshots:   0 total
// // Time:        0.57 s, estimated 1 s
// // Ran all test suites.
// // ✨  Done in 1.82s.




// // --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// const letterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

// // a) Create a test with expects statement using the variable provided.
describe("fruitByLetter", () => {
    test ("returns an array of all the words containing that particular letter", () => {
        expect (fruitByLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect (fruitByLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
        
        
//     })
// })
// // Good Failure!!!
// // FAIL  ./code-challenges.test.js
// // fruitByLetter
// //   ✕ returns an array of all the words containing that particular letter (1 ms)

// // ● fruitByLetter › returns an array of all the words containing that particular letter

// //   ReferenceError: fruitByLetter is not defined

// //     102 | describe("fruitByLetter", () => {
// //     103 |     test ("returns an array of all the words containing that particular letter", () => {
// //   > 104 |         expect (fruitByLetter(letterA)).toEqual(["Mango", "Apricot", "Peach"])
// //         |         ^
// //     105 |         expect (fruitByLetter(letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
// //     106 |         
// //     107 |         

// //     at Object.expect (code-challenges.test.js:104:9)


// // b) Create the function that makes the test pass.
// // Pseudo code:
// // Create a function named fruitByLetter that takes in an array and a string
// // Use a combination of built-in methods .filter, .includes, and .toLowerCase in a high-order function for iteration and element selection based on letter
// // Return edited, shorter array
const fruitByLetter = (array, str) => {
    return array.filter((array) => array.toLowerCase().includes(str))
  }
//   Test Passed!!!
//   PASS  ./code-challenges.test.js
//   fruitByLetter
//     ✓ returns an array of all the words containing that particular letter (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.694 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.81s.


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// a) Create a test with expect statements using the variable provided.
describe("houseOfCards", () => {
    it("takes in an array of numbers and determines whether its a full house", () => {
        expect(houseOfCards(hand1)).toEqual(true)
        expect(houseOfCards(hand2)).toEqual(false)
        expect(houseOfCards(hand3)).toEqual(false)
        expect(houseOfCards(hand4)).toEqual(true)
    })
})
// Good Failure!!!
// FAIL  ./code-challenges.test.js
// houseOfCards
//   ✕ takes in an array of numbers and determines whether its a full house (1 ms)

// ● houseOfCards › takes in an array of numbers and determines whether its a full house

//   ReferenceError: houseOfCards is not defined

//     163 | describe("houseOfCards", () => {
//     164 |     it("takes in an array of numbers and determines whether its a full house", () => {
//   > 165 |         expect(houseOfCards(hand1)).toEqual(true)
//         |         ^
//     166 |         expect(houseOfCards(hand2)).toEqual(false)
//     167 |         expect(houseOfCards(hand3)).toEqual(false)
//     168 |         expect(houseOfCards(hand4)).toEqual(true)

//     at Object.expect (code-challenges.test.js:165:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.751 s, estimated 1 s


// b) Create the function that makes the test pass.
// Pseudo code:
// Create a function called houseOfCards that takes in an array of numbers
// Use a built-in method .sort in conjunction with a for loop to iterate through and compare numbers for matches
// Return boolean values (true/false) as results of the number comparisons in the iteration.
const houseOfCards = ( array ) => {
    let cardChecker = array.sort()
    for (let i = 0;i < cardChecker.length; i++){
        if(cardChecker[0] === cardChecker[1] && cardChecker[1] === cardChecker[2] && cardChecker[3] === cardChecker[4]){
            return true
        }else if(cardChecker[0] === cardChecker[1] && cardChecker[2] === cardChecker[3] && cardChecker[2] === cardChecker[4]){
            return true
        }else 
        return false
    }
}

// Test Passed!!!
// PASS  ./code-challenges.test.js
// houseOfCards
//   ✓ takes in an array of numbers and determines whether its a full house (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.638 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.74s.
