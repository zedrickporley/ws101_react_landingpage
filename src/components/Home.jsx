import React from 'react';
import './Home.css';
import bgImage from '../Assets/Images/bg1.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <section className="home" id="home" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="home-content">
                <h1>Hi, Learn Coding with me!</h1>
                <h3>Develop pages now</h3>
                <p>
                    HTML, CSS, and JavaScript are the core technologies used to build and style modern web pages.
                </p>
                <div className="btn-box">

                    <button className="link-button" onClick={() => alert('At nagtanong pa talaga')}>Questions?</button>
                    <button className="link-button" onClick={() => alert("NUH UH")}>Let's talk.</button>
                </div>
                <div className="social-media">
                    <h4>Connect with me:</h4>
                    <a href="https://www.facebook.com/cedrick.porley.9" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://x.com/Leyyyyyy05" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.linkedin.com/in/zed-ley-0b8a94325/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
