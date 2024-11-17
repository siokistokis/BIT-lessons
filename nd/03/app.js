
//Agregacija. 

//Agregaciją daugeliu atveju galima atlikti JS reduce metodu, bet siekiant įgauti praktikos visus uždavinius reikėtų išspręsti dviem būdais:
//naudojantis for ar for…of ciklais;
//naudojantis forEach masyvo metodu;

//Pastaba: pavadinimas uždaviniuose- kintamojo tipas: skaičiai- number, stringai- string, loginiai- boolen.
//Pastaba: užduoties raidė atitinka masyvo, skirto tai užduočiai raidei.
//Pastaba: kodas turi būti užrašytas taip, kad pasikeitus masyvų turiniui rezultatas išliktų teisingas.

const A1 = document.querySelector(".A1")
const A2 = document.querySelector(".A2")
const A3 = document.querySelector(".A3")
const A4 = document.querySelector(".A4")
const A5 = document.querySelector(".A5")
const A6 = document.querySelector(".A6")
const A7 = document.querySelector(".A7")
const A8 = document.querySelector(".A8")
const A9 = document.querySelector(".A9")
const A10 = document.querySelector(".A10")

// Funkcija atsitiktiniams skaičiams generuoti
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}



//A. Masyvas su skaičiais.

const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];

// A1 Surasti didžiausią skaičių;


// Step 1: Filter out only positive numbers
let array1 = [];
for (let i = 0; i < A.length; i++) {
  if (A[i] > 0) {  // Only values greater than 0
    array1.push(A[i]);
  }
}

// Step 2: Find the largest number in array1 using Math.max()
let biggestNumber = Math.max(...array1);  // Spread the array into the Math.max function

// Step 3: Display the largest number in the console and on the webpage
console.log("The biggest number is:", biggestNumber);

// If you want to display it on the webpage, you can use this:
document.getElementById("A1").innerHTML = `The biggest number is: ${biggestNumber}`;


// A2 Surasti mažiausią skaičių;

// Step 1: Filter out only positive numbers
let array2 = [];
for (let i = 0; i < A.length; i++) {
  if (A[i] < 0) {  // Only values greater than 0
    array2.push(A[i]);
  }
}

// Step 2: Find the smolest number in array1 using Math.min()
let smolestNumber = Math.min(...array2);  // Spread the array into the Math.max function

// Step 3: Display the smolest number in the console and on the webpage
console.log("The smolest number is:", smolestNumber);

// If you want to display it on the webpage, you can use this:
document.getElementById("A2").innerHTML = `The smolest number is: ${smolestNumber}`;



// A3 Surasti didžiausią neigiamą skaičių;

//  let array3 = [];
//  for (let i = 0; i < A.length; i++) {
//     if (A[i] < 0) {
//       array3.push(A[i]);
//     } 
//   } 
//   let biggestestNegativeNumber = Math.max(...array3);
//   console.log("The biggest negative number is:", biggestestNegativeNumber);
//   document.getElementById("A3").innerHTML = `The biggest negative number is: ${biggestestNegativeNumber}`;

 // Step 1: Create array3 with only negative numbers
 let array3 = [];
 for (let i = 0; i < A.length; i++) {
   if (A[i] < 0) {
     array3.push(A[i]);
   }
 }

 // Step 2: Find the biggest negative number (least negative)
 let biggestestNegativeNumber = Math.max(...array3);  // Use Math.max to get the "least negative" number

 // Step 3: Display the biggest negative number in console and on the webpage
 console.log("The biggest negative number is:", biggestestNegativeNumber);

 // If you want to display it on the webpage, you can use:
 document.getElementById("A3").innerHTML = `The biggest negative number is: ${biggestestNegativeNumber}`;


//A4 Surasti didžiausią skaičių, kuris yra mažesnis už 50;


// Step 1: Filter the array to get only numbers less than 50
let numbersLessThan50 = A.filter(number => number < 50);

// Step 2: Find the maximum number from the filtered array
let biggestNumberLessThan50 = Math.max(...numbersLessThan50);

// Step 3: Display the result
console.log("The biggest number less than 50 is:", biggestNumberLessThan50);

// Optionally, display it on the webpage
document.getElementById("A4").innerHTML = `The biggest number less than 50 is: ${biggestNumberLessThan50}`;


// A5 Suskaičiuoti teigiamų skaičių sumą;


// Step 1: Filter out the positive numbers
let positiveNumbers = A.filter(number => number > 0);

// Step 2: Calculate the sum of the positive numbers using reduce()
let sumOfPositiveNumbers = positiveNumbers.reduce((sum, number) => sum + number, 0);

// Step 3: Display the result
console.log("The sum of the positive numbers is:", sumOfPositiveNumbers);

// Optionally, display the result on the webpage
document.getElementById("A5").innerHTML = `The sum of the positive numbers is: ${sumOfPositiveNumbers}`;


//A6 Suskaičiuoti neigiamų skaičių kvadratų (skaičių pakeltų kvadratu) sumą;


// Step 1: Filter the negative numbers from the array
let negativeNumbers = A.filter(number => number < 0);

// Step 2: Square each negative number
let squaredNegativeNumbers = negativeNumbers.map(number => number ** 2);

// Step 3: Sum the squared values
let sumOfSquaredNegatives = squaredNegativeNumbers.reduce((sum, number) => sum + number, 0);

// Step 4: Display the result
console.log("The sum of the squared negative numbers is:", sumOfSquaredNegatives);

// Optionally, display it on the webpage
document.getElementById("A6").innerHTML = `The sum of the squared negative numbers is: ${sumOfSquaredNegatives}`;

//A7 Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 25-75


// Step 1: Filter the numbers in the range [25, 75]
let numbersInRange = A.filter(number => number >= 25 && number <= 75);

// Step 2: Count how many numbers fall within this range (inclusive)
let countInRange = numbersInRange.length;

