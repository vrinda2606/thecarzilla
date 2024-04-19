import React, { useEffect } from 'react';
import { CancAndRefContent } from '../utils/CancellationAndRefundContent';
import Aos from 'aos';

const CancellationAndRefund = () => {

   useEffect(() => {
      Aos.init({duration : 1500})
    })

  return (
    <div className='IIPart'>
         <div className='IIPartHeading' data-aos='fade-up'>
            <p>Cancellation & Refund Policy</p>
         </div>
         {CancAndRefContent.map((item,index) => (
            <div className='IIPartSubHeading' key={index}>
                <h5 data-aos='fade-right'>{item.title}</h5>
                <p data-aos='fade-left'>{item.content}</p>
            </div>
         ))}
      </div>
  )
}

export default CancellationAndRefund;