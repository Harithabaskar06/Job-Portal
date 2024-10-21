import React from 'react';

const JobDetailsModal = ({ job, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Experience Required:</strong> {job.experience} years</p>
        <p><strong>Skills Required:</strong> {job.skills.join(', ')}</p>
        <p>{job.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default JobDetailsModal;
