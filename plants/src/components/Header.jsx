import './Header.css';
import Logo from '../img/Logo.svg';
import SearchLogo from '../img/Search.svg';
import ShopIcon from '../img/Vector.svg';
import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';




export default function Header() {

  const [active, setActive] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setActive(!active);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className='header-bg'>
      <div className='wrapper header'>
        <a><img src={Logo} /></a>
        <nav className='header-links'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='about'>About us</NavLink>
          <NavLink to='contact'>Contact us</NavLink>
        </nav>
      
      <div className='header-right'>
        {/* <div id='search' className={active ? 'search active' : 'search'}>
          <input ref={inputRef} type="text" placeholder="Search" className="inp"></input>
          <button className="btn" id='bnt' onClick={handleClick}><img src={SearchLogo}></img></button>

        </div> */}

        {/* <a href='' className="Shopcart"><img src={ShopIcon} alt="Shop icon" />3</a> */}

        <input type="text" />
        <img src={SearchLogo} alt="" />
        <a href="#">
          <img src={ShopIcon} alt="" />
        </a>
      </div>
      </div>
    </div>

  );
}