// Step 3: Display the result
console.log("The count of numbers in the range 25 to 75 inclusive is:", countInRange);

// Optionally, display it on the webpage
document.getElementById("A7").innerHTML = `The count of numbers in the range 25 to 75 inclusive is: ${countInRange}`;

//A8 Suskaičiuoti kiek skaičių yra 0-iai;

// Step 1: Filter the zeros (numbers that are equal to 0)
let zeros = A.filter(number => number === 0);

// Step 2: Count how many zeros there are
let countZeros = zeros.length;

// Step 3: Display the result
console.log("The count of zeros in the array is:", countZeros);

// Optionally, display the result on the webpage
document.getElementById("A8").innerHTML = `The count of zeros in the array is: ${countZeros}`;


// //A9 Suskaičiuoti kiek skaičių be liekanos dalinasi iš 3;


// Step 1: Filter numbers that are divisible by 3 (without a remainder)
let divisibleByThree = A.filter(number => number % 3 === 0);

// Step 2: Count how many numbers are divisible by 3
let countDivisibleByThree = divisibleByThree.length;

// Step 3: Display the result
console.log("The count of numbers divisible by 3 is:", countDivisibleByThree);

// Optionally, display the result on the webpage
document.getElementById("A9").innerHTML = `The count of numbers divisible by 3 is: ${countDivisibleByThree}`;

//A10 Suskaičiuoti neigiamų skaičių vidurkį;


// Step 1: Filter the negative numbers
let negativeNumberss = A.filter(number => number < 0);

// Step 2: Sum the negative numbers
let sumOfNegativeNumbers = negativeNumberss.reduce((sum, number) => sum + number, 0);

// Step 3: Calculate the average of the negative numbers
let averageOfNegativeNumbers = negativeNumbers.length > 0 ? sumOfNegativeNumbers / negativeNumbers.length : 0;

// Step 4: Display the result
console.log("The average of the negative numbers is:", averageOfNegativeNumbers);

// Optionally, display it on the webpage
document.getElementById("A10").innerHTML = `The average of the negative numbers is: ${averageOfNegativeNumbers}`;



//B. Masyvas su stringais.
const B1 = document.querySelector(".B1")
const B2 = document.querySelector(".B2")
const B3 = document.querySelector(".B3")
const B4 = document.querySelector(".B4")
const B5 = document.querySelector(".B5")
const B6 = document.querySelector(".B6")
const B7 = document.querySelector(".B7")
const B8 = document.querySelector(".B8")
const B9 = document.querySelector(".B9")
const B10 = document.querySelector(".B10")

const B = [
  'the quick brown fox',
  'jumps over the lazy dog',
  'a bird in the hand',
  'is worth two in the bush',
  'an apple a day',
  'keeps the doctor away',
  'actions speak louder than words',
  'all good things must come to an end',
  'beauty is in the eye of the beholder',
  'better late than never',
  'birds of a feather flock together',
  'cleanliness is next to godliness',
  'dont bite the hand that feeds you',
  'dont count your chickens before they hatch',
  'dont put all your eggs in 1 basket',
  'every cloud has a silver lining',
  'every dog has its day',
  'every rose has its thorn',
  'fortune favors the bold',
  'good things come to those who wait',
  'a watched pot never boils',
  'haste makes waste',
  'history repeats itself',
  'cat got your tongue',
  'home is where the heart is',
  'if the shoe fits, wear it',
  'ignorance is bliss',
  'it takes two to tango',
  'arabs have 100 words for sand',
  'kill two birds with one stone',
  'laughter is the best medicine',
  'love is blind',
  'money doesnt grow on trees',
  'no pain no gain',
  'nothing ventured nothing gained',
  'once bitten twice shy',
  'practice makes perfect',
  'the early bird catches the worm',
  'the grass is always greener on the other side',
  'the pen is mightier than 10 swords',
  'theres no smoke without fire',
  'time heals all wounds',
  '5 second rule',
  'every dog has its day',
  'to err is human to forgive divine',
  '2 wrongs dont make a right',
  'when in Rome do as the Romans do',
  'where theres smoke, theres fire',
  'you cant judge a book by its cover',
  'you cant make an omelette without breaking eggs',
  'you reap what you sow',
  'youre never too old to learn'
];

//B1. Surasti ilgiausią stringą;

// Find the longest string
let arrayB1 = B[0];  // Start with the first string in the array

// Loop through the array to find the longest string
for (let i = 1; i < B.length; i++) {
  if (B[i].length > arrayB1.length) {  // Compare string lengths
    arrayB1 = B[i];  // Update arrayB1 if the current string is longer
  }
}

// The longest string has been found in arrayB1
let longestString = arrayB1;

// Display the longest string in the console
console.log("The longest string is:", longestString);

// Optionally, display it in an HTML element with id "B1"
document.getElementById("B1").innerHTML = `The longest string is: ${longestString}`;


//B2. Surasti trumpiausią stringą;
let arrayB2 = B[0];  // Start with the first string in the array

// Loop throughlet the array to find the shortest string
for (let i = 1; i < B.length; i++) {
  if (B[i].length < arrayB2.length) {  // Compare string lengths for the shortest one
    arrayB2 = B[i];  // Update arrayB1 if the current string is shorter
  }
}

// The shortest string has been found in arrayB1
let shortestString = arrayB2;

// Display the shortest string in the console
console.log("The shortest string is:", shortestString);

// Optionally, display it in an HTML element with id "B1"
document.getElementById("B2").innerHTML = `The shortest string is: ${shortestString}`;

