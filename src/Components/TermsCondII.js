import React, { useEffect } from 'react';
import {TAndCContent} from '../utils/TermsCondIIContent';
import Aos from 'aos';

const TermsCondII = () => {
  
  useEffect(() => {
    Aos.init({duration : 1500})
  })

  return (
    <>
      <div className='IIPart'>
         <div className='IIPartHeading' data-aos='fade-up'>
            <p>Terms and Conditions</p>
         </div>
         {TAndCContent.map((item, index) => (
          <div className='IIPartSubHeading' key={index}>
          <h5 data-aos='fade-right'>{item.title}</h5>
          <p data-aos='fade-left'>{item.content}</p>
          </div>
          ))}
      </div>
    </>
  )
}

export default TermsCondII;