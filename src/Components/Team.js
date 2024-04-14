import React from 'react'
import { NavLink } from 'react-router-dom';
import {images} from '../utils/constants';

const Team = () => {
  return (
    <div className='BlackBg' style={{height : '55vw'}}>
        <div className='HeadingBoxBlack'>
        <div className='HeadingBlackDiv'>
            <span className='BlackDivfirst'><hr/><p >OUR TEAM</p><hr/></span>
            <span className='BlackDivMiddle'><h1>Meet Our Leadership Team</h1></span>
            <span className='BlackDivLast'>A team dedicated towards their customers</span>
      </div>
      </div>

      <div className='TeamCoordinators'>
         <div className='team-mates'>
            <div className='team-mates-bg'></div>
            <div className='team-mates-names'>
               <h4>Permeet Singh</h4>
               <p>Co-Founder, Head of Sales</p>
            </div>
         </div>
         <div className='team-mates'>
            <div className='team-mates-bg'>
               <img className='team-mates-img' src={images[13].url} alt='mgImage' />
            </div>
            <div className='team-mates-names'>
               <h4>Madhav Garg</h4>
               <p>Founder, CEO</p>
            </div>
         </div>
         <div className='team-mates'>
            <div className='team-mates-bg'></div>
            <div className='team-mates-names'>
               <h4>Shubham Gupta</h4>
               <p>Chief Marketing Officer</p>
            </div>
         </div>
      </div>
      
      <NavLink exact to='/AboutUs' onClick={() => { window.scrollTo({top: 0,behavior: "instant"})}}>
      <div className="buttonContactTeam">
          <button className="btnContactTeam">About Us</button>
      </div>
      </NavLink>
    </div>
  )
}

export default Team;