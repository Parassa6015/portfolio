import React from "react";
import "./css/Skills.css";

const skills = [
  "JavaScript", "Python", "Java", "React.js", "Node.js", "Express.js",
  "MongoDB", "HTML5", "CSS3", "Tailwind CSS", "Git & GitHub",
  "Postman", "GitHub Actions", "Selenium", "REST APIs",
  "VS Code", "CI/CD", "Agile", "Problem Solving"
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
