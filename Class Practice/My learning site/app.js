// // Iterating over numbers divisible by 3 from 3 to 30
// for (let i = 3; i <= 30; i += 3) {
//   console.log(i); // Prints the number
// }
 
// // Iterating over numbers divisible by 3 from 3 to 30
// let i = 3;
// while (i <= 30) {
//   console.log(i); // Prints the number
//   i += 3; // Increments the value by 3
// }
 
// // Iterating over numbers divisible by 6 from 6 to 60
// for (let i = 6; i <= 60; i += 6) {
//   console.log(i); // Prints the number
// }
 
// // Iterating over numbers divisible by 6 from 6 to 60
// let j = 6;
// while (j <= 60) {
//   console.log(j); // Prints the number
//   j += 6; // Increments the value by 6
// }
 
// // Iterating over numbers divisible by 11 from 11 to 110
// for (let i = 11; i <= 110; i += 11) {
//   console.log(i); // Prints the number
// }
 
// // Iterating over numbers divisible by 11 from 11 to 110
// let k = 11;
//  while (k <= 110) {
//   console.log(k); // Prints the number
//   k += 11; // Increments the value by 11
// }
 
// // Iterating over numbers divisible by 14 from 14 to 140
// for (let i = 14; i <= 140; i += 14) {
//   console.log(i); // Prints the number
// }
 
// // Iterating over numbers divisible by 14 from 14 to 140
// let l = 14;
//  while (l <= 140) {
//   console.log(l); // Prints the number
//   l += 14; // Increments the value by 14
// }
 
// // Iterating over numbers divisible by 17 from 17 to 170
// for (let i = 17; i <= 170; i += 17) {
//   console.log(i); // Prints the number
// }
 
// // Iterating over numbers divisible by 17 from 17 to 170
// let m = 17;
//  while (m <= 170) {
//   console.log(m); // Prints the number
//   m += 17; // Increments the value by 17
// }
 
// // Iterating over numbers divisible by 20 from 20 to 200
//  for (let i = 20; i <= 200; i += 20) {
//   console.log(i); // Prints the number
// }
 
// // Iterating over numbers divisible by 20 from 20 to 200
//  let n = 20;
//  while (n <= 200) {
//   console.log(n); // Prints the number
//   n += 20; // Increments the value by 20
// }


// ----Mid Qus-----
// // 2. Write a function that returns the number of words in a String.
// function wordCount(str) {
//   let words = str.split(' ');
//   return words.length;
// }
// let word = prompt('Write a proper string');
// console.log(wordCount(word));

// // 1. Write a function that takes a String input and returns the String excluding the characters “a”, “c”, “z”.
// let word = prompt('Write Strings');

// function removeCharacters(str) {
//   let characters = ['a', 'c', 'z'];
//   for (let i = 0; i < characters.length; i++) {
//     // Use a regular expression with 'i' flag for case-insensitivity
//     let regex = new RegExp(characters[i], 'gi');
//     str = str.replace(regex, '');
//   }
//   return str;
// }

// console.log(removeCharacters(word));

// // 3. Write a function that returns the number of vowels in a string.
// let string = prompt('Write Strings');

// function vowelCount(str) {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(vowelCount(string));

// // 4. Write a function that returns the Required Run Rate of a Team given currentRun and requiredRun, remainingOver. * 50 overs match

// let currentRun = prompt('Enter Current Run of the Team');
// let requiredRun = prompt('Enter Required Run of the Team');
// let remainingOver = prompt('Enter Remaining over');

// function reqRunRate(currentRun, requiredRun, remainingOver) {
//   // Convert input strings to numbers
//   currentRun = parseInt(currentRun);
//   requiredRun = parseInt(requiredRun);
//   remainingOver = parseInt(remainingOver);

//   // Calculate Required Run Rate
//   let requiredRunRate = (requiredRun - currentRun) / remainingOver;

//   return requiredRunRate.toFixed(2); // Round to two decimal places
// }

// // Call the function and display the result
// let result = reqRunRate(currentRun, requiredRun, remainingOver);
// console.log(`Required Run Rate: ${result}`);