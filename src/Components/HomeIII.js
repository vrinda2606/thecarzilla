import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faLayerGroup, faLock } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

const HomeIII = () => {

  useEffect( () => {
    Aos.init({duration : 2000});
  },[] )

  return (
    <div className='WhiteBg' style={{height:"45vw"}}>
     <div className='WhiteBgContent'>
      <div className='headingBoxWhite' data-aos='fade-up'>
      <div className='HeadingWhiteDiv'>
        <span className='WhiteDivfirst'><hr/>Why Choose Us <hr/></span>
        <span className='WhiteDivMiddle'><h1>Experience the Difference</h1></span>
        <span className='WhiteDivLast'>Buy your dream car in just three easy steps</span>
      </div>
      </div>



      <div className='HomeIII' style={{marginTop : '7vw' , marginBottom : '8vw'}}>
         <div className='card' data-aos='fade-up'>
           <div className='cardIcon'>
           <FontAwesomeIcon className='cardIconLogo' icon={faLayerGroup}/>
           </div>
           <div className='cardHeading'><h6>Dream</h6></div>
           <div className='cardDesc'>
              <p>Dream big, drive bigger. Find your dream car effortlessly and start living the dream.</p>
           </div>
         </div>

         <div className='card' data-aos='fade-up'>
           <div className='cardIcon'>
           <FontAwesomeIcon className='cardIconLogo' icon={faLock}/>
           </div>
           <div className='cardHeading'><h6>Deal</h6></div>
           <div className='cardDesc'>
              <p>Don't just dream it, deal it! Score big savings on your dream car today and drive off with confidence.</p>
           </div>
         </div>
         <div className='card' data-aos='fade-up'>
           <div className='cardIcon'>
           <FontAwesomeIcon className='cardIconLogo' icon={faHeadphones}/>
           </div>
           <div className='cardHeading'><h6>Drive</h6></div>
           <div className='cardDesc'>
              <p>Fuel your passion for driving and ride away with your dream car making every mile memorable.</p>
           </div>
         </div>
      </div>
      </div>
    </div>
  )
}

export default HomeIII;