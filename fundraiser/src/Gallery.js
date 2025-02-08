import React, {useState, useEffect} from "react";
import './Gallery.css';
import { Link } from "react-router-dom";

import slide1 from "./img/aerial.jpg";
import slide2 from "./img/animals.jpg";
import slide3 from "./img/art.jpg";
import slide4 from "./img/ballet.jpg";
import slide5 from "./img/event.jpg";
import slide6 from "./img/gymnastic.jpg";
import slide7 from "./img/music.jpg";
import slide8 from "./img/skating.jpg";
import slide9 from "./img/sport.jpg";
import slide10 from "./img/theatre.jpg";

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10];

function Gallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    //Function to handle the Next button click
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to handle the Previous button click
    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // show menu visability
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Automatically cycle through images every 3 seconds
    useEffect(() => {
        const interval = setInterval(goToNext, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-page">
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="logo">Fundation</div>
                <h3>Welcome to the Art Fundraiser</h3>
                <div className="hamburger" onClick={toggleMenu}>☰</div>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/About" onClick={toggleMenu}>About</Link></li>
                    {/* <li><Link to="/services" onClick={toggleMenu}>Services</Link></li> */}
                    <li><Link to="/Gallery" onClick={toggleMenu}>Gallery</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </nav>

           
            {/* Slideshow Section */}
            <div className="slideshow">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
                
                {/* Navigation buttons placed below */}
                <div className="slideshow-controls">
                    <button className="prev" onClick={goToPrev}>❮</button>
                    <button className="next" onClick={goToNext}>❯</button>
                </div>
            </div>
        </div>
    );
}
export default Gallery;