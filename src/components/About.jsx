import React, { useState, useEffect } from 'react';
import { FaCode, FaBriefcase, FaLaptopCode, FaGraduationCap, FaAward, FaUserGraduate } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';
import './about.css';

const About = () => {
    const [counts, setCounts] = useState({ projects: 0, experience: 0, technologies: 0 });

    useEffect(() => {
        let projectCount = 0;
        let expCount = 0;
        let techCount = 0;
        const targetProjects = 5;
        const targetExp = 1;
        const targetTech = 10;

        const interval = setInterval(() => {
            if (projectCount < targetProjects) projectCount++;
            if (expCount < targetExp) expCount++;
            if (techCount < targetTech) techCount += 1;

            setCounts({
                projects: projectCount,
                experience: expCount,
                technologies: techCount
            });

            if (projectCount >= targetProjects &&
                expCount >= targetExp &&
                techCount >= targetTech) {
                clearInterval(interval);
            }
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="section about-section">
            <div className="container">
                {/* Header */}
                <div className="about-header">
                    <span className="section-badge">👨‍💻 About Me</span>
                    <h2 className="section-title">
                        Building Tomorrow's <span className="highlight">Solutions</span>
                    </h2>
                    <p className="section-subtitle">
                        Passionate developer turning complex problems into elegant solutions
                    </p>
                </div>

                <div className="about-grid">
                    {/* Left Side */}
                    <div className="about-content">
                        <div className="about-text">
                            <p className="intro-text">
                                I'm a <span className="highlight-text">Java Backend Developer</span> with a Bachelor's degree in Information Technology and hands-on experience developing Java-based, database-driven applications through internship, academic, and freelance projects.
                            </p>
                            <p>
                                Skilled in <span className="skill-highlight">Core Java, OOP, JSP, Servlets, JDBC, Spring Framework, Hibernate ORM, MySQL, SQL, RESTful APIs, Git, and GitHub.</span>
                            </p>
                            <p className="outro-text">
                                Experienced in backend development, CRUD operations, database integration, API integration, automation, debugging, and SDLC practices. Seeking an entry-level Java Developer / Software Engineer role.
                            </p>
                        </div>

                        {/* Info Cards */}
                        <div className="info-cards">
                            <div className="info-card">
                                <div className="info-icon">
                                    <FaGraduationCap />
                                </div>
                                <div className="info-text">
                                    <h4>Education</h4>
                                    <p>Bachelor's in IT</p>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="info-icon">
                                    <FaAward />
                                </div>
                                <div className="info-text">
                                    <h4>Experience</h4>
                                    <p>1 Month Internship</p>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="info-icon">
                                    <MdDeveloperMode />
                                </div>
                                <div className="info-text">
                                    <h4>Role</h4>
                                    <p>Java Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Stats */}
                    <div className="about-stats-wrapper">
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-icon">
                                    <FaCode />
                                </div>
                                <div className="stat-number">
                                    {counts.projects}+
                                </div>
                                <div className="stat-label">Projects</div>
                                <div className="stat-bar">
                                    <div className="stat-progress" style={{ width: '100%' }}></div>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon">
                                    <FaBriefcase />
                                </div>
                                <div className="stat-number">
                                    {counts.experience}mo
                                </div>
                                <div className="stat-label">Experience</div>
                                <div className="stat-bar">
                                    <div className="stat-progress" style={{ width: '75%' }}></div>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon">
                                    <FaLaptopCode />
                                </div>
                                <div className="stat-number">
                                    {counts.technologies}+
                                </div>
                                <div className="stat-label">Technologies</div>
                                <div className="stat-bar">
                                    <div className="stat-progress" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Tags */}
                        <div className="skills-tags">
                            <span className="skill-tag">Java</span>
                            <span className="skill-tag">Spring</span>
                            <span className="skill-tag">Hibernate</span>
                            <span className="skill-tag">MySQL</span>
                            <span className="skill-tag">JDBC</span>
                            <span className="skill-tag">REST APIs</span>
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">GitHub</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;