import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section className="services" id="services">
            <h2 className="heading">OUR <span>SERVICES</span></h2>
            <div className="services-container">
                <div className="services-box">
                    <i className='bx bxl-javascript'></i>
                    <h3>JavaScript</h3>
                    <p>JavaScript is a versatile programming language that enables dynamic content on web pages.</p>
                </div>
                <div className="services-box">
                    <i className='bx bxs-file-html'></i>
                    <h3>HTML</h3>
                    <p>HTML forms the backbone of web content and structure.</p>
                </div>
                <div className="services-box">
                    <i className='bx bxs-file-css'></i>
                    <h3>CSS</h3>
                    <p>CSS controls the appearance and layout of web pages, enhancing user experience.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
