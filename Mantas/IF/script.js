const task1 = document.querySelector(".task1")
const task2 = document.querySelector(".task2")
const task3 = document.querySelector(".task3")
const task4 = document.querySelector(".task4")
const task5 = document.querySelector(".task5")
const task6 = document.querySelector(".task6")
const task7 = document.querySelector(".task7")
const task8 = document.querySelector(".task8")
const task9 = document.querySelector(".task9")
const task10 = document.querySelector(".task10")
const task11 = document.querySelector(".task11")
const task12 = document.querySelector(".task12")
const task13 = document.querySelector(".task13")
const task14 = document.querySelector(".task14")
const task15 = document.querySelector(".task15")
const task16 = document.querySelector(".task16")
const task17 = document.querySelector(".task17")
const task18 = document.querySelector(".task18")
const task19 = document.querySelector(".task19")
const task20 = document.querySelector(".task20")
const task21 = document.querySelector(".task21")
const task22 = document.querySelector(".task22")

// function addGapBetweenWords(text, gap) {
//     // Split the text into words
//     let words = text.split(' ');
    
//     // Join the words with the specified gap
//     return words.join(gap);
//   }

function addGapToDocumentText(gap) {
    // Function to recursively process all text nodes in the document
    function traverseAndModifyText(node) {
      // If the node is a text node, modify its content
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.split(' ').join(gap);
      } else {
        // If it's an element node, recursively process its children
        for (let child of node.childNodes) {
          traverseAndModifyText(child);
        }
      }
    }
  
    // Start from the body of the document
    traverseAndModifyText(document.body);
  }
  //???????????????????????????????????????????????????????????????????????????????????????

//console.log('Hello');
//1.
// let array = [1, 2, 3, 4, 5];
// let ???? = []
// let span = document.createElement("span")
// span.innerText = 'task1';
// task1.appendChild(span)
// task1.innerHTML = array;
//  document.getElementById("task1").innerHTML = `Just array: ${task1.join(", ")}`;
//  console.log("Just array:", task1);


let array = [1, 2, 3, 4, 5]; // Your array
let T1 = document.getElementById("T1"); // Reference to the HTML element with id "T1"

// // Create a span element
// let span = document.createElement("span");
// span.innerText = 'task1: ';  // Set text for the span

// // Append the span to the T1 element
// T1.appendChild(span);

// Now append the array as a string to the T1 element, but only once
T1.innerHTML = `Just array: ${array.join(", ")}`; // Append the array values

// Log the array to the console
console.log("Just array:", array);


//2.
// Lyginių skaičių radimas sąraše
// Sukurkite sąrašą skaičių. Naudodami for ciklą ir if sąlygą, išrinkite ir išspausdinkite tik lyginius skaičius iš sąrašo.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let T2 = []
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 0) {
//         //console.log(numbers[i])
//         //task2.innerHTML = numbers[i];
//         T2.push(" "+numbers[i]);
//     }
// } 
// task2.innerHTML = T2   
//      console.log(T2)
//      //console.log("Eaven numbers from array:", ???);
//      //document.getElementById("T2").innerHTML = `Eaven numbers from array: ${???}`;



     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
     let T2 = []
     
     // Loop through numbers to find even ones
     for (let i = 0; i < numbers.length; i++) {
         if (numbers[i] % 2 === 0) {
             // Push even numbers to T2 array
             T2.push(numbers[i]);
         }
     }
     
     // Now update the HTML content with the even numbers
     document.getElementById("T2").innerHTML = `Even numbers from array: ${T2.join(", ")}`;
     
     // Log the even numbers to the console
     console.log("Even numbers from array:", T2);
      
//3.
//my exemple:

// const odddNr = (num) => num % 2 !== 0; 
// const odd = numberss.filter(odddNr); 
// //console.log(odd); 
// task3.innerHTML = (odd); 
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]; 
let T3 = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        T3.push(numberss[i]);
    }
}
document.getElementById("T3").innerHTML = `Odd numbers from array: ${T3.join(", ")}`;
console.log("Odd numbers from array:", T3);

//4.
let arrayy = [-1, 32, 2, 3, 55, -4, 24, 5, -6, 7, -41, 8, 0, -9, -10, 11, 12, 78, -13, 69, -14, 15];
// const oddint = (num) => num % 2 !== 0;
// const oddd = arrayy.filter(oddint);
// task4.innerHTML = (oddd);
// let T4 = []
//  for (let i = 0; i < numbers.length; i ++) { 
//      if (numbers[i] % 2 !== 0) { 
//           console.log(i);
//           T4.push(" "+arrayy[i]);
//      } }
//   //task4.innerHTML = T4
//    document.getElementById("T4").innerHTML = `Odd numbers from array: ${T4.join(", ")}`;
//    console.log("Odd numbers from array:", T4);


