
// import React from 'react';
// import './App.css';
// import Cube from './Cube';
// import Menu from './Menu';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//     <div className="App">
//       {/*define roods for pages*/}
//       <Routes>
//         {/*homepage*/}
//         <Route
//           path = "/"
//           element = {
//             <>
      
//       {/* Background Image */}
//       <div className="background">
//         {/* Cube Animations */}
//         <Cube/>
//         </div>
//         {/* Animated Text */}
//         <div className="animated-text">
//           <p className="text1">FUNDATING support CHARITY donation</p>
//           <p className="text2">fundation SUPPORT charity DONATION</p>
//           <p className="text3">FUNDATING support CHARITY donation</p>
//           <p className="text4">fundation SUPPORT charity DONATION</p>
//           <p className="text5">FUNDATING support CHARITY donation</p>
//         </div>
      
//       {/* Menu Component */}
//       <Menu/>
//       </>
// }
//     />
//       </Routes>
//     </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cube from './Cube';
import Menu from './Menu';
import Gallery from './Gallery';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define Routes for Pages */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                {/* Background */}
                <div className="background">
                  {/* Cubes */}
                  <Cube />
                </div>

                {/* Animated Text */}
                <div className="animated-text">
                  <p className="text1">FUNDATION support CHARITY donation</p>
                  <p className="text2">fundation SUPPORT charity DONATION</p>
                  <p className="text3">FUNDATION support CHARITY donation</p>
                  <p className="text4">fundation SUPPORT charity DONATION</p>
                  <p className="text5">FUNDATION support CHARITY DONATION</p>
                </div>

                {/* Menu Component */}
                <Menu />
              </>
            }
          />

        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/About" element={<About />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;



