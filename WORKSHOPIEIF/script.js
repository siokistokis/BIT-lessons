const Task1 = document.querySelector(".select1");
const Task2 = document.querySelector(".select2");
const Task3 = document.querySelector(".select3");
const Task4 = document.querySelector(".select4");
const Task5 = document.querySelector(".select5");
const Task6 = document.querySelector(".select6");
const Task7 = document.querySelector(".select7");
const Task8 = document.querySelector(".select8");
const Task9 = document.querySelector(".select9");
const Task10 = document.querySelector(".select10");



const rand = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

console.log("Veikia");
console.log("Veikia");


// Task1:Teigiami arba neigiami skaiciai
//Aprasymas: Sukurk kintamaji skaiciu ir priskirk jam reiksme. naudojant if, patikrink ar sis skaucius teigiamas, ar neigiamas.Atspausdink rezultata.
//Pvz.: Jei skaicius = -5, konsoleje turetu atsirasti tekstas"Skaicius yra neigiamas".

const number = rand(-1000,1000);
console.log(number);

if (number>0) {
    Task1.innerText = `The Number ${number} are positive`
}

else if (number<0) {
    Task1.innerText = `The number ${number} are negative`
    //Task1.innerText = 'Skaicius ' + skaicius + ' yra neigiamas'
}

else{
    Task1.innerText = `The Number is zero`
}

//Task2 : Lyginis arba nelyginis skaicius
//Aprastmas:Sukurk kintamaji skaiciu ir priskirk jam reiksme.Naudodamas if, patikrink, ar skacius yra lyginis, ar nelyginis. Atspausdink rezultata.
//Pvz.: Jei sakiacius = 4, konsoleje turetu atsirastitekstas "skaicius yra lyginis".

const number1 = rand(0,1000)

console.log(number);

if (number1 % 2 === 0) {
    Task2.innerText = ` The Number ${number1} is even`
}

else {
    Task2.innerText = `The Number ${number1} is odd`
    Task2.innerText = `My Number ${number1}`
}

// Task3: temperatures patikrinimas
//Aprasymas: Sukurk kintamaji temperatura. naudok if, kad patikrintum, ar temperatura zemiau nulio, tarp nulio ir 30, ar virs 30. Atspausdink tinkama pranesima.
//Pvz.: Jei temperatura = 15, konsoleje turetu atsirasti tekstas "Temperarura yra tarp0 ir 30 laipsniu".

const temp = rand(-30, 100)

if(temp<0) {
    Task3.innerText = ` The temperature ${temp} is below zero` 
}

else if (temp>=0 && temp<=30) {
    Task3. innerText = ` The temperature ${temp} is between zero and thirty`
}

else {
    Task3.innerText = `Its getting hot in here`
}

//if(temp>0) {
    //Task3.innerText = 'temperatura ${temp} yra teigiama' 
//}

//else if (temp<0){
    //Task3. innerText = 'temperatura${temp} yra neigiama'
//}

//else {
    //Task3.innerText = 'temperarura yra nulis'
//}

//Task4: Amziaus tikrinimas
//Aprasymas:  Sukurk kintamaji amzius ir patikrink,ar amzius yra mazesnis nei 18, tarp 18 ir ///65, ar virs 65. Atspausdink rezultata.
//Pvz.: Jei amzius = 70, konsoleje turetu atsirasti tekstas "Asmuo yra pensinio amziaus".

const age = rand(0, 100);

console.log (age);

if(age < 18) {
    Task4.innerText = `a child of ${age} years old`
}

else if (age >18 && age<65) {
    Task4.innerHTML = `worker's age is ${age}`
}

else {
    Task4.innerHTML = `retired`
}

//Task5: Skaiciu palyginimas
//Aprasymas: Sukurk du kintamuosius air break. Naudok if, kad palygintum ju reiksmes ir //atspausdintum, kuris yra didesnis, arba jei jie lygus.
//Pvz.: Jei a = 10 ir b = 20, konsoleje turetu atsirasti tekstas "Skaicius b yra didesnis".

const number5 = rand(1000, 2000);
const number50 = rand(1000, 2000);

console.log(number5, number50);

if(number5 >= number50) {
    Task5.innerText = ` The Number ${number5} is greater than ${number50}`
}

