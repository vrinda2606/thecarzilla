import React, { useState } from 'react';
import { images } from '../utils/constants';
import PrereqPopup from './PrereqPopup';
import { CareersContent } from '../utils/CareersContent';
import JobsPopup from './JobsPopup';

const Careers = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [showJobForm , setJobForm] = useState(false);

  // Function to show the popup when the button is clicked
  const handlePrereqClick = () => {
    setShowPopup(true);
  };
  const handleJobFormClick = () => {
    setJobForm(true);
  };
  // Function to close the popup when clicking outside
  const handleClosePopup = (e) => {
    if (e.target.className === 'PRpopup') {
      setShowPopup(false);
    }
  };
  const handleCloseJobForm = (e) => {
    if (e.target.className === 'JApopup') {
      setJobForm(false);
    }
  };

  return (
    <>
      <div style={{backgroundImage: `url(${images[25].url})`,backgroundSize: "cover",backgroundRepeat : "no-repeat", width: "100%",height: "40vw"}}>
        <div style={{borderRadius: '0.7vw',backgroundColor: 'rgba(0, 0, 0, 0.4)',backdropFilter: 'blur(0.1vw)',width: "35vw", height: '11.5vw', position: 'relative',top: '16.8vw',left: '8vw'}}>
                <p style={{fontFamily: 'Lexend Deca',fontWeight: '600',fontSize: '3vw',top: '1vw',left:'1vw',position: 'relative',width: '90%',height:'10vw',lineHeight : '4.7vw',color: '#FFFFFF'}}>We are Hiring!<br/>Join our Team Now</p>
        </div>
      </div>

      <div className={`careers ${showPopup ? 'blurred' : showJobForm ? 'blurred' : '' }`}>
        <p style={{fontFamily: 'Lexend Deca',fontWeight: '600',fontSize: '3.1vw',marginTop : '2vw',marginBottom : '3.7vw'}}>Current Job Openings</p>        
        <div className='careersJobs'>
            <div className='JobsBox'>
                {CareersContent.map( (item,index) => (
                  <div key={index} className='JobsBoxSub'>
                  <h4>{item.designation}</h4>
                  <div className='p_jobsBoxSub'>{item.post}</div>
                  <div className='JobsBoxBtns'>
                    <button onClick={handlePrereqClick}>Pre-requisite</button>
                    <button onClick={handleJobFormClick}>Apply Now</button>
                  </div>
                </div>
                ))}
            </div>
        </div>

      </div>
      {showPopup && <PrereqPopup onClose={handleClosePopup} />}
      {showJobForm && <JobsPopup onClose={handleCloseJobForm} />}
    </>
  )
}

export default Careers;