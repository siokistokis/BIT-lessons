import React from 'react';

import './App.css';
import TopLine from './components/TopLine';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import BestSelling from './components/BestSelling';

const App = () => {
  return (
    <div>
      <TopLine/>
      <Header/>
      <Hero/>
      <Category/>
      <BestSelling/>
    </div>
  );
};

export default App;
