import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-brand">
                    <a href="/" className="logo">Hasnain Murtaza</a>
                </div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>
        </nav>
    );
};

export default Navbar;