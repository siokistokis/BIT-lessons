

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import sheepImage from './img/sheep.png';   // Import the sheep image
// import cowImage from './img/cow.png';       // Import the cow image
// // import horseImage from './img/horse.png';   // Import the horse image

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

//   // const [animals] 
//   const [sheep, setSheep] = useState([]);
//   const [cows, setCows] = useState([]);
//   // const [horses, setHorses] = useState([]);
//   // const [sheepMoved, setSheepMoved] = useState([]); // Track sheep that have moved
//   // const [cowsMoved, setCowsMoved] = useState([]); // Track cows that have moved
//   // const [horsesMoved, setHorsesMoved] = useState([]); // Track horses that have moved

//   // Function to populate pastures with mixed-up animals
//   const populatePasture = () => {
//     const numSheep = 7; // Fixed number of sheep
//     const numCows = 7; // Fixed number of cows
//     // const numHorses = 7; // Fixed number of horses

//     // Create sheep, cows, and horses
//     const newSheep = Array.from({ length: numSheep }, () => createAnimal('sheep'));
//     const newCows = Array.from({ length: numCows }, () => createAnimal('cow'));
//     // const newHorses = Array.from({ length: numHorses }, () => createAnimal('horse'));

//     // Mix up the animals by randomly placing some sheep in the cow pasture, cows in the sheep pasture, etc.
//     const mixedSheep = newSheep.slice();
//     const mixedCows = newCows.slice();
//     // const mixedHorses = newHorses.slice();

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




//   const moveAnimal = (animal, side) => {
//     if (animal.type === 'horse') {
//       // Prevent adding the horse again if it's already in the horses box
//       if (!horses.some((h) => h.id === animal.id)) {
//         // Move horse directly to the horses box only, no matter where it is
//         setHorsesMoved([...horsesMoved, animal.id]);
//         setHorses([...horses, animal]);
//       }
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
//       // Move sheep directly to the sheep box
//       setSheepMoved([...sheepMoved, animal.id]);
//       setSheep([...sheep, animal]);
//       // Remove sheep from other pastures
//       setHorses(horses.filter((h) => h.id !== animal.id));
//       setCows(cows.filter((c) => c.id !== animal.id));
//     } else if (animal.type === 'cow') {
//       // Move cow directly to the cows box
//       setCowsMoved([...cowsMoved, animal.id]);
//       setCows([...cows, animal]);
//       // Remove cow from other pastures
//       setHorses(horses.filter((h) => h.id !== animal.id));
//       setSheep(sheep.filter((s) => s.id !== animal.id));
//     }
//   };
  



//   // Render animals (sheep, cows, horses) in their respective pastures
//   const renderAnimals = (animals, side) => {
//     return animals.map((animal) => {
//       let animalImage;

//       // Set the correct image based on the animal type
//       if (animal.type === 'sheep') {
//         animalImage = sheepImage;
//       } else if (animal.type === 'cow') {
//         animalImage = cowImage;
//       } else if (animal.type === 'horse') {
//         animalImage = horseImage;
//       }

//       return (
//         <div
//           key={animal.id}
//           className={`${animal.type}`}
//           onClick={() => moveAnimal(animal, side)}
//         >
//           <img src={animalImage} alt={animal.type} style={{ width: '50px', height: '50px' }} />
//           <div>{animal.id} - {animal.weight} kg</div>
//         </div>
//       );
//     });
//   };

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
//         Start
//       </button>
//     </div>
//   );
// }

// export default App;




























import React, { useState, useEffect } from 'react';
import './App.css';
import sheepImage from './img/sheep.png'; // Import the sheep image
import cowImage from './img/cow.png'; // Import the cow image

// Function to generate a random 7-digit number
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10000000); // 7-digit random number
};

// Function to generate an animal (sheep or cow)
const createAnimal = (type) => {
  return {
    id: type === 'sheep' ? `S${generateRandomNumber()}` :
      type === 'cow' ? `C${generateRandomNumber()}` : null,
    type: type,
    weight: Math.floor(Math.random() * 100) + 10 // Random weight for each animal
  };
};

function App() {
  const [animals, setAnimals] = useState({
    sheep: [],
    cows: [],
  });

  // Function to populate pastures with mixed-up animals
  const populatePasture = () => {
    const numSheep = 7;
    const numCows = 7;

    const newSheep = Array.from({ length: numSheep }, () => createAnimal('sheep'));
    const newCows = Array.from({ length: numCows }, () => createAnimal('cow'));

    const shuffledAnimals = [...newSheep, ...newCows].sort(() => Math.random() - 0.5);

    const sheepAnimals = shuffledAnimals.filter(animal => animal.type === 'sheep');
    const cowAnimals = shuffledAnimals.filter(animal => animal.type === 'cow');

    setAnimals({
      sheep: sheepAnimals,
      cows: cowAnimals,
    });

    localStorage.setItem('animals', JSON.stringify({ sheep: sheepAnimals, cows: cowAnimals }));
  };

  // Load the stored animals from localStorage (if any)
  useEffect(() => {
    const storedAnimals = JSON.parse(localStorage.getItem('animals'));
    if (storedAnimals && storedAnimals.sheep && storedAnimals.cows) {
      setAnimals(storedAnimals);
    } else {
      populatePasture();
    }
  }, []);

  // Move animal to another pasture
  const moveAnimal = (animal, currentPasture) => {
    if (currentPasture === 'sheep') {
      setAnimals(prevAnimals => ({
        sheep: prevAnimals.sheep.filter(s => s.id !== animal.id),
        cows: [...prevAnimals.cows, animal],
      }));
    } else if (currentPasture === 'cows') {
      setAnimals(prevAnimals => ({
        cows: prevAnimals.cows.filter(c => c.id !== animal.id),
        sheep: [...prevAnimals.sheep, animal],
      }));
    }
  };

  // Render animals (sheep or cows) in their respective pastures
  const renderAnimals = (type) => {
    // Make sure animals[type] is defined and an array
    if (Array.isArray(animals[type])) {
      return animals[type].map((animal) => {
        let animalImage;
        if (animal.type === 'sheep') {
          animalImage = sheepImage;
        } else if (animal.type === 'cow') {
          animalImage = cowImage;
        }

        return (
          <div
            key={animal.id}
            className={`${animal.type}`}
            onClick={() => moveAnimal(animal, type)}
          >
            <img src={animalImage} alt={animal.type} style={{ width: '50px', height: '50px' }} />
            <div>{animal.id} - {animal.weight} kg</div>
          </div>
        );
      });
    }
    return null; // Return nothing if animals[type] is not an array or is undefined
  };

  // Function to delete all animals
  const deleteAnimals = () => {
    setAnimals({
      sheep: [],
      cows: [],
    });
    localStorage.removeItem('animals');
  };

  return (
    <div className="App">
      <div id="pasture">
      <h2>Cows</h2>
        <div id="left-side" className="side">
          {/* <h2>Cows</h2> */}
          <div id="cows">{renderAnimals('cows')}</div>
        </div>
        <h2>Sheep</h2>
        <div id="middle-side" className="side">
          {/* <h2>Sheep</h2> */}
          <div id="sheep">{renderAnimals('sheep')}</div>
        </div>
      </div>
      <button id="clean-pasture" onClick={populatePasture}>
        Start
      </button>
      {/* Add the Delete Animals button */}
      <button id="delete-animals" onClick={deleteAnimals}>
        Delete Animals
      </button>
    </div>
  );
}

export default App;
