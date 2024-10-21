import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-background">
            {/* <header className="header">
                <h2 style={{ color: "black" }}>Job Portal</h2>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </header> */}

            <div className="about-container">
                <h1 className="about-title">About Us</h1>
                <p className="about-content">
                    Welcome to our Job Portal! We connect talented individuals with their dream jobs. 
                    Our platform offers a wide range of job listings from various industries. 
                    We believe in empowering job seekers by providing the tools and resources they need to succeed in their careers.
                </p>
                <p className="about-content">
                    Our mission is to make job searching easier and more efficient for everyone. 
                    We are dedicated to supporting both job seekers and employers in finding the perfect match. 
                    Thank you for visiting our site!
                </p>
            </div>
        </div>
    );
};

export default About;
