// // import './Hero.css';
// import React from 'react';
// import './Hero.css';
// import plantImg from '../img/leaves.svg'; // replace with your actual image path
// import leafIc from '../img/leaf.svg';   // replace with your actual image path
// import BG from '../img/BG.svg'; // replace with your actual background image path

// export default function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-background">
//         <img src={BG} alt="Background" />
//       </div>
//       <div className="hero-content">
//         <h1 className="hero-title">Plants are our Passion</h1>
//         <p className="hero-description">
//           Even if you don’t have a green thumb, you can still have a green home.
//         </p>
//         <button className="hero-btn">Get Planting</button>
//       </div>
//       <div className="hero-image">
//         <img src={plantImg} alt="Plant" />
//       </div>
//       <div className="hero-icon">
//         <img src={leafIc} alt="Leaf icon" />
//       </div>
//     </section>
//   );
// }












// import React from 'react';
// import './Hero.css';
// import plantImg from '../img/leaves.svg'; // replace with your actual image path
// import leafIc from '../img/leaf.svg';   // replace with your actual image path
// import BG from '../img/BG.svg'; // replace with your actual background image path

// export default function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-background">
//         <img src={BG} alt="Background" />
//       </div>
//       <div className="hero-content">
//         <h1 className="hero-title">Plants are <br /> our Passion</h1>
//         <p className="hero-description">
//           Even if you don’t have a green thumb, <br />you can still have a green home.
//         </p>
//         <button className="hero-btn">Get Planting</button>
//       </div>
//       <div className="hero-left-plant">
//         <img src={plantImg} alt="Left Plant" />
//       </div>
//       <div className="hero-right-plant">
//         <img src={plantImg} alt="Right Plant" />
//       </div>
//       <div className="hero-icon">
//         <img src={leafIc} alt="Leaf icon" />
//       </div>
//     </section>
//   );
// }





import React from 'react';
import './Hero.css';
import plantImg from '../img/leaves.svg'; // replace with your actual image path
import leafIc from '../img/leaf.svg';   // replace with your actual image path
import BG from '../img/BG.svg'; // replace with your actual background image path

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={BG} alt="Background" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Plants are our Passion</h1>
        <p className="hero-description">
          Even if you don’t have a green thumb, you can still have a green home.
        </p>
        <button className="hero-btn">Get Planting</button>
      </div>
      <div className="hero-left-plant">
        <img src={plantImg} alt="Left Plant" />
      </div>
      <div className="hero-right-plant">
        <img src={plantImg} alt="Right Plant" />
      </div>
      <div className="hero-icon">
        <img src={leafIc} alt="Leaf icon" />
      </div>
    </section>
  );
}
