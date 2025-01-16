// REACT BASE LIST


// const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];


// Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.

// Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo.

// Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius apskritime.

// Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti).

// Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus raudonai.


import React from 'react';

// Dogs array for the tasks
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

// **Task 1: Display dogs in squares**
const DogsInSquares = () => {
  return (
    <div>
      <h2>Task 1: Dogs in Squares</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dogs.map((dog, index) => (
          <div key={index} style={{ width: '100px', height: '100px', border: '1px solid black', margin: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {dog}
          </div>
        ))}
      </div>
    </div>
  );
};

// **Task 2: Display dogs in circles, sorted by length**
const DogsInCirclesSorted = () => {
  const sortedDogs = [...dogs].sort((a, b) => b.length - a.length); // Sort by word length (longest to shortest)
  return (
    <div>
      <h2>Task 2: Dogs in Circles (Sorted by Length)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {sortedDogs.map((dog, index) => (
          <div key={index} style={{
            width: '100px', height: '100px', borderRadius: '50%', border: '1px solid black', margin: '10px', display: 'flex',
            alignItems: 'center', justifyContent: 'center'
          }}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

// **Task 3: Even-indexed dogs in squares, odd-indexed in circles**
const DogsInSquaresAndCircles = () => {
  return (
    <div>
      <h2>Task 3: Even-indexed Dogs in Squares, Odd-indexed Dogs in Circles</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dogs.map((dog, index) => (
          <div key={index} style={{
            width: '100px', height: '100px', border: '1px solid black', margin: '10px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', borderRadius: index % 2 === 0 ? '0' : '50%'
          }}>
            {dog}
          </div>
        ))}
      </div>
    </div>
  );
};

// **Task 4: Skip dogs starting with capital letters**
const DogsWithoutCapitals = () => {
  return (
    <div>
      <h2>Task 4: Skip Dogs Starting with Capital Letters</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dogs.filter(dog => dog[0] !== dog[0].toUpperCase()).map((dog, index) => (
          <div key={index} style={{ width: '100px', height: '100px', border: '1px solid black', margin: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {dog}
          </div>
        ))}
      </div>
    </div>
  );
};

// **Task 5: Display numbers equal to the length of the word, colored based on length**
const DogsWordLengthNumbers = () => {
  return (
    <div>
      <h2>Task 5: Display Numbers Equal to Word Length, Colored Based on Length</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dogs.map((dog, index) => {
          const wordLength = dog.length;
          return (
            <div key={index} style={{
              width: '100px', height: '100px', border: '1px solid black', margin: '10px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', backgroundColor: wordLength > 6 ? 'green' : 'red'
            }}>
              {wordLength}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Main App Component rendering all tasks
const App = () => {
  return (
    <div>
      <DogsInSquares />
      <DogsInCirclesSorted />
      <DogsInSquaresAndCircles />
      <DogsWithoutCapitals />
      <DogsWordLengthNumbers />
    </div>
  );
};

export default App;
