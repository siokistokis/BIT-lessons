
// import './App.css';



// import sheep from './Components/sheep';
// import cow from './Components/cow'

// function App() {

//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;














// import React, { useState, useEffect } from 'react';
// import './App.css';

// // Function to generate a random 7-digit number
// const generateRandomNumber = () => {
//   return Math.floor(Math.random() * 10000000); // 7 digit random number
// };

// // Function to generate an animal (sheep or cow)
// const createAnimal = (type) => {
//   return {
//     // id: type === 'sheep' ? `S${generateRandomNumber()}` : `C${generateRandomNumber()}` : `$H{generateRandomNumber()}`;
    
//     id : type === 'sheep' ? `S${generateRandomNumber()}` : type === 'cow' ? `C${generateRandomNumber()}` : type === 'horses' `H${generateRandomNumber()}`,

//     type: type,
    
//   };
 
// };



// function App() {
//   // State to track sheep, cows, and their movements
//   const [sheep, setSheep] = useState([]);
//   const [cows, setCows] = useState([]);
//   const [sheepMoved, setSheepMoved] = useState([]); // Track sheep that have moved
//   const [cowsMoved, setCowsMoved] = useState([]); // Track cows that have moved
//   const [horses, setHorses] = useState([]);
//   const [horsesMoved, setHorsesMoved] = useState([]);

//   // Function to populate pastures with mixed-up animals
//   const populatePasture = () => {
//     const numSheep = Math.floor(Math.random() * 16) + 5;
//     const numCows = Math.floor(Math.random() * 16) + 5;
//     const numHorses = Math.floor(Math.random() * 16) +5;

//     // Create sheep and cows
//     const newSheep = Array.from({ length: numSheep }, () => createAnimal('sheep'));
//     const newCows = Array.from({ length: numCows }, () => createAnimal('cow'));
//     const newHorses = Array.from({ length: numHorses}, () => createAnimal('horses'));

//     // Mix up the animals by randomly placing some sheep in the cow pasture and some cows in the sheep pasture
//     const mixedSheep = newSheep.slice();
//     const mixedCows = newCows.slice();
//     const mixedHorses = newHorses.slice();

//     const sheepInCowPasture = mixedSheep.splice(Math.floor(Math.random() * mixedSheep.length), 12);
//     const cowInSheepPasture = mixedCows.splice(Math.floor(Math.random() * mixedCows.length), 12);
//     const horsesInSheepPasture = mixedHorses.splice(Math.floor(Math.random() * mixedHorses.length), 12);

//     // Now mixed up, some sheep in cow pasture and cows in sheep pasture
//     setSheep([...mixedSheep, ...cowInSheepPasture]);
//     setCows([...mixedCows, ...sheepInCowPasture]);
//     setHorses([...mixedHorses, ...horsesInSheepPasture]);
  
//     // Save animals to localStorage for persistence
//     localStorage.setItem('sheep', JSON.stringify([...mixedSheep, ...cowInSheepPasture]));
//     localStorage.setItem('cows', JSON.stringify([...mixedCows, ...sheepInCowPasture]));
//     localStorage.setItem('horses', JSON.stringify([...mixedHorses, ...horsesInSheepPasture]))

//     setSheepMoved([]); // Reset the sheep that have moved
//     setCowsMoved([]);  // Reset the cows that have moved
//     setHorsesMoved([]);
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

//   // Function to move an animal to the opposite pasture when clicked
//   const moveAnimal = (animal, side) => {
//     if (side === 'sheep') {
//       if (sheepMoved.includes(animal.id)) {
//         // Move back to the original side (cows)
//         setSheepMoved(sheepMoved.filter((id) => id !== animal.id));
//         setCows([...cows, animal]);
//         setHorses([...horses, animal]);
//         setSheep(sheep.filter((s) => s.id !== animal.id));
//       } else {
//         // Move sheep to cows side
//         setSheepMoved([...sheepMoved, animal.id]);
//         setSheep(sheep.filter((s) => s.id !== animal.id));
//         setCows([...cows, animal]);
//         setHorses([...horses, animal]);
//       }
//     } else {
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
//     } 
   
      
    
//   };


 

// import React, { useState } from "react";

// const generateRandomNumber = () => Math.floor(Math.random() * 1000);

