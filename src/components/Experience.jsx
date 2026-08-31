import React, { useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCheckCircle, FaCode, FaDatabase, FaDesktop, FaUsers } from 'react-icons/fa';
import './experience.css';

const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const experiences = [
        {
            id: 1,
            title: 'Software Development Intern',
            company: 'ProgrammersTech',
            location: 'Remote',
            date: 'Jul 2024 · 1 Month',
            type: 'Internship',
            icon: <FaCode />,
            achievements: [
                'Contributed to a Banking Management System using Java, JDBC, and MySQL, including account handling and transaction record processing',
                'Assisted in developing a Library Management System for book records, member details, and issue/return tracking with a MySQL database',
                'Developed a desktop Calculator Application in Java with standard arithmetic operations and a user-friendly interface',
                'Helped design and implement a Student Management System for student records, enrollment details, and academic information'
            ],
            technologies: ['Java', 'JDBC', 'MySQL', 'Swing']
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                {/* Header */}
                <div className="experience-header">
                    <span className="section-badge">💼 Experience</span>
                    <h2 className="section-title">
                        My Professional <span className="highlight">Journey</span>
                    </h2>
                    <p className="section-subtitle">
                        Building real-world solutions, one line of code at a time
                    </p>
                </div>

                {/* Timeline */}
                <div className="timeline-wrapper">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item ${activeIndex === index ? 'active' : ''}`}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            {/* Timeline Line */}
                            <div className="timeline-line">
                                <div className="timeline-dot">
                                    <span className="dot-icon">{exp.icon}</span>
                                </div>
                                {index < experiences.length - 1 && (
                                    <div className="timeline-connector"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="timeline-content">
                                <div className="exp-card">
                                    {/* Card Header */}
                                    <div className="exp-card-header">
                                        <div className="exp-type">
                                            <span className="type-badge">{exp.type}</span>
                                        </div>
                                        <div className="exp-date">
                                            <FaCalendarAlt className="date-icon" />
                                            <span>{exp.date}</span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="exp-card-body">
                                        <h3 className="exp-title">{exp.title}</h3>
                                        <div className="exp-company">
                                            <FaBuilding className="company-icon" />
                                            <span>{exp.company}</span>
                                            <span className="exp-location">· {exp.location}</span>
                                        </div>

                                        {/* Achievements */}
                                        <ul className="achievements-list">
                                            {exp.achievements.map((item, i) => (
                                                <li key={i}>
                                                    <FaCheckCircle className="achievement-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Technologies */}
                                        <div className="tech-stack">
                                            <span className="tech-label">Tech Stack:</span>
                                            <div className="tech-tags">
                                                {exp.technologies.map((tech, i) => (
                                                    <span key={i} className="tech-tag">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="exp-card-footer">
                                        <span className="exp-number">0{exp.id}</span>
                                        <div className="exp-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="experience-stats">
                    <div className="stat-box">
                        <span className="stat-number">4+</span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-number">1</span>
                        <span className="stat-label">Company</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-number">1</span>
                        <span className="stat-label">Month Experience</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-number">4</span>
                        <span className="stat-label">Technologies</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;