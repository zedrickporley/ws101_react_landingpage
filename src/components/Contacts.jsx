import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            setError('Please fill out all fields.');
        } else {
            setError('');
            alert('Message sent successfully!');
            // Optionally reset the form
            setForm({ name: '', email: '', message: '' });
        }
    };

    return (
        <section className="contacts" id="contacts">
            <h2>Contact Me</h2>
            <div className="contacts-container">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <div className="contact-item">
                        <i className='bx bxs-phone'></i>
                        <span>+639 219 966 314</span>
                    </div>
                    <div className="contact-item">
                        <i className='bx bxs-envelope'></i>
                        <span>ramporley@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <i className='bx bxs-map'></i>
                        <span>DLL, Lucena City</span>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>Send a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Name" required onChange={handleInputChange} />
                        <input type="email" name="email" placeholder="Your Email" required onChange={handleInputChange} />
                        <textarea name="message" placeholder="Your Message" required onChange={handleInputChange}></textarea>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="btn">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;