//B3. Surasti stringą, kuris prasideda “a” raide;

  stringsStartingWithA = [];  // Array to hold strings starting with "a"

 // Loop through the array to find strings that start with "a"
 for (let i = 0; i < B.length; i++) {
   if (B[i].toLowerCase().startsWith("a")) {  // Check if the string starts with "a"
     stringsStartingWithA.push(B[i]);  // Add the string to the result array
   }
 }

 // Display the result in the console
 console.log("Strings starting with 'a':", stringsStartingWithA);

 // Optionally, display the result in an HTML element with id "B1"
 document.getElementById("B3").innerHTML = `Strings starting with 'a': ${stringsStartingWithA.join(', ')}`;



// let stringsStartingWithA = [];  // Array to hold strings starting with "a"

// // Loop through the array to find strings that start with "a"
// for (let i = 0; i < B.length; i++) {
//   if (B[i].toLowerCase().startsWith("a")) {  // Check if the string starts with "a"
//     stringsStartingWithA.push(B[i]);  // Add the string to the result array
//   }
// }

// // Display the result in the console
// console.log("Strings starting with 'a':", stringsStartingWithA);

// // Display the strings in column format in the HTML element with id "B1"
// let columnHtml = stringsStartingWithA.map(function(str) {
//   return `<p>${str}</p>`;  // Wrap each string in a <p> tag
// }).join('');  // Join the strings without commas, creating a list of <p> elements

// document.getElementById("B3").innerHTML = columnHtml;  // Insert into the page
//???????????????????????????????????????????????????????????????????????????????????

//B4. Surasti stringą su daugiausia žodžių;

let rowWithMostWords = B[0];  // Start with the first row
let maxWordCount = B[0].split(' ').length;  // Get the word count of the first string

// Loop through the array to find the row with the largest number of words
for (let i = 1; i < B.length; i++) {
  let wordCount = B[i].split(' ').length;  // Split the string by spaces and count the words
  if (wordCount > maxWordCount) {  // If this row has more words than the current maximum
    rowWithMostWords = B[i];  // Update the row with the most words
    maxWordCount = wordCount;  // Update the word count
  }
}

// Display the result in the console
console.log("Row with the largest number of words:", rowWithMostWords);

// Optionally, display it in an HTML element with id "B1"
document.getElementById("B4").innerHTML = `Row with the largest number of words: ${rowWithMostWords}`;

//B5. Surasti stringą su mažiausiai žodžių;

let rowWithFewestWords = B[0];  // Start with the first row
let minWordCount = B[0].split(' ').length;  // Get the word count of the first string

// Loop through the array to find the row with the least number of words
for (let i = 1; i < B.length; i++) {
  let wordCount = B[i].split(' ').length;  // Split the string by spaces and count the words
  if (wordCount < minWordCount) {  // If this row has fewer words than the current minimum
    rowWithFewestWords = B[i];  // Update the row with the fewest words
    minWordCount = wordCount;  // Update the word count
  }
}

// Display the result in the console
console.log("Row with the least number of words:", rowWithFewestWords);

// Optionally, display it in an HTML element with id "B1"
document.getElementById("B5").innerHTML = `Row with the least number of words: ${rowWithFewestWords}`;

//B6. Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;

let countMoreThanFourWords = 0;  // Initialize the counter for lines with more than 4 words

// Loop through the array to check each line's word count
for (let i = 0; i < B.length; i++) {
  let wordCount = B[i].split(' ').length;  // Count words by splitting by spaces
  if (wordCount > 4) {  // If the word count is greater than 4
    countMoreThanFourWords++;  // Increment the counter
  }
}

// Display the result in the console
console.log("Number of lines with more than 4 words:", countMoreThanFourWords);

// Optionally, display it in an HTML element with id "B1"
document.getElementById("B6").innerHTML = `Number of lines with more than 4 words: ${countMoreThanFourWords}`;

//B7. Suskaičiuoti kiek masyve yra žodžių;

let totalWords = 0;  // Initialize a counter for the total number of words

// Loop through each string in the array B
for (let i = 0; i < B.length; i++) {
  let wordCount = B[i].split(' ').length;  // Split the string into words and count them
  totalWords += wordCount;  // Add the word count for this string to the total
}

// Display the result in the console
console.log("Total number of words in array B:", totalWords);

// Optionally, display it in an HTML element with id "B1"
document.getElementById("B7").innerHTML = `Total number of words in array B: ${totalWords}`;

//B8. Suskaičiuoti visas ‘s’ raides;

let totalSCount = 0;  // Initialize a counter for the letter 's'

// Loop through each string in the array B
for (let i = 0; i < B.length; i++) {
  // Count occurrences of 's' in the current string
  let sCountInRow = (B[i].match(/s/g) || []).length;  // Use a regex to match 's' globally
  totalSCount += sCountInRow;  // Add the count of 's' in this string to the total
}

// Display the result in the console
console.log("Total number of 's' in array B:", totalSCount);

// Optionally, display it in an HTML element with id "B1"
document.getElementById("B8").innerHTML = `Total number of 's' in array B: ${totalSCount}`;

//B9. Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);

let totalLetters = 0;  // Initialize a counter for the letters

// Loop through each string in the array B
for (let i = 0; i < B.length; i++) {
  // Use a regex to find all alphabetic characters in the current string
  let lettersInRow = B[i].replace(/[^a-zA-Z]/g, '').length;  // Remove non-letters and count the remaining letters
  totalLetters += lettersInRow;  // Add the count of letters in this string to the total
}

// Display the result in the console
console.log("Total number of letters in array B:", totalLetters);

// Optionally, display it in an HTML element with id "B1"
document.getElementById("B9").innerHTML = `Total number of letters in array B: ${totalLetters}`;

//B10. Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);

let longestWord = "";  // Variable to store the longest word

// Loop through each string in the array B
for (let i = 0; i < B.length; i++) {
  // Split the current string into words
  let words = B[i].split(' ');

  // Loop through the words and check for the longest word
  for (let j = 0; j < words.length; j++) {
    // Check if the current word is longer than the current longest word
    if (words[j].length > longestWord.length) {
      longestWord = words[j];  // Update the longest word
    }
  }
}

