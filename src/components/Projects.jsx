import React from 'react';
import '../App.css';

const Projects = () => {
    const projects = [
        {
            icon: '🤖',
            title: 'LinkedIn AI Auto Apply Agent',
            description: 'AI-powered job application automation tool using Java/Python that searches job listings, matches jobs against candidate profiles using rule-based logic, and automates application workflows.',
            tech: ['Java', 'Python', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'Selenium WebDriver'],
            link: 'https://github.com/HasnainMurtazaLaghari/Linkedln-AI-Auto-Apply-Agent'
        },
        {
            icon: '🎓',
            title: 'University Management System (JDBC)',
            description: 'Java-based application to manage student admission workflows including applicant registration, document verification, seat allocation, and record maintenance using MySQL and JDBC.',
            tech: ['Java', 'JDBC', 'MySQL', 'OOP'],
            link: 'https://github.com/HasnainMurtazaLaghari/University_ManagementSystem'
        },
        {
            icon: '🏦',
            title: 'Banking System (Hibernate ORM)',
            description: 'Banking system with account handling and transaction record processing using Hibernate ORM for efficient database integration and management.',
            tech: ['Java', 'Hibernate', 'ORM', 'MySQL'],
            link: 'https://github.com/HasnainMurtazaLaghari/BankingSystem'
        },
        {
            icon: '🏛️',
            title: 'SmartCampus Hibernate ORM',
            description: 'Comprehensive university management system built with Hibernate ORM for efficient student data management, academic operations, and campus administration.',
            tech: ['Java', 'Hibernate', 'ORM', 'MySQL'],
            link: 'https://github.com/HasnainMurtazaLaghari/SmartCampus-Hibernate-ORM'
        },
        {
            icon: '💳',
            title: 'Banking Transaction System - Spring ORM',
            description: 'Enterprise-level banking system using Spring ORM for seamless database integration, secure transaction management, account processing, and financial operations.',
            tech: ['Java', 'Spring', 'ORM', 'MySQL', 'Transactions'],
            link: 'https://github.com/HasnainMurtazaLaghari/banking-transaction-system-spring-ORM'
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">What I've Built</h2>
                <p className="section-subtitle">Projects that showcase my skills</p>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-icon">{project.icon}</div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-tags">
                                {project.tech.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;