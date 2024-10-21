import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs } from '../redux/jobSlice';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('http://localhost:5000/jobs');
      const data = await response.json();
      dispatch(setJobs(data.jobs));
    };

    fetchJobs();
  }, [dispatch]);

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>{job.title} - {job.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
