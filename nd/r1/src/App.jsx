// REACT STATE


// Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.

// import React, { useState } from 'react';
// import './app.css';

// function App() {
//   const [isCircle, setIsCircle] = useState(true); // Būsena, kuri nustato, ar tai apskritimas

//   const handleClick = () => {
//     setIsCircle(!isCircle); // Keičia formą, paspaudus mygtuką
//   };

//   return (
//     <div className="App">
//       <button onClick={handleClick}>Change</button>
//       <div className={isCircle ? 'circle' : 'square'}></div>
//     </div>
//   );
// }

// export default App;



// Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25


// import { useState } from 'react';  // Only import useState, React is no longer needed
// import './app.css';  // Ensure that the CSS path is correct

// function App() {
//   // State to toggle between circle and rectangle
//   const [isCircle, setIsCircle] = useState(true);
  
//   // State to hold the random number
//   const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

//   // Function to change the shape
//   const handleChange = () => {
//     setIsCircle(!isCircle);
//   };

//   // Function to generate a random number between 5 and 25
//   const handleRandom = () => {
//     setRandomNumber(generateRandomNumber());
//   };

//   // Function to generate random number
//   function generateRandomNumber() {
//     return Math.floor(Math.random() * 21) + 5; // Random number between 5 and 25
//   }

//   return (
//     <div className="appWrapper"> {/* Change this to avoid conflict */}
//       <div className={isCircle ? 'circle' : 'rectangle'}>
//         <span>{randomNumber}</span>
//       </div>
//       <div className="buttons">
//         <button onClick={handleChange}>Change</button>
//         <button onClick={handleRandom}>Random</button>
//       </div>
//     </div>
//   );
// }

// export default App;




// Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3

// Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus dar kartą- dar vienas ir t.t.

// Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina




import React, { useState } from 'react';
import './app.css';  // Ensure CSS is correctly imported

function App() {
  // Task 1: Circle/Rectangle Toggle
  const [isCircle, setIsCircle] = useState(true);

  // Task 2: Random Number in Circle
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  // Task 3: Increment/Decrement Counter
  const [counter, setCounter] = useState(0);

  // Task 4: Add Squares (Blue)
  const [squares, setSquares] = useState([]);

  // Task 5: Add Red/Blue Squares and Reset
  const [coloredSquares, setColoredSquares] = useState([]);

  // Functions
  const handleShapeChange = () => {
    setIsCircle(!isCircle);
  };

  const handleRandomChange = () => {
    setRandomNumber(generateRandomNumber());
  };

  const handleCounterIncrease = () => {
    setCounter(counter + 1);
  };

  const handleCounterDecrease = () => {
    setCounter(counter - 3);
  };

  const handleAddSquare = () => {
    setSquares([...squares, 'blue']);
  };

  const handleAddRedSquare = () => {
    setColoredSquares([...coloredSquares, 'red']);
  };

  const handleAddBlueSquare = () => {
    setColoredSquares([...coloredSquares, 'blue']);
  };

  const handleResetSquares = () => {
    setColoredSquares([]);
  };

  // Helper function for random number generation (between 5 and 25)
  function generateRandomNumber() {
    return Math.floor(Math.random() * 21) + 5;
  }

  return (
    <div className="appWrapper">
      {/* Task 1: Circle/Rectangle Toggle */}
      <div className={isCircle ? 'circle' : 'rectangle'}>
        <span>{randomNumber}</span>
      </div>
      <button onClick={handleShapeChange}>Change</button>
      <button onClick={handleRandomChange}>Random</button>

      {/* Task 2: Random Number in Circle */}
      <div className="counter">
        <button onClick={handleCounterIncrease}>Plus</button>
        <button onClick={handleCounterDecrease}>Minus</button>
        <p>Counter: {counter}</p>
      </div>

      {/* Task 3: Add Blue Squares */}
      <div className="squares">
        <button onClick={handleAddSquare}>Add Blue Square</button>
        <div className="squareContainer">
          {squares.map((_, index) => (
            <div key={index} className="blueSquare"></div>
          ))}
        </div>
      </div>

      {/* Task 4: Add Red/Blue Squares and Reset */}
      <div className="coloredSquares">
        <button onClick={handleAddRedSquare}>Add Red Square</button>
        <button onClick={handleAddBlueSquare}>Add Blue Square</button>
        <button onClick={handleResetSquares}>Reset</button>
        <div className="squareContainer">
          {coloredSquares.map((color, index) => (
            <div key={index} className={color === 'red' ? 'redSquare' : 'blueSquare'}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
