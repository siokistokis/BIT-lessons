let sheep = [];
let cows = [];

function generateRandomNumber() {
    return Math.floor(Math.random() * 10000000); // 7 digit random number
}

function createAnimal(type) {
    let animal = {
        id: type === 'sheep' ? `A${generateRandomNumber()}` : `K${generateRandomNumber()}`,
        type: type
    };

    let animalDiv = document.createElement('div');
    animalDiv.classList.add('animal', type);
    animalDiv.textContent = animal.id;

    animalDiv.onclick = () => {
        moveAnimal(animalDiv, type);
    };

    return animalDiv;
}

function moveAnimal(animalDiv, type) {
    const otherSide = type === 'sheep' ? 'cows' : 'sheep';
    const otherSideDiv = document.getElementById(otherSide);

    if (animalDiv.parentElement.id === 'sheep' && otherSideDiv) {
        document.getElementById('cows').appendChild(animalDiv);
    } else if (animalDiv.parentElement.id === 'cows' && otherSideDiv) {
        document.getElementById('sheep').appendChild(animalDiv);
    }
}

function populatePasture() {
    const sheepContainer = document.getElementById('sheep');
    const cowsContainer = document.getElementById('cows');
    sheepContainer.innerHTML = '';
    cowsContainer.innerHTML = '';

    let numSheep = Math.floor(Math.random() * 16) + 5; // Random between 5 and 20
    let numCows = Math.floor(Math.random() * 16) + 5; // Random between 5 and 20

    for (let i = 0; i < numSheep; i++) {
        let sheepDiv = createAnimal('sheep');
        sheepContainer.appendChild(sheepDiv);
    }

    for (let i = 0; i < numCows; i++) {
        let cowDiv = createAnimal('cow');
        cowsContainer.appendChild(cowDiv);
    }
}

document.getElementById('to-pasture').onclick = populatePasture;

// Save state in localStorage
function saveState() {
    let sheepIds = Array.from(document.getElementById('sheep').children).map(child => child.textContent);
    let cowIds = Array.from(document.getElementById('cows').children).map(child => child.textContent);

    localStorage.setItem('sheepState', JSON.stringify(sheepIds));
    localStorage.setItem('cowState', JSON.stringify(cowIds));
}

function loadState() {
    let sheepState = JSON.parse(localStorage.getItem('sheepState'));
    let cowState = JSON.parse(localStorage.getItem('cowState'));

    if (sheepState && cowState) {
        let sheepContainer = document.getElementById('sheep');
        let cowsContainer = document.getElementById('cows');
        
        sheepState.forEach(id => {
            let sheepDiv = createAnimal('sheep');
            sheepDiv.textContent = id;
            sheepContainer.appendChild(sheepDiv);
        });

        cowState.forEach(id => {
            let cowDiv = createAnimal('cow');
            cowDiv.textContent = id;
            cowsContainer.appendChild(cowDiv);
        });
    }
}

window.onload = loadState;
window.onbeforeunload = saveState;
