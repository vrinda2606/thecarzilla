import React, { useEffect } from 'react';
import HomeI from "./HomeI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faLayerGroup, faLock } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

const AboutUs = () => {

  // import Aos from 'aos';
  useEffect( () => {
    Aos.init({duration : 2000});
  },[] )
  // data-aos='fade-up'

  return (
    <>
      <HomeI />
      <div className='BlackBg' style={{height : '42vw'}}>
            
        <div className='HeadingBoxBlack' data-aos='fade-up'>
        <div className='HeadingBlackDiv'>
           <span className='BlackDivfirst'><hr/><p>WHY CHOOSE US </p><hr/></span>
           <span className='BlackDivMiddle'><h1>About Us</h1></span>
           <span className='BlackDivLast'>Our Company Overview</span>
        </div>
        </div>
        
        <div className='DivContent' style={{height : '7vw'}} data-aos='fade-up'>
        TheCarzilla.in is the beginning of a new era. One that is built on the foundation of transparent and meaningful automotive content in India. At TheCarzilla.in we will bring you the latest news, reviews, tech content and more to help you get closer to your buying decision.
        </div>
        <div className='DivContent' style={{height : '7vw'}} data-aos='fade-up'>
        TheCarzilla.in also promises to give the best prices and fastest delivery of your dream new car.TheCarzilla.in, thus provides you with what you want - Credible reviews, exclusive content and cars at the best prices!
        </div>
            
            <div className='btnForMoreDiv' >
            <button className='btnForMore'>Learn More</button>
            </div>

            <div className='WhiteHr'/>
            
        </div>


    <div className='WhiteBg' style={{height:"55vw"}}>
    <div className='WhiteBgContent'>
        <div className='headingBoxWhite' data-aos='fade-up'>
          <div className='HeadingWhiteDiv'>
            <span className='WhiteDivfirst'><hr/>OUR PLUS POINTS<hr/></span>
            <span className='WhiteDivMiddle'><h1>Features</h1></span>
            <span className='WhiteDivLast'>What makes us different</span>
          </div>
        </div>

      <div className='AboutUs'>
         <div className='cardAboutUs' data-aos='fade-up'>
           <div className='cardIconAboutUs'>
           <FontAwesomeIcon icon={faLayerGroup} className='cardIconLogoAboutUs'/>
           </div>
           <div className='cardHeadingAboutUs'><h6>Best Price</h6></div>
           <div className='cardDescAboutUs'>
              <p>We offer You the lowest price in the market.</p>
           </div>
         </div>

         <div className='cardAboutUs' data-aos='fade-up'>
           <div className='cardIconAboutUs'>
           <FontAwesomeIcon icon={faLock} className='cardIconLogoAboutUs'/>
           </div>
           <div className='cardHeadingAboutUs'><h6>What Drives Us?</h6></div>
           <div className='cardDescAboutUs'>
              <p>A Determination to make your car purchase journey,a smooth ride.</p>
           </div>
         </div>
         <div className='cardAboutUs' data-aos='fade-up'>
           <div className='cardIconAboutUs'>
           <FontAwesomeIcon icon={faHeadphones} className='cardIconLogoAboutUs'/>
           </div>
           <div className='cardHeadingAboutUs'><h6>Earliest Available</h6></div>
           <div className='cardDescAboutUs'>
              <p>We Promise to get you your dream car before anyone else in the market.</p>
           </div>
         </div>
      </div>

      <div className='AboutUs'>
         <div className='cardAboutUs' data-aos='fade-up'>
           <div className='cardIconAboutUs'>
           <FontAwesomeIcon className='cardIconLogoAboutUs' icon={faLayerGroup}/>
           </div>
           <div className='cardHeadingAboutUs'><h6>Door-Step Delivery</h6></div>
           <div className='cardDescAboutUs'>
              <p>Financial assistance, Used car inspection, payment and delivery - all done at your doorstep.</p>
           </div>
         </div>

         <div className='cardAboutUs' data-aos='fade-up'>
           <div className='cardIconAboutUs'>
           <FontAwesomeIcon className='cardIconLogoAboutUs' icon={faLock}/>
           </div>
           <div className='cardHeadingAboutUs'><h6>What Fuels Us?</h6></div>
           <div className='cardDescAboutUs'>
              <p>We are a group of ex co-founders, engineers and top of all- car lovers.</p>
           </div>
         </div>
         <div className='cardAboutUs' data-aos='fade-up'>
           <div className='cardIconAboutUs'>
           <FontAwesomeIcon className='cardIconLogoAboutUs' icon={faHeadphones}/>
           </div>
           <div className='cardHeadingAboutUs'><h6>Complete Transparency</h6></div>
           <div className='cardDescAboutUs'>
              <p>We offer best price guarantee and will never send any hidden charges your way.</p>
           </div>
         </div>
      </div>
       </div>
    </div>
    </>
  )
}

export default AboutUs;