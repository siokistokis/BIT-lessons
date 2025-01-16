// REACT STATE #2


// Sukurti aplikaciją, atvaizduojančią žalią stačiakampį (laukas) padalinta į tris stulpelius (stačiakampius) ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”. Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda mažesnis kvadratas su medžio pavadinimu viduje. Svarbu, kad visi medžiai žaliame kvadrate būtų suskirstyti į tris stulpelius pagal medžio pavadinimą.

// Sukurti aplikaciją su vienu mygtuku “pridėti”. Paspaudus mygtuką, atsirastų juodas kvadratas su mygtuku “+” ir skaičiumi 0 viduje. Paspaudus kelis kartus mygtuką pridėti atsirastų keli tokie juodi kvadratai, paspaudus 3 - atsirastų 3 ir t.t. Spaudant mygtuką “+” kiekviename iš juodų kvadratų jų viduje esantis skaičius didėtų vienetu (kiekviename kvadrate atskirai).

// Sukurti aplikaciją su vienu mygtuku “+” ir pradiniu skaičiumi 0. Paspaudus mygtuką skaičius didėtų vienetu. Panaudoti localStorage ir padaryti taip, kad skaičiavimai kiekvieną kartą perkrovus puslapį prasidėtų ne nuo 0, o nuo prieš tai buvusio skaičiaus

import React, { useState, useEffect } from 'react';

// Task 1: Green Rectangle with Three Columns and Tree Buttons
const TreeColumns = () => {
  const [trees, setTrees] = useState({
    oak: [],
    birch: [],
    ash: [],
  });

  const handleButtonClick = (treeType) => {
    setTrees((prevTrees) => ({
      ...prevTrees,
      [treeType]: [...prevTrees[treeType], treeType],
    }));
  };

  return (
    <div>
      <h2>Task 1: Green Rectangle with Three Columns and Tree Buttons</h2>
      <div style={{ display: 'flex', border: '2px solid green', padding: '10px' }}>
        {/* Tree Columns */}
        <div style={{ flex: 1, marginRight: '10px' }}>
          <h3>Oak</h3>
          {trees.oak.map((tree, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'green',
                padding: '10px',
                margin: '5px',
                textAlign: 'center',
                color: 'white',
                fontSize: '16px',
              }}
            >
              Oak
            </div>
          ))}
        </div>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <h3>Birch</h3>
          {trees.birch.map((tree, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'green',
                padding: '10px',
                margin: '5px',
                textAlign: 'center',
                color: 'white',
                fontSize: '16px',
              }}
            >
              Birch
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <h3>Ash</h3>
          {trees.ash.map((tree, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'green',
                padding: '10px',
                margin: '5px',
                textAlign: 'center',
                color: 'white',
                fontSize: '16px',
              }}
            >
              Ash
            </div>
          ))}
        </div>
      </div>
      {/* Tree Buttons */}
      <div>
        <button onClick={() => handleButtonClick('oak')}>Oak</button>
        <button onClick={() => handleButtonClick('birch')}>Birch</button>
        <button onClick={() => handleButtonClick('ash')}>Ash</button>
      </div>
    </div>
  );
};

// Task 2: Adding Black Squares with Count Inside
const BlackSquares = () => {
  const [squares, setSquares] = useState([]);

  const addSquare = () => {
    setSquares((prevSquares) => [
      ...prevSquares,
      { id: prevSquares.length, count: 0 },
    ]);
  };

  const incrementCount = (id) => {
    setSquares((prevSquares) =>
      prevSquares.map((square) =>
        square.id === id ? { ...square, count: square.count + 1 } : square
      )
    );
  };

  return (
    <div>
      <h2>Task 2: Adding Black Squares with Count Inside</h2>
      <button onClick={addSquare}>Add</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {squares.map((square) => (
          <div
            key={square.id}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'black',
              margin: '10px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
            }}
          >
            <button onClick={() => incrementCount(square.id)}>+</button>
            {square.count}
          </div>
        ))}
      </div>
    </div>
  );
};

// Task 3: Counter with LocalStorage
const CounterWithLocalStorage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Task 3: Counter with LocalStorage</h2>
      <div>
        <button onClick={incrementCount}>+</button>
        <p>Count: {count}</p>
      </div>
    </div>
  );
};

// Main App Component rendering all tasks
const App = () => {
  return (
    <div>
      <TreeColumns />
      <BlackSquares />
      <CounterWithLocalStorage />
    </div>
  );
};

export default App;
