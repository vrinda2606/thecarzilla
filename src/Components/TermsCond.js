import React from 'react';
import { NavLink } from 'react-router-dom';
import { images } from '../utils/constants';

const TermsCond = () => {
  return (
    <>
       <div style={{backgroundImage: `url(${images[21].url})`,backgroundSize: "cover",backgroundRepeat : "no-repeat", width: "100%",height: "40vw"}}>
        </div>

        <div className='BlackBg' style={{height : '42vw'}}>
            
        <div className='HeadingBoxBlack'>
        <div className='HeadingBlackDiv'>
           <span className='BlackDivfirst'><hr/><p>WE ARE DIFFERENT</p><hr/></span>
           <span className='BlackDivMiddle'><h1>Terms & Conditions</h1></span>
           <span className='BlackDivLast'>Our way of delivering happiness is different!</span>
        </div>
        </div>
        
        <div className='DivContent' style={{height : '17vw'}}>
           IgniteX Solutions Private Limited operates a market place platform under the brand name, TheCarzilla.in (Platform) for the purpose of facilitating the sale and purchase of new vehicles between third party vendors and the customers of the Platform. Although you may be able to conduct payment and other transactions through the Platform using third-party vendors, the Company is not in any way involved in such transactions. As a result, you hereby agree, understand and acknowledge that TheCarzilla.in is only a facilitator and cannot be a party to control in any manner any transactions on the Website. Accordingly, the contract of purchase of products on the website shall strictly be a bipartite contract between you and the sellers on the Website.
        </div>
         <NavLink exact to='/TermsAndConditions/:TermsAndConditionsII' onClick={() => { window.scrollTo({top: 0,behavior: "instant"})}}>
            <div className='btnForMoreDiv' >
            <button className='btnForMore'>Learn More</button>
            </div>
         </NavLink>

            <div className='WhiteHr'/>
            
        </div>

    </>
  )
}

export default TermsCond;