console.log('app.js 009');

// 1. Sukurti funkcija, kuri priima 2kintamuosius ir grazina ju didesni.

const fun1 = (a, b) => {
    const rez = (a > b) ? a: b;
    return rez;
}

const fun1If = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

const funf1IfGeras = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}

console.log(fun1(25, 18));
console.log(fun1If(25, 18));
console.log(funf1IfGeras (25, 18));

// 2.Sukurti funkcija, kuri priima 2 stringus irasytus i kintamuosius ir grazina trumpesni.

const fun2 = (a, b) => {
    if (a.length < b.length) {
        return a;
    }
    return b;
}

console.log(fun2('hello', 'hi, hun!'));

// 3. Sukurti funkcija, kuri priima 2 kintamuosius. Jeigu didesnis pirmas grazina 1, jeigu didesnis antras grazina 2, jeigu lygus, grazina 0

const fun3 = (a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
}

const funTer3 = (a, b) => {
    return a > b && a != b ? 1 : a < b && a != b ? -1 : 0;
}

console.log(fun3(25, 18));
console.log(funTer3(25, 88));

function funSum1(a, b) {
    return a + b;
}

const funSum2 = function (a,b) {
    return a + b;
}

const funSum3 = (a, b) => {
    return a + b;
}

const funSum4 = (a, b) => a+b;

console.log(funSum4 (2,3));

function funBig1(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

const funBig4 = (a, b) => a > b ? a : b;

console.log(funBig4(2,3));

function funStrLent1(a) {
        return a. length;
    }

const funStrLent2 = function (a)  {
    return a.length;
}

const funStrLent3 = (a) => {
    return a.length;
}

const funStrLent4 = a => a.length;

function FunReturnLabas1() {
    return 'labas'
}

const FunReturnLabas2 = function () {
    return 'labas';
}

const FunReturnLabas3 = () => {
    return 'labas';
}

const FunReturnLabas4 = _ => 'labas';

console.log(FunReturnLabas4());

const fun3sum1 = (a, b, c) => {
    return a + b + c ;
}

//console.log(fun3sum1(1));
console.log(fun3sum1(1, 2));
console.log(fun3sum1(1, 2, 3));

const funSumMany1 = (a, b, ...rest) => {
    console.log(rest);

    let sumAll = 0;
    for (let i = 0; i < rest.length; i++) {
        sumAll += rest[i];
    }
    return sumAll;
}

console.log(funSumMany1(3, 2, 3, 4, 5, 6, 7, 8, 55, 10, 11));

const animals = ['cat', 'dog', 'elephant', 'lion', 'tiger'];
const animals2 = [...animals];
const animals3 = animals;

animals[0] = 'bear';

console.log(animals2, animals3);





    

