import React from 'react';
import { images } from '../utils/constants';

const Careers = () => {
  return (
    <>
      <div style={{backgroundImage: `url(${images[25].url})`,backgroundSize: "cover",backgroundRepeat : "no-repeat", width: "100%",height: "40vw"}}>
        <div style={{borderRadius: '0.7vw',backgroundColor: 'rgba(0, 0, 0, 0.4)',backdropFilter: 'blur(0.1vw)',width: "35vw", height: '11.5vw', position: 'relative',top: '16.8vw',left: '8vw'}}>
                <p style={{fontFamily: 'Lexend Deca',fontWeight: '600',fontSize: '3vw',top: '1vw',left:'1vw',position: 'relative',width: '90%',height:'10vw',lineHeight : '4.7vw',color: '#FFFFFF'}}>We are Hiring!<br/>Join our Team Now</p>
        </div>
      </div>
      <div className='careers'>
        <p style={{fontFamily: 'Lexend Deca',fontWeight: '600',fontSize: '3.1vw',marginTop : '2vw',marginBottom : '3.7vw'}}>Current Job Openings</p>        
        <div className='careersJobs'>
            <div className='JobsBox'>
                <div className='JobsBoxSub'>
                  <h4>Social Media Influencer Interns</h4>
                  <div className='p_jobsBoxSub'>Join and dive into the world of automotive content creation! Help us drive brand engagement and connect with car enthusiasts across social platforms.</div>
                  <div className='JobsBoxBtns'>
                    <button>Pre-requisite</button>
                    <button>Apply Now</button>
                  </div>
                </div>
                <div className='JobsBoxSub'>
                  <h4>Video Editing Interns</h4>
                  <div className='p_jobsBoxSub'>Join us and bring automotive stories to life! Enhance your editing skills while creating engaging content for car enthusiasts everywhere.</div>
                  <div className='JobsBoxBtns'>
                    <button>Pre-requisite</button>
                    <button>Apply Now</button>
                  </div>
                </div>
                <div className='JobsBoxSub'>
                  <h4>Automotive Content Interns</h4>
                  <div className='p_jobsBoxSub'>Join The Carzilla.In as an Automotive Content Writer Intern and create engaging stories that captivate car enthusiasts!</div>
                  <div className='JobsBoxBtns'>
                    <button id="preRequisiteBtn">Pre-requisite</button>
                    <button>Apply Now</button>
                  </div>
                </div>
            </div>
        </div>
        
      </div>

    </>
  )
}

export default Careers;