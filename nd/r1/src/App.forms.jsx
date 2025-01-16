// REACT FORMS


// Sukurti komponentą su mygtuku ir įvedimo laukeliu. Įvedus į laukelį skaičių ir paspaudus mygtuką, atsiranda laukelyje nurodytas raudonų kvadratėlių skaičius. Įvedus kitą skaičių ir paspaudus mygtuką, prie jau egzistuojančių kvadratėlių papildomai prisideda naujas laukelyje nurodytas kvadratėlių kiekis. Kiekvieno kvadratėlio viduryje turi būti pavaizduotas rand skaičius 100 - 200.

// Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui ir svoriui įvesti. Rodyti visų įvestų katinukų sąrašą. Puslapiui persikrovus, katinukų sąrašas turi išlikti nepakitęs. Katinukus sąraše rūšiuoti nuo storiausio iki ploniausio. Skaičiuoti ir atvaizduoti bendrą katinukų svorį.

// Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti skaičių 100 kitame 50. Santykis tarp pirmo ir antro laukelio yra 2. Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti ir skaičius kitame laukelyje taip, kad santykis išliktų nepakitęs.

// Sukurti komponentą su trim select pasirinkimais ir teksto įvedimo laukeliu. Įvedamas tekstas turi būti atvaizduojamas atskirai komponento apačioje. Select pasirinkimai sudaryti iš 5 skirtingų spalvų, 5 skirtingų fontų dydžių ir 5 skirtingų fontų (Arial, Times new Roman ar panašiai) Select pasirinkimų nustatymai turi keisti atvaizduojamo teksto išvaizdą.

// Sukurti komponentą su dviem range tipo įvedimais https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range vienu color įvedimu https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color ir mygtukais sukurti ir išsaugoti. Paspaudus mygtuką sukurti, atsiranda naujas kvadratas 100px aukščio ir pločio bei juodu fonu. Keičiant range ir color įvedimus keičiasi ir kvadrato išvaizda. Kvadrato išvaizdą nustato įvedimai: range tipo įvedimai nuo 10 iki 200 ir nustato plotą ir aukštį pikseliais, color- fono spalvą. Paspaudus mygtuką išsaugoti, kvadrato išvaizda išsaugoma ir į nustatymus nebereguoja. Vėl paspaudus mygtuką sukurti- atsiranda naujas reguliuojamas kvadratas.

import React, { useState, useEffect } from 'react';

// Task 1: Red Squares with random numbers
const RedSquares = () => {
  const [number, setNumber] = useState(0);
  const [squares, setSquares] = useState([]);

  const handleClick = () => {
    const newSquares = Array.from({ length: number }, () => Math.floor(Math.random() * (200 - 100 + 1)) + 100);
    setSquares((prevSquares) => [...prevSquares, ...newSquares]);
  };

  return (
    <div>
      <h2>Task 1: Red Squares with Random Numbers</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter number of squares"
      />
      <button onClick={handleClick}>Add Squares</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {squares.map((rand, index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: 'red',
              margin: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            {rand}
          </div>
        ))}
      </div>
    </div>
  );
};

// Task 2: Kitten Names and Weights
const KittenList = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [kittens, setKittens] = useState(() => JSON.parse(localStorage.getItem('kittens')) || []);
  
  useEffect(() => {
    localStorage.setItem('kittens', JSON.stringify(kittens));
  }, [kittens]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && weight) {
      setKittens([...kittens, { name, weight: parseFloat(weight) }]);
      setName('');
      setWeight('');
    }
  };

  return (
    <div>
      <h2>Task 2: Kitten Names and Weights</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter kitten name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter kitten weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="submit">Add Kitten</button>
      </form>
      <div>
        <h3>Kittens List (Sorted by weight):</h3>
        <ul>
          {kittens
            .sort((a, b) => b.weight - a.weight)
            .map((kitten, index) => (
              <li key={index}>
                {kitten.name}: {kitten.weight} kg
              </li>
            ))}
        </ul>
        <div>Total weight: {kittens.reduce((acc, kitten) => acc + kitten.weight, 0)} kg</div>
      </div>
    </div>
  );
};

// Task 3: Ratio Between Two Input Fields
const RatioInput = () => {
  const [input1, setInput1] = useState(100);
  const [input2, setInput2] = useState(50);

  const handleChange = (e, inputNum) => {
    const value = parseInt(e.target.value, 10);
    if (inputNum === 1) {
      setInput1(value);
      setInput2(value / 2);
    } else {
      setInput2(value);
      setInput1(value * 2);
    }
  };

  return (
    <div>
      <h2>Task 3: Ratio Between Two Input Fields</h2>
      <input
        type="number"
        value={input1}
        onChange={(e) => handleChange(e, 1)}
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => handleChange(e, 2)}
      />
      <div>
        Ratio: {input1} / {input2} = 2
      </div>
    </div>
  );
};

// Task 4: Select Inputs and Text Styling
const TextStyler = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('black');
  const [fontSize, setFontSize] = useState('16px');
  const [fontFamily, setFontFamily] = useState('Arial');

  return (
    <div>
      <h2>Task 4: Select Inputs and Text Styling</h2>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <select onChange={(e) => setColor(e.target.value)}>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <select onChange={(e) => setFontSize(e.target.value)}>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="28px">28px</option>
        </select>
        <select onChange={(e) => setFontFamily(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>
      <div style={{ color, fontSize, fontFamily }}>{text}</div>
    </div>
  );
};

// Task 5: Adjustable Square with Save and Create Functionality
const AdjustableSquare = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [color, setColor] = useState('#000000');
  const [savedSquares, setSavedSquares] = useState([]);

  const handleCreate = () => {
    setSavedSquares((prevSquares) => [
      ...prevSquares,
      { width, height, color },
    ]);
  };

  const handleSave = (index) => {
    setSavedSquares((prevSquares) => {
      const updatedSquares = [...prevSquares];
      updatedSquares[index] = { width, height, color };
      return updatedSquares;
    });
  };

  return (
    <div>
      <h2>Task 5: Adjustable Square with Save and Create</h2>
      <div>
        <input
          type="range"
          min="10"
          max="200"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="range"
          min="10"
          max="200"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={handleCreate}>Create</button>
      </div>
      <div>
        {savedSquares.map((square, index) => (
          <div
            key={index}
            style={{
              width: `${square.width}px`,
              height: `${square.height}px`,
              backgroundColor: square.color,
              margin: '10px',
            }}
          >
            <button onClick={() => handleSave(index)}>Save</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App Component rendering all tasks
const App = () => {
  return (
    <div>
      <RedSquares />
      <KittenList />
      <RatioInput />
      <TextStyler />
      <AdjustableSquare />
    </div>
  );
};

export default App;