// const generateAnimal = () => {
//   const types = ["cow", "sheep", "horse"];
//   const type = types[Math.floor(Math.random() * types.length)];
//   const id =
//     type === "sheep"
//       ? `A${generateRandomNumber()}`
//       : type === "cow"
//       ?  `K${generateRandomNumber()}`
//       : `H${generateRandomNumber()}`;

//   return { id, type };
// };

// export default function App() {
//   const [animals, setAnimals] = useState(Array.from({ length: 10 }, generateAnimal));
//   const [cows, setCows] = useState([]);
//   const [sheep, setSheep] = useState([]);
//   const [horses, setHorses] = useState([]);

//   const moveToCorrectBox = (animal) => {
//     setAnimals((prev) => prev.filter((a) => a.id !== animal.id));

//     if (animal.type === "cow") setCows((prev) => [...prev, animal]);
//     if (animal.type === "sheep") setSheep((prev) => [...prev, animal]);
//     if (animal.type === "horse") setHorses((prev) => [...prev, animal]);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Animal Sorting Game</h1>

//       {/* Mixed Box */}
//       <div className="border p-4 mb-4">
//         <h2 className="font-semibold">Mixed Animals (Click to Sort)</h2>
//         <div className="flex gap-2 flex-wrap">
//           {animals.map((animal) => (
//             <div
//               key={animal.id}
//               className="p-2 border rounded bg-gray-200 cursor-pointer"
//               onClick={() => moveToCorrectBox(animal)}
//             >
//               {animal.type.toUpperCase()} - {animal.id}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Correct Boxes */}
//       <div className="grid grid-cols-3 gap-4">
//         <AnimalBox title="Cows" animals={cows} bg="bg-yellow-300" />
//         <AnimalBox title="Sheep" animals={sheep} bg="bg-green-300" />
//         <AnimalBox title="Horses" animals={horses} bg="bg-blue-300" />
//       </div>
//     </div>
//   );
// }

// const AnimalBox = ({ title, animals, bg }) => (
//   <div className={`p-4 border rounded ${bg}`}>
//     <h2 className="font-semibold">{title}</h2>
//     <div className="flex flex-wrap gap-2">
//       {animals.map((animal) => (
//         <div key={animal.id} className="p-2 border rounded bg-white">
//           {animal.id}
//         </div>
//       ))}
//     </div>
//   </div>
// );


























// import React, { useState, useEffect } from 'react';
// import './App.css';

// // Function to generate a random 7-digit number
// const generateRandomNumber = () => {
//   return Math.floor(Math.random() * 10000000); // 7 digit random number 
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
//     const numSheep = Math.floor(Math.random() * 16) + 5;
//     const numCows = Math.floor(Math.random() * 16) + 5;
//     const numHorses = Math.floor(Math.random() * 16) + 5;

//     // Create sheep, cows, and horses
//     const newSheep = Array.from({ length: numSheep }, () => createAnimal('sheep'));
//     const newCows = Array.from({ length: numCows }, () => createAnimal('cow'));
//     const newHorses = Array.from({ length: numHorses }, () => createAnimal('horse'));

//     // Mix up the animals by randomly placing some sheep in the cow pasture, cows in the sheep pasture, etc.
//     const mixedSheep = newSheep.slice();
//     const mixedCows = newCows.slice();
//     const mixedHorses = newHorses.slice();

//     const sheepInCowPasture = mixedSheep.splice(Math.floor(Math.random() * mixedSheep.length), 12);
//     const cowInSheepPasture = mixedCows.splice(Math.floor(Math.random() * mixedCows.length), 12);
//     const horsesInSheepPasture = mixedHorses.splice(Math.floor(Math.random() * mixedHorses.length), 12);

//     // Now mixed up, set animals in respective pastures
//     setSheep([...mixedSheep, ...cowInSheepPasture]);
//     setCows([...mixedCows, ...sheepInCowPasture]);
//     setHorses([...mixedHorses, ...horsesInSheepPasture]);

