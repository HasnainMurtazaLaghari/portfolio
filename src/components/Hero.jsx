import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-content">
                <div className="hero-image">
                    <img
                        src="/profile.jpg"
                        alt="Hasnain Murtaza"
                        className="profile-pic"
                    />
                </div>
                <h1>Hi, I'm <span className="highlight">Hasnain Murtaza</span></h1>
                <p className="tagline">Java Backend Developer</p>
                <p className="sub-tagline">Building robust APIs, database-driven applications & scalable backend systems</p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Get In Touch</a>
                    <a href="/Hasnain_Murtaza_cv.pdf" className="btn btn-secondary" target="_blank">View Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;