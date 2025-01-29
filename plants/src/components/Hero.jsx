

// import React from 'react'; 
import './Hero.css';
import plantRight from '../img/plantRight.svg'; 
import plantLeft from '../img/plantLeft.svg';   

import Button from './Button';

export default function Hero() {
  return (
    <section className="hero">
      <div className="bg-plants wrapper">
        
      <div className="plant-left">
          <img src={plantLeft} alt="Plant Left" />
        </div>
        <div className="plant-right">
          <img src={plantRight} alt="Plant Right" />
        </div>

      <div className="hero-mid">
      <h1 className="hero-title">Plants are our Passion</h1>
        <p className="hero-description">
          Even if you don’t have a green thumb, <br /> you can still have a green home.
        </p>
          <Button className='white-btn'>get planting</Button>

      </div>


      
      </div>

    

      <div className="border"></div>
    </section>
  );
}