// Display the result in the console
console.log("The longest word in the array B is:", longestWord);

// Optionally, display it in an HTML element with id "B1"
document.getElementById("B10").innerHTML = `The longest word in the array B is: ${longestWord}`;

//C. Mišrus masyvas.
const C1 = document.querySelector(".C1")
const C2 = document.querySelector(".C2")
const C3 = document.querySelector(".C3")
const C4 = document.querySelector(".C4")
const C5 = document.querySelector(".C5")
const C6 = document.querySelector(".C6")
const C7 = document.querySelector(".C7")
const C8 = document.querySelector(".C8")
const C9 = document.querySelector(".C9")
const C10 = document.querySelector(".C10")

const C = [94, true, 'technology', 'year', 34, true, 'flower', 13, 'future', undefined, 0, 12, 'water', 'false', 'school', 'cat', false, 'family', 70, undefined, 'life', 'government', 'mountain', 13, true, 'year', 'sun', 50, 'day', 'food', 0, 'health', 70, 31, 16, 85, 'car', 'internet', 100, 'money', 26, 'fire', 76, [], 45, 'time', 'music', 93, 0, 'love', 69, {}, 96, 0, false, 'air', 'star', 24, 9, 'thing', 19, 'house', 'way', 'true', 90, '0', 'woman', 'time', 'job', '72', '22', 'city', 'history', 47, 'man', 92, 'child', 73, '0', 16, 63, 48, 'country', 45, 'tree', true, 57, 'earth', 96, [], 'hope', 'dream', 39, 43, 'art', 27, 'friend', 'moon', '26', 'science', 74];

//C1. Surasti didžiausią skaičių;

// Function to find the largest number in the array
let largestNumber = -Infinity;  // Initialize with a very small number

// Loop through each element in the array
for (let i = 0; i < C.length; i++) {
  // Check if the element is a number
  if (typeof C[i] === 'number' && !isNaN(C[i])) {
    // Update the largest number if the current number is greater
    if (C[i] > largestNumber) {
      largestNumber = C[i];
    }
  }
}

console.log("The largest number in the array C is:", largestNumber);
document.getElementById("C1").innerHTML = `The largest number in the array C is: ${largestNumber}`;


//C2. Surasti trumpiausią stringą;

// Function to find the shortest string in the array
// let arrayC3 = null;  // Initialize to null (will be set to a string if found)

// // Loop through each element in the array
// for (let i = 0; i < C.length; i++) {
//   // Check if the current element is a string
//   if (typeof C[i] === 'string') {
//     // If no shortest string has been found yet, or if the current string is shorter
//     if (arrayC3 === null || C[i].length < arrayC3.length) {
//       arrayC3 = C[i];  // Update the shortest string
//     }
//   }
// }

// console.log("The shortest string in the array C is:", shortestString);
// document.getElementById("C2").innerHTML = `The shortest string in the array C is: ${shortestString}`;


let arrayC3 = null;  // Initialize to null (will be set to a string if found)

// Loop through each element in the array C
for (let i = 0; i < C.length; i++) {
  // Check if the current element is a string
  if (typeof C[i] === 'string') {
    // If no shortest string has been found yet, or if the current string is shorter
    if (arrayC3 === null || C[i].length < arrayC3.length) {
      arrayC3 = C[i];  // Update the shortest string
    }
  }
}

// Check if a shortest string was found
if (arrayC3 === null) {
  console.log("No strings found in the array.");
  document.getElementById("C2").innerHTML = "No strings found in the array.";
} else {
  console.log("The shortest string in the array C is:", arrayC3);
  document.getElementById("C2").innerHTML = `The shortest string in the array C is: ${arrayC3}`;
}





// // Initialize to null (indicating no strings have been found yet)
// let shortestString = null;

// // Loop through each element in the array C
// for (let i = 0; i < C.length; i++) {
//   // Check if the current element is a string
//   if (typeof C[i] === 'string') {
//     // If no shortest string has been found yet, or if the current string is shorter
//     if (shortestString === null || C[i].length < shortestString.length) {
//       shortestString = C[i];  // Update the shortest string
//     }
//   }
// }

// // Check if a shortest string was found
// if (shortestString === null) {
//   console.log("No strings found in the array.");
//   document.getElementById("C2").innerHTML = "No strings found in the array.";
// } else {
//   console.log("The shortest string in the array C is:", shortestString);
//   document.getElementById("C2").innerHTML = `The shortest string in the array C is: ${shortestString}`;
// }



// let longestStringg = "";  // Initialize to an empty string (will be updated with the longest string)

// // Loop through each element in the array C
// for (let i = 0; i < C.length; i++) {
//   // Check if the current element is a string
//   if (typeof C[i] === 'string') {
//     // If no longest string has been found yet, or if the current string is longer
//     if (C[i].length > longestString.length) {
//       longestString = C[i];  // Update the longest string
//     }
//   }
// }

// // Check if a longest string was found
// if (longestString === "") {
//   console.log("No strings found in the array.");
//   document.getElementById("C2").innerHTML = "No strings found in the array.";
// } else {
//   console.log("The longest string in the array C is:", longestString);
//   document.getElementById("C2").innerHTML = `The longest string in the array C is: ${longestString}`;
// }




//C3. Suskaičiuoti kiek skaičių yra 0-iai (ne stringai ‘0’, o skaičiai!);

// Initialize a counter for zeros
let zeroCount = 0;

// Loop through the array and count zeros
for (let i = 0; i < C.length; i++) {
  if (C[i] === 0) {  // Check if the current element is strictly equal to 0
    zeroCount++;  // Increment the counter if a zero is found
  }
}

console.log("Number of zeros in array C:", zeroCount);

// Optionally display it in an HTML element
document.getElementById("C3").innerHTML = `Number of zeros in array C: ${zeroCount}`;

//C4.Suskaičiuoti teigiamų skaičių sumą (tik skaičių, ne stringų!);


