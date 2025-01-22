import React from 'react';
import Header from './Header'; // Import Header from the correct path
import './App.css';

const App = () => {
  return (
    <div>
      <Header /> {/* Render the Header component here */}
      <h1>Welcome to the Green Plant Shop!</h1> {/* Example content */}
    </div>
  );
};

export default App;
