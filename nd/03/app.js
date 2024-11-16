
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

//Surasti ilgiausią stringą;
//Surasti trumpiausią stringą;
//Surasti stringą, kuris prasideda “a” raide;
//Surasti stringą su daugiausia žodžių;
//Surasti stringą su mažiausiai žodžių;
//Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;
//Suskaičiuoti kiek masyve yra žodžių;
//Suskaičiuoti visas ‘s’ raides;
//Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);
//Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);


//C. Mišrus masyvas.

//Surasti didžiausią skaičių;
//Surasti trumpiausią stringą;
//Suskaičiuoti kiek skaičių yra 0-iai (ne stringai ‘0’, o skaičiai!);
//Suskaičiuoti teigiamų skaičių sumą (tik skaičių, ne stringų!);
//Suskaičiuoti bendrą visų stringų ilgį;
//Suskaičiuoti vidutinį stringo ilgį;
//Suskaičiuoti kiek elementų masyve yra nei stringas nei skaičius;
//Suskaičiuoti skaičių, kuriuos galima padaryti iš stringų sumą (jeigu stringas verčiasi ne į NaN);
//Rasti ko yra daugiau- stringų ar skaičių;
//Rasti ko yra daugiau- loginių true ar false;



//D. Dvimatis masyvas su skaičiais.

//Surasti didžiausią skaičių;
//Rasti ar yra bent vienas sub masyvas ilgesnis nei 5;
//Suskaičiuoti kiek elementų yra sub masyvai trumpesni nei 2;
//Surasti didžiausią skaičių, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
//Suskaičiuoti didesnių nei 10 skaičių sumą, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 3;
//Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 10-20, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3;
//Suskaičiuoti kiek skaičių be liekanos dalinasi iš 5, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
//Suskaičiuoti kiek skaičių be liekanos dalinasi iš 5, ieškant tik tokiuose sub masyvuose, kurie yra 2 ilgio;
//Suskaičiuoti sumą skaičių, kurie sub masyve turi indeksą 2;
//Suskaičiuoti vidurkį skaičių, kurie sub masyve turi indeksą 1 arba 3;



//E. Dvimatis masyvas su stringais.

//Suskaičiuoti bendrą stringų ilgį;
//Suskaičiuoti bendrą stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
//Suskaičiuoti bendrą, ilgesnių nei 6, stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
//Surasti stringą, kuris prasideda “a” raide, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 3;
//Surasti stringą, kuris pasibaigia “r” raide, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3;
//Surasti trumpiausią stringą, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
//Suskaičiuoti vidutinį stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
//Suskaičiuoti vidutinį stringų, ilgesnių nei 5, ilgį, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
//Suskaičiuoti vidutinį stringų ilgį, kurie sub masyve turi indeksą 2;
//Suskaičiuoti kiek “s” raidžių yra stringuose, kurie sub masyve turi indeksą 0 arba yra sub masyvo paskutinis elementas;


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




