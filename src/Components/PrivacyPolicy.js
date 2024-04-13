import React from 'react';
import { NavLink } from 'react-router-dom';
import { images } from '../utils/constants';

const PrivacyPolicy = () => {
  return (
    <>
        <div style={{backgroundImage: `url(${images[22].url})`,backgroundSize: "cover",backgroundRepeat : "no-repeat", width: "100%",height: "47vw"}}>
        </div>

        <div className='BlackBg' style={{height : '37vw'}}>
            
        <div className='HeadingBoxBlack'>
        <div className='HeadingBlackDiv'>
           <span className='BlackDivfirst'><hr/><p>WE ARE DIFFERENT</p><hr/></span>
           <span className='BlackDivMiddle'><h1>Privacy Policy</h1></span>
           <span className='BlackDivLast'>Our way of delivering happiness is different!</span>
        </div>
        </div>
        
        <div className='DivContent' style={{height : 'auto'}}>
        We at IgniteX Solutions Private Limited are committed to serving you better and value you as our customer/user of our website. We respect your right to privacy. This privacy policy directs the way in which TheCarzilla.in collects, uses, maintains and discloses information collected from you in the course of using the website <a href='https://thecarzilla.in/' style={{color : 'yellow'}}> thecarzilla.in</a>. This privacy policy applies to the website of TheCarzilla.in and all the services offered by TheCarzilla.in.
        </div>
            
          <NavLink exact to='/PrivacyPolicy/:PrivacyPolicyII' onClick={() => { window.scrollTo({top: 0,behavior: "instant"})}}>
            <div className='btnForMoreDiv' >
            <button className='btnForMore'>Learn More</button>
            </div>
          </NavLink>

            <div className='WhiteHr'/>
            
        </div>
    </>
  )
}

export default PrivacyPolicy;