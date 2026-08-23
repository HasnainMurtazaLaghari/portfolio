import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: 'Software Development Intern',
            company: 'ProgrammersTech · Remote',
            date: 'Jul 2024 · 1 Month',
            achievements: [
                'Contributed to a Banking Management System using Java, JDBC, and MySQL, including account handling and transaction record processing',
                'Assisted in developing a Library Management System for book records, member details, and issue/return tracking with a MySQL database',
                'Developed a desktop Calculator Application in Java with standard arithmetic operations and a user-friendly interface',
                'Helped design and implement a Student Management System for student records, enrollment details, and academic information'
            ]
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">My Journey</h2>
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h3>{exp.title}</h3>
                        <p className="company">{exp.company}</p>
                        <p className="date">{exp.date}</p>
                        <ul>
                            {exp.achievements.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;