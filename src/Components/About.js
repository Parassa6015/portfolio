import React from "react";
import "./css/About.css"
import paras_image from "/Users/parassachdeva/Pictures/Development/my-app/src/images/IMG_1385.jpg"

const About = () => {
    return (
        <section id="about" className="main-about">
            <h2>About Me</h2>
            <div className="container-about">
            <span>
                <img
                    alt="paras"
                    className="about_me_img"
                    src={paras_image}
                />
            </span>
            <span>
                

            </span>

            </div>
        </section>
    )
}

export default About