// Initialize a variable to store the sum of positive numbers
let sumOfPositiveNumberss = 0;

// Loop through the array and sum positive numbers
for (let i = 0; i < C.length; i++) {
  if (typeof C[i] === 'number' && C[i] > 0) {  // Check if it's a positive number
    sumOfPositiveNumbers += C[i];  // Add the number to the sum
  }
}

console.log("The sum of positive numbers in array C is:", sumOfPositiveNumbers);

// Optionally display it in an HTML element
document.getElementById("C4").innerHTML = `The sum of positive numbers in array C is: ${sumOfPositiveNumbers}`;

//C5. Suskaičiuoti bendrą visų stringų ilgį;


// Initialize a variable to store the total length of all strings
let totalStringLength = 0;

// Loop through the array and sum the lengths of all strings
for (let i = 0; i < C.length; i++) {
  if (typeof C[i] === 'string') {  // Check if the current element is a string
    totalStringLength += C[i].length;  // Add the length of the string to the total
  }
}

console.log("The total length of all strings in array C is:", totalStringLength);

// Optionally display it in an HTML element
document.getElementById("C5").innerHTML = `The total length of all strings in array C is: ${totalStringLength}`;

//C6. Suskaičiuoti vidutinį stringo ilgį;

// Initialize variables for total length and number of strings
let totalStringLengthh = 0;
let stringCount = 0;

// Loop through the array and sum the lengths of all strings
for (let i = 0; i < C.length; i++) {
  if (typeof C[i] === 'string') {  // Check if the current element is a string
    totalStringLength += C[i].length;  // Add the length of the string to the total
    stringCount++;  // Increment the count of strings
  }
}

// Calculate the average length of the strings
let averageStringLength = stringCount > 0 ? totalStringLength / stringCount : 0;  // Avoid division by zero

console.log("The average length of strings in array C is:", averageStringLength);

// Optionally display it in an HTML element
document.getElementById("C6").innerHTML = `The average length of strings in array C is: ${averageStringLength.toFixed(2)}`;

//C7. Suskaičiuoti kiek elementų masyve yra nei stringas nei skaičius;


// Initialize a counter for elements that are neither strings nor numbers
let countNonStringNumber = 0;

// Loop through the array and check each element
for (let i = 0; i < C.length; i++) {
  if (typeof C[i] !== 'string' && typeof C[i] !== 'number') {
    countNonStringNumber++;  // Increment the count if the element is neither a string nor a number
  }
}

console.log("The number of elements that are neither a string nor a number is:", countNonStringNumber);

// Optionally display the result in an HTML element
document.getElementById("C7").innerHTML = `The number of elements that are neither a string nor a number is: ${countNonStringNumber}`;

//C8. Suskaičiuoti skaičių, kuriuos galima padaryti iš stringų sumą (jeigu stringas verčiasi ne į NaN);


// Initialize counter for numbers that can be summed from the strings
let countValidNumbers = 0;

// Loop through the array
for (let i = 0; i < C.length; i++) {
  // Check if the current element is a string
  if (typeof C[i] === 'string') {
    // Try to convert the string to a number
    let numberFromString = Number(C[i]);

    // Check if the conversion is a valid number (not NaN)
    if (!isNaN(numberFromString)) {
      countValidNumbers++;  // Increment the count for valid numbers
    }
  }
}

console.log("The number of strings that can be converted to valid numbers is:", countValidNumbers);

// Optionally display the result in an HTML element
document.getElementById("C8").innerHTML = `The number of strings that can be converted to valid numbers is: ${countValidNumbers}`;

//C9.Rasti ko yra daugiau- stringų ar skaičių;


// // Initialize counters
// let stringCountt = 0;
// let numberCount = 0;

// // Loop through the array and count strings and numbers
// for (let i = 0; i < C.length; i++) {
//   if (typeof C[i] === 'string') {
//     stringCount++;  // Increment string count
//   } else if (typeof C[i] === 'number' && !isNaN(C[i])) {
//     numberCount++;  // Increment number count (ignoring NaN)
//   }
// }

// // Compare the counts and log the result
// if (stringCount > numberCount) {
//   console.log("There are more strings than numbers in the array C.");
// } else if (numberCount > stringCount) {
//   console.log("There are more numbers than strings in the array C.");
// } else {
//   console.log("The number of strings and numbers are the same in the array C.");
// }

// // Optionally display the result in an HTML element
// document.getElementById("C9").innerHTML = `Strings: ${stringCount}, Numbers: ${numberCount}.`;


//--------

// Initialize counters for strings and numbers
let stringCountt = 0;
let numberCount = 0;

// Loop through the array and count strings and numbers
for (let i = 0; i < C.length; i++) {
  if (typeof C[i] === 'string') {
    stringCount++;  // Increment string count
  } else if (typeof C[i] === 'number' && !isNaN(C[i])) {
    numberCount++;  // Increment number count (excluding NaN)
  }
}

// Compare the counts and log the result
if (stringCount > numberCount) {
  console.log("There are more strings than numbers in the array C.");
} else if (numberCount > stringCount) {
  console.log("There are more numbers than strings in the array C.");
} else {
  console.log("The number of strings and numbers are the same in the array C.");
}

// Optionally display the result in an HTML element
document.getElementById("C9").innerHTML = `Strings: ${stringCount}, Numbers: ${numberCount}.`;


//C10.Rasti ko yra daugiau- loginių true ar false;


// Initialize counters for true and false
let trueCount = 0;
let falseCount = 0;

// Loop through the array and count true and false values
for (let i = 0; i < C.length; i++) {
  if (C[i] === true) {
    trueCount++;  // Increment true count
  } else if (C[i] === false) {
    falseCount++; // Increment false count
  }
}

