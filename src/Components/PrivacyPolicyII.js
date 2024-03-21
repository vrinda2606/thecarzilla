import React from 'react';
import {PrivacyPolicyContent} from '../utils/PrivacyPolicyContent';

const PrivacyPolicyII = () => {
  return (
    <div className='IIPart'>
         <div className='IIPartHeading'>
            <p>Privacy Policy</p>
         </div>
         {PrivacyPolicyContent.map((item,index) => (
            <div className='IIPartSubHeading' key={index}>
                <h5>{item.title}</h5>
                <p>{item.content}</p>
            </div>
         ))}
      </div>
  )
}

export default PrivacyPolicyII;