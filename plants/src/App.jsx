import React from 'react';

import './App.css';
import TopLine from './components/TopLine';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import BestSelling from './components/BestSelling';
import Hottest from './components/Hottest';
import Deals from './components/Deals';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <TopLine/>
      <Header/>
      <Hero/>
      <Category/>
      <BestSelling/>
      <Hottest/>
      <Deals/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;
