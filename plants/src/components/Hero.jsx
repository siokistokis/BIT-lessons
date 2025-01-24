// import './Hero.css';
import React from 'react';
import './Hero.css';
import plantImg from '../img/leaves.svg'; // replace with your actual image path
import leafImg from '../img/leaf.svg';   // replace with your actual image path
import BG from '../img/BG.svg';


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={BG} alt="" />
        <h1 className="hero-title">Plants are 
        our Passion</h1>
        <p className="hero-description">
        Even if you don’t have a green thumb, you can still have a green home.
        </p>
        <button className="hero-btn">Get planing</button>
      </div>
      <div className="hero-image">
        <img src={plantImg} alt="" />
      </div>
      <div className="hero-icon">
        <img src={leafImg} alt="" />
      </div>
    </section>
  );
};


