import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const navLinks = [
    { name: 'Home', href: '#home', icon: <FaHome /> },
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Skills', href: '#skills', icon: <FaCode /> },
    { name: 'Experience', href: '#experience', icon: <FaBriefcase /> },
    { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const scrollPosition = window.scrollY + 120;
            for (const link of navLinks) {
                const id = link.href.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Jab mobile menu open ho, page scroll lock kar dete hain
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className={`nb ${scrolled ? 'nb--scrolled' : ''}`}>
                <div className="nb__inner">
                    <a href="#home" className="nb__mark" onClick={handleLinkClick}>
                        <span className="nb__mark-dot" />
                        Portfolio
                    </a>

                    <ul className="nb__links">
                        {navLinks.map((link) => {
                            const id = link.href.replace('#', '');
                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={activeSection === id ? 'is-active' : ''}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <button
                        type="button"
                        className={`nb__toggle ${isOpen ? 'is-open' : ''}`}
                        aria-label={isOpen ? 'Menu band karein' : 'Menu kholain'}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <span className="nb__toggle-icon">
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </span>
                    </button>
                </div>
            </nav>

            {/* Mobile full-screen menu */}
            <div className={`nb__overlay ${isOpen ? 'is-open' : ''}`}>
                <ul className="nb__overlay-links">
                    {navLinks.map((link, i) => {
                        const id = link.href.replace('#', '');
                        return (
                            <li key={link.name} style={{ transitionDelay: `${i * 40}ms` }}>
                                <a
                                    href={link.href}
                                    className={activeSection === id ? 'is-active' : ''}
                                    onClick={handleLinkClick}
                                >
                                    <span className="nb__overlay-icon">{link.icon}</span>
                                    {link.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