let T4 = [];

for (let i = 0; i < arrayy.length; i++) { 
    if (arrayy[i] % 2 !== 0) { // Check if the number is odd
        console.log(i); // Log the index of the odd number
        T4.push(" " + arrayy[i]); // Push the odd number (with a space before it) to T4
    } 
}

// Display odd numbers in the element with ID "T4" on the web page
document.getElementById("T4").innerHTML = `Odd numbers from array: ${T4.join(", ")}`;

// Log the odd numbers array in the console
console.log("Odd numbers from array:", T4);




//5. 
// Žodžių, ilgesnių nei 5 raidės, spausdinimas
// Sukurkite sąrašą žodžių. Išspausdinkite tik tuos žodžius, kurių ilgis yra didesnis nei 5 raidės.

   let words = ["apple", "banana", "kiwi", "watermelon", "pear"];
   let arrT5 = [];
   // Loop through the 'words' array and check the length of each word
   for (let i = 0; i < words.length; i++) {
       if (words[i].length > 5) {
           arrT5.push(words[i]); // Push words with more than 5 letters into arrT5
       }
   }
   // Display the words longer than 5 letters in the HTML element with ID "T5"
   document.getElementById("T5").innerHTML = `Longer than 5 letter words from array: ${arrT5.join(", ")}`;
   // Log the longer words to the console
   console.log("Longer than 5 letter words from array:", arrT5);
   
//6.
//my exemple:
let wordss = ["bear", "wolf", "snake", "koala", "giraffe", "Deer", "cat", "leopard", "Frog", "squirrel"]
let arrT6 = []
for (let i = 0; i < wordss.length; i++) {
    if(wordss[i].length < 5) {
        arrT6.push(" "+wordss[i])
        console.log(wordss[i]);   
    }
}//task6.innerHTML = arrT6;
document.getElementById("T6").innerHTML = `Shorter than 5 letter words from array: ${arrT6.join(", ")}`;
console.log("Shorter than 5 letter words from array:", arrT6);

    //task6.innerHTML = wordss[i];
// let min = wordss[0]; 
// for (const letters of wordss) { 
//     if (letters.length < min.length) { min = letters;} 
//     task6.innerHTML = min
// } 
//console.log(min);

//7. 
// Skaičių dalinimas iš 3 be liekanos
// Sukurkite sąrašą skaičių nuo 1 iki 20. Išrinkite ir išspausdinkite tik tuos skaičius, kurie dalijasi iš 3 be liekanos.
let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let arrT7 = []
for (let i =0; i < numbersArr.length; i++) {
    if(numbersArr[i] % 3 === 0) {
        //console.log(numbersArr[i]);
        arrT7.push(" "+numbersArr[i])
         //task7.innerHTML = numbersArr[i];
    } 
}  //task7.innerHTML = arrT7
document.getElementById("T7").innerHTML = `Divisible numbers by 3 without remainder: ${arrT7.join(", ")}`;
console.log("Divisible numbers by 3 without remainder:", arrT7);


//8.
//my exemple:
let arrT8 = []
for (let i =0; i < numbersArr.length; i++) {
    if(numbersArr[i] % 5 === 0) {
        //console.log(numbersArr[i]);
        //task8.innerHTML = numbersArr[i];
        arrT8.push(" "+numbersArr[i])
    }
}  //task8.innerHTML = arrT8

document.getElementById("T8").innerHTML = `Divisible numbers by 5 without remainder: ${arrT8.join(", ")}`;
console.log("Divisible numbers by 5 without remainder:", arrT8);


//9.
// Neigiamų skaičių suradimas sąraše
// Sukurkite sąrašą teigiamų ir neigiamų skaičių. Išspausdinkite tik neigiamus skaičius.
let negativeNumbers = [4, -3, 2, -1, 0, -5, 8, -9];
let arrT9 = []
for (let i = 0; i < negativeNumbers.length; i++) {
    if (negativeNumbers[i] < 0) {
        //console.log(negativeNumbers[i]);
        //task9.innerHTML = negativeNumbers[i];
        arrT9.push(" "+negativeNumbers[i])
    }
}  //task9.innerHTML = arrT9
document.getElementById("T9").innerHTML = `List of negative numbers from array: ${arrT9.join(", ")}`;
console.log("List of negative numbers from array:", arrT9);
 
