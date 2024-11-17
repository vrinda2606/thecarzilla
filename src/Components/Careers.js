import React, { useState,useEffect } from 'react';
import { images } from '../utils/constants';
import PrereqPopup1 from './PrereqPopup1'; // Popup component
import JobsPopup from './JobsPopup';
import { PrereqPopupContent } from '../utils/PrereqPopupContent'; // Pre-requisite content
import { CareersContent } from '../utils/CareersContent'; // Careers content

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null); // Track the selected job for the popup
  const [showJobForm, setJobForm] = useState(false);

  useEffect(() => {
    // Disable scrolling when a popup is open
    if (selectedJob || showJobForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on component unmount or state change
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedJob, showJobForm]);

  const handlePrereqClick = (jobId) => {
    const job = PrereqPopupContent.find((item) => item.id === jobId); // Find job by ID
    setSelectedJob(job); // Set the selected job
  };

  const handleClosePopup = () => {
    setSelectedJob(null); // Close the popup
  };

  const handleJobFormClick = () => {
    setJobForm(true);
  };

  const handleCloseJobForm = (e) => {
    if (e.target.className === 'JApopup') {
      setJobForm(false);
    }
  };


  return (
    <>
      <div
        style={{
          backgroundImage: `url(${images[25].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '40vw',
        }}
      >
        <div
          style={{
            borderRadius: '0.7vw',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(0.1vw)',
            width: '35vw',
            height: '11.5vw',
            position: 'relative',
            top: '16.8vw',
            left: '8vw',
          }}
        >
          <p
            style={{
              fontFamily: 'Lexend Deca',
              fontWeight: '600',
              fontSize: '3vw',
              top: '1vw',
              left: '1vw',
              position: 'relative',
              width: '90%',
              height: '10vw',
              lineHeight: '4.7vw',
              color: '#FFFFFF',
            }}
          >
            We are Hiring!<br />Join our Team Now
          </p>
        </div>
      </div>

      <div
        className={`careers ${selectedJob ? 'blurred' : showJobForm ? 'blurred' : ''}`}
      >
        <p
          style={{
            fontFamily: 'Lexend Deca',
            fontWeight: '600',
            fontSize: '3.1vw',
            marginTop: '2vw',
            marginBottom: '3.7vw',
          }}
        >
          Current Job Openings
        </p>
        <div className='careersJobs'>
          <div className='JobsBox'>
            {CareersContent.map((item) => (
              <div key={item.id} className='JobsBoxSub'>
                <h4>{item.designation}</h4>
                <div className='p_jobsBoxSub'>{item.post}</div>
                <div className='JobsBoxBtns'>
                  <button onClick={() => handlePrereqClick(item.id)}>Pre-requisite</button>
                  <button onClick={handleJobFormClick}>Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Render the popup dynamically */}
      {selectedJob && <PrereqPopup1 job={selectedJob} onClose={handleClosePopup} />}

      {showJobForm && <JobsPopup onClose={handleCloseJobForm} />}
    </>
  );
};

export default Careers;
