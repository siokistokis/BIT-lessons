
import React from 'react';
import './App.css';
import Cube from './Cube';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      {/* Background Image */}
      <div className="background">
        {/* Cube Animations */}
        <Cube/>
        {/* Animated Text */}
        <div className="animated-text">
          <p className="text1">FUNDATING support CHARITY donation</p>
          <p className="text2">fundation SUPPORT charity DONATION</p>
          <p className="text3">FUNDATING support CHARITY donation</p>
          <p className="text4">fundation SUPPORT charity DONATION</p>
          <p className="text5">FUNDATING support CHARITY donation</p>
        </div>
      </div>
      
      {/* Menu Component */}
      <Menu />
    </div>
  );
}

export default App;



