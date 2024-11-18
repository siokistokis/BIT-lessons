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
document.getElementById("T6").innerHTML = `Chorter than 5 letter words from array: ${arrT6.join(", ")}`;
console.log("Chorter than 5 letter words from array:", arrT6);

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
}  task7.innerHTML = arrT7
//8.
//my exemple:
let arrT8 = []
for (let i =0; i < numbersArr.length; i++) {
    if(numbersArr[i] % 5 === 0) {
        //console.log(numbersArr[i]);
        //task8.innerHTML = numbersArr[i];
        arrT8.push(" "+numbersArr[i])
    }
}  task8.innerHTML = arrT8

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
}  task9.innerHTML = arrT9
 
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

//12.
// Skaičių kvadratų suradimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurių kvadratas yra didesnis nei 50.
let Numbers = [2, 5, 7, 8, 10, 12]
let arrT12 = []
for (let i = 0; i < Numbers.length; i++) {
    const Square = Numbers[i] **2;
    if(Square > 50) { 
         //console.log(Square);
         //task12.innerHTML = Numbers[i];
         arrT12.push(" "+Numbers[i])
    }  
}task12.innerHTML = arrT12
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

//14.
// Didžiausio skaičiaus paieška sąraše
// Sukurkite sąrašą skaičių ir raskite didžiausią skaičių. Tikrinkite kiekvieną reikšmę cikle.
let integers = [3, 45, -14, 23, 67, -5, 12, 90, -37, 34]; 
let arrT14 = []
let theLargest = integers[0]; 
for (let i=0; i < integers.length; i++) { 
if (integers[i] > theLargest){
    theLargest = integers[i]; 
    arrT14.push(" "+integers[i]);
    task14.innerHTML = theLargest; 
} 
//console.log(theLargest);
} task14.innerHTML = arrT14
//15.
//my exemple:
let arrT15 = []
let theSmolest = integers[0]; 
for (let i=0; i < integers.length; i++) { 
if (integers[i] < theSmolest){
    theSmolest = integers[i];
    arrT15.push(" "+integers[i]);
    task15.innerHTML = theSmolest;
} 
//console.log(theSmolest);
} task15.innerHTML = arrT15
//16.
// Raidžių skaičiavimas žodyje
// Sukurkite žodį ir suskaičiuokite, kiek kartų žodyje pasikartoja raidė „a“.
let word = "banana";
let letterCount = 0;
for (let i = 0; i < word.length; i++) {
  if (word[i].includes("a")) {
    letterCount ++;
    task16.innerHTML = letterCount;
  }
}
 console.log(letterCount);
//17.
 //my example
 let word1 = "amusement"
 let numberOfm = 0;
 for (let i = 0; i < word1.length; i++) {
    if (word1[i].includes("m")) {
        numberOfm ++
        task17.innerHTML = numberOfm;
    }
 }
 console.log(numberOfm);
//18. 
// Amžių filtravimas sąraše
// Sukurkite sąrašą žmonių amžių. Išspausdinkite tik tuos, kurie yra vyresni nei 18.
let ages = [12, 10, 17, 40, 22, 36, 19, 15, 9, 30, 18];
let arrT18 = []
for (let i = 0; i < ages.length; i++) {
    if(ages[i] > 18) {
        console.log(ages[i]);
        task18.innerHTML = ages[i];
        arrT18.push(" "+ages[i]);
    }  
}task18.innerHTML = arrT18
//19.
//my example:
let arrT19 = []
for (let i = 0; i < ages.length; i++) {
    if(ages[i] < 17){
        console.log(ages[i]);
        task19.innerHTML = ages[i];
         arrT19.push(ages[i]);
    }  
}task19.innerHTML = arrT19
//20. 
// Skaičių dalybos liekanos tikrinimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurie, dalijant iš 2, turi liekaną.
let justNr = [-14, -6, -1, -7, 5, 8, 11, 13, 22, 27, 31, 40];
let oddNr = []
for (let i = 0; i < justNr.length; i++) {
    if(justNr[i] % 2 !== 0) {
        console.log(justNr[i]);
        task20.innerHTML = justNr[i]; 
        oddNr.push(" "+justNr[i])
    }
}task20.innerHTML = oddNr
//21.
//my example:
let evenNr = [];
for (let i = 0; i < justNr.length; i++) {
    if(justNr[i] % 2 === 0) {
        console.log(justNr[i]);
        task21.innerHTML = justNr[i];
        evenNr.push(" "+justNr[i])
    }
}task21.innerHTML = evenNr


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