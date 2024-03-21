import React from 'react'
import { NavLink } from 'react-router-dom';

const Team = () => {
  return (
    <div className='BlackBg' style={{height : '740px'}}>
        <div className='HeadingBoxBlack'>
        <div className='HeadingBlackDiv'>
            <span className='BlackDivfirst'><hr/><p >OUR TEAM</p><hr/></span>
            <span className='BlackDivMiddle'><h1>Meet Our Leadership Team</h1></span>
            <span className='BlackDivLast'>A team dedicated towards their customers</span>
      </div>
      </div>
      
      <NavLink exact to='/AboutUs' onClick={() => { window.scrollTo({top: 0,behavior: "instant"})}}>
      <div className="buttonContact">
          <button className="btnContact">About Us</button>
      </div>
      </NavLink>
    </div>
  )
}

export default Team;