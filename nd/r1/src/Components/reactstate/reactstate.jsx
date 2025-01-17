

import React, { useState } from 'react';

function App() {
  // Būsenos nustatymas, kad nuspręstume, ar tai bus apskritimas, ar kvadratas
  const [isCircle, setIsCircle] = useState(true);

  // Funkcija, kuri keičia formą (apskritimą į kvadratą ir atvirkščiai)
  const toggleShape = () => {
    setIsCircle(!isCircle);
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.shape,
          borderRadius: isCircle ? '50%' : '0%', // Jei apskritimas, nustatome borderRadius į 50%
        }}
      />
      <button onClick={toggleShape} style={styles.button}>
        Change
      </button>
    </div>
  );
}

// Paprasti stiliai
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  shape: {
    width: '100px',
    height: '100px',
    backgroundColor: '#3498db',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;
