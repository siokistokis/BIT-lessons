console.log('function.js 1');

function getRandom(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

function sum(a, b) {

    //return a;

    a = parseInt(a);
    console.log('sum:', a + b);
    //for (let i = 0; i < 10; i++) {
    //    console.log('i:', i);
    //}

    const c = a + b;

    return c;
}

const difference = function (a, b) {
    console.log('difference:', a - b);
}

const multiplication = (a,b) => {
    console.log('multiplication:', a * b);
}

// this



console.log('function.js 2');

difference(10, 5);
multiplication(10, 5);

let abs = 8

//sum(abs, 3);
//sum(abs, 7);

//console.log(sum('10', 20));

const mySum = sum;

mySum(10, 20);

console.log('mySum:', typeof mySum);
