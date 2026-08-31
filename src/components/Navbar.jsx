import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Home', href: '#home', icon: <FaHome /> },
        { name: 'About', href: '#about', icon: <FaUser /> },
        { name: 'Skills', href: '#skills', icon: <FaCode /> },
        { name: 'Experience', href: '#experience', icon: <FaBriefcase /> },
        { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
        { name: 'Contact', href: '#contact', icon: <FaEnvelope /> }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                {/* Logo Completely Removed */}

                {/* Nav Links - Center */}
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className={activeSection === link.name.toLowerCase() ? 'active' : ''}
                                onClick={handleLinkClick}
                            >
                                <span className="nav-icon">{link.icon}</span>
                                <span className="nav-text">{link.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger */}
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Animated Background Pattern */}
            <div className="navbar-pattern">
                <div className="pattern-dot"></div>
                <div className="pattern-dot"></div>
                <div className="pattern-dot"></div>
                <div className="pattern-dot"></div>
                <div className="pattern-dot"></div>
                <div className="pattern-dot"></div>
                <div className="pattern-dot"></div>
                <div className="pattern-dot"></div>
            </div>
        </nav>
    );
};

export default Navbar;