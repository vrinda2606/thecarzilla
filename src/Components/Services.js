import React from 'react';
import { images } from '../utils/constants';

const Services = () => {
  return (
    <>
      <div className='servicesI'>
         <div className='servicesIImage'>
            <img src={images[25].url} alt='Services' style={{objectFit : 'contain',height: '100%',width : '100%'}}/>
         </div>
         <div className='servicesIContent'>
            <div className='servicesIContentHeading'>
              <h1>Enhance your ride with our diverse services</h1>
              <p>Choose from a diverse range of a car service designed to maintain and enhance your car journey</p>
            </div>
         </div>
      </div>
    </>
  )
}

export default Services;