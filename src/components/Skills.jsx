import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            name: 'Programming Languages',
            skills: [
                { name: 'Java', level: 90 },
                { name: 'Python', level: 70 },
                { name: 'JavaScript', level: 65 },
                { name: 'HTML / CSS', level: 75 },
            ]
        },
        {
            name: 'Backend & Web',
            skills: [
                { name: 'Spring Framework', level: 80 },
                { name: 'Hibernate ORM', level: 75 },
                { name: 'RESTful APIs', level: 85 },
                { name: 'JSP / Servlets', level: 70 },
            ]
        },
        {
            name: 'Database',
            skills: [
                { name: 'MySQL', level: 85 },
                { name: 'SQL', level: 80 },
                { name: 'DBMS', level: 75 },
            ]
        },
        {
            name: 'Tools & Automation',
            skills: [
                { name: 'Git / GitHub', level: 80 },
                { name: 'Selenium WebDriver', level: 60 },
                { name: 'IntelliJ / Eclipse', level: 75 },
                { name: 'Agile / SDLC', level: 70 },
            ]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <p className="section-subtitle">Technologies and tools I work with</p>
                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category">
                            <h3>{category.name}</h3>
                            {category.skills.map((skill, i) => (
                                <div key={i} className="skill-item">
                                    <div className="skill-name">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="progress" style={{ width: `${skill.level}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;