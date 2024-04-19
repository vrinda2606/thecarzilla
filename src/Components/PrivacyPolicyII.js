import React, { useEffect } from 'react';
import {PrivacyPolicyContent} from '../utils/PrivacyPolicyContent';
import Aos from 'aos';

const PrivacyPolicyII = () => {

   useEffect(() => {
      Aos.init({duration : 1500})
    })

  return (
    <div className='IIPart'>
         <div className='IIPartHeading' data-aos='fade-up'>
            <p>Privacy Policy</p>
         </div>
         {PrivacyPolicyContent.map((item,index) => (
            <div className='IIPartSubHeading' key={index}>
                <h5 data-aos='fade-right'>{item.title}</h5>
                <p data-aos='fade-left'>{item.content}</p>
            </div>
         ))}
      </div>
  )
}

export default PrivacyPolicyII;