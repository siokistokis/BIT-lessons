console.log('app.js 010');

//1. Reikia parasyti funkcija, kuri priima viena argumenta stringa ir ta stringa ideda h1 taga ir tada taga ideda i body taga

const fun1 = text => {
    const body = document.querySelector('body');
    const h1Html = `<h1>${text}</h1>`;
    body.innerHTML = h1Html;
}

fun1('Good morning!');

// 2. Reikia parasyti funkcija, kuri priima viena argumenta stringa ir tas stringas yra spalva, kuria reikia nuspalvinti h1 taga.

const fun2 = color => {
    const h1 = document.querySelector('h1');
    h1.style.color = color;
}

fun2('crimson');

// 3. Reikia parasyti funkcija , kuri nieko nepriima, bet pakeicia h1 tago teksta i "Kaboom!"

const fun3 = _ => {
    const h1 = document.querySelector('h1');
    h1.innerText = 'Kaboom!';
}

fun3();


let A = 5;
let B = A; // by value
A = A + 2;

console.log(A, B);

const C = [5];
const D = C; // by reference
const F = [...C]; //by copying values // cons F =[5, 'hello', true];

C[0] = C[0] + 2;

console.log(C, D, F);



const fun15 = (...rest) => {
    console.log(rest[0] + rest[1]);
}
fun15(5, 8);


const fun16 = (a, b) => {
    console.log(a + b);
}
const spread = [5, 8];
fun16(...spread);


const person = {
    name: 'James',
    surname: 'Smith',
    age: 99,
    city: 'Liverpool',
    Country: 'UK',
    hasTail: true
}

const {age, city} = person;
console.log(age, city);

const animals = ['beaver', 'bear', 'wolf'];
const [animal1, animal2] = animals;

console.log(animal1, animal2);

const bigFun = (a, b) => {
    console.log('BIG FUN SUM', a = b);
}

const notBigFun = c => {
    const d = 5;
    const e = 8;
    c(d, e); // calling bigFun
}

notBigFun(bigFun);


//const printItem = item => {
//    console.log('ITEM:', item.toUpperCase());
//}

const itemsData = f => {
    const items = ['table', 'chair', 'bed', 'wardrobe'];

    for (let i = 0; i < items.length; i++) {
        f(items[i]);
    }
}

itemsData(item => {
    console.log('ITEM:', item.toUpperCase());
});

console.log('------------------------');

const coolItems = ['table', 'chair', 'bed', 'wardrobe'];

for (let i = 0; i < coolItems.length; i++) {
    console.log('ITEM:', coolItems[i].toUpperCase());
}

console.log('------------------------');

//coolItems.forEach((myFansyItem, numberAsFansyIndex, anotherItem) => {
//    if (numberAsFansyIndex < 3) {
//        console.log('ITEM:', numberAsFansyIndex +1, myFansyItem.toUpperCase(), anotherItem);
//    }
//});

console.log('------------------------');

const rt = coolItems.map((myFancyItems, index) => {
    return index + ':' + myFancyItems.toLocaleUpperCase();
});

console.log('RT:', rt);

const withDivs = coolItems.map(item => {
    return `<div>${item.toUpperCase()}</div>`;
});

console.log("WITH DIVS:", withDivs);

let divs = '';

for (let i = 0; i < withDivs.length; i++) {
    divs += withDivs[i];
}

const body = document.querySelector('body');
body.innerHTML = divs;