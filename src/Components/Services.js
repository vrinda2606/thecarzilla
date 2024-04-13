import React from 'react';
import { images } from '../utils/servicesContent';

const Services = () => {
  return (
    <>
      <div className='servicesI'>
         <div className='servicesIImage'>
            <img src={images[0].url} alt='Services' style={{objectFit : 'contain',height: '100%',width : '100%'}}/>
         </div>
         <div className='servicesIContent'>
            <div className='servicesIContentHeading'>
              <h1>Enhance your ride with our diverse services</h1>
              <p>Choose from a diverse range of a car service designed to maintain and enhance your car journey</p>
            </div>
            <div className='servicesIContentIcons'>
               <div className='servIContentIcon'>
                 <div className='servIIconDiv'><img src={images[1].url} alt='Services' style={{objectFit : 'contain',height: '70%',width : '70%'}}/></div>
                 <div className='servIIconHeading'><h2>Fair</h2></div>
                 <div className='servIIconPara'><p>Price Guaranteed</p></div>
               </div>
               <div className='servIContentIcon'>
                 <div className='servIIconDiv'><img src={images[2].url} alt='Services' style={{objectFit : 'contain',height: '70%',width : '70%'}}/></div>
                 <div className='servIIconHeading'><h2>Support</h2></div>
                 <div className='servIIconPara'><p>Dedicated Team</p></div>
               </div>
               <div className='servIContentIcon'>
                 <div className='servIIconDiv'><img src={images[3].url} alt='Services' style={{objectFit : 'contain',height: '70%',width : '70%'}}/></div>
                 <div className='servIIconHeading'><h2>Data</h2></div>
                 <div className='servIIconPara'><p>Data Security</p></div>
               </div>
            </div>
         </div>
      </div>

      
    </>
  )
}

export default Services;