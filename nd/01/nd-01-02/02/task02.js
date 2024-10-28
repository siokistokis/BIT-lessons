// Funkcija atsitiktiniams skaičiams generuoti
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Užduotis 1: 14 h1 ir 14 h4 tagų, su skaičiais 4 ir 1
const task1Container = document.getElementById('task1');
for (let i = 0; i < 14; i++) {
    const h1 = document.createElement('h1');
    h1.innerText = '4';
    const h4 = document.createElement('h4');
    h4.innerText = '1';
    task1Container.append(h1, h4);
}
task1Container.style.display = 'flex';

// Užduotis 2: 44 atsitiktiniai skaičiai nuo 14 iki 44 su spalvomis
const task2Container = document.getElementById('task2');
const numbers = Array.from({ length: 44 }, () => rand(14, 44));
const numberText = numbers.map(num => `<span style="color:${num % 4 === 0 ? 'red' : 'blue'}">${num}</span>`).join(' ');
task2Container.innerHTML = `<div>${numberText}</div>`;

// Užduotis 3: 14 mėlyni apskritimai
const task3Container = document.getElementById('task3');
for (let i = 0; i < 14; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    task3Container.appendChild(circle);
}

// Užduotis 4: Zebro stiliaus apskritimai
const task4Container = document.getElementById('task4');
for (let i = 0; i < 8; i++) {
    const circle = document.createElement('div');
    circle.classList.add(i % 2 === 0 ? 'red-circle' : 'blue-circle');
    task4Container.appendChild(circle);
}

// Užduotis 5: 4 dauginimo lentelė nuo 4 iki 14
const task5Container = document.getElementById('task5');
const multiplicationText = Array.from({ length: 11 }, (_, i) => `4 x ${i + 4} = ${4 * (i + 4)}`).join('<br>');
task5Container.innerHTML = `<div>${multiplicationText}</div>`;

// Užduotis 6: Žvaigždžių linija
const task6Container = document.getElementById('task6');
let stars = '';
for (let i = 1; i <= 444; i++) {
    stars += '*';
    if (i % 44 === 0) stars += '<br>';
}
task6Container.innerHTML = `<div>${stars}</div>`;

// Užduotis 7: Matrioška
const task7Container = document.getElementById('task7');
task7Container.style.position = 'relative';
task7Container.style.width = '300px';
task7Container.style.height = '300px';
for (let i = 14; i > 0; i--) {
    const square = document.createElement('div');
    square.style.width = `${i * 20}px`;
    square.style.height = `${i * 20}px`;
    square.style.backgroundColor = randomColor();
    square.style.position = 'absolute';
    square.style.top = `${(300 - i * 20) / 2}px`;
    square.style.left = `${(300 - i * 20) / 2}px`;
    task7Container.appendChild(square);
}

// Funkcija atsitiktinei spalvai generuoti
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

// Užduotis 8: 41x41 kvadratas iš simbolių
const task8Container = document.getElementById('task8');
let squareContent = '';
for (let i = 0; i < 41; i++) {
    for (let j = 0; j < 41; j++) {
        squareContent += '&#9632; ';
        //squareContent += '5';
    }
    squareContent += '<br>';
}
task8Container.innerHTML = squareContent;
task8Container.style.fontSize = '8px';
task8Container.style.lineHeight = '8px';

// Užduotis 9: Įstrižainės
const task9Container = document.getElementById('task9');
let diagonalContent = '';
for (let i = 0; i < 41; i++) {
    for (let j = 0; j < 41; j++) {
        const color = i === j || i + j === 40 ? 'yellow' : 'green';
        diagonalContent += `<span style="color:${color}">&#9632;</span>`;
    }
    diagonalContent += '<br>';
}
task9Container.innerHTML = diagonalContent;
task9Container.style.fontSize = '8px';
task9Container.style.lineHeight = '8px';

// Užduotis 10: 444 atsitiktiniai apskritimai visame puslapyje

const task10Container = document.getElementById('task10');
for (let i = 0; i < 444; i++) {
    const circle = document.createElement('div');
    const size = rand(44, 144);
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = randomColor();
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute';
    circle.style.top = `${rand(0, window.innerHeight - size)}px`;
    circle.style.left = `${rand(0, window.innerWidth - size)}px`;
    circle.style.opacity = '0.5';
    document.body.appendChild(circle);
}