//     // Save animals to localStorage for persistence
//     localStorage.setItem('sheep', JSON.stringify([...mixedSheep, ...cowInSheepPasture]));
//     localStorage.setItem('cows', JSON.stringify([...mixedCows, ...sheepInCowPasture]));
//     localStorage.setItem('horses', JSON.stringify([...mixedHorses, ...horsesInSheepPasture]));

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
//     if (side === 'sheep') {
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
//     } else if (side === 'horse') {
//       if (horsesMoved.includes(animal.id)) {
//         // Move back to the original side
//         setHorsesMoved(horsesMoved.filter((id) => id !== animal.id));
//         setCows([...cows, animal]);
//         setHorses(horses.filter((h) => h.id !== animal.id));
//       } else {
//         // Move horse to cows side
//         setHorsesMoved([...horsesMoved, animal.id]);
//         setHorses(horses.filter((h) => h.id !== animal.id));
//         setCows([...cows, animal]);
//       }
//     }
//   };

//   // Render animals (sheep, cows, horses) in their respective pastures
//   const renderAnimals = (animals, side) => {
//     return animals.map((animal) => (
//       <div
//         key={animal.id}
//         className={`animal ${animal.type}`}
//         onClick={() => moveAnimal(animal, side)}
//       >
//         {animal.id} - {animal.weight} kg
//       </div>
//     ));
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
//         Clean Pastures
//       </button>
//     </div>
//   );
// }

// export default App;


























































// import React, { useState, useEffect } from 'react';
// import './App.css';

// // Function to generate a random 7-digit number
// const generateRandomNumber = () => {
//   return Math.floor(Math.random() * 10000000); // 7 digit random number 
// };

// // Function to generate an animal (sheep, cow, or horse)
// const createAnimal = (type) => {
//   return {
//     id: type === 'sheep' ? `S${generateRandomNumber()}` : 
//         type === 'cow' ? `C${generateRandomNumber()}` : 
//         type === 'horse' ? `H${generateRandomNumber()}` : 
//         null, // Ensure a proper animal ID is generated
//     type: type
//   };
// };

// function App() {
//   // State to track all animals and their movements
//   const [animals, setAnimals] = useState([]);
//   const [cows, setCows] = useState([]);
//   const [sheep, setSheep] = useState([]);
//   const [horses, setHorses] = useState([]);

//   // Function to populate pastures with mixed-up animals
//   const populatePasture = () => {
//     const numSheep = Math.floor(Math.random() * 10) + 5;
//     const numCows = Math.floor(Math.random() * 10) + 5;
//     const numHorses = Math.floor(Math.random() * 10) + 5;

//     // Create sheep, cows, and horses
//     const newSheep = Array.from({ length: numSheep }, () => createAnimal('sheep'));
//     const newCows = Array.from({ length: numCows }, () => createAnimal('cow'));
//     const newHorses = Array.from({ length: numHorses }, () => createAnimal('horse'));

//     // Combine all animals into a single array and mix them up
//     const mixedAnimals = [...newSheep, ...newCows, ...newHorses];
//     setAnimals(mixedAnimals);
//   };

//   // Load the stored animals from localStorage (if any)
//   useEffect(() => {
//     const storedAnimals = JSON.parse(localStorage.getItem('animals'));
//     if (storedAnimals) {
//       setAnimals(storedAnimals);
//     } else {
//       populatePasture();
//     }
//   }, []);

//   // Function to move an animal to its correct pasture when clicked
//   const moveAnimal = (animal) => {
//     setAnimals((prev) => prev.filter((a) => a.id !== animal.id));

//     if (animal.type === 'cow') setCows((prev) => [...prev, animal]);
//     if (animal.type === 'sheep') setSheep((prev) => [...prev, animal]);
//     if (animal.type === 'horse') setHorses((prev) => [...prev, animal]);
//   };

//   // Render animals in their respective pastures
//   const renderAnimals = () => {
//     return animals.map((animal) => (
//       <div
//         key={animal.id}
//         className={`animal ${animal.type}`}
//         onClick={() => moveAnimal(animal)}
//       >
//         {animal.type[0].toUpperCase()} {animal.id}
//       </div>
//     ));
//   };

//   return (
//     <div className="App">
//       {/* Mixed Animals */}
//       <div id="mixed-pasture" className="pasture">
//         <h2>Mixed Animals (Click to Sort)</h2>
//         <div className="animal-container">{renderAnimals()}</div>
//       </div>