// Compare the counts and log the result
if (trueCount > falseCount) {
  console.log("There are more true values than false values in the array C.");
} else if (falseCount > trueCount) {
  console.log("There are more false values than true values in the array C.");
} else {
  console.log("The number of true and false values are the same in the array C.");
}

// Optionally display the result in an HTML element
document.getElementById("C10").innerHTML = `True: ${trueCount}, False: ${falseCount}.`;




//D. Dvimatis masyvas su skaičiais.
const D1 = document.querySelector(".D1")
const D2 = document.querySelector(".D2")
const D3 = document.querySelector(".D3")
const D4 = document.querySelector(".D4")
const D5 = document.querySelector(".D5")
const D6 = document.querySelector(".D6")
const D7 = document.querySelector(".D7")
const D8 = document.querySelector(".D8")
const D9 = document.querySelector(".D9")
const D10 = document.querySelector(".D10")

const D = [[95,78,38],[55,35],[61,0,16],[36,32,16],[64],[94],[80,10,80],[75,80],[41],[91,77],[93,73,77,65],[26,25,17],[19,52,42,11],[35,18,82],[31,1],[3,52,70,84],[98],[90,0],[94,58],[80],[17,0,3],[65],[99,54,33,24],[86,6],[55,47],[63],[41,56],[97,69],[11],[41,53],[19,89],[48,54,54,63],[33,55,60,54],[28,28,74,44],[60],[5,52],[80,92,31,30],[24],[95,4,23],[38,7,61],[53,99,22],[23,34]];

//D1. Surasti didžiausią skaičių;

// Flatten the array D into a single array of numbers
const flattenedArray = D.flat();

// Find the largest number in the flattened array
const arrayD1 = Math.max(...flattenedArray);

console.log("The largest number in the array D is:", arrayD1);

// Display the result in an HTML element with id "D1"
document.getElementById("D1").innerHTML = `The largest number in the array D is: ${arrayD1}`;



//D2. Rasti ar yra bent vienas sub masyvas ilgesnis nei 5;


// Check if any subarray in D has a length greater than 5
// let hasSubarrayLongerThanFive = D.some(subarray => subarray.length > 5);

// if (hasSubarrayLongerThanFive) {
//   console.log("Array D has at least one subarray with more than 5 elements.");
// } else {
//   console.log("Array D does not have any subarray with more than 5 elements.");
// }
// document.getElementById("D2").innerHTML = `???????????


// Check if any subarray in D has a length greater than 5
let hasSubarrayLongerThanFive = D.some(subarray => subarray.length > 5);

// Display the result in the HTML element with id "D2"
if (hasSubarrayLongerThanFive) {
  console.log("Array D has at least one subarray with more than 5 elements.");
  document.getElementById("D2").innerHTML = "Array D has at least one subarray with more than 5 elements.";
} else {
  console.log("Array D does not have any subarray with more than 5 elements.");
  document.getElementById("D2").innerHTML = "Array D does not have any subarray with more than 5 elements.";
}
//D3.Suskaičiuoti kiek elementų yra sub masyvai trumpesni nei 2;

// Find all subarrays with a length shorter than 2 and count the total number of elements in them
let elementsInShortSubarrays = D.filter(subarray => subarray.length < 2)
.reduce((total, subarray) => total + subarray.length, 0);

console.log("Number of elements in subarrays shorter than 2:", elementsInShortSubarrays);
document.getElementById("D3").innerHTML = `Number of elements in subarrays shorter than 2: ${elementsInShortSubarrays}`;

//D4. Surasti didžiausią skaičių, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
// Step 1: Filter subarrays longer than 2 elements
let longSubarrays = D.filter(subarray => subarray.length > 2);

// Step 2: Flatten the filtered subarrays
let flattenedArrayy = longSubarrays.flat();

// Step 3: Find the largest number in the flattened array
let largestNumberr = Math.max(...flattenedArray);

console.log("The biggest number from subarrays longer than 2 is:", largestNumber);

// Optionally, display it in an HTML element with id "D4"
document.getElementById("D4").innerHTML = `The biggest number from subarrays longer than 2 is: ${largestNumber}`;

//D5. Suskaičiuoti didesnių nei 10 skaičių sumą, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 3;
// Step 1: Filter subarrays whose length is 3 or less
let shortSubarrays = D.filter(subarray => subarray.length <= 3);

// Step 2: Flatten the filtered subarrays
let flattenedArrayyy = shortSubarrays.flat();

// Step 3: Filter the numbers greater than 10
let numbersGreaterThan10 = flattenedArray.filter(number => number > 10);

// Step 4: Calculate the sum of those numbers
let sumGreaterThan10 = numbersGreaterThan10.reduce((sum, number) => sum + number, 0);

console.log("The sum of numbers greater than 10 from subarrays not longer than 3:", sumGreaterThan10);

// Optionally, display it in an HTML element with id "D5"
document.getElementById("D5").innerHTML = `The sum of numbers greater than 10 from subarrays not longer than 3 is: ${sumGreaterThan10}`;


//D6. Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 10-20, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3;
// Step 1: Filter subarrays whose length is 3 or less
let arrayD6 = D.filter(subarray => subarray.length <= 3);

// Step 2: Flatten the filtered subarrays
let flattenedArrays = arrayD6.flat(); // Use arrayD6 here, not shortSubarrays

// Step 3: Filter the numbers within the range 1-20
let numbersInRangee = flattenedArray.filter(number => number >= 1 && number <= 20);

// Step 4: Count how many numbers are in the range
let countInRangee = numbersInRange.length;

console.log("The count of numbers in the range 1-20 from subarrays shorter than 3:", countInRange);

// Optionally, display it in an HTML element with id "D6"
document.getElementById("D6").innerHTML = `The count of numbers in the range 1-20 from subarrays shorter than 3 is: ${countInRange}`;



//D7. Suskaičiuoti kiek skaičių be liekanos dalinasi iš 5, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
// Step 1: Filter subarrays whose length is 3 or less
let arrayD7 = D.filter(subarray => subarray.length <= 3);

