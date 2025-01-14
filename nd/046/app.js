
console.log('Kartojimas JS');

// Funkcija atsitiktiniam skaičiui sugeneruoti nuo min iki max
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// 1. Sugeneruojame atsitiktinį skaičių nuo 0 iki 4 ir priskiriame raidę "A" arba "B" naudojant ternary operatorių
let pirmas = rand(0, 4);  // Sugeneruojame skaičių nuo 0 iki 4
pirmas = (pirmas === 0 || pirmas === 1 || pirmas === 2) ? "A" : "B";  // Naudojame ternary operatorių
console.log(pirmas);

// 2. Sugeneruojame atsitiktinį skaičių nuo 1 iki 20 ir priskiriame raidę "A" arba "B" pagal tam tikras sąlygas
let antras = rand(1, 20);
antras = [5, 10, 15, 20].includes(antras) ? "A" : "B";  // Patikriname, ar skaičius yra 5, 10, 15 arba 20
console.log(antras);

// 3. Sukuriame masyvą iš 5 elementų, kiekvienas elementas yra atsitiktinis skaičius nuo 5 iki 25, naudojant rest operatorių
let masyvas = Array.from({ length: 5 }, () => rand(5, 25));
console.log('Pradinis masyvas:', masyvas);

// Pridedame naują elementą naudojant rest operatorių
const naujasMasyvas = [...masyvas, rand(5, 25)];
console.log('Masyvas su nauju elementu:', naujasMasyvas);

// 4. Sukuriame masyvą [5, 4, 3, 2, 1, 1, 2, 3, 4, 5] naudodami for ciklą ir rest operatorių
let masyvas2 = [];

// Naudojame for ciklą su 5 iteracijomis, kad sukurtume pirmąją pusę masyvo
for (let i = 5; i >= 1; i--) {
    masyvas2 = [...masyvas2, i];
}

// Pridedame atvirkštinę dalį su tomis pačiomis reikšmėmis
for (let i = 2; i <= 5; i++) {
    masyvas2 = [...masyvas2, i];
}

console.log(masyvas2);  // Rezultatas bus [5, 4, 3, 2, 1, 1, 2, 3, 4, 5]

// Trūkstamas masyvas, kurį naudosime 5, 6 ir 7 užduotims
const skaiciai = [45, 6, 87, 20, 47, 33, 1, 8, 99, 100];

// 5. Sukurti naują masyvą, kuriame skaičiai išrūšiuoti nuo didžiausio iki mažiausio. Nenaudoti rest operatoriaus
let naujasMasyvasRusuotas = skaiciai.sort((a, b) => b - a);
console.log(naujasMasyvasRusuotas);

// 6. Sukuriame naują masyvą, kuriame kiekvienas elementas yra vienetu didesnis už pradinį masyvą
let sixth = skaiciai.map(skaicius => skaicius + 1);
console.log(sixth);

// 7. Sukuriame naują masyvą, kur kiekvienas elementas didesnis nei 50 virsta "A", kiti lieka nepakitę
let seventh = skaiciai.map(skaicius => skaicius > 50 ? "A" : skaicius);
console.log(seventh);



const gyvuliai = [
    {id: 10, vardas: 'Rex', amzius: 5, veisle: 'Lietuvos lenciuginis' },
    {id: 68, vardas: 'Pukis', amzius: 3, veisle: 'Lietuvos lenciuginis' },
    {id: 35, vardas: 'Snekutis', amzius: 1, veisle: 'Zalvarinis retriveris' },
    {id: 45, vardas: 'Murka', amzius: 2, veisle: 'Lietuvos patvorinis' },
    {id: 41, vardas: 'Sniegė', amzius: 7, veisle: 'Lietuvos pagalvinis' },
    {id: 98, vardas: 'Bebras', amzius: 3, veisle: 'Lietuvos medinis' },
];

// 8. Sukurti naują masyvą pagal duotą, kuriame gyvuliai išrūšiuoti nuo vyriausio iki jauniausio. Nenaudoti rest operatoriaus.

let gyvuliaiSorted = gyvuliai.sort((a, b) => b.amzius - a.amzius);

console.log(gyvuliaiSorted);