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

//console.log('Hello');
//1.
let array = [1, 2, 3, 4, 5];
let span = document.createElement("span")
span.innerText = 'task1';
task1.appendChild(span)
task1.innerHTML = array;

//2.
// Lyginių skaičių radimas sąraše
// Sukurkite sąrašą skaičių. Naudodami for ciklą ir if sąlygą, išrinkite ir išspausdinkite tik lyginius skaičius iš sąrašo.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let arr = []
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        //console.log(numbers[i])
        //task2.innerHTML = numbers[i];
        arr.push(numbers[i]);
    }
} 
task2.innerHTML = arr   
     //console.log(arr)
//3.
//my exemple:
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const odddNr = (num) => num % 2 !== 0; 
const odd = numberss.filter(odddNr); 
//console.log(odd); 
task3.innerHTML = (odd); 
//4.
// let arrayy = [-1, 32, 2, 3, 55, -4, 24, 5, -6, 7, -41, 8, 0, -9, -10, 11, 12, 78, -13, 69, -14, 15];
// for (let i = 0; i < numbers.length; i += 1) { 
//     if (numbers[i] % 2 !== 0) { 
//         console.log(i);
//         arr.push(numbers[i]);
//     } }
// task4.innerHTML = (arrayy)
//?????????????????????????????????????????????????????????????????????????
//5. 
// Žodžių, ilgesnių nei 5 raidės, spausdinimas
// Sukurkite sąrašą žodžių. Išspausdinkite tik tuos žodžius, kurių ilgis yra didesnis nei 5 raidės.
let words = ["apple", "banana", "kiwi", "watermelon", "pear"];
let arrT5 = []
for (let i = 0; i < words.length; i++) {
    if(words[i].length > 5) {
        task5.innerHTML = words[i];
        arrT5.push(words[i])
    }
    console.log(words[i])
} task5.innerHTML = arrT5   

//???????????????????????????????????????????????????????????????
//6.
//my exemple:
let wordss = ["bear", "wolf", "snake", "koala", "giraffe", "Deer", "cat", "leopatd", "Frog", "squirrel"]
//for (let i = 0; i < wordss.length; i++) {
//    if(wordss[i].length < 4) {
//        console.log(wordss[i]);}}

let min = wordss[0]; 
for (const letters of wordss) { 
    if (letters.length < min.length) { min = letters;} 
    task6.innerHTML = min
} 
//console.log(min);
//????????????????????????????????????????????????????????????????????


//7. 
// Skaičių dalinimas iš 3 be liekanos
// Sukurkite sąrašą skaičių nuo 1 iki 20. Išrinkite ir išspausdinkite tik tuos skaičius, kurie dalijasi iš 3 be liekanos.
let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i =0; i < numbersArr.length; i++) {
    if(numbersArr[i] % 3 === 0) {
        //console.log(numbersArr[i]);
         task7.innerHTML = numbersArr[i]; //??????????????????????????????????
    }  
}
//8.
//my exemple:
for (let i =0; i < numbersArr.length; i++) {
    if(numbersArr[i] % 5 === 0) {
        //console.log(numbersArr[i]);
        task8.innerHTML = numbersArr[i];//?????????????????????????????????????
    }
}

//9.
// Neigiamų skaičių suradimas sąraše
// Sukurkite sąrašą teigiamų ir neigiamų skaičių. Išspausdinkite tik neigiamus skaičius.
let negativeNumbers = [4, -3, 2, -1, 0, -5, 8, -9];

for (let i = 0; i < negativeNumbers.length; i++) {
    if (negativeNumbers[i] < 0) {
        //console.log(negativeNumbers[i]);
        task9.innerHTML = negativeNumbers[i];//?????????????????????????????????
    }
}
 
//10.
// Teksto paieška sąraše
// Sukurkite sąrašą sakinių. Išspausdinkite tik tuos sakinius, kurie turi žodį „JavaScript“.
let sentences = ["I love programming", "JavaScript is awesome", "Coding is fun", "Learn JavaScript"];
for (let i = 0; i < sentences.length; i++) {
    if(sentences[i].includes('JavaScript')) {
        //console.log(sentences[i]);
        task10.innerHTML = sentences[i]; //???????????????????????????????????
    }
} 
//11.
//my exemple:
for (let i = 0; i < sentences.length; i++) {
    if(sentences[i].includes('is')) {
        //console.log(sentences[i]);
        task11.innerHTML = sentences[i];//??????????????????????????????????????
    }
} 
//12.
// Skaičių kvadratų suradimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurių kvadratas yra didesnis nei 50.
let Numbers = [2, 5, 7, 8, 10, 12];
for (let i = 0; i < Numbers.length; i++) {
    const Square = Numbers[i] **2;
    if(Square > 50) { 
         //console.log(Square);
         task12.innerHTML = Numbers[i];//????????????????????????????????
    }  
}
//13.
//my exemple:
for (let i = 0; i < Numbers.length; i++) {
    const Square = Numbers[i] **2;
    if(Square < 50) { 
         console.log(Square);
         task13.innerHTML = Numbers[i];
    }  
}

//14.
// Didžiausio skaičiaus paieška sąraše
// Sukurkite sąrašą skaičių ir raskite didžiausią skaičių. Tikrinkite kiekvieną reikšmę cikle.
let integers = [3, 45, 23, 67, 12, 90, 34]; 
//didnotunderstand
let theLargest = integers[0]; 
for (let i=0; i < integers.length; i++) { 
if (integers[i] > theLargest){
    theLargest = integers[i]; 
    task14.innerHTML = theLargest; //???????????????????????????????
} 
//console.log(theLargest);
} 
//15.
//my exemple:
let theSmolest = integers[0]; 
for (let i=0; i < integers.length; i++) { 
if (integers[i] < theSmolest){
    theSmolest = integers[i]; 
    task15.innerHTML = theSmolest;//?????????????????????????????????????
} 
console.log(theSmolest);
} 
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
let ages = [12, 17, 22, 19, 15, 30, 18];
for (let i = 0; i < ages.length; i++) {
    if(ages[i] > 18){
         console.log(ages[i]);
         task18.innerHTML = ages[i];//?????????????????????????????????????????
    }  
}
//19.
//my example:
for (let i = 0; i < ages.length; i++) {
    if(ages[i] < 17){
         console.log(ages[i]);
         task19.innerHTML = ages[i]; //???????????????????????????????????????
    }  
}
//20. 
// Skaičių dalybos liekanos tikrinimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurie, dalijant iš 2, turi liekaną.
let oddNr = [5, 8, 13, 22, 31, 40];
for (let i = 0; i < oddNr.length; i++) {
    if(oddNr[i] % 2 !== 0) {
        console.log(oddNr[i]);
        task20.innerHTML = oddNr[i]; //????????????????????????????????????????/
    }
}
//21.
//my example:
let evenNr = [5, 8, 13, 22, 31, 40];
for (let i = 0; i < evenNr.length; i++) {
    if(evenNr[i] % 2 === 0) {
        console.log(evenNr[i]);
        task21.innerHTML = evenNr[i];//??????????????????????????????????
    }
}


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