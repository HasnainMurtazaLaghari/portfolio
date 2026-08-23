import React from 'react';

const Skills = () => {
    const skills = {
        'Programming Languages': ['Java', 'Python', 'C++', 'C#', 'JavaScript', 'HTML', 'CSS'],
        'Core Java & CS': ['Core Java', 'OOP', 'Data Structures', 'Exception Handling', 'Problem Solving'],
        'Backend & Web': ['JSP', 'Servlets', 'JDBC', 'Spring Framework', 'Hibernate ORM', 'RESTful APIs'],
        'Database': ['MySQL', 'SQL', 'DBMS', 'CRUD Operations'],
        'Automation & Tools': ['Selenium WebDriver', 'Git', 'GitHub', 'IntelliJ IDEA', 'Eclipse', 'NetBeans'],
        'Additional': ['Android Development', 'Debugging', 'Unit Testing', 'Agile', 'SDLC']
    };

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="skill-category">
                            <h3>{category}</h3>
                            <ul>
                                {items.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;