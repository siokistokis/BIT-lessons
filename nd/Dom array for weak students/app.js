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

//task2 Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais išdėliotais abėcėline tvarka.


// 2.

// const sorted = A.sort((a, b) => {
// if (a.toLowerCase() < b.toLowerCase()) {
// return -1;
// }
// if (a.toLowerCase() > b.toLowerCase()) {
// return 1;
// }
// return 0;
// });

// console.log(sorted);

// 2.
//   const A = Document.querySelector('#task2')
//   const sorted = A.sort((aa, bb) => aa.localeCompare(bb));
//   console.log(sorted);
//   let someList = document.getElementById("someList");
//   sorted.forEach(item => {
//   let li = document.createElement("li");
//    li.textContent = item;
//    someList.appendChild(li);
//    task2.innerHTML = A;
//  })


 
//const ul1 = document.querySelector ("#task2");
//A.sort();
// A.forEach((animal) => {
//    const listItems = document.createElement("li");
//    listItems.textContent = animal;
//    ul1.appendChild(listItems);
//  });

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



//task3. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).#pamastykKaip

const B = [
  'Kalakutas',
  'Višta',
  'Antis',
  'Žąsis',
  'Ančiasnapis'
];

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


//4. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais.

// let task4 = document.getElementById("animalsSection");
// A.forEach(item => {
//   let circleDiv = document.createElement("div")
//   circleDiv.classList.add("circle");
//   circleDiv.textContent = item;
//   task4.appendChild(circleDiv);
// })
// console.log(task4);

//second option
const circles = document. querySelector('#task4');
A.forEach(A => {
  divas.style.width ='100px';
  divas.style.height = '100px';
  divas.style.borderRadius = '50px';
  divas.style.bacgroundColor = 'skyblue';
  divas.style.texhAlign = 'center';
  divas.innerText = A;
  divas.style.display = 'flex';
  divas.style.alignItems = 'center';
  divas.style.justifyContent = 'center';
  circles.style.display = 'flex';
  circles.appendChild(divas);
})

// task5. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra raudoni apskritimai su centre centre užrašytais iš masyvo B nuskaitytais gyvūnais ir tų gyvūnų raidžių skaičiumi.

const circles2 = document.queryselector('#task5');
B.forEach(B => {
  const divas2 = document.createElement('div');
  divas.style.width ='100px';
  divas.style.height = '100px';
  divas.style.borderRadius = '50px';
  divas.style.bacgroundColor = 'skyblue';
  divas.style.texhAlign = 'center';
  divas.innerText = B + ' ' + B.length;
  divas.style.display = 'flex';
  divas.style.alignItems = 'center';
  divas.style.justifyContent = 'center';
  circles2.style.display = 'flex';
  circles2.appendChild(divas2);
})


// task6 Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra žali apskritimai su centre užrašytais gyvūnais, nuskaityto iš masyvo A. Dėkite tik tuos gyvūnus, kurie savo pavadinime turi tik vieną žodį.

const circles3 = document. querySelector('#task6');
const oneWord = A.filter(name => {
  const one = name.split(" ");
  return one. length === 1
})
 oneWord.forEach(name => {
  const div = document.createComment('div');
  div.innerText = name;
  dispatchEvent.style.width ='100px';
  div.style.height = '100px';
  div.style.borderRadius = '50px';
  div.style.bacgroundColor = 'green';
  div.style.texhAlign = 'center';
  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.justifyContent = 'center';
  circles3.style.display = 'flex';
  circles3.appendChild(div); 
 })

// task7 Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite span tagus, kurie yra geltoni apskritimai su centre užrašytais iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm. Kiekvienas span tagas- atskira raidė. (visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle

// const task07 = document.querySelector('#task7');
// B.forEach(B => {
//   let letters = B.split('');
 //     const divas1 = document.createElement('div');
//   letters.forEach(letters => {
//     let.span = dokument.createComment('span');
//     span.innerText = letters;
//     span.style.width = '40px';
//     span.style.height = '40px';
//     span.style.borderRadius = '20px'
//     span.style.bacgroundColor = 'yellow';
//     span.style.texhAlign = 'center';
//     span.style.display = 'inline-flex';
//     span.style.alignItems = 'center';
//     span.style.justifyContent = 'center';
//     //task07.style.display = 'flex';
//     //task07.appendChild(span);
//     divas1.appendChild(span);
//   })
//   task07.appendChild(divas1)
// })

const task07 = document.querySelector('#task7');
for (let i=0; i<B.length; i++) {
  const word = B[i];
  constdivas = document.createElement('div');
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    const span = document.createElement('span');
    span.innerText = letter;
    span.style.width = '50px';
    span.style.height = '50px';
    span.style.borderRadius = '50%'
    span.style.bacgroundColor = 'yellow';
    span.style.display = 'inline-flex';
    span.style.alignItems = 'center';
    span.style.justifyContent = 'center';
    divas.appendChild(span)
  }
  task07.appendChild(divas);
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

// const task8ul = dokument.querySelector('#task8.one');
// const task8ul2 = dokument.querySelector('#task8.two');
// const longest = C.filter(word => word.length > 6);
// const shortest = C.filter(word1 => word1.length <= 6);

// longest.forEach(longest => {
//   let li = document.createElement('li');
//   li.innerText = longest;
//   li.style.color = 'green'
//   task8ul.appendChild(li);
// })
// shortest.forEach(shortest => {
//   let li1 = document.createElement('li');
//   li1.innerText = shortest;
//   li1.style.color = 'blue'
//   task8ul. appendChild(li1)
// })

//second option
// const shortertThan6 = C.filter(word => word.length < 6);
// const longerThan6 = C.filter(word =>word.length > 6);
// const ulOne = document.querySelector('.short');
// const ulTwo = document.querySelector('.long');

// shortertThan6.forEach(animal => {
//   const li = document.querySelector('li');
//   li.innerText = animal;
//   ulOne.appendChild(li);
// })
// longerThan6.forEach(animal => {
//   const li = document.querySelector('li');
//   li.innerText = animal;
//   ulTwo.appendChild('li');
// })

//third option

const shorstUl = document.querySelector('.shorts');
const longsUl = document.querySelector('.longs');

C,forEach(animal =>{
  if (animal.lenght < 6){
    const li = document.querySelector('li');
    li.innerText = animal;
    shorstUl.appendChild(li);   
  }else {
    const li = document.querySelector('li');
    li.innerText = animal;
    longsUl.appendChild(li);
  }
})
//task9 Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo B nuskaitytais gyvūnais. Išfiltruokite ir nedėkite šunų.

const task09 = document.querySelector('#task9');
// C
//   .filter(animal => animal !=='Suo' && animal !=='Suo dingo' && animal!=='Suo atsirado')
//   .forEach(gyvunas => {
//     const li = document.createElement('li');
//   })

const withoutSuo = C.filter(animal => !animal.includes('Suo'));
withoutSuo.forEach(animals => {
    const li = document.createElement('li');
    li.innerText = animals;
    task09.appendChild(li);
})

//task10 Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun


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




