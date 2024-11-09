//1. Naudodami JS į tagus h1 - h4 įrašykite skaičius nuo 1 iki 4 (skaičius atitinka tagą).
//2. Naudodami JS iš vieno div tago padarykite mėlyną keturkampį, o iš kito raudoną
//apskritimą.

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) +
    minCeiled);
}
// Atsitiktinio skaičiaus generavimo funkcija
//function rand(min, max) {
 //   return Math.floor(Math.random() * (max - min + 1)) + min;
//}

// Užduotis 1: Skaičių įrašymas į h1-h4 tagus
console.log('H1 value before change: ' + document.querySelector('h1').innerText.valueOf());
document.querySelector('h1').innerText = '1';
document.querySelector('h2').innerText = '2';
document.querySelector('h3').innerText = '3';
document.querySelector('h4').innerText = '4';
//document.style.display = 'inline-block';?????????????????????????????????
//code.style.cssText = `display: inline-flex`; ???????????????????
//const????????????????????????
//console.log('H1 value before change: ' + document.querySelector('h1').innerText.valueOf());

// Užduotis 2: Keturkampio ir apskritimo formavimas iš div elementų
const divs = document.querySelectorAll('body > div');
divs[0].style.cssText = 'background-color: blue; width: 100px; height: 100px;';
divs[1].style.cssText = 'background-color: red; width: 200px; height: 200px; border-radius: 50%;';
//where is console.log??????????????

// Užduotis 3: Atsitiktinių skaičių dalyba
/* 0.55423  -> round 1 -> floor 0
   0.4556   -> round 0 -> floor 0
   0.999999 -> round 1 -> floor 0
 */
//3. Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines
//reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Kintamuosius ir gautą
//rezultatą įrašykite į atitinkamus span tagus, esančius section tage su id=go3.
function rand(min, max) {
    return Math.round(
                min + Math.random() * (max - min)
            );
}
const a = rand(0, 4);
const b = rand(0, 4);
console.log('Ar a nulis? ' + (a == 0));
console.log('Ar b nulis? ' + (b == 0));
console.log('Sugeneruoti skaičiai: ' + a + ' ' + b);

let result;
if (a > b && b !== 0) {
    console.log('a daugiau uz b');
    result = a / b;
} else if (a < b && a !== 0) {
    console.log('a maziau uz b');
    result = b / a;
} else if (a !== 0 && b !== 0) {
    console.log('a lygu b');
    result = 1;
} else {
    console.log('kita reikšmė');
    result = 'Negalima dalyba iš nulio.';
}
console.log("Rezultatas: " + result);

const spans3 = document.querySelectorAll('#go3 > span');
if (a > b) {
    console.log(a + " > " + b);
    spans3[0].innerText = a;
    spans3[1].innerText = b;
} else {
    console.log(a + " < " + b);
    spans3[0].innerText = b;
    spans3[1].innerText = a;
}
spans3[2].innerText = result; //The solution to the task is very long, why?????????????????
//can we make chorter one?????????????????????????????



//4. Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines
//reikšmes nuo 50 iki 200. Iš section tage su id=go4 esančių div tagų padarykite
//atitinkamo dydžio (px) apskritimus. Apskritimai turi būti išdėlioti eilute nuo mažiausio
//iki didžiausio.

// Užduotis 4: Trys apskritimai išrikiuoti pagal dydį
const sizes = [rand(50, 200), rand(50, 200), rand(50, 200)].sort((a, b) => a - b);
const go4Divs = document.querySelectorAll('#go4 div');

go4Divs.forEach((div, i) => {
    div.style.width = `${sizes[i]}px`;
    div.style.height = `${sizes[i]}px`;
    div.style.borderRadius = '50%';
    div.style.display = 'inline-block';
    div.style.margin = '0 10px'; // Tarpai tarp apskritimų
    div.style.backgroundColor = 'lightblue'; // Apskritimų spalva
});
//where is console.log?????????????????????????????


//5. Naudokite funkcija rand(). Į section tage su id=go5 esančius span įrašykite 3 skaičius nuo
//-10 iki 10. Skaičius mažesnių už 0 spausdinkite raudonai, didesnius už 0 mėlynai, o 0
//žaliai.
// Užduotis 5: Skaičių spalvinimas pagal ženklą
const spans = document.querySelectorAll('#go5 span');
spans.forEach(span => {
    const number = rand(-10, 10);
    span.innerText = number;
    span.style.color = number < 0 ? 'red' : number > 0 ? 'blue' : 'green';
});


//6. Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip 1000 EUR taikoma 3 % nuolaida,
//daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuris skaičiuos žvakių kainą
//ir užpildykite formą easnčią section tage su id=go6. Žvakių kiekį generuokite rand()
//funkcija nuo 5 iki 3000.
// Užduotis 6: Žvakių kainos skaičiavimas su nuolaida
const candles = rand(5, 3000);
const price = candles * 1;
const discount = candles > 2000 ? 4 : candles > 1000 ? 3 : 0;
const finalPrice = price - (price * discount / 100);
document.querySelector('[data-amount] span').innerText = candles;
document.querySelector('[data-subtotal] span').innerText = price;
document.querySelector('[data-discount] span').innerText = discount;
document.querySelector('[data-total] span').innerText = finalPrice.toFixed(2);

//7. Naudokite funkciją rand(). Parašykite skriptą, kuris atsitiktine tvarka generuotų ir iš
//section su id=go7 esančio div tago padarytų apskritimą, arba keturkampį arba trikampį.
// Užduotis 7: Atsitiktinė forma iš apskritimo, keturkampio ar trikampio
const shapes = ['circle', 'square', 'triangle'];
const shape = shapes[rand(0, 2)];
const div = document.querySelector('#go7 div');
div.style.width = '100px';
div.style.height = '100px';
if (shape === 'circle') {
    div.style.borderRadius = '50%';
    div.style.backgroundColor = 'green';
} else if (shape === 'square') {
    div.style.borderRadius = '0';
    div.style.backgroundColor = 'purple';
} else {
    div.style.width = '0';
    div.style.height = '0';
    div.style.borderLeft = '50px solid transparent';
    div.style.borderRight = '50px solid transparent';
    div.style.borderBottom = '100px solid orange';
}


//8. Suskaičiuoti kiek kiekvienos spalvos apskritimų yra section su id=go8. Rezultatus įrašyti į
//šalia tam skirtas vietas.
// Užduotis 8: Apskritimų spalvų skaičiavimas
const colors = { green: 0, red: 0, blue: 0 };
document.querySelectorAll('#go8 div').forEach(div => {
    const color = div.style.backgroundColor;
    if (colors[color] !== undefined) colors[color]++;
});
document.querySelector('[data-green] span').innerText = colors.green;
document.querySelector('[data-red] span').innerText = colors.red;
document.querySelector('[data-blue] span').innerText = colors.blue;

// Užduotis 9: Daugybos lentelė
//9. Užpildyti daugybos lentelę, esančią tage section su id=go9.
document.querySelectorAll('#go9 div').forEach(div => {
    const spans = div.querySelectorAll('span');
    const result = Number(spans[0].innerText) * Number(spans[1].innerText);
    spans[2].innerText = result;
});

// Užduotis 10: Plotų tikrinimas ir spalvinimas
//10. Keturkapius, esančius tage section su id=go10, kurių plotas didesnis nei 10000 (px)
//nuspalvinkite raudona
document.querySelectorAll('#go10 div').forEach(div => {
    const width = parseInt(div.style.width);
    const height = parseInt(div.style.height);
    if (width * height > 10000) {
        div.style.backgroundColor = 'red';
    }
});
