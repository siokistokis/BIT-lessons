import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './FundMePage.css';

function FundMePage() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    
    }

    return (

             <nav className="navbar">
                <div className="logo">Fundation</div>
                <h3>Welcome to the Art Fundraiser</h3>
                <div className="hamburger" onClick={toggleMenu}>☰</div>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/About" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                    <li><Link to="/Gallery" onClick={toggleMenu}>Gallery</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </nav>
        
    )

    
};

export default FundMePage;