// Step 2: Flatten the filtered subarrays
let flattenedArrayyyy = arrayD6.flat(); // Use arrayD6 here, not shortSubarrays

// Step 3: Filter the numbers within the range 1-20
let numbersInRangeee = flattenedArray.filter(number => number >= 1 && number <= 20);

// Step 4: Count how many numbers are in the range
let countInRangeee = numbersInRange.length;

console.log("The count of numbers in the range 1-20 from subarrays shorter than 3:", countInRange);

// Optionally, display it in an HTML element with id "D6"
document.getElementById("D7").innerHTML = `The count of numbers in the range 1-20 from subarrays shorter than 3 is: ${countInRange}`;

//D8. Suskaičiuoti kiek skaičių be liekanos dalinasi iš 5, ieškant tik tokiuose sub masyvuose, kurie yra 2 ilgio;


// Step 1: Filter subarrays that have exactly 2 elements
const subarraysOfLength2 = D.filter(subarray => subarray.length === 2);

// Step 2: Flatten the subarrays to access individual numbers
const flattenedArrayyyyyy = subarraysOfLength2.flat();

// Step 3: Filter numbers that are divisible by 5 without remainder
const divisibleBy5 = flattenedArray.filter(number => number % 5 === 0);

// Step 4: Count how many numbers are divisible by 5
const countDivisibleBy5 = divisibleBy5.length;

console.log("The count of numbers divisible by 5 from subarrays of length 2 is:", countDivisibleBy5);
document.getElementById("D8").innerHTML = `The count of numbers divisible by 5 from subarrays of length 2 is: ${countDivisibleBy5}`;

//D9. Suskaičiuoti sumą skaičių, kurie sub masyve turi indeksą 2;

// Step 1: Filter out subarrays that have at least 3 elements
const subarraysWithIndex2 = D.filter(subarray => subarray.length > 2);

// Step 2: Sum the numbers at index 2 of each subarray
const sumAtIndex2 = subarraysWithIndex2.reduce((sum, subarray) => {
  return sum + subarray[2];  // Add the element at index 2 of each subarray
}, 0);

// Step 3: Display the result
console.log("The sum of numbers at index 2 in subarrays is:", sumAtIndex2);
document.getElementById("D9").innerHTML = `The sum of numbers at index 2 in subarrays is: ${sumAtIndex2}`;


// If you want to display it on a web page (if you have an HTML element with id "result"):
// document.getElementById("result").innerHTML = "The sum of numbers at index 2 is: " + sumAtIndex2;


//D10. Suskaičiuoti vidurkį skaičių, kurie sub masyve turi indeksą 1 arba 3;


// Step 1: Initialize variables for counting
let totalCount = 0; // To store the total count of elements at index 1 or 3
let subarrayCount = 0; // To store the number of subarrays that have elements at index 1 or 3

// Step 2: Loop through each subarray in array D
D.forEach(subarray => {
  let count = 0;

  // Step 3: Check if index 1 exists and increment count if it does
  if (subarray.length > 1) count++;
  
  // Step 4: Check if index 3 exists and increment count if it does
  if (subarray.length > 3) count++;

  // If the subarray has elements at index 1 or 3, increase total count
  if (count > 0) {
    totalCount += count;
    subarrayCount++;
  }
});

// Step 5: Calculate the average
let average = (subarrayCount > 0) ? totalCount / subarrayCount : 0;

// Step 6: Output the result
console.log("Average number of elements at index 1 or 3 in subarrays:", average);

// Optional: Display in HTML
document.getElementById("D10").innerHTML = `The average number of elements at index 1 or 3 is: ${average}`;


//E. Dvimatis masyvas su stringais.
const E1 = document.querySelector(".E1")
const E2 = document.querySelector(".E2")
const E3 = document.querySelector(".E3")
const E4 = document.querySelector(".E4")
const E5 = document.querySelector(".E5")
const E6 = document.querySelector(".E6")
const E7 = document.querySelector(".E7")
const E8 = document.querySelector(".E8")
const E9 = document.querySelector(".E9")
const E10 = document.querySelector(".E10")

const E = [
     ['time', 'love', 'government'],
     ['year'],
     ['time', 'friend', 'child', 'money'],
     ['air'],
     ['world', 'music'],
     ['phone', 'job', 'hope', 'car'],
     ['day'],
     ['house', 'thing', 'future'],
     ['family', 'man', 'life', 'life'],
     ['way', 'moon', 'history', 'tree'],
     ['cat', 'book', 'science', 'internet'],
     ['food', 'people', 'art', 'country'],
     ['internet', 'friend', 'house', 'job'],
     ['money', 'government', 'antiquity', 'time'],
     ['love', 'cat', 'family', 'friend'],
     ['future', 'year', 'time', 'life'],
     ['sun'],
     ['school'],
     ['health', 'mountain'],
     ['city'],
     ['water', 'star'],
     ['flower', 'earth', 'fire'],
     ['star'],
     ['river', 'art', 'fire'],
     ['woman', 'earth', 'flower', 'computer'],
     ['water', 'technology', 'dream']
];
 

//E1. Suskaičiuoti bendrą stringų ilgį;
//E2.Suskaičiuoti bendrą stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
//E3. Suskaičiuoti bendrą, ilgesnių nei 6, stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
//E4. Surasti stringą, kuris prasideda “a” raide, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 3;
//E5. Surasti stringą, kuris pasibaigia “r” raide, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3;
//E6. Surasti trumpiausią stringą, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
//E7. Suskaičiuoti vidutinį stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
//E8. Suskaičiuoti vidutinį stringų, ilgesnių nei 5, ilgį, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
//E9. Suskaičiuoti vidutinį stringų ilgį, kurie sub masyve turi indeksą 2;
//E10. Suskaičiuoti kiek “s” raidžių yra stringuose, kurie sub masyve turi indeksą 0 arba yra sub masyvo paskutinis elementas;


