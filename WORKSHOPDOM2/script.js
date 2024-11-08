const task1 = document.querySelector(".task1")
const task2 = document.querySelector(".task2")
const task3 = document.querySelector(".task3")
const task4 = document.querySelector(".task4")
const task5 = document.querySelector(".task5")
const task6 = document.querySelector(".task6")
const task7 = document.querySelector(".task7")
const task8 = document.querySelector(".task8")
const task9 = document.querySelector(".task9")
const task10 = document.querySelector(".task10")

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFlored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored = minCeiled + 1) + minCeiled)
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

console.log("runs")

// 1. narsykleje idekite 14 hi tagu su skaiciumi 4 ir 14 tagu su skaiciumi 1. Visi tagai turi rikikiotis i viena eilute.

let h1 = "";

let h4 = "";

let color = "green";

for (let i = 0; i < 14; i++) {
    h1 += `<h1 style="color:${randomColor()} ">4</h1>`;
    h4 += `<h4 style="color:${color}" >1</h4>`;
}


task1.style.display = "flex"
task1.innerHTML = h1 + h4


// 2. Naudodamiesi funkcija rand() narsykleje eilute (tarp skaiciu turi buti tarpai) surasykite 44 atsitiktinius skaicius nuo 14 iki 44. Skaicius, kurie is 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus melyai.

let number = ""

for (let i = 0; i < 44; i++) {
    const randNumber = rand(14, 44);
    if (randNumber % 4 === 0) {
        number += `<span style ="color: red; margin left: 10px;"> ${randNumber}</span>`
    }
    else {
        number += `<span style ="color: blue; margin left: 10px;"> ${randNumber}</span> `
    }
}
task2.innerHTML = number


// 3. Narcykleje nupieskite 14 melynu apskritimu, isdeliotu eilute.

let circle = "";

for (let i = 0; i < 14; i++) {
    circle += `<span style = "display: inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: blue"></span>`
}

task3.innerHTML = circle

// 4. Narsykleje nupieskite 4 melynus ir 4 raudonus apskritimus, isdeliotus eilute zebru. raudonas melynas raudonas.

let circle2 = ""

for (let i = 0; i < 4; i++) {
    circle += `<span style = "display: inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: green"></span>`
    circle += `<span style = "display: inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: red"></span>`
}
task4.innerHTML = circle

// 5. \narsykleje nupieskite daugybos lentele 4 dauginant is skaiciu nuo 4 iki14.

//let multiplication = ""

//for (let i = 0; i < 14; i++) {
//    multiplication += ``
//}

//First Option 

let table = document.createElement("table");

document.body.append(table);

for (let i = 1; i < 5; i++) {
    let tr = document.createElement("tr");

    table.appendChild(tr);

    for (let j = 1; j < 15; j++) {
        let td = document.createElement("td");

        tr.appendChild(td);
        td.innerText = i * j;
    }
}

//Second Option

for (let j = 4; j <= 14; j++) {
    document.write("<div style='float: left; width: 80px;'>");
    for (let i = 1; i <= 9; i++) {
        document.write(i + "*" + j + "=" + (i * j) + "<br>");
    }
    document.write("</div>");

}

// 6. Narsykleje nupieskite linija is 444 * tarp zvaigzdziu tarpu nera. programiskai suskaldykite naudodami tagus atskirom zvaigzduciu grupem, zvaigzdutes taip, kad nebutu vvienoje eiluteje daugiau kaip 44*.

//for (let i = 0; i < 444; i += 44) {
//    document.write("<div style='font-family: monospace; white-space: pre;'");
//    for (let j = 0; j < 44; j++);

//}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const nStars = 444;
const starsPerLine = 44;
let stars = '*'.repeat(nStars);
let container = document.querySelector(".task6");
for (let i = 0; i < nStars; i += starsPerLine) {
    let starsGroup = stars.slice(i, i + starsPerLine);
    console.log(starsGroup);
    let p = document.createElement("p");
    p.innerHTML = starsGroup;
    p.style.color = getRandomColor();
    container.appendChild(p);
}
console.log(nStars)

// 7. Narsykleje nupieskite 14 atsitiktiniu spalvu kvadratu esanciu vienas kitame matrioska.


let size = 300;
let container7 = document.querySelector('.task7');
for (let i = 0; i < 14; i++) {
    let square = document.createElement('div');
    square.classList.add('square');

    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.backgroundColor = getRandomColor();

    container7.appendChild(square);
    container7 = square;

    size -= 20;
}
console.log(container7)

// 8. is simbolio &#9632; kopijuoti visa teksta su kabliuku. sudeliokite zalia kvadrata turinti 41x41 siu simboliu. kad kvadratas atrodytu kvadratiskai panaudokite css stiliu ir papildomus tagus. #ciklasCikle

// 9. uzdavinyje pries tai nupiestam kvadratui nupieskite geltonas istrizaines (geltonai nudazykite atitinkamus simbolius). #ciklasCikle

// 10. uzdavini atlikite atskirame html faile. visame ekrane atsitiktine tvarka ismeykite 444 pusiau permatomus atsitiktines spalvos ir atsitiktinio skersmens nuo 44 iki 144 px