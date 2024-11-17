import React from 'react';

const PrereqPopup1 = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div
      className='PRpopup'
      onClick={onClose} // Close the popup when clicking outside
    >
      <div
        className='prereq_popup'
        onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking inside
      >
        <h4>{job.designation}</h4>
        <hr />
        <p>List of Pre-requisites</p>
        {job.content} {/* Render the dynamic content */}
        <div className='details-box'>
          <div className='details-row'>
            <div>Salary:</div>
            <div>{job.salary}</div>
          </div>
          <div className='details-row'>
            <div>Experience:</div>
            <div>{job.experience}</div>
          </div>
          <div className='details-row'>
            <div>Number of Openings:</div>
            <div>{job.openings}</div>
          </div>
          <div className='details-row'>
            <div>Job Type:</div>
            <div>{job.type}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrereqPopup1;
