import React from 'react';
import {TAndCContent} from '../utils/TermsCondIIContent';

const TermsCondII = () => {
  return (
    <>
      <div className='IIPart'>
         <div className='IIPartHeading'>
            <p>Terms and Conditions</p>
         </div>
         {TAndCContent.map((item, index) => (
          <div className='IIPartSubHeading' key={index}>
          <h5>{item.title}</h5>
          <p>{item.content}</p>
          </div>
          ))}
      </div>
    </>
  )
}

export default TermsCondII;