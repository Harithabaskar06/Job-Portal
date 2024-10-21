import React from 'react';

const ApplicationDetailsModal = ({ application, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>Application Details</h3>
        <p>First Name: {application.firstName}</p>
        <p>Last Name: {application.lastName}</p>
        <p>Email: {application.email}</p>
        <p>Skills: {application.skills.join(', ')}</p>
        <p>About Me: {application.aboutMe}</p>
      </div>
    </div>
  );
};

export default ApplicationDetailsModal;
