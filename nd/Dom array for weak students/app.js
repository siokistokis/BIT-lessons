

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
//. 3  
//A.sort()
//console.log(A);

//let masyvas = ["a", "b"];
//masyvas.sort();
//console.log(masyvas); // ["a", "b"]



//Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).#pamastykKaip

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

//Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo B nuskaitytais gyvūnais. Išfiltruokite ir nedėkite šunų.

//Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun






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