//10.
// Teksto paieška sąraše
// Sukurkite sąrašą sakinių. Išspausdinkite tik tuos sakinius, kurie turi žodį „JavaScript“.
let sentences = ["I love programming", "JavaScript is awesome", "Coding is fun", "Learn JavaScript"];
let arrT10 = []
for (let i = 0; i < sentences.length; i++) {
    if(sentences[i].includes('JavaScript')) {
        //console.log(sentences[i]);
        arrT10.push(" "+sentences[i])
        //task10.innerHTML = sentences[i]; 
    }
} task10.innerHTML = arrT10
document.getElementById("T10").innerHTML = `Sentenses containing the word 'JavaScript': ${arrT10.join(", ")}`;
console.log("Sentenses containing the word 'JavaScript':", arrT10);

//11.
//my exemple:
let arrT11 = []
for (let i = 0; i < sentences.length; i++) {
    if(sentences[i].includes('is')) {
        //console.log(sentences[i]);
        //task11.innerHTML = sentences[i];
        arrT11.push(" "+sentences[i])
    }
} task11.innerHTML = arrT11
document.getElementById("T11").innerHTML = `Sentenses containing the word 'is': ${arrT11.join(", ")}`;
console.log("Sentenses containing the word 'is':", arrT11);

//12.
// Skaičių kvadratų suradimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurių kvadratas yra didesnis nei 50.
let Numbers = [2, 5, 7, 8, 10, 13]
let arrT12 = []
for (let i = 0; i < Numbers.length; i++) {
    const Square = Numbers[i] **2;
    if(Square > 50) { 
         //console.log(Square);
         //task12.innerHTML = Numbers[i];
         arrT12.push(" "+Numbers[i])
    }  
}task12.innerHTML = arrT12
document.getElementById("T12").innerHTML = `Numbers whose square is greater than fifty: ${arrT12.join(", ")}`;
console.log("Number whose square is greater than fifty:", arrT12);

//13.
//my exemple:
let arrT13 = []
for (let i = 0; i < Numbers.length; i++) {
    const Square = Numbers[i] **2;
    if(Square < 50) { 
        //  console.log(Square);
        //  task13.innerHTML = Numbers[i];
        arrT13.push(" "+Numbers[i]);
    }  
}task13.innerHTML = arrT13
document.getElementById("T13").innerHTML = `Numbers whose square is less than fifty: ${arrT13.join(", ")}`;
console.log("Number whose square is less than fifty:", arrT13);

//14.
// Didžiausio skaičiaus paieška sąraše
// Sukurkite sąrašą skaičių ir raskite didžiausią skaičių. Tikrinkite kiekvieną reikšmę cikle.



let integers = [3, 45, -14, 23, -81, 67, -5, 12, 90, -37, 34, 105];
let arrT14 = [];
let theLargest = integers[0]; // Initialize with the first element of the array.

for (let i = 1; i < integers.length; i++) { // Start the loop from index 1.
  if (integers[i] > theLargest) {
    theLargest = integers[i]; // Update the largest number.
  }
}
// After the loop, we can display the largest number.
arrT14.push(" " + theLargest); // Push only the largest number into the array.
document.getElementById("T14").innerHTML = `The largest number in the array is: ${arrT14.join(", ")}`;
console.log("The largest number in the array is:", theLargest);

//15.
//my exemple:

let arrT15 = [];
let theSmolest = integers[0]; // Initialize with the first element of the array.
for (let i = 1; i < integers.length; i++) { // Start from index 1, as the first element is already assigned.
  if (integers[i] < theSmolest) {
    theSmolest = integers[i]; // Update the smallest number.
  }
}
// After the loop, store the smallest number in arrT15.
arrT15.push(" " + theSmolest); 
// Update the HTML to display the smallest number.
document.getElementById("T15").innerHTML = `The smallest number in the array is: ${arrT15.join(", ")}`;
// Optionally log it to the console.
console.log("The smallest number in the array is:", theSmolest);

//16.
// Raidžių skaičiavimas žodyje
// Sukurkite žodį ir suskaičiuokite, kiek kartų žodyje pasikartoja raidė „a“.

let word = "banana";
let letterCount = 0;
// Loop through each character in the word
for (let i = 0; i < word.length; i++) {
  if (word[i] === "a") { // Check if the current character is 'a'
    letterCount++;
  }
}
// Display the result after the loop
document.getElementById("T16").innerHTML = `The letter 'a' in the word 'banana' is repeated ${letterCount} times`;
console.log("Count of 'a' in 'banana' is:", letterCount);


//17.
 //my example
 let word1 = "amusement"
 let countOfm = 0;
 for (let i = 0; i < word1.length; i++) {
    if (word1[i].includes("m")) {
        countOfm ++
        task17.innerHTML = countOfm;
    }
 }
 //console.log(countOfm);
 document.getElementById("T17").innerHTML = `The letter 'm' in the word 'amusement' is repeated ${countOfm} times`;
 console.log("Count of 'm' in 'amusement' is:", countOfm);