//Sunkesni.

//Masyve E surasti visus žodžius, kurie pasibaigia “r” raide, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3. Surastus žodžius sudėti į atskirą masyvą;
//Masyve E surasti visus žodžius, kurie prasideda “a” raide, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2. Surastus žodžius sudėti į atskirą masyvą;
//Masyve E surasti visus žodžius, kurie pasikartoja daugiau nei 1 kartą ir sudėti juos į atskirą masyvą;
//Masyve B surasti vienodą stringą;
//Masyve C surasti vienodą stringą;
//Masyve B surasti žodį, kuris pasikartoja daugiausiai kartų;
//Masyve B surasti ir sudėti į atskirą masyvą visus skaičius, esančius tekste;
//Masyve D surasti elementą, kurio masyvo elemento suma yra didžiausia;
//Masyve A surasti visus skaičius, kurie yra ir teigiami ir neigiami (pvz. yra 15 ir -15). Rastus skaičius sudėti į atskirą masyvą;
//Masyve A suskaičiuoti visų skaičių, kuriuose nėra skaitmens “7” sumą;


//Masyvai užduočiai:


//const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];

//const B = [
  //  'the quick brown fox',
   // 'jumps over the lazy dog',
  //  'a bird in the hand',
 //   'is worth two in the bush',
//    'an apple a day',
//    'keeps the doctor away',
  //  'actions speak louder than words',
  //  'all good things must come to an end',
  //  'beauty is in the eye of the beholder',
  //  'better late than never',
  //  'birds of a feather flock together',
  //  'cleanliness is next to godliness',
  //  'dont bite the hand that feeds you',
  //  'dont count your chickens before they hatch',
  //'dont put all your eggs in 1 basket',
  //  'every cloud has a silver lining',
  //  'every dog has its day',
  //  'every rose has its thorn',
  //  'fortune favors the bold',
  //  'good things come to those who wait',
  //  'a watched pot never boils',
  //  'haste makes waste',
  //  'history repeats itself',
  //  'cat got your tongue',
  //  'home is where the heart is',
  //  'if the shoe fits, wear it',
  //  'ignorance is bliss',
   // 'it takes two to tango',
  //  'arabs have 100 words for sand',
  //  'kill two birds with one stone',
  //  'laughter is the best medicine',
 //   'love is blind',
 //   'money doesnt grow on trees',
  //  'no pain no gain',
  //  'nothing ventured nothing gained',
  //  'once bitten twice shy',
  //  'practice makes perfect',
  //  'the early bird catches the worm',
 //   'the grass is always greener on the other side',
  //  'the pen is mightier than 10 swords',
  //  'theres no smoke without fire',
   // 'time heals all wounds',
  //  '5 second rule',
  //  'every dog has its day',
  //  'to err is human to forgive divine',
  //  '2 wrongs dont make a right',
  //  'when in Rome do as the Romans do',
   // 'where theres smoke, theres fire',
 //   'you cant judge a book by its cover',
  //  'you cant make an omelette without breaking eggs',
 //   'you reap what you sow',
 //   'youre never too old to learn'
//];

//const C = [94, true, 'technology', 'year', 34, true, 'flower', 13, 'future', undefined, 0, 12, 'water', 'false', 'school', 'cat', false, 'family', 70, undefined, 'life', 'government', 'mountain', 13, true, 'year', 'sun', 50, 'day', 'food', 0, 'health', 70, 31, 16, 85, 'car', 'internet', 100, 'money', 26, 'fire', 76, [], 45, 'time', 'music', 93, 0, 'love', 69, {}, 96, 0, false, 'air', 'star', 24, 9, 'thing', 19, 'house', 'way', 'true', 90, '0', 'woman', 'time', 'job', '72', '22', 'city', 'history', 47, 'man', 92, 'child', 73, '0', 16, 63, 48, 'country', 45, 'tree', true, 57, 'earth', 96, [], 'hope', 'dream', 39, 43, 'art', 27, 'friend', 'moon', '26', 'science', 74];

//const D = [[95,78,38],[55,35],[61,0,16],[36,32,16],[64],[94],[80,10,80],[75,80],[41],[91,77],[93,73,77,65],[26,25,17],[19,52,42,11],[35,18,82],[31,1],[3,52,70,84],[98],[90,0],[94,58],[80],[17,0,3],[65],[99,54,33,24],[86,6],[55,47],[63],[41,56],[97,69],[11],[41,53],[19,89],[48,54,54,63],[33,55,60,54],[28,28,74,44],[60],[5,52],[80,92,31,30],[24],[95,4,23],[38,7,61],[53,99,22],[23,34]];

//const E = [
 //   ['time', 'love', 'government'],
 //   ['year'],
 //   ['time', 'friend', 'child', 'money'],
 //   ['air'],
 //   ['world', 'music'],
 //   ['phone', 'job', 'hope', 'car'],
 //   ['day'],
 //   ['house', 'thing', 'future'],
 //   ['family', 'man', 'life', 'life'],
 //   ['way', 'moon', 'history', 'tree'],
 //   ['cat', 'book', 'science', 'internet'],
 //   ['food', 'people', 'art', 'country'],
 //   ['internet', 'friend', 'house', 'job'],
 //   ['money', 'government', 'antiquity', 'time'],
 //   ['love', 'cat', 'family', 'friend'],
 //   ['future', 'year', 'time', 'life'],
 //   ['sun'],
 //   ['school'],
 //   ['health', 'mountain'],
 //   ['city'],
 //   ['water', 'star'],
 //   ['flower', 'earth', 'fire'],
 //   ['star'],
 //   ['river', 'art', 'fire'],
 //   ['woman', 'earth', 'flower', 'computer'],
 //   ['water', 'technology', 'dream']
//];




