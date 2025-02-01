

import React, { useState, useEffect } from 'react';
import './App.css';
import sheepImage from './img/sheep.png';   // Import the sheep image
import cowImage from './img/cow.png';       // Import the cow image
import horseImage from './img/horse.png';   // Import the horse image

// Function to generate a random 7-digit number
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10000000); // 7-digit random number
};

// Function to generate an animal (sheep, cow, or horse)
const createAnimal = (type) => {
  return {
    id: type === 'sheep' ? `S${generateRandomNumber()}` : 
        type === 'cow' ? `C${generateRandomNumber()}` : 
        type === 'horse' ? `H${generateRandomNumber()}` : 
        null, // Ensure a proper animal ID is generated
    type: type,
    weight: Math.floor(Math.random() * 100) + 10 // Random weight for each animal
  };
};

function App() {
  // State to track sheep, cows, horses, and their movements
  const [sheep, setSheep] = useState([]);
  const [cows, setCows] = useState([]);
  const [horses, setHorses] = useState([]);
  const [sheepMoved, setSheepMoved] = useState([]); // Track sheep that have moved
  const [cowsMoved, setCowsMoved] = useState([]); // Track cows that have moved
  const [horsesMoved, setHorsesMoved] = useState([]); // Track horses that have moved

  // Function to populate pastures with mixed-up animals
  const populatePasture = () => {
    const numSheep = 7; // Fixed number of sheep
    const numCows = 7; // Fixed number of cows
    const numHorses = 7; // Fixed number of horses

    // Create sheep, cows, and horses
    const newSheep = Array.from({ length: numSheep }, () => createAnimal('sheep'));
    const newCows = Array.from({ length: numCows }, () => createAnimal('cow'));
    const newHorses = Array.from({ length: numHorses }, () => createAnimal('horse'));

    // Mix up the animals by randomly placing some sheep in the cow pasture, cows in the sheep pasture, etc.
    const mixedSheep = newSheep.slice();
    const mixedCows = newCows.slice();
    const mixedHorses = newHorses.slice();

    // Distribute horses randomly between sheep, cows, and horses boxes
    const sheepInCowPasture = mixedSheep.splice(Math.floor(Math.random() * mixedSheep.length), 5);
    const sheepInHorsesPasture = mixedSheep.splice(Math.floor(Math.random() * mixedSheep.length), 5);
    const cowInSheepPasture = mixedCows.splice(Math.floor(Math.random() * mixedCows.length), 5);
    const cowInHorsesPasture = mixedCows.splice(0, Math.floor(Math.random() * 4) + 1);
    const horsesInSheepPasture = mixedHorses.splice(Math.floor(Math.random() * mixedHorses.length), 5);
    const horsesInCowPasture = mixedHorses.splice(Math.floor(Math.random() * mixedHorses.length), 5);

    // Now mixed up, set animals in respective pastures
    setSheep([...mixedSheep, ...cowInSheepPasture, ...horsesInSheepPasture]);
    setCows([...mixedCows, ...sheepInCowPasture, ...horsesInCowPasture]);
    setHorses([...mixedHorses, ...sheepInHorsesPasture, ...cowInHorsesPasture]);

    // Save animals to localStorage for persistence
    localStorage.setItem('sheep', JSON.stringify([...mixedSheep, ...cowInSheepPasture, ...horsesInSheepPasture]));
    localStorage.setItem('cows', JSON.stringify([...mixedCows, ...sheepInCowPasture, ...horsesInCowPasture]));
    localStorage.setItem('horses', JSON.stringify([...mixedHorses, ...sheepInHorsesPasture, ...cowInHorsesPasture]));

    setSheepMoved([]); // Reset the sheep that have moved
    setCowsMoved([]);  // Reset the cows that have moved
    setHorsesMoved([]); // Reset the horses that have moved
  };

  // Load the stored animals from localStorage (if any)
  useEffect(() => {
    const storedSheep = JSON.parse(localStorage.getItem('sheep'));
    const storedCows = JSON.parse(localStorage.getItem('cows'));
    const storedHorses = JSON.parse(localStorage.getItem('horses'));

    if (storedSheep && storedCows && storedHorses) {
      setSheep(storedSheep);
      setCows(storedCows);
      setHorses(storedHorses);
    } else {
      populatePasture();
    }
  }, []);

  // Function to move an animal between pastures
  const moveAnimal = (animal, side) => {
    if (animal.type === 'horse') {
      // Move horse directly to the horses box only, no matter where it is
      setHorsesMoved([...horsesMoved, animal.id]);
      setHorses([...horses, animal]);
      // Remove horse from other pastures
      setSheep(sheep.filter((s) => s.id !== animal.id));
      setCows(cows.filter((c) => c.id !== animal.id));
    } else if (side === 'sheep') {
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
    } else if (side === 'cow') {
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
    } else if (animal.type === 'sheep') {
      // Move sheep directly to the sheep box
      setSheepMoved([...sheepMoved, animal.id]);
      setSheep([...sheep, animal]);
      // Remove sheep from other pastures
      setHorses(horses.filter((h) => h.id !== animal.id));
      setCows(cows.filter((c) => c.id !== animal.id));
    } else if (animal.type === 'cow') {
      // Move cow directly to the cows box
      setCowsMoved([...cowsMoved, animal.id]);
      setCows([...cows, animal]);
      // Remove cow from other pastures
      setHorses(horses.filter((h) => h.id !== animal.id));
      setSheep(sheep.filter((s) => s.id !== animal.id));
    }
  };

  // Render animals (sheep, cows, horses) in their respective pastures
  const renderAnimals = (animals, side) => {
    return animals.map((animal) => {
      let animalImage;

      // Set the correct image based on the animal type
      if (animal.type === 'sheep') {
        animalImage = sheepImage;
      } else if (animal.type === 'cow') {
        animalImage = cowImage;
      } else if (animal.type === 'horse') {
        animalImage = horseImage;
      }

      return (
        <div
          key={animal.id}
          className={`${animal.type}`}
          onClick={() => moveAnimal(animal, side)}
        >
          <img src={animalImage} alt={animal.type} style={{ width: '50px', height: '50px' }} />
          <div>{animal.id} - {animal.weight} kg</div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <div id="pasture">
        <div id="left-side" className="side">
          <h2>Cows</h2>
          <div id="cows">{renderAnimals(cows, 'cow')}</div>
        </div>
        <div id="middle-side" className="side">
          <h2>Sheep</h2>
          <div id="sheep">{renderAnimals(sheep, 'sheep')}</div>
        </div>
        <div id="right-side" className="side">
          <h2>Horses</h2>
          <div id="horses">{renderAnimals(horses, 'horse')}</div>
        </div>
      </div>
      <button id="clean-pasture" onClick={populatePasture}>
        Start
      </button>
    </div>
  );
}

export default App;


















































//  import React, { useState, useEffect } from 'react';
// import './App.css';

// // Function to generate a random 7-digit number
// const generateRandomNumber = () => {
//   return Math.floor(Math.random() * 10000000); // 7-digit random number
// };

// // Function to generate an animal (sheep, cow, or horse)
// const createAnimal = (type) => {
//   return {
//     id: type === 'sheep' ? `S${generateRandomNumber()}` : 
//         type === 'cow' ? `C${generateRandomNumber()}` : 
//         type === 'horse' ? `H${generateRandomNumber()}` : 
//         null, // Ensure a proper animal ID is generated
//     type: type,
//     weight: Math.floor(Math.random() * 100) + 10 // Random weight for each animal
//   };
// };

// function App() {
//   // State to track sheep, cows, horses, and their movements
//   const [sheep, setSheep] = useState([]);
//   const [cows, setCows] = useState([]);
//   const [horses, setHorses] = useState([]);
//   const [sheepMoved, setSheepMoved] = useState([]); // Track sheep that have moved
//   const [cowsMoved, setCowsMoved] = useState([]); // Track cows that have moved
//   const [horsesMoved, setHorsesMoved] = useState([]); // Track horses that have moved

//   // Function to populate pastures with mixed-up animals
//   const populatePasture = () => {
//     const numSheep = 7; // Fixed number of sheep
//     const numCows = 7; // Fixed number of cows
//     const numHorses = 7; // Fixed number of horses

//     // Create sheep, cows, and horses
//     const newSheep = Array.from({ length: numSheep }, () => createAnimal('sheep'));
//     const newCows = Array.from({ length: numCows }, () => createAnimal('cow'));
//     const newHorses = Array.from({ length: numHorses }, () => createAnimal('horse'));

//     // Mix up the animals by randomly placing some sheep in the cow pasture, cows in the sheep pasture, etc.
//     const mixedSheep = newSheep.slice();
//     const mixedCows = newCows.slice();
//     const mixedHorses = newHorses.slice();

//     // Distribute horses randomly between sheep, cows, and horses boxes
//     const sheepInCowPasture = mixedSheep.splice(Math.floor(Math.random() * mixedSheep.length), 5);
//     const sheepInHorsesPasture = mixedSheep.splice(Math.floor(Math.random() * mixedSheep.length), 5);
//     const cowInSheepPasture = mixedCows.splice(Math.floor(Math.random() * mixedCows.length), 5);
//     const cowInHorsesPasture = mixedCows.splice(0, Math.floor(Math.random() * 4) + 1);
//     const horsesInSheepPasture = mixedHorses.splice(Math.floor(Math.random() * mixedHorses.length), 5);
//     const horsesInCowPasture = mixedHorses.splice(Math.floor(Math.random() * mixedHorses.length), 5);

//     // Now mixed up, set animals in respective pastures
//     setSheep([...mixedSheep, ...cowInSheepPasture, ...horsesInSheepPasture]);
//     setCows([...mixedCows, ...sheepInCowPasture, ...horsesInCowPasture]);
//     setHorses([...mixedHorses, ...sheepInHorsesPasture, ...cowInHorsesPasture]);

//     // Save animals to localStorage for persistence
//     localStorage.setItem('sheep', JSON.stringify([...mixedSheep, ...cowInSheepPasture, ...horsesInSheepPasture]));
//     localStorage.setItem('cows', JSON.stringify([...mixedCows, ...sheepInCowPasture, ...horsesInCowPasture]));
//     localStorage.setItem('horses', JSON.stringify([...mixedHorses, ...sheepInHorsesPasture, ...cowInHorsesPasture]));

//     setSheepMoved([]); // Reset the sheep that have moved
//     setCowsMoved([]);  // Reset the cows that have moved
//     setHorsesMoved([]); // Reset the horses that have moved
//   };

//   // Load the stored animals from localStorage (if any)
//   useEffect(() => {
//     const storedSheep = JSON.parse(localStorage.getItem('sheep'));
//     const storedCows = JSON.parse(localStorage.getItem('cows'));
//     const storedHorses = JSON.parse(localStorage.getItem('horses'));

//     if (storedSheep && storedCows && storedHorses) {
//       setSheep(storedSheep);
//       setCows(storedCows);
//       setHorses(storedHorses);
//     } else {
//       populatePasture();
//     }
//   }, []);

//   // Function to move an animal between pastures
//   const moveAnimal = (animal, side) => {
//     if (animal.type === 'horse') {
//       // Move horse directly to the horses box only, no matter where it is
//       setHorsesMoved([...horsesMoved, animal.id]);
//       setHorses([...horses, animal]);
//       // Remove horse from other pastures
//       setSheep(sheep.filter((s) => s.id !== animal.id));
//       setCows(cows.filter((c) => c.id !== animal.id));
//     } else if (side === 'sheep') {
//       if (sheepMoved.includes(animal.id)) {
//         // Move back to the original side (cows)
//         setSheepMoved(sheepMoved.filter((id) => id !== animal.id));
//         setCows([...cows, animal]);
//         setSheep(sheep.filter((s) => s.id !== animal.id));
//       } else {
//         // Move sheep to cows side
//         setSheepMoved([...sheepMoved, animal.id]);
//         setSheep(sheep.filter((s) => s.id !== animal.id));
//         setCows([...cows, animal]);
//       }
//     } else if (side === 'cow') {
//       if (cowsMoved.includes(animal.id)) {
//         // Move back to the original side (sheep)
//         setCowsMoved(cowsMoved.filter((id) => id !== animal.id));
//         setSheep([...sheep, animal]);
//         setCows(cows.filter((c) => c.id !== animal.id));
//       } else {
//         // Move cow to sheep side
//         setCowsMoved([...cowsMoved, animal.id]);
//         setCows(cows.filter((c) => c.id !== animal.id));
//         setSheep([...sheep, animal]);
//       }
//     } else if (animal.type === 'sheep') {
//       // Move horse directly to the horses box only, no matter where it is
//       setSheepMoved([...sheepMoved, animal.id]);
//       setSheep([...sheep, animal]);
//       // Remove sheep from other pastures
//       setHorses(horses.filter((h) => h.id !== animal.id));
//       setCows(cows.filter((c) => c.id !== animal.id));
//     } else if (animal.type === 'cow') {
//       // Move horse directly to the horses box only, no matter where it is
//       setCowsMoved([...cowsMoved, animal.id]);
//       setCows([...cows, animal]);
//       // Remove cow from other pastures
//       setHorses(horses.filter((h) => h.id !== animal.id));
//       setSheep(sheep.filter((s) => s.id !== animal.id));
//     }
//   };
  

//   // Render animals (sheep, cows, horses) in their respective pastures
// const renderAnimals = (animals, side) => {
//   return animals.map((animal) => (
//     <div
//       key={animal.id}
//       className={`${animal.type}`}  // Fixed the className assignment
//       onClick={() => moveAnimal(animal, side)}
//     >
//       {animal.id} - {animal.weight} kg
//     </div>
//   ));
// };


//   return (
//     <div className="App">
//       <div id="pasture">
//         <div id="left-side" className="side">
//           <h2>Cows</h2>
//           <div id="cows">{renderAnimals(cows, 'cow')}</div>
//         </div>
//         <div id="middle-side" className="side">
//           <h2>Sheep</h2>
//           <div id="sheep">{renderAnimals(sheep, 'sheep')}</div>
//         </div>
//         <div id="right-side" className="side">
//           <h2>Horses</h2>
//           <div id="horses">{renderAnimals(horses, 'horse')}</div>
//         </div>
//       </div>
//       <button id="clean-pasture" onClick={populatePasture}>
//         Clean Pastures
//       </button>
//     </div>
//   );
// }

// export default App;





















