//18. 
// Amžių filtravimas sąraše
// Sukurkite sąrašą žmonių amžių. Išspausdinkite tik tuos, kurie yra vyresni nei 18.
// let ages = [12, 10, 17, 40, 22, 36, 19, 15, 9, 30, 18,];
// let arrT18 = [John, Carol, John, Henry, Lily, Jordan, Betty, Linda, Alan, James, Jack, Jacob]
// for (let i = 0; i < ages.length; i++) {
//     if(ages[i] > 18) {
//         console.log(ages[i]);
//         task18.innerHTML = ages[i];
//         arrT18.push(" "+ages[i]);
//     }  
// }//task18.innerHTML = arrT18

let ages = [12, 10, 17, 40, 22, 14, 36, 19, 15, 9, 30, 18];
let names = ["John", "Carol", "John", "Henry", "Lily", "Jordan", "Betty", "Linda", "Alan", "James", "Jack", "Jacob"];
let adults = []; // Array to store names of people older than 18

for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 18) { // Check if the person is older than 18
        adults.push(names[i]); // Push the corresponding name into the adults array
    }
}

// Update the HTML with the names of people older than 18
document.getElementById("T18").innerHTML = `Names of people older than 18: ${adults.join(", ")}`;

console.log("Names of people older than 18:", adults);




//19.
//my example:
// let arrT19 = []
// for (let i = 0; i < ages.length; i++) {
//     if(ages[i] < 17){
//         console.log(ages[i]);
//         task19.innerHTML = ages[i];
//          arrT19.push(ages[i]);
//     }  
// }task19.innerHTML = arrT19


let namesT19 = ["John", "Carol", "John", "Henry", "Lily", "Jordan", "Betty", "Linda", "Alan", "James", "Jack", "Jacob"];
let underage = []; // To store names of underage people

// Loop through the ages array and check for underage people
for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 17) { // Check if the person is underage (you said under 17)
        underage.push(namesT19[i]); // Push the corresponding name from namesT19
    }
}

// Display the list of underage names in the task19 element
document.getElementById("T19").innerHTML = `Names of underage people: ${underage.join(", ")}`;
console.log("Names of underage people:", underage);


//20.


let namesT20 = ["John", "Carol", "John", "Henry", "Lily", "Jordan", "Betty", "Linda", "Alan", "James", "Jack", "Jacob"]; // Array of names
let eighteen = []; // Array to store names of people who are exactly 18 years old

// Loop through the ages array to find people who are exactly 18 years old
for (let i = 0; i < ages.length; i++) {
    if (ages[i] === 18) { // Check if the age is exactly 18
        eighteen.push(namesT20[i]); // Add the corresponding name to the "eighteen" array
    }
}

// Display the list of people who are exactly 18 in the HTML element with id "T18"
document.getElementById("T20").innerHTML = `Names of people who are 18 years old: ${eighteen.join(", ")}`;
console.log("Names of people who are 18 years old:", eighteen);


//21. 
// Skaičių dalybos liekanos tikrinimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurie, dalijant iš 2, turi liekaną.
let justNr = [-14, -6, -1, -7, 5, 8, 11, 13, 22, 27, 31, 40];
let oddNr = []
for (let i = 0; i < justNr.length; i++) {
    if(justNr[i] % 2 !== 0) {
        console.log(justNr[i]);
        task21.innerHTML = justNr[i]; 
        oddNr.push(" "+justNr[i])
    }
}task21.innerHTML = oddNr
document.getElementById("T21").innerHTML = `List of numbers that have a remainder when divided by 2: ${oddNr.join(", ")}`;
console.log("List of numbers that have a remainder when divided by 2:", oddNr);

//22.
//my example:
let evenNr = [];
for (let i = 0; i < justNr.length; i++) {
    if(justNr[i] % 2 === 0) {
        console.log(justNr[i]);
        task22.innerHTML = justNr[i];
        evenNr.push(" "+justNr[i])
    }
}task22.innerHTML = evenNr
document.getElementById("T22").innerHTML = `List of numbers that have no remainder when divided by 2: ${evenNr.join(", ")}`;
console.log("List of numbers that have no remainder when divided by 2:", evenNr);



//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

 

//Example 1:

//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//Example 2:

//Input: nums = [3,2,4], target = 6
//Output: [1,2]

//Example 3:

//Input: nums = [3,3], target = 6
//Output: [0,1]

//Constraints:

    //2 <= nums.length <= 104
    //-109 <= nums[i] <= 109
    //-109 <= target <= 109
    //Only one valid answer exists.