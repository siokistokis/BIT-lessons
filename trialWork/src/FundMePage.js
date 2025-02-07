// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import './FundMePage.css';

// function FundMePage() {

//     const [isOpen, setIsOpen] = useState(false);
//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
    
//     }

//     return (

//              <nav className="navbar">
//                 <div className="logo">Fundation</div>
//                 <h3>Welcome to the Art Fundraiser</h3>
//                 <div className="hamburger" onClick={toggleMenu}>☰</div>
//                 <ul className={`nav-links ${isOpen ? "open" : ""}`}>
//                     <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
//                     <li><Link to="/About" onClick={toggleMenu}>About</Link></li>
//                     <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
//                     <li><Link to="/Gallery" onClick={toggleMenu}>Gallery</Link></li>
//                     <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
//                 </ul>
//             </nav>
        
//     )

    
// };

// export default FundMePage;
















































import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './FundMePage.css';

function FundMePage() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {/* Navbar */}
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

            {/* Main Page Content */}
            <div className="fundraiser-content">
                <h2>Support Our Art Fundraiser</h2>
                <p>Your donation will help fund various art projects. Join us in supporting talented artists!</p>

                {/* Donation Form */}
                <div className="donation-form">
                    <label htmlFor="donationAmount">Select Amount to Donate:</label>
                    <select id="donationAmount">
                        <option value="10">10 GBP</option>
                        <option value="25">25 GBP</option>
                        <option value="50">50 GBP</option>
                        <option value="100">100 GBP</option>
                    </select>
                    <button className="btn-style">Donate Now</button>
                </div>

                {/* Call to Action */}
                <div className="cta">
                    <h3>Join us in supporting the arts!</h3>
                    <button className="btn-style">Make a Difference Today</button>
                </div>

                <div className="support-art">
                    <h3>Support by Art Branch</h3>
                    <p>We are truly grateful for the support of our generous donors. Your contributions help provide the tools and resources for the next generation of artists. Together, we can make the art world flourish and create meaningful change.</p>
                    <p>Thank you for your help and continued support!</p>
                </div>

            </div>

            <footer>
                <p>© 2025 Fundation. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default FundMePage;

























































