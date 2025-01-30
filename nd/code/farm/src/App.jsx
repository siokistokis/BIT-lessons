
import './App.css';



// import sheep from './Components/sheep';
// import cow from './Components/cow'

// function App() {

//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;














import React, { useState, useEffect } from 'react';
import './App.css';

// Function to generate a random 7-digit number
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10000000); // 7 digit random number
};

// Function to generate an animal (sheep or cow)
const createAnimal = (type) => {
  return {
    id: type === 'sheep' ? `A${generateRandomNumber()}` : `K${generateRandomNumber()}`,
    type: type,
  };
};

function App() {
  // State to track sheep, cows, and their movements
  const [sheep, setSheep] = useState([]);
  const [cows, setCows] = useState([]);
  const [sheepMoved, setSheepMoved] = useState([]); // Track sheep that have moved
  const [cowsMoved, setCowsMoved] = useState([]); // Track cows that have moved

  // Function to populate pastures with mixed-up animals
  const populatePasture = () => {
    const numSheep = Math.floor(Math.random() * 16) + 5;
    const numCows = Math.floor(Math.random() * 16) + 5;

    // Create sheep and cows
    const newSheep = Array.from({ length: numSheep }, () => createAnimal('sheep'));
    const newCows = Array.from({ length: numCows }, () => createAnimal('cow'));

    // Mix up the animals by randomly placing some sheep in the cow pasture and some cows in the sheep pasture
    const mixedSheep = newSheep.slice();
    const mixedCows = newCows.slice();

    const sheepInCowPasture = mixedSheep.splice(Math.floor(Math.random() * mixedSheep.length), 12);
    const cowInSheepPasture = mixedCows.splice(Math.floor(Math.random() * mixedCows.length), 12);

    // Now mixed up, some sheep in cow pasture and cows in sheep pasture
    setSheep([...mixedSheep, ...cowInSheepPasture]);
    setCows([...mixedCows, ...sheepInCowPasture]);

    // Save animals to localStorage for persistence
    localStorage.setItem('sheep', JSON.stringify([...mixedSheep, ...cowInSheepPasture]));
    localStorage.setItem('cows', JSON.stringify([...mixedCows, ...sheepInCowPasture]));

    setSheepMoved([]); // Reset the sheep that have moved
    setCowsMoved([]);  // Reset the cows that have moved
  };

  // Load the stored animals from localStorage (if any)
  useEffect(() => {
    const storedSheep = JSON.parse(localStorage.getItem('sheep'));
    const storedCows = JSON.parse(localStorage.getItem('cows'));

    if (storedSheep && storedCows) {
      setSheep(storedSheep);
      setCows(storedCows);
    } else {
      populatePasture();
    }
  }, []);

  // Function to move an animal to the opposite pasture when clicked
  const moveAnimal = (animal, side) => {
    if (side === 'sheep') {
      if (sheepMoved.includes(animal.id)) {
        // Move back to the original side (cows)
        setSheepMoved(sheepMoved.filter((id) => id !== animal.id));
        setCows([...cows, animal]);
        setSheep(sheep.filter((s) => s.id !== animal.id));
      } else {
        // Move sheep to cows side
        setSheepMoved([...sheepMoved, animal.id]);
        setSheep(sheep.filter((s) => s.id !== animal.id));
        setCows([...cows, animal]);
      }
    } else {
      if (cowsMoved.includes(animal.id)) {
        // Move back to the original side (sheep)
        setCowsMoved(cowsMoved.filter((id) => id !== animal.id));
        setSheep([...sheep, animal]);
        setCows(cows.filter((c) => c.id !== animal.id));
      } else {
        // Move cow to sheep side
        setCowsMoved([...cowsMoved, animal.id]);
        setCows(cows.filter((c) => c.id !== animal.id));
        setSheep([...sheep, animal]);
      }
    }
  };

  // Render animals (sheep or cows) in their respective pastures
  const renderAnimals = (animals, side) => {
    return animals.map((animal) => (
      <div
        key={animal.id}
        className={`animal ${animal.type}`}
        onClick={() => moveAnimal(animal, side)}
      >
        {animal.id}
      </div>
    ));
  };

  return (
    <div className="App">
      <div id="pasture">
        <div id="left-side" className="side">
          <h2>Cows</h2>
          <div id="cows">{renderAnimals(cows, 'cow')}</div>
        </div>
        <div id="right-side" className="side">
          <h2>Sheep</h2>
          <div id="sheep">{renderAnimals(sheep, 'sheep')}</div>
        </div>
      </div>
      {/* <button id="to-pasture" onClick={populatePasture}>
        To the Pasture
      </button> */}
      <button id="clean-pasture" onClick={populatePasture}>
        Clean Pastures
      </button>
    </div>
  );
}

export default App;
