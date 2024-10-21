import React, { useState } from 'react';
import ApplicationForm from './ApplicationForm'; 
import { Link } from 'react-router-dom';
import './register.css'; 

const Register = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    const handleApply = (jobId) => {
        alert(`Successfully registered and applied for job ID: ${jobId}`);
        setIsRegistered(true);
    };

    return (
        <div className="register-background">
            <div className="register-container">
                <h1 style={{color:"white", paddingLeft:"110px"}}>REGISTER</h1>
                {!isRegistered ? (
                    <ApplicationForm onApply={handleApply} />
                ) : (
                    <h3>Registration successful! You can now apply for jobs.</h3>
                )}
            </div>
        </div>
    );
};

export default Register;
