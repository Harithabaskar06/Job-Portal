import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs, applyJob } from '../redux/jobSlice';
import JobModal from './JobModal';
import ApplicationForm from './ApplicationForm';
import './JobList.css';
import { Link } from 'react-router-dom';

const JobList = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.jobs || []);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const [isApplying, setIsApplying] = useState(false);
    const [showAllJobs, setShowAllJobs] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5; 

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:5000/jobs');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (Array.isArray(data)) {
                    dispatch(setJobs(data));
                } else {
                    setError("Unexpected data format");
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, [dispatch]);

    const handleApply = (jobId) => {
        dispatch(applyJob({ jobId }));
        setIsApplying(false);
    };

    const handleJobClick = (job) => {
        setSelectedJob(job);
        setIsApplying(true);
    };

    const handleCloseModal = () => {
        setSelectedJob(null);
        setIsApplying(false);
    };

    const filteredJobs = jobs.filter(job => {
        const jobSkills = job.skills ? job.skills.map(skill => skill.toLowerCase()) : [];
        return (
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            jobSkills.some(skill => skill.includes(searchTerm.toLowerCase()))
        );
    });

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    return (
        <div className="job-list-container">
            <header className="header">
                <h2 style={{color:"black"}}>Job Portal</h2>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </header>

            {!showAllJobs && (
                <div className="overlay">
                    <div className="heading-box">
                        <h1 className="main-heading">
                            Your Dream <br />
                            <span>Your Job is waiting</span>
                        </h1>

                        <button onClick={() => {
                            setShowAllJobs(true);
                            setSearchTerm(''); 
                            setCurrentPage(1); 
                        }}>
                            Apply Jobs
                        </button>
                    </div>
                </div>
            )}

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {showAllJobs && (
                <>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search by title, company, or skills..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ul className="job-list">
                        {currentJobs.map(job => (
                            <li key={job.id} className="job-item">
                                <h3 onClick={() => handleJobClick(job)} className="job-title">{job.title}</h3>
                                <p className="company-name">{job.company}</p>
                                <button className='apply-button' onClick={() => handleApply(job.id)} disabled={job.applied}>
                                    {job.applied ? 'Applied' : 'Apply for Job'}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                disabled={currentPage === index + 1}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </>
            )}

            {selectedJob && isApplying && (
                <ApplicationForm job={selectedJob} onApply={handleApply} />
            )}
            {selectedJob && !isApplying && (
                <JobModal job={selectedJob} onClose={handleCloseModal} onApply={handleApply} />
            )}
        </div>
    );
};

export default JobList;
