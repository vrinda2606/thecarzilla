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
          
         {/* <div className='IIPartSubHeading'>
            <h5>ACCEPTANCE OF TERMS & CONDITIONS</h5>
            <p>You acknowledge that you have read and agree with all these Terms & Conditions. 
               By using the website or its services, you agree to be bound by this agreement.
               If you do not agree to abide by the terms of this agreement, you are not authorized to use or access the website and its services.
               TheCarzilla.in reserves the right to store information on a user's computer in the form of “cookie” or similar file for purposes of modifying the website to reflect the user's preference.
            </p>
         </div>

         <div className='IIPartSubHeading'>
            <h5>DESCRIPTION OF SERVICES</h5>
            <p>
                <ol>
                {TAndCContent.map((item, index) => (
                   <li key={index}>{item.content}</li>
                ))}
                </ol>
            </p>
         </div>  */}

      </div>
    </>
  )
}

export default TermsCondII;