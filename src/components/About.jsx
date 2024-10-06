import React from 'react';
import './About.css';
import aboutImage from '../Assets/Images/about.png';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <h2 className="heading">Want to <span>Lrn-smthing?</span></h2>
                <h3>WEB DEVELOPING</h3>
                <p>Web development involves designing and building websites and web applications. 
                It encompasses a range of skills, including proficiency in HTML, CSS, and JavaScript, 
                to create responsive and interactive user experiences.</p>
                <div className="btn-box">
                  
                    <button className="link-button" onClick={() => alert('Keme pamparami lang ng features')}>Read More</button>
                </div>
            </div>
            <div className="about-img">
                <img src={aboutImage} alt="About" />
            </div>
        </section>
    );
};

export default About;
