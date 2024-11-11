//03. DOM ir Array (animals edition)

//	Nuoroda: nėra (jūsų pačių sukurtas html failas)
//	Jūsų darbinis failas: laisvai pasirenkamas
//	Stiliaus failas (jeigu naudosite): laisvai pasirenkamas



//Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais.
const A = [
  'Bebras',
  'Zebras',
  'Vilkas',
  'Lapė',
  'Barsukas',
  'Voverė',
  'Laukinis katinas',
  'Šuo',
  'Naminis katinas',
];

const B = [
  'Kalakutas',
  'Višta',
  'Antis',
  'Žąsis',
  'Ančiasnapis'
];


//Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais išdėliotais abėcėline tvarka.

// 1.

//const sorted = A.sort((a, b) => {
//if (a.toLowerCase() < b.toLowerCase()) {
//return -1;
//}
//if (a.toLowerCase() > b.toLowerCase()) {
//return 1;
//}
//return 0;
//});

//console.log(sorted);

// 2.

  const sorted = A.sort((aa, bb) => aa.localeCompare(bb));
  console.log(sorted);
  let someList = document.getElementById("someList");
  sorted.forEach(item => {
  let li = document.createElement("li");
   li.textContent = item;
   someList.appendChild(li);
 })


 //second option
// const ul1 = document.querySelector ("#task1");
// A.sort();
// A.forEach((animal) => {
//   const listItems = document.createElement("li");
//   listItems.textContent = animal;
//   ul1.appendChild(listItems);
// });

//third option
// A.sort((a, b) => A.localeCompare(b, 'li'));
// console.log(A);

// A.forEach(animals => {
//   const li = document.createElement('li');
// li.innerText = animals;
// ul2. appendChild(li);
// })




//. 3  
//A.sort()
//console.log(A);

//let masyvas = ["a", "b"];
//masyvas.sort();
//console.log(masyvas); // ["a", "b"]



//Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).#pamastykKaip

// const ul2 = document.querySelector("#task2");
// const joinedAnimals = [...A,...B];
// joinedAnimals.sort();
// joinedAnimals.forEach((animal1) => {
//   const listItems =document.createElementNS("li");
//   listItems.textContent = animal1;
//   ul2.appendChild(listItems);
// });

let listTwoArrays = document.createElement('ul');
let twoArrays = A.concat(B);
document.body.appendChild(listTwoArrays);
twoArrays = twoArrays.sort((aa, bb) => aa.localeCompare(bb));
twoArrays.forEach(item => {
  let li = document.createElement("li");
  li.textContent = item;
  listTwoArrays.appendChild(li);
})
document.body.appendChild(listTwoArrays);

console.log(twoArrays)


//Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais.

let task3 = document.getElementById("animalsSection");
A.forEach(item => {
  let circleDiv = document.createElement("div")
  circleDiv.classList.add("circle");
  circleDiv.textContent = item;
  task3.appendChild(circleDiv);
})
console.log(task3);


//Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra raudoni apskritimai su centre centre užrašytais iš masyvo B nuskaitytais gyvūnais ir tų gyvūnų raidžių skaičiumi.

//Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra žali apskritimai su centre užrašytais gyvūnais, nuskaityto iš masyvo A. Dėkite tik tuos gyvūnus, kurie savo pavadinime turi tik vieną žodį.

//Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite span tagus, kurie yra geltoni apskritimai su centre užrašytais iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm. Kiekvienas span tagas- atskira raidė. (visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle

//Html faile sukurkite du ul tagus (tiesiogiai). Į  vieną sukurtą tagą, su JS, sudėkite li tagus su iš masyvo C nuskaitytais gyvūnais, kurių pavadinimas ne ilgesnis kaip 6 raidės, į kitą likusius.
const C = [
  'Višta',
  'Gaidys',
  'Šernas',
  'Lapė',
  'Vilkas',
  'Šuo dingo',
  'Barsukas',
  'Voverė',
  'Šuo',
  'Naminis katinas',
  'Laukinis katinas',
  'Šuo atsirado',
  'Bebras',
  'Ožys'
];




//Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo B nuskaitytais gyvūnais. Išfiltruokite ir nedėkite šunų.

//Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun


function displayAnimals() {
  C.forEach(animal => {
    const fontSize = rand(minFontSize, maxFontSize) + 'px';
    animalElement.style.fontSze = fontSize;
  animalElement.style.color = randomColor();
  const maxX = screenWidth - parseInt(fontSize) - 200;
  const maxY = screenHeight - parseInt(fontSize) - 5;
  const x = rand(0, maxX);
  const y = rand(0, maxY);
  animalElement.style.position = 'absolute';
  animalElement. style.left = `${x}px`;
  animalElement. style.top = `${y}px`;
  document.body.appendChild(animalElement);

  });
}

displayAnimals();





