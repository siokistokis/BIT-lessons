//1.

const numbers = [-150, 410, 104, 258];

// Atspausdinti visus masyvo skaičius ul tage nr1, įdėtus į <li> elementus nuo didžiausio iki mažiausio. 

//2. Html'e nupiešti kvadratą. Paspaudus ant kvadrato jis virsta į apskritimą. Paspaudus dar kartą, vėl tampa kvadratu ir t.t.

//3. Sekcijoje nr2 įrašius tekstą į input laukelį ir paspaudus mygtuką, tas tekstas atsiranda sekcijoje nr2, virš input laukelio.



//1.

const ul = document.querySelector('#nr1');
const numbersSorted = numbers.sort((a, b) => b - a);

numbersSorted.forEach(number => {
    const li = document.createElement('li');
    li.innerText = number;
    ul.appendChild(li);
});


//2.

const div = document.createElement('div');

div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'black';
div.style.transition = 'border-radius 0.5s';
// div.style.borderRadius = '0px';
div.dataset.shape = 'square';

document.body.appendChild(div);

div.addEventListener('click', _ => {
    if (div.dataset.shape === 'square') {
        div.style.borderRadius = '50%';
        div.dataset.shape = 'circle';
    } else {
        div.style.borderRadius = '0px';
        div.dataset.shape = 'square';
    }
});

//3

const input = document.querySelector('#input');

const h1 = document.querySelector('h1');

const button = document.querySelector('#button');

button.addEventListener ('click', _ => {
    h1.innerText = input.value;
    input.value = '';
});


const mas1 = [-45, 78, -98, 4, 87, -1];

// paskaičiuoti visų masyvo elementų sumą ir ją atspausdinti

const sum = mas1.reduce((total, num) => total + num, 0);

console.log(sum);


// surasti ir atspausdinti mažiausią masyvo skaičių with reduce

const min = mas1.reduce((min, num) => min < num ? min : num, mas1[0]);

console.log(min);

// surasti ir atspausdinti mažiausią teigiamą masyvo skaičių with reduce

const minPositive = mas1.reduce((min, num) => num > 0 && num < min ? num : min, Infinity);

console.log(minPositive);


// surasti ir atspausdinti mažiausią masyvo skaičių, kuris yra didesnis nei 10 with reduce

const minBiggerThan10 = mas1.reduce((min, num) => num > 10 && num < min ? num : min, Infinity);

console.log(minBiggerThan10);


const mas2 = ['antis', 'višta', 'povas', 'kiaušas', 'puodas', 'šakė'];


// surasti ir atspausdinti ilgiausią žodį masyve with reduce

const theLongest = mas2.reduce((theLongest, word) => word.length > theLongest.length ? word : theLongest, '');

console.log(theLongest);

// surasti ir atspausdinti trumpiausią žodį masyve with reduce

const theShortest = mas2.reduce((theShortest, word) => word.length < theShortest.length ? word : theShortest, mas2[0]);

// surasti ir atspausdinti trumpiausią, bet ilgesnį nei 5 simboliai, žodį masyve with reduce

const theShortestBiggerThan5 = mas2.reduce((theShortest, word) => {
    return (word.length < theShortest.length && word.length > 5) ? word : theShortest
}, mas2.find(word => word.length > 5));

console.log(theShortestBiggerThan5);

const temp1 = mas2.filter(word => word.length > 5);
const theShortestBiggerThan5WithFilter = temp1.reduce((theShortest, word) => word.length < theShortest.length ? word : theShortest, temp1[0]);

console.log(theShortestBiggerThan5WithFilter);



let theShortestBiggerThan5WithForeache = mas2.find(word => word.length > 5);

mas2.forEach(word => {
    if (word.length < theShortestBiggerThan5WithForeache.length && word.length > 5) {
        theShortestBiggerThan5WithForeache = word;
    }
});

console.log(theShortestBiggerThan5WithForeache);


let theShortestBiggerThan5WithForOnly = mas2[0];

for (let i = 0; i < mas2.length; i++) {
    if (mas2[i].length > 5) {
        theShortestBiggerThan5WithForOnly = mas2[i];
    }
}

for (let i = 0; i < mas2.length; i++) {
    if (mas2[i].length <theShortestBiggerThan5WithForOnly .length && mas2[i].length > 5) {
        theShortestBiggerThan5WithForOnly = mas2[i];
    }
}

console.log(theShortestBiggerThan5WithForOnly);


const find = mas2.find(word => word.length > 16);
const filter = mas2.filter(word => word.length > 16);

console.log('find', find);
console.log('filter', filter);