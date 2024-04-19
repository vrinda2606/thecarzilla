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
              <p>Fermentum luctus convallis non lectus. Aliquam at ut viverra non arcu massa laoreet commodo ac.</p>
           </div>
         </div>

         <div className='card' data-aos='fade-up'>
           <div className='cardIcon'>
           <FontAwesomeIcon className='cardIconLogo' icon={faLock}/>
           </div>
           <div className='cardHeading'><h6>Deal</h6></div>
           <div className='cardDesc'>
              <p>Fermentum luctus convallis non lectus. Aliquam at ut viverra non arcu massa laoreet commodo ac.</p>
           </div>
         </div>
         <div className='card' data-aos='fade-up'>
           <div className='cardIcon'>
           <FontAwesomeIcon className='cardIconLogo' icon={faHeadphones}/>
           </div>
           <div className='cardHeading'><h6>Drive</h6></div>
           <div className='cardDesc'>
              <p>Fermentum luctus convallis non lectus. Aliquam at ut viverra non arcu massa laoreet commodo ac.</p>
           </div>
         </div>
      </div>
      </div>
    </div>
  )
}

export default HomeIII;