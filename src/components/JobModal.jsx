import React from 'react';
import ApplicationForm from './ApplicationForm';

const JobModal = ({ job, onClose, onApply }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>{job.title}</h3>
        <p>{job.company}</p>
        <p>Experience Required: {job.experienceRequired} years</p>
        <p>Skills: {job.skills.join(', ')}</p>
        <p>{job.description}</p>
        <ApplicationForm job={job} onApply={onApply} />
      </div>
    </div>
  );
};

export default JobModal;
