import React from "react";
import "./css/About.css"

const About = () => {
    return (
        <section id="about" className="main-about">
        <h2 className="about-title">About Me</h2>
        <div className="container-about">
            <div className="about-image">
            <img src="/images/IMG_1385.jpg" alt="Paras" />
            </div>
            <div className="about-text">
            <p><strong>I'm a Software Engineer</strong> with a passion for building scalable, robust, and user-focused applications. I enjoy crafting simple yet elegant solutions — experiences that not only look great, but are thoughtfully engineered for performance, functionality, and usability.</p>

            <p>Driven by curiosity and a growth mindset, I continuously seek to expand my skill set, embrace new challenges, and explore emerging technologies to deliver more impactful solutions.</p>

            <p>I thrive in collaborative, high-performing teams where clear communication, shared vision, and strong ownership are valued. I believe the best products are born from collective creativity and purposeful collaboration.</p>

            <p>I'm always open to connecting with like-minded individuals, exploring new opportunities, and working on exciting projects.</p>
            </div>
        </div>
        </section>

      
    )
}

export default About