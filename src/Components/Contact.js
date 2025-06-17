import React from "react";
import "./css/Contact.css"

const Contact = () => {
    return (
        <section className="Contact-section" id="contact">
            <div className="head2"><h2>Let's Connect</h2></div>
            <div className="contact-part" style={{ width: '800px', height: '100px' }}>
                <p>I'm currently open to roles in software development, QA automation, and related technical domains. If you're hiring, collaborating, or simply want to connect, feel free to reach out — I'd love to discuss how I can contribute to your team or project.</p>
        
            <a href="mailto:parassachdeva527@gmail.com" className="btn btn-outline">
                Email Me
            </a>
            </div>

        </section>
    )



}

export default Contact;