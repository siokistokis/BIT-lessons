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
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored = minCeiled + 1) + minCeiled)
}

function randomColor() {
    return (
        "#" + 
    Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")
);
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

task1.style.marginTop = "3rem"
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
task2.style.marginTop = "3rem"
task2.innerHTML = number


// 3. Narcykleje nupieskite 14 melynu apskritimu, isdeliotu eilute.

let circle = "";

for (let i = 0; i < 14; i++) {
    circle += `<span style = "display: inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: blue"></span>`
}
task3.style.marginTop = "3rem"
task3.innerHTML = circle

// 4. Narsykleje nupieskite 4 melynus ir 4 raudonus apskritimus, isdeliotus eilute zebru. raudonas melynas raudonas.

let circle2 = ""

for (let i = 0; i < 4; i++) {
    circle += `<span style = "display: inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: green"></span>`
    circle += `<span style = "display: inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: red"></span>`
}
task4.style.marginTop = "3rem"
task4.innerHTML = circle;

// 5. \narsykleje nupieskite daugybos lentele 4 dauginant is skaiciu nuo 4 iki14.

//let multiplication = ""

//for (let i = 0; i < 14; i++) {
//    multiplication += ``
//}

//First Option 
let table2 = `<table border = 1 cellpadding = "10">`;
for (let i = 4; i <= 14; i++) {
    let sum = i*4;
    console.log(sum);
    
    table2 += `<tr><td>4*${i}</td><td>=${sum}</td></tr>`;   
}
table2 += '</table>';
task5.style.marginTop = "3rem"
task5.innerHTML = table2;

// document.body.append(table);

// for (let i = 1; i < 5; i++) {
//     let tr = document.createElement("tr");
//     table.appendChild(tr);
//     for (let j = 1; j < 15; j++) {
//         let td = document.createElement("td");
//         tr.appendChild(td);
//         td.innerText = i * j;
//     }
//     task5.innerHTML = table
//     console.log(table);
// }



//Second Option
// let table = document.createElement("table");
// for (let j = 4; j <= 14; j++) {
//     document.write("<div style='float: left; width: 80px;'>");
//     for (let i = 1; i <= 9; i++) {
//         document.write(i + "*" + j + "=" + (i * j) + "<br>");
//     }
//     console.log(table);
//     document.write("</div>");
// }
// task5.innerHTML = table

// 6. Narsykleje nupieskite linija is 444 * tarp zvaigzdziu tarpu nera. programiskai suskaldykite naudodami tagus atskirom zvaigzduciu grupem, zvaigzdutes taip, kad nebutu vvienoje eiluteje daugiau kaip 44*.

let stars = "";

for (let j = 1; j <= 444; j++) {
     stars += `<span style="color:${randomColor()}" >*</span>`;
     if (j % 44 === 0) {
       stars+= `<br/>` 
     }

     //console.log(stars);
}
task6.style.marginTop = "3rem"
task6.innerHTML = stars

      
//function getRandomColor() {
//    const letters = '0123456789ABCDEF';
//    let color = '#';
//    for (let i = 0; i < 6; i++) {
//        color += letters[Math.floor(Math.random() * 16)];
//    }
//    return color;
//}

//const nStars = 444;
//const starsPerLine = 44;
//let stars = '*'.repeat(nStars);
//let container = document.querySelector(".task6");
//for (let i = 0; i < nStars; i += starsPerLine) {
//    let starsGroup = stars.slice(i, i + starsPerLine);
//    console.log(starsGroup);
//    let p = document.createElement("p");
//    p.innerHTML = starsGroup;
//    p.style.color = getRandomColor();
//    container.appendChild(p);
//}
//console.log(nStars)

// 7. Narsykleje nupieskite 14 atsitiktiniu spalvu kvadratu esanciu vienas kitame matrioska.

//MantoS
let size = 500
let square = ""
for (let i = 0; i < 14; i++) {
    square += `<div style ="
    width: ${size}px;
    height: ${size}px;
    position: absolute;
    background-color: ${randomColor()};
    top: ${(500-size) / 2}px;
    left: ${(500-size) / 2}px;
    "></div>`
    size -= 30
}
task7.style.position = "relative";
task7.style.marginTop = "3rem"
task7.innerHTML = square;

// let size = 300;
// let matryoshka = document.querySelector('.task7');
// for (let i = 0; i < 14; i++) {
//     let square = document.createElement('div');
//     square.classList.add('square');

//     square.style.width = `${size}px`;
//     square.style.height = `${size}px`;
//     square.style.backgroundColor = randomColor();
   
//    matryoshka.appendChild(square);
//     matryoshka = square;
//     size -= 20;
// }
// console.log(matryoshka)

// 8. is simbolio &#9632; kopijuoti visa teksta su kabliuku. sudeliokite zalia kvadrata turinti 41x41 siu simboliu. kad kvadratas atrodytu kvadratiskai panaudokite css stiliu ir papildomus tagus. #ciklasCikle

let squareOfSigns = ""
for (let i = 0; i < 41; i++) {
    let row = `<div style="display: grid; grid-template-columns: repeat(41, 1.3rem); ">`
    //width: 50%; height: 50%;
    //color: ${green}; 
    for (let j = 0; j < 41; j++) {
        row +=`<span style="color: green;">&#9632;</span>`
    }
    row += `</div>`
    squareOfSigns+= row
}
// task8.style.position = "relative" 
task8.style.marginTop = "12rem"

task8.innerHTML = squareOfSigns



// 9. uzdavinyje pries tai nupiestam kvadratui nupieskite geltonas istrizaines (geltonai nudazykite atitinkamus simbolius). #ciklasCikle

let squareWithDiagonal = ""
let sizes = 41 
for (let i = 0; i < sizes; i++) {
    let row = `<div style= "display: flex">`
    for (let j = 0; j < sizes; j++) {
        let color = ""
        if (i===j || sizes-1-i===j) {
            color = "yellow"
        }
        else {
            color = "green"
        }
        row+=`<span style="color: ${color}":>&#9632;</span>`
    }
    row+=`</div>`
    squareWithDiagonal+=row
}
task9.style.marginTop = "3rem"
task9.innerHTML = squareWithDiagonal

// 10. uzdavini atlikite atskirame html faile. visame ekrane atsitiktine tvarka ismeykite 444 pusiau permatomus atsitiktines spalvos ir atsitiktinio skersmens nuo 44 iki 144 px
