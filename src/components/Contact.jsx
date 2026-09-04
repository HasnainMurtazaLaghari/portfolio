import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import './contact.css';

const Contact = () => {
    const openCV = () => {
        window.open(`${process.env.PUBLIC_URL}/Hasnain_Murtaza_cv.pdf`, '_blank');
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="bg-circle bg-circle-1"></div>
                <div className="bg-circle bg-circle-2"></div>
                <div className="bg-circle bg-circle-3"></div>

                <div className="contact-wrapper">
                    {/* ☕ Real Coffee Cup */}
                    <div className="coffee-container">
                        <div className="coffee-cup">
                            {/* Steam */}
                            <div className="steam-container">
                                <div className="steam s1"></div>
                                <div className="steam s2"></div>
                                <div className="steam s3"></div>
                                <div className="steam s4"></div>
                                <div className="steam s5"></div>
                                <div className="steam s6"></div>
                            </div>

                            {/* Cup */}
                            <div className="cup-body">
                                <div className="cup-top"></div>
                                <div className="cup-fill"></div>
                                <div className="cup-shine"></div>
                            </div>

                            {/* Handle */}
                            <div className="cup-handle"></div>

                            {/* Saucer */}
                            <div className="cup-saucer"></div>

                            {/* Shadow */}
                            <div className="cup-shadow"></div>

                            {/* Code Text */}
                            <div className="code-text">
                                <span className="code-line">{'<Dev />'}</span>
                            </div>
                        </div>

                        {/* Label */}
                        <div className="coffee-label">
                            <span className="label-java">Java</span>
                            <span className="label-dev">Developer</span>
                        </div>
                    </div>

                    <h2 className="section-title" onClick={openCV} style={{ cursor: 'pointer' }}>
                        Let's Connect
                    </h2>

                    <p className="section-subtitle">
                        Let's work together — I'm ready when you are
                    </p>

                    <div className="social-grid">
                        {/* ⭐ 1st: Resume/CV */}
                        <div
                            className="social-card cv"
                            onClick={openCV}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card-icon">
                                <HiDocumentText />
                            </div>
                            <h3>Resume</h3>
                            <p>View my CV</p>
                            <span className="card-arrow">→</span>
                        </div>

                        {/* ⭐ 2nd: Phone */}
                        <a
                            href="tel:+923072848324"
                            className="social-card phone"
                        >
                            <div className="card-icon">
                                <FaPhone />
                            </div>
                            <h3>Phone</h3>
                            <p>+92 3072848324</p>
                            <span className="card-arrow">→</span>
                        </a>

                        {/* ⭐ 3rd: Email */}
                        <a
                            href="mailto:hassnainlaghari110@gmail.com"
                            className="social-card email"
                        >
                            <div className="card-icon">
                                <FaEnvelope />
                            </div>
                            <h3>Email</h3>
                            <p>Send me a message</p>
                            <span className="card-arrow">→</span>
                        </a>

                        {/* 4th: GitHub */}
                        <a
                            href="https://github.com/HasnainMurtazaLaghari"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card github"
                        >
                            <div className="card-icon">
                                <FaGithub />
                            </div>
                            <h3>GitHub</h3>
                            <p>View my projects</p>
                            <span className="card-arrow">→</span>
                        </a>

                        {/* 5th: LinkedIn */}
                        <a

                            href="https://www.linkedin.com/in/hasnain-murtaza-5316b6278/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card linkedin"
                        >
                            <div className="card-icon">
                                <FaLinkedin />
                            </div>
                            <h3>LinkedIn</h3>
                            <p>Connect professionally</p>
                            <span className="card-arrow">→</span>
                        </a>
                    </div>

                    <div className="contact-footer">
                        <p>Available for full-time roles, internships & freelance projects</p>
                        <div className="footer-line"></div>
                        <span className="footer-year">© 2026 Hasnain Murtaza</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;