//       {/* Correct Pastures */}
//       <div id="pasture">
//         <div id="left-side" className="side">
//           <h2>Cows</h2>
//           <div className="animal-container">
//             {cows.map((cow) => (
//               <div key={cow.id} className="animal cow">
//                 {cow.id}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div id="middle-side" className="side">
//           <h2>Sheep</h2>
//           <div className="animal-container">
//             {sheep.map((sheep) => (
//               <div key={sheep.id} className="animal sheep">
//                 {sheep.id}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div id="right-side" className="side">
//           <h2>Horses</h2>
//           <div className="animal-container">
//             {horses.map((horse) => (
//               <div key={horse.id} className="animal horse">
//                 {horse.id}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <button id="clean-pasture" onClick={populatePasture}>
//         Clean Pastures
//       </button>
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

// Function to generate an animal (sheep, cow, or horse)
const createAnimal = (type) => {
  return {
    id: type === 'sheep' ? `S${generateRandomNumber()}` :
        type === 'cow' ? `C${generateRandomNumber()}` : 
        type === 'horse' ? `H${generateRandomNumber()}` : 
        null, // Ensure a proper animal ID is generated
    type: type
  };
};

function App() {
  // State to track animals in mixed, cow, sheep, and horse pastures
  const [mixedAnimals, setMixedAnimals] = useState([]);
  const [cows, setCows] = useState([]);
  const [sheep, setSheep] = useState([]);
  const [horses, setHorses] = useState([]);

  // Function to populate pastures with mixed-up animals
  const populatePasture = () => {
    const numSheep = Math.floor(Math.random() * 10) + 5;
    const numCows = Math.floor(Math.random() * 10) + 5;
    const numHorses = Math.floor(Math.random() * 10) + 5;

    // Create sheep, cows, and horses
    const newSheep = Array.from({ length: numSheep }, () => createAnimal('sheep'));
    const newCows = Array.from({ length: numCows }, () => createAnimal('cow'));
    const newHorses = Array.from({ length: numHorses }, () => createAnimal('horse'));

    // Mix the animals randomly within the pastures
    const allAnimals = [...newSheep, ...newCows, ...newHorses];

    // Shuffle the animals and place them in the mixed pasture
    const shuffledAnimals = allAnimals.sort(() => Math.random() - 0.5);

    // Set the shuffled animals in the mixed pasture
    setMixedAnimals(shuffledAnimals);
    setCows([]); // Empty the cow pasture
    setSheep([]); // Empty the sheep pasture
    setHorses([]); // Empty the horse pasture
  };

  // Load the stored animals from localStorage (if any)
  useEffect(() => {
    const storedAnimals = JSON.parse(localStorage.getItem('animals'));
    if (storedAnimals) {
      setMixedAnimals(storedAnimals);
    } else {
      populatePasture();
    }
  }, []);

  // Function to move an animal to its correct pasture when clicked
  const moveAnimal = (animal) => {
    setMixedAnimals((prev) => prev.filter((a) => a.id !== animal.id));

    if (animal.type === 'cow') setCows((prev) => [...prev, animal]);
    if (animal.type === 'sheep') setSheep((prev) => [...prev, animal]);
    if (animal.type === 'horse') setHorses((prev) => [...prev, animal]);
  };

  // Render animals in their respective pastures
  const renderAnimals = (animals) => {
    return animals.map((animal) => (
      <div
        key={animal.id}
        className={`animal ${animal.type}`}
        onClick={() => moveAnimal(animal)}
      >
        {animal.type[0].toUpperCase()} {animal.id}
      </div>
    ));
  };

  return (
    <div className="App">
      {/* Mixed Animals */}
      <div id="mixed-pasture" className="pasture">
        <h2>Mixed Animals (Click to Sort)</h2>
        <div className="animal-container">{renderAnimals(mixedAnimals)}</div>
      </div>

      {/* Correct Pastures */}
      <div id="pasture">
        <div id="left-side" className="side">
          <h2>Cows</h2>
          <div className="animal-container">
            {cows.map((cow) => (
              <div key={cow.id} className="animal cow">
                {cow.id}
              </div>
            ))}
          </div>
        </div>

        <div id="middle-side" className="side">
          <h2>Sheep</h2>
          <div className="animal-container">
            {sheep.map((sheep) => (
              <div key={sheep.id} className="animal sheep">
                {sheep.id}
              </div>
            ))}
          </div>
        </div>

        <div id="right-side" className="side">
          <h2>Horses</h2>
          <div className="animal-container">
            {horses.map((horse) => (
              <div key={horse.id} className="animal horse">
                {horse.id}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button id="let-to-pastures" onClick={populatePasture}>
        Let to Pastures
      </button>
    </div>
  );
}

export default App;
