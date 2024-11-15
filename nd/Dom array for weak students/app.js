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

//03. DOM ir Array (animals edition)

//	Nuoroda: nėra (jūsų pačių sukurtas html failas)
//	Jūsų darbinis failas: laisvai pasirenkamas
//	Stiliaus failas (jeigu naudosite): laisvai pasirenkamas



//task1  Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais.

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

const ulElement01 = document.getElementById("task01-list");
for (let i = 0; i < A.length; i++) {
  const li = document.createElement('li')
  li.textContent = A[i]
  ulElement01.appendChild(li)
}

//task2 Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais išdėliotais abėcėline tvarka.


// 2.

let sortedAnimals = A.sort((a, b) => a.localeCompare(b, 'lt'))
const ulElement02 = document.getElementById("task02-list")
for (let i = 0; i < sortedAnimals.length; i++) {
  const li = document.createElement('li')
  li.textContent = sortedAnimals[i]
  ulElement02.appendChild(li)
}

//task3. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).#pamastykKaip

const B = [
  'Kalakutas',
  'Višta',
  'Antis',
  'Žąsis',
  'Ančiasnapis',
  'Suo'
];

const D = A.concat(B);
//const D = [...A, ...B];
sortedAnimals = D.sort((a, b) => a.localeCompare(b, 'lt'))
const ulElement03 = document.getElementById("task03-list")
for (let i = 0; i < sortedAnimals.length; i++) {
  const li = document.createElement('li')
  li.textContent = sortedAnimals[i]
  ulElement03.appendChild(li)
}

//4. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais.
let section = document.getElementById('task4');
for (let i = 0; i < A.length; i++) {
  const div = document.createElement('div')
  div.textContent = A[i]
  div.classList.add('circle')
  div.classList.add('circle-background-blue')
  section.appendChild(div)
}


// task5. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra raudoni apskritimai su centre centre užrašytais iš masyvo B nuskaitytais gyvūnais ir tų gyvūnų raidžių skaičiumi.

section = document.getElementById('task5');
for (let i = 0; i < B.length; i++) {
  const div = document.createElement('div')
  div.textContent = B[i]
  div.classList.add('circle')
  div.classList.add('circle-background-red')
  section.appendChild(div)
}


// task6 Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra žali apskritimai su centre užrašytais gyvūnais, nuskaityto iš masyvo A. Dėkite tik tuos gyvūnus, kurie savo pavadinime turi tik vieną žodį.

section = document.getElementById('task6');
for (let i = 0; i < A.length; i++) {
  const div = document.createElement('div')
  div.textContent = A[i]
  div.classList.add('circle')
  div.classList.add('circle-background-green')
  section.appendChild(div)
}


// task7 Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite span tagus, kurie yra geltoni apskritimai su centre užrašytais iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm. Kiekvienas span tagas- atskira raidė. (visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle

section = document.getElementById('task7');
for (let i = 0; i < B.length; i++) {
  const letters = B[i].split('')
  const div = document.createElement('div')
  div.classList.add('task7-div')
  for (let j = 0; j < letters.length; j++) {
    const span = document.createElement('span')
    span.textContent = letters[j]
    span.classList.add('circle-small')
    span.classList.add('circle-background-yellow')
    div.appendChild(span)
  }
  section.append(div)
}


//task8 Html faile sukurkite du ul tagus (tiesiogiai). Į  vieną sukurtą tagą, su JS, sudėkite li tagus su iš masyvo C nuskaitytais gyvūnais, kurių pavadinimas ne ilgesnis kaip 6 raidės, į kitą likusius.
const C = [
  'Višta',
  'Gaidys',
  'Sernas',
  'Lapė',
  'Vilkas',
  'Suo dingo',
  'Barsukas',
  'Voverė',
  'Suo',
  'Naminis katinas',
  'Laukinis katinas',
  'Suo atsirado',
  'Bebras',
  'Ožys'
];


const shorstUl = document.getElementById('shortNames');
const longsUl = document.getElementById('longNames');

C.forEach(animal =>{
  const li = document.createElement('li')
  li.textContent = animal
  if (animal.length <= 6){
    shorstUl.appendChild(li);   
  }else {
    longsUl.appendChild(li);
  }
})
//task9 Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo B nuskaitytais gyvūnais. Išfiltruokite ir nedėkite šunų.

const ulElement09 = document.getElementById('task09-animal-list')
let filteredAnimals = B.filter(animal => !animal.toLowerCase().includes('antis'))
filteredAnimals = filteredAnimals.filter(animal => !animal.toLowerCase().includes('kalakutas'))
filteredAnimals.forEach(animal => {
  const li = document.createElement('li')
  console.log('ggjfutdutdufuyf')
  li.textContent = animal
  ulElement09.appendChild(li)
})





//task10 Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun



function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

for (let i = 0; i < 10; i++) {
console.log(`Dydissss: ${C.length}`)
  for (let j = 0; j < C.length; j++) {
      const span = document.createElement('span');
      span.style.fontSize = `${rand(10, 100)}px`;
      span.style.left = `${rand(0, screenWidth)}px`;
      span.style.top = `${rand(0, screenHeight)}px`;
      span.style.color = `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`
      span.innerText = C[j];
      document.body.appendChild(span);
  }
}

// function displayAnimals() {
//   C.forEach(animal => {
//     const fontSize = rand(minFontSize, maxFontSize) + 'px';
//     animalElement.style.fontSze = fontSize;
//   animalElement.style.color = randomColor();
//   const maxX = screenWidth - parseInt(fontSize) - 200;
//   const maxY = screenHeight - parseInt(fontSize) - 5;
//   const x = rand(0, maxX);
//   const y = rand(0, maxY);
//   animalElement.style.position = 'absolute';
//   animalElement. style.left = `${x}px`;
//   animalElement. style.top = `${y}px`;
//   document.body.appendChild(animalElement);

//   });
// }

// displayAnimals();
//}  
 

//second option

//  for (let i = 0; i < 5; i++) {
//   C.forEach(animals => {
//     const p =document.createElement('p');
//     const sizeOfLetters = rand(10, 100);
//     const colorOFLetters = randomColor();
//     const top = rand(0, window.innerHeight - sizeOfLetters);
//     const left = rand(0, window.innerWidth - sizeOfLetters);

//     p.style.color = colorOFLetters;
//     p.style.fontSize = sizeOfLetters + 'px';
//     p.style.position = 'absolute';
//     p.style.top = top + 'px';
//     p.style.left = left + 'px';
//   })
//  };




