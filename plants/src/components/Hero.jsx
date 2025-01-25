// // import './Hero.css';
//  import React from 'react';
//  import './Hero.css';
//  import plantRight from '../img/plantRight.svg'; // replace with your actual image path
//  import plantLeft from '../img/plantLeft.svg';   // replace with your actual image path
//  import BG from '../img/BG.svg'; // replace with your actual background image path

//  export default function Hero() {
//   return (
//      <section className="hero">

//         <div className='bg-plants'>
//           <div className="plant-right">
//             <img src={plantRight} alt="" />
//           </div>
//           <div className="plant-left">
//             <img src={plantLeft} alt="" />
//           </div>
//         </div>
//         <div className="BG">
//           <img src={BG} alt="" />
//         </div>
//         <div className="hero-content">
//           <h1 className="hero-title">Plants are our Passion</h1>
//           <p className="hero-description">
//            Even if you don’t have a green thumb, <br /> you can still have a green home.
//           </p>
//           <button className="hero-btn">GET PLANTING</button>
//         </div>
       
//      </section>
//    );
//  }









import React from 'react'; 
import './Hero.css';
import plantRight from '../img/plantRight.svg'; // replace with your actual image path
import plantLeft from '../img/plantLeft.svg';   // replace with your actual image path
import BG from '../img/BG.svg'; // replace with your actual background image path

export default function Hero() {
  return (
    <section className="hero">

      <div className="bg-plants">
        <div className="plant-left">
          <img src={plantLeft} alt="Plant Left" />
        </div>
        <div className="plant-right">
          <img src={plantRight} alt="Plant Right" />
        </div>
      </div>

      <div className="BG">
        <img src={BG} alt="Background" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Plants are <br /> our Passion</h1>
        <p className="hero-description">
          Even if you don’t have a green thumb, <br /> you can still have a green home.
        </p>
        <button className="hero-btn">GET PLANTING</button>
      </div>

    </section>
  );
}
