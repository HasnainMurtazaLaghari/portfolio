import React, { useEffect, useRef } from 'react';
import profilePic from '../assets/profile.jpg'; // Make sure to add your image

const Hero = () => {
    const typingRef = useRef(null);

    // Resume handler function
    const openCV = () => {
        window.open(`${process.env.PUBLIC_URL}/Hasnain_Murtaza_cv.pdf`, '_blank');
    };

    useEffect(() => {
        const phrases = [
            'Pure Java Backend Developer'
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentText = '';

        const typeEffect = () => {
            const fullText = phrases[phraseIndex];
            if (isDeleting) {
                currentText = fullText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                currentText = fullText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (typingRef.current) {
                typingRef.current.textContent = currentText;
            }

            if (!isDeleting && charIndex === fullText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
                return;
            }

            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeEffect, 500);
                return;
            }

            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, speed);
        };

        typeEffect();
    }, []);

    return (
        <section id="home" className="hero-section" style={{ paddingTop: '100px' }}>
            <div className="container hero-content">
                <div className="hero-image">
                    <img
                        src={profilePic}
                        alt="Hasnain Murtaza"
                        className="profile-pic"
                    />
                </div>
                <h1>Hi, I'm <span className="highlight">Hasnain Murtaza</span></h1>
                <p className="tagline">
                    <span className="typing-text" ref={typingRef}>Java Backend Developer</span>
                </p>
                <p className="sub-tagline">
                    Building robust APIs, database-driven applications &amp; scalable backend systems
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    <button onClick={openCV} className="btn btn-secondary">View Resume</button>
                </div>
                {/* Visual Stats */}
                <div className="stats">
                    <div className="stat-item">
                        <span className="stat-number">5+</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">1mo</span>
                        <span className="stat-label">Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Technologies</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;