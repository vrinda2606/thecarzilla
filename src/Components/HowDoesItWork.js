import React, { useEffect } from 'react';
import HomeI from './HomeI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faLayerGroup, faLock } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

const HowDoesItWork = () => {

  // import Aos from 'aos';
  useEffect( () => {
    Aos.init({duration : 2000});
  },[] )
  // data-aos='fade-up'

  return (
    <>
        <HomeI />
        <div className='BlackBg' style={{height : '32.4vw'}}>
            
        <div className='HeadingBoxBlack' data-aos='fade-up'>
        <div className='HeadingBlackDiv'>
           <span className='BlackDivfirst'><hr/><p>WE ARE DIFFERENT</p><hr/></span>
           <span className='BlackDivMiddle'><h1>How It Works</h1></span>
           <span className='BlackDivLast'>Our way of delivering happiness is different!</span>
        </div>
        </div>
        
        <div className='DivContent' style={{height : '8vw'}} data-aos='fade-up'>
        We understand that a car is not just a high-ticket purchase for you, it's a dream! And we want to assure you that we will be alongside you throughout this journey from car selection to car purchase to car maintenance and beyond.
        </div>
            
            <div className='btnForMoreDiv' >
            <button className='btnForMore'>Learn More</button>
            </div>

            <div className='WhiteHr'/>
            
        </div>


    <div className='WhiteBg' style={{height:"50vw"}}>
    <div className='WhiteBgContent'>
        <div className='headingBoxWhite' data-aos='fade-up'>
          <div className='HeadingWhiteDiv'>
            <span className='WhiteDivfirst'><hr/>TO BUY A NEW CAR <hr/></span>
            <span className='WhiteDivMiddle'><h1>Just Follow Three Easy Steps</h1></span>
            <span className='WhiteDivLast'>That's all you need to do!</span>
          </div>
        </div>



      <div className='howItWorks'>
         <div className='card' data-aos='fade-up'>
           <div className='cardIcon'>
           <FontAwesomeIcon className='cardIconLogo' icon={faLayerGroup} />
           </div>
           <div className='cardHeading'><h6>Inquire</h6></div>
           <div className='cardDesc'>
              <p>Fill the Inquiry Form</p>
           </div>
         </div>

         <div className='card' data-aos='fade-up'>
           <div className='cardIcon'>
           <FontAwesomeIcon className='cardIconLogo' icon={faLock} />
           </div>
           <div className='cardHeading'><h6>Booking</h6></div>
           <div className='cardDesc'>
              <p>Book your dream car</p>
           </div>
         </div>
         <div className='card' data-aos='fade-up'>
           <div className='cardIcon'>
           <FontAwesomeIcon className='cardIconLogo' icon={faHeadphones} />
           </div>
           <div className='cardHeading'><h6>Delivery</h6></div>
           <div className='cardDesc'>
              <p>Get the car delivered</p>
           </div>
         </div>
      </div>
      
      <div className='howItWorksContent' data-aos='fade-up'>
      Along with you, investors like AY Ventures , Shakunt Finance and TBI-KIET  have also put their trust in us. And we promise to uphold the trust you all have put in us. By the way, we love all cars, new or old and if in case you want to give your old darling a farewell, we will get you the best price for that beauty as well :)
      </div>

      </div>

    </div>
    </>
  )
}

export default HowDoesItWork;