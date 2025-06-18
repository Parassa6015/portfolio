import React from "react";
import "./css/Header.css"

const Header1 = () => {
    return (
        <div>
        <header className="main-header">
        <h2 className="title-header">PS.</h2>
        <nav style={{ width: '400px' }}>
            <ul className="nav-list">
                <li><a href="#about">About</a></li>
                {/* <li><a href="#projects">Projects</a></li> */}
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main className='main_body'>
        <h1 className="about_name">Hi, I am <span className="name">Paras Sachdeva</span></h1>
        <h3 className="about_role">A Software Developer and Automation Engineer</h3>
        <h5 className="about_role">With a passion for scalable backend systems and clean, responsive interfaces, I build full-stack applications that balance performance with usability.</h5>
        <div className="about_handles">

        <a
            href="https://github.com/Parassa6015"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
            src="https://cdn-icons-png.flaticon.com/128/270/270798.png"
            alt="GitHub"
            className="btn-icon"
            />
        </a>
        
        <a
            href="https://drive.google.com/file/d/1fEhYmR9L9nHhHKeQKLHn-oqLzwZ76CPq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
        >
            View Resume
        </a>

        

        <a
            href="https://www.linkedin.com/in/parassachdeva6015/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
            src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
            alt="Linkedin"
            className="btn-icon"
            />
        </a>

        
    </div>
    </main>
    
    </div>
    )
}

export default Header1