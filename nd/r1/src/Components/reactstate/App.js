import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Main App component
function App() {
  const [isCircle, setIsCircle] = useState(true);

  const toggleShape = () => {
    setIsCircle(!isCircle);
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.shape,
          borderRadius: isCircle ? '50%' : '0%', // Toggle between circle and square
        }}
      />
      <button onClick={toggleShape} style={styles.button}>
        Change
      </button>
    </div>
  );
}

// Styles
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

// ReactDOM rendering (entry point)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure this div exists in your `index.html`
);
