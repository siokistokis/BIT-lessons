console.log('Labas, Pasauli!');

// 1.
console.log('H1 value before change: ' + document.querySelector('h1').innerText.valueOf());
document.querySelector('h1').innerText = '1';
document.querySelector('h2').innerText = '2';
document.querySelector('h3').innerText = '3';
document.querySelector('h4').innerText = '4';
console.log('H1 value after change: ' + document.querySelector('h1').innerText.valueOf());

// 2.
const divs = document.querySelectorAll('body > div');
divs[0].style.cssText = 'background-color: blue; width: 100px; height: 100px;';
divs[1].style.cssText = 'background-color: red; width: 200px; height: 200px; border-radius: 50%;';

// 3.
/* 0.55423  -> round 1 -> floor 0
   0.4556   -> round 0 -> floor 0
   0.999999 -> round 1 -> floor 0
 */
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
//console.log('Sugeneruoti skaičiai: $a $b');

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

const spans = document.querySelectorAll('#go3 > span');
if (a > b) {
    console.log(a + " > " + b);
    spans[0].innerText = a;
    spans[1].innerText = b;
} else {
    console.log(a + " < " + b);
    spans[0].innerText = b;
    spans[1].innerText = a;
}
spans[2].innerText = result;
