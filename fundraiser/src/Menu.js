


// import React, { useState } from 'react';
// import Slideshow from './Slideshow';  // Slideshow component for Gallery page

// function Menu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activePage, setActivePage] = useState('home'); // Track which page is active

//   // Toggle the menu visibility
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Change page content based on menu click
//   const handlePageChange = (page) => {
//     setActivePage(page); // Update active page state when a menu item is clicked
//   };

//   return (
//     <>
//       {/* Menu Icon */}
//       <div className="menu-icon" onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       {/* Menu */}
//       <div className={`menu ${isOpen ? 'open' : ''}`}>
//         <ul>
//           <li><a href="#" onClick={() => handlePageChange('home')}>Home</a></li>
//           <li><a href="#" onClick={() => handlePageChange('about')}>About</a></li>
//           <li><a href="#" onClick={() => handlePageChange('gallery')}>Gallery</a></li>
//           <li><a href="#" onClick={() => handlePageChange('fscd')}>FSCD</a></li>
//           <li><a href="#" onClick={() => handlePageChange('contact')}>Contact</a></li>
//           <li><a href="#" onClick={() => handlePageChange('login')}>Login</a></li>
//           <li><a href="#" onClick={() => handlePageChange('search')}>Search</a></li>
//         </ul>
//       </div>

//       {/* Content Display */}
//       <div className="content">
//         {activePage === 'home' && (
//           <div>
//             <h2>Welcome to Our Home Page</h2>
//             <p>This is the home page content, which might include a brief introduction.</p>
//             {/* You can include more content here */}
//           </div>
//         )}

//         {activePage === 'about' && (
//           <div className="about-section">
//             <h2>About Us</h2>
//             <p>Learn more about what we do.</p>
//             <Slideshow />  {/* Show the Slideshow component for About */}
//           </div>
//         )}

//         {activePage === 'gallery' && (
//           <div className="gallery-page">
//             <h2>Gallery</h2>
//             <Slideshow /> {/* Include the Slideshow for Gallery */}
//           </div>
//         )}

//         {activePage === 'search' && (
//           <div className="search-page">
//             <h2>Search</h2>
//             <input
//               type="text"
//               placeholder="Search..."
//               style={{ padding: '10px', fontSize: '16px' }}
//             />
//             <button style={{ padding: '10px', fontSize: '16px' }}>Search</button>
//             {/* You can add a list or results here depending on your search logic */}
//           </div>
//         )}

//         {activePage === 'fscd' && (
//           <div>
//             <h2>FSCD Services</h2>
//             <ul>
//               <li>Service 1</li>
//               <li>Service 2</li>
//               <li>Service 3</li>
//               {/* You can add more services here */}
//             </ul>
//           </div>
//         )}

//         {activePage === 'contact' && (
//           <div>
//             <h2>Contact Us</h2>
//             <p>Reach out to us via the following methods:</p>
//             <ul>
//               <li>Email: contact@company.com</li>
//               <li>Phone: 123-456-7890</li>
//             </ul>
//             {/* Add contact form or additional contact details here */}
//           </div>
//         )}

//         {activePage === 'login' && (
//           <div>
//             <h2>Login</h2>
//             <form>
//               <label>Username</label>
//               <input type="text" placeholder="Enter your username" />
//               <label>Password</label>
//               <input type="password" placeholder="Enter your password" />
//               <button type="submit">Login</button>
//             </form>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Menu;
























// import React, { useState } from 'react';
// import Slideshow from './Slideshow';  // Slideshow component for Gallery page
// import { Link } from 'react-router-dom';
// import './Menu.css';

// function Menu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activePage, setActivePage] = useState(null); // Track which page is active, start with null

//   // Toggle the menu visibility
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Change page content based on menu click
//   const handlePageChange = (page) => {
//     // If the clicked page is already active, close it by setting the activePage to null
//     setActivePage((prevPage) => (prevPage === page ? null : page));
//   };

//   return (
//     <>
//       {/* Menu Icon */}
//       <div className="menu-icon" onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       {/* Menu */}
//       <div className={`menu ${isOpen ? 'open' : ''}`}>
//         <ul>
//           <li><a href="home.js" onClick={() => handlePageChange('home')}>Home</a></li>
//           <li><a href="home.js" onClick={() => handlePageChange('about')}>About</a></li>
//           <li><a href="home.js" onClick={() => handlePageChange('gallery')}>Gallery</a></li>
//           <li><a href="home.js" onClick={() => handlePageChange('fscd')}>FSCD</a></li>
//           <li><a href="home.js" onClick={() => handlePageChange('contact')}>Contact</a></li>
//           <li><a href="home.js" onClick={() => handlePageChange('login')}>Login</a></li>
//           <li><a href="home.js" onClick={() => handlePageChange('search')}>Search</a></li>
//         </ul>
//       </div>

//       {/* Content Display */}
//       <div className="content">
//         {activePage === 'home' && (
//           <div>
//             <h2>Welcome to Our Home Page</h2>
//             <p>This is the home page content, which might include a brief introduction.</p>
//           </div>
//         )}

//         {activePage === 'about' && (
//           <div className="about-section">
//             <h2>About Us</h2>
//             <p>Learn more about what we do.</p>
//             <Slideshow />  {/* Show the Slideshow component for About */}
//           </div>
//         )}

//         {activePage === 'gallery' && (
//           <div className="gallery-page">
//             <h2>Gallery</h2>
//             <Slideshow /> {/* Include the Slideshow for Gallery */}
//           </div>
//         )}

//         {activePage === 'search' && (
//           <div className="search-page">
//             <h2>Search</h2>
//             <input
//               type="text"
//               placeholder="Search..."
//               style={{ padding: '10px', fontSize: '16px' }}
//             />
//             <button style={{ padding: '10px', fontSize: '16px' }}>Search</button>
//           </div>
//         )}

//         {activePage === 'fscd' && (
//           <div>
//             <h2>FSCD Services</h2>
//             <ul>
//               <li>Service 1</li>
//               <li>Service 2</li>
//               <li>Service 3</li>
//             </ul>
//           </div>
//         )}

//         {activePage === 'contact' && (
//           <div>
//             <h2>Contact Us</h2>
//             <p>Reach out to us via the following methods:</p>
//             <ul>
//               <li>Email: contact@company.com</li>
//               <li>Phone: 123-456-7890</li>
//             </ul>
//           </div>
//         )}

//         {activePage === 'login' && (
//           <div>
//             <h2>Login</h2>
//             <form>
//               <label>Username</label>
//               <input type="text" placeholder="Enter your username" />
//               <label>Password</label>
//               <input type="password" placeholder="Enter your password" />
//               <button type="submit">Login</button>
//             </form>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Menu;





















































import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Menu.css';

const Menu = () => {
    // Checks whether the Menu is currently open or not
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="menu-container">
            
            { /* Left: Hamburger Icon */}
            <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            { /* Center: Buttons */}
            <div className="top-buttons">
                {/* Sign In Button linked to /signin route */}
                <Link to="/signin">
                    <button className="sign-in-btn">Sign In</button>
                </Link>
                <Link to="/fundme">
                    <button className="fundme-btn">Start FundMe Project</button>
                </Link>
                


            </div>

            { /* Side Menu */}
            <nav className={`menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    {/* <li><a href="services.js">Services</a></li> */}
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            
            </nav>
            
        </div>
    );
};

export default Menu;



