import React, { useState } from 'react';

function App() {
  // Naudojame useState hook'ą, kad laikytume formą (apskritimas ar kvadratas)
  const [isCircle, setIsCircle] = useState(true);

  // Funkcija, kuri keičia formą
  const toggleShape = () => {
    setIsCircle(!isCircle);
  };

  // Apskritimo ar kvadrato stiliaus nustatymas
  const shapeStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: 'skyblue',
    borderRadius: isCircle ? '50%' : '0%', // Jeigu yra apskritimas, borderRadius bus 50%, jei kvadratas - 0%
    transition: 'all 0.3s ease' // Sklandus pereinamojo efekto uždėjimas
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={shapeStyle}></div> {/* Rodome formą pagal būseną */}
      <button onClick={toggleShape} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
        Change
      </button>
    </div>
  );
}

export default App;
