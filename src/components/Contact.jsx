import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <p>I'm actively looking for new opportunities — full-time roles, internships, or freelance projects. Feel free to reach out if you'd like to connect or collaborate!</p>
                    <a href="mailto:hassnainlaghari110@gmail.com" className="btn btn-primary">Say Hello</a>
                    <div className="social-links">
                        <a href="https://github.com/HasnainMurtazaLaghari" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/hasnain-laghari-5316b627" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <a href="mailto:hassnainlaghari110@gmail.com" target="_blank" rel="noopener noreferrer">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;