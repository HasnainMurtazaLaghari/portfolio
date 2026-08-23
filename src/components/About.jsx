import React from 'react';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <p>
                        Java Backend Developer with a Bachelor's degree in Information Technology and hands-on
                        experience developing Java-based, database-driven applications through internship, academic,
                        and freelance projects. Skilled in Core Java, Object-Oriented Programming (OOP), JSP, Servlets,
                        JDBC, Spring Framework, Hibernate ORM, MySQL, SQL, RESTful APIs, Git, and GitHub.
                    </p>
                    <p>
                        Experienced in backend application development, CRUD operations, database integration,
                        API integration, automation, debugging, and software development lifecycle (SDLC) practices.
                        Seeking an entry-level Java Developer / Software Engineer role.
                    </p>
                    <div className="about-stats">
                        <div className="stat">
                            <span>5+</span>
                            <p>Projects</p>
                        </div>
                        <div className="stat">
                            <span>1mo</span>
                            <p>Experience</p>
                        </div>
                        <div className="stat">
                            <span>10+</span>
                            <p>Technologies</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;