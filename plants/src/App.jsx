
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;








// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/assets/logo.png" alt="Green Plant Shop Logo" />
        </Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search for plants..." />
        </div>
        <div className="user-account">
          <Link to="/account">
            <img src="/assets/user-icon.png" alt="User Account" />
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <img src="/assets/cart-icon.png" alt="Shopping Cart" />
            <span className="cart-count">2</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
