import React from 'react';

const PrereqPopup = ({ onClose }) => {
  return (
    <div
      className='PRpopup' onClick={onClose} // Close the popup when clicking outside
    >
      <div
        className='prereq_popup' onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking inside the popup
      >
        <h4>Video Editing Intern Pre-requisites</h4>
        <hr />
        <p>List of Pre-requisites</p>
        <ul className="prerequisites-list">
          <li>Proficiency in video editing software like Adobe Premiere Pro.</li>
          <li>UX Creativity & Flow Must Be Better.</li>
          <li>Managing Files In An Arranged Standard Way.</li>
          <li>Ability To Understand Client's Or Project's Requirements/Changes.</li>
          <li>Hands-On Experience On Working With Localhost And Server.</li>
          <li>Knowledge Of Media Queries And Multi OS/Device Platforms.</li>
        </ul>
        <div className="details-box">
          <div className="details-row">
            <div>Salary:</div>
            <div>Upto 15K</div>
          </div>
          <div className="details-row">
            <div>Experience:</div>
            <div>6 Months - 1 Year</div>
          </div>
          <div className="details-row">
            <div>Number of Openings:</div>
            <div>1</div>
          </div>
          <div className="details-row">
            <div>Job Type:</div>
            <div>Internship</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrereqPopup;