else if (number50>number5) {
    Task5.innerText = ` The Number ${number5} is less than ${number50}`
}

else {
    Task5.innerText = `The Numbers ${number5} are equal ${number50}`
}


// Task6: Pasiūlymas pirkėjui
// Aprašymas: Sukurk kintamąjį suma. Jei suma mažesnė nei 100, pasiūlyk „Įsigyk daugiau prekių“. Jei suma tarp 100 ir 500, parašyk „Jūs gaunate nuolaidą!“. Jei virš 500, parašyk „Jūs gaunate papildomą dovaną!“.
// Pavyzdys: Jei suma = 250, konsolėje turėtų atsirasti tekstas „Jūs gaunate nuolaidą!“.
 
const sum = rand(0, 400);


console.log(sum);

if(sum<100) {
    Task6.innerText = `You cuold by more goods`
}
 
 else if(sum>250) {
    Task6.innerText = `You are getting a discount`
 }

 else {
    Task6.innerText = `Thank you for your purchase`
 }
 
 
// Užduotis 7: Vardų patikrinimas
// Aprašymas: Sukurk kintamąjį vardas. Jei vardas yra „Jonas“, atspausdink „Labas, Jonai!“, jei „Ona“ – „Labas, Ona!“, o kitu atveju – „Labas, [vardas]!“.
// Pavyzdys: Jei vardas = „Ona“, konsolėje turėtų atsirasti tekstas „Labas, Ona!“.
 
 const name = rand(1, 3);

 console.log (name)

 let name1 = 'George';
 let name2 = 'Jack';
 let name3 = 'Henry';

  if(name1) {
    Task7.innerText = `Hello ${name1}`
  } 

  else if(name2) {
    Task7.innerText = `Hello ${name2}`
  }

  else {
    Task7.innerText = `Hello ${name3}`
  }
 
// Užduotis 8: Egzaminų rezultatas
// Aprašymas: Sukurk kintamąjį rezultatas. Jei rezultatas didesnis nei 90, parašyk „Puiku!“, jei tarp 60 ir 90 – „Gerai!“, jei žemiau 60 – „Nepakanka!“.
// Pavyzdys: Jei rezultatas = 85, konsolėje turėtų atsirasti tekstas „Gerai!“.
 
 const result = rand(1,100)
 
 console.log (result);

 if(result>90) {
    Task8.innerText = `Excellent! :)`
 }

 else if(result<60) {
    Task8.innerText = `Not Enough :(`
 }
 
 else {
    Task8.innerText = `Good`
 }

 
// Užduotis 9: Darbo valandos
// Aprašymas: Sukurk kintamąjį valandos. Jei valandos reikšmė tarp 9 ir 17 (imtinai), parašyk „Dabar darbo laikas“, kitu atveju – „Ne darbo laikas“.
// Pavyzdys: Jei valandos = 14, konsolėje turėtų atsirasti tekstas „Dabar darbo laikas“.
 
 const Hour = rand(8, 24);

 if (Hour>= 8 && Hour<=17) {
    Task9.innerText = `${Hour} working time`
 }  
 else {
    Task9.innerText = `${Hour} closed`
}
 
// Užduotis 10: Studentų balai
// Aprašymas: Sukurk kintamuosius studentas1 ir studentas2. Patikrink, kuris iš jų gavo daugiau balų, ir atspausdink atitinkamą pranešimą.
// Pavyzdys: Jei studentas1 = 75 ir studentas2 = 85, konsolėje turėtų atsirasti tekstas „Studentas 2 gavo daugiau balų“.
 
const Student1 = rand (1, 100);
const Student2 = rand (1, 1000);

if (Student1< Student2) {
    Task10.innerText = `Student2 got ${Student2}. Student1 got ${Student1}. Student2 got more points`
} else {
    Task10.innerText = `Student1 got ${Student1}. Student2 got ${Student2}. Student1 got more points`
}

 
// Užduotis 4: Amžiaus tikrinimas
// Aprašymas: Sukurk kintamąjį amzius ir patikrink, ar amžius yra mažesnis nei 18, tarp 18 ir 65, ar virš 65. Atspausdink rezultatą.
// Pavyzdys: Jei amzius = 70, konsolėje turėtų atsirasti tekstas „Asmuo yra pensinio amžiaus“.
 
 
 