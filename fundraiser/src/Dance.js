import React, {useState, useEffect} from "react";
import './Gallery.css';
import { Link } from "react-router-dom";

import img1 from "./img/ballet.jpg";
import img2 from "./img/aerial.jpg";
import img3 from "./img/skating.jpg";
import img4 from "./img/gymnastic.jpg";
import img5 from "./img/Img13.jpg";
import img6 from "./img/Img14.jpg";
import img7 from "./img/Img15.jpg";
import img8 from "./img/Img16.jpg";
import img9 from "./img/Img17.jpg";
import img10 from "./img/Img18.jpg";
import img11  from "./img/Img19.jpg";
import img12 from "./img/Img20.jpg";
import img13 from "./img/Img21.jpg";


// const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10];

const slides = [
    { image: img1, description: "Explore beautiful art pieces from around the world." },
    { image: img2, description: "Experience the elegance and passion of ballet performances." },
    { image: img3, description: "Capture moments through the lens of talented photographers." },
    { image: img4, description: "Explore beautiful art pieces from around the world." },
    { image: img5, description: "Explore beautiful art pieces from around the world." },
    { image: img6, description: "Experience the elegance and passion of ballet performances." },
    { image: img7, description: "Capture moments through the lens of talented photographers." },
    { image: img8, description: "Explore beautiful art pieces from around the world." },
    { image: img9, description: "Explore beautiful art pieces from around the world." },
    { image: img10, description: "Experience the elegance and passion of ballet performances." },
    { image: img11, description: "Capture moments through the lens of talented photographers." },
    { image: img12, description: "Explore beautiful art pieces from around the world." },
    { image: img13, description: "Explore beautiful art pieces from around the world." }
];

function Dance() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    //Function to handle the Next button click
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Function to handle the Previous button click
    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // show menu visability
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



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
                    {/* <li><Link to="/Donate" onClick={toggleMenu}>Donate</Link></li> */}
                    <li><Link className="gallery" to="/Gallery" onClick={toggleMenu}>NEWS</Link></li>
                    <li><Link to="/AdminRegister" onClick={toggleMenu}>Admin</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    <li><Link to="/Start" onClick={toggleMenu}>FundMe</Link></li>
                    <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li>
                </ul>
            </nav>

           
            {/* Slideshow Section */}
            <div className="slideshow">
                <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
                <p className="slide-description">{slides[currentIndex].description}</p>
                {/* Navigation buttons placed below */}
                <div className="slideshow-controls">
                    <button className="prev" onClick={goToPrev}>❮</button>
                    <button className="next" onClick={goToNext}>❯</button>
                </div>
            </div>
            <footer>
                <p>© 2025 Fundation. All Rights Reserved.</p>
            </footer>
        </div>
    );

    
}
export default Dance;