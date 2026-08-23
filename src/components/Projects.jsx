import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'LinkedIn AI Auto Apply Agent',
            description: 'AI-powered job application automation tool using Java/Python that searches job listings, matches jobs against candidate profiles using rule-based logic, and automates application workflows.',
            tech: ['Java', 'Python', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'Selenium WebDriver']
        },
        {
            title: 'University Admission System',
            description: 'Java-based application to manage student admission workflows including applicant registration, document verification, seat allocation, and record maintenance using MySQL.',
            tech: ['Java', 'JDBC', 'MySQL', 'OOP']
        },
        {
            title: 'EShop Management System',
            description: 'E-commerce management application for product catalog management, inventory tracking, and order processing using Java, JDBC, and MySQL.',
            tech: ['Java', 'JDBC', 'MySQL', 'CRUD Operations']
        },
        {
            title: 'Banking Management System',
            description: 'Banking system with account handling and transaction record processing using Java, JDBC, and MySQL database integration.',
            tech: ['Java', 'JDBC', 'MySQL', 'Transactions']
        },
        {
            title: 'Library Management System',
            description: 'Library system for book records, member details, and issue/return tracking with MySQL database integration.',
            tech: ['Java', 'JDBC', 'MySQL', 'CRUD Operations']
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">What I've Built</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-tags">
                                {project.tech.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>
                            <a href="#" className="project-link">
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