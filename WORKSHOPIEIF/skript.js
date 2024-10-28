const task1 = document.querySelector(".select1");
const task2 = document.querySelector(".select2");
const task3 = document.querySelector(".select3");
const task4 = document.querySelector(".select4");
const task5 = document.querySelector(".select5");
const task6 = document.querySelector(".select6");
const task7 = document.querySelector(".select7");
const task8 = document.querySelector(".select8");
const task9 = document.querySelector(".select9");
const task10 = document.querySelector(".select10");



const rand = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

console.log("Veikia");
console.log("Veikia");


// Task1:Teigiami arba neigiami skaiciai
//Aprasymas: Sukurk kintamaji skaiciu ir priskirk jam reiksme. naudojant if, patikrink ar sis skaucius teigiamas, ar neigiamas.Atspausdink rezultata.
//Pvz.: Jei skaicius = -5, konsoleje turetu atsirasti tekstas"Skaicius yra neigiamas".

const skaicius = rand(-1000,1000);
console.log(skaicius);

if (skaicius>0) {
    task1.innerText = 'Skaicius ${skaicius} yra teigiamas'
}

else if (skaicius<0) {
    task1.innerText = 'Skaicius ${sakaicius} yra neigiamas'
}

else{
    task1.innerText = 'Skaicius yra nulis'
}

//Task2 : Lyginis arba nelyginis skaicius
//Aprastmas:Sukurk kintamaji skaiciu ir priskirk jam reiksme.Naudodamas if, patikrink, ar skacius yra lyginis, ar nelyginis. Atspausdink rezultata.
//Pvz.: Jei sakiacius = 4, konsoleje turetu atsirastitekstas "skaicius yra lyginis".

const skaicius1 = rand(0,1000)

console.log(skaicius);

if (skaicius1 % 2 === 0) {
    task2.innerText = 'Skaicius ${skaicius1} yra lyginis'
}

else {
    task2.innerText = 'Skaicius ${skaicius1} yra nelyginis'
    task2.innerText = 'Mano skaicius ${skaicius1} yra lyginis'
}

// Task3: temperatures patikrinimas
//Aprasymas: Sukurk kintamaji temperatura. naudok if, kad patikrintum, ar temperatura zemiau nulio, tarp nulio ir 30, ar virs 30. Atspausdink tinkama pranesima.
//Pvz.: Jei temperatura = 15, konsoleje turetu atsirasti tekstas "Temperarura yra tarp0 ir 30 laipsniu".


// Task6: Pasiūlymas pirkėjui
// Aprašymas: Sukurk kintamąjį suma. Jei suma mažesnė nei 100, pasiūlyk „Įsigyk daugiau prekių“. Jei suma tarp 100 ir 500, parašyk „Jūs gaunate nuolaidą!“. Jei virš 500, parašyk „Jūs gaunate papildomą dovaną!“.
// Pavyzdys: Jei suma = 250, konsolėje turėtų atsirasti tekstas „Jūs gaunate nuolaidą!“.
 
 
 
 
 
// Užduotis 7: Vardų patikrinimas
// Aprašymas: Sukurk kintamąjį vardas. Jei vardas yra „Jonas“, atspausdink „Labas, Jonai!“, jei „Ona“ – „Labas, Ona!“, o kitu atveju – „Labas, [vardas]!“.
// Pavyzdys: Jei vardas = „Ona“, konsolėje turėtų atsirasti tekstas „Labas, Ona!“.
 
 
 
 
// Užduotis 8: Egzaminų rezultatas
// Aprašymas: Sukurk kintamąjį rezultatas. Jei rezultatas didesnis nei 90, parašyk „Puiku!“, jei tarp 60 ir 90 – „Gerai!“, jei žemiau 60 – „Nepakanka!“.
// Pavyzdys: Jei rezultatas = 85, konsolėje turėtų atsirasti tekstas „Gerai!“.
 
 
 
 
 
// Užduotis 9: Darbo valandos
// Aprašymas: Sukurk kintamąjį valandos. Jei valandos reikšmė tarp 9 ir 17 (imtinai), parašyk „Dabar darbo laikas“, kitu atveju – „Ne darbo laikas“.
// Pavyzdys: Jei valandos = 14, konsolėje turėtų atsirasti tekstas „Dabar darbo laikas“.
 
 
 
 
// Užduotis 10: Studentų balai
// Aprašymas: Sukurk kintamuosius studentas1 ir studentas2. Patikrink, kuris iš jų gavo daugiau balų, ir atspausdink atitinkamą pranešimą.
// Pavyzdys: Jei studentas1 = 75 ir studentas2 = 85, konsolėje turėtų atsirasti tekstas „Studentas 2 gavo daugiau balų“.
 
 
// Užduotis 4: Amžiaus tikrinimas
// Aprašymas: Sukurk kintamąjį amzius ir patikrink, ar amžius yra mažesnis nei 18, tarp 18 ir 65, ar virš 65. Atspausdink rezultatą.
// Pavyzdys: Jei amzius = 70, konsolėje turėtų atsirasti tekstas „Asmuo yra pensinio amžiaus“.
 
 
 