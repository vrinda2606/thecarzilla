import React from 'react';
import { CancAndRefContent } from '../utils/CancellationAndRefundContent';

const CancellationAndRefund = () => {
  return (
    <div className='IIPart'>
         <div className='IIPartHeading'>
            <p>Cancellation & Refund Policy</p>
         </div>
         {CancAndRefContent.map((item,index) => (
            <div className='IIPartSubHeading' key={index}>
                <h5>{item.title}</h5>
                <p>{item.content}</p>
            </div>
         ))}
      </div>
  )
}

export default CancellationAndRefund;