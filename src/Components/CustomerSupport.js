import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume , faEnvelopeOpenText , faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import {images} from '../utils/constants';

const CustomerSupport = () => {

  const [popupVis , setPopupVis] = useState(false);
  
  const openPopup = (e) => {
  
  const nameInput = document.getElementById('getInTouchName').value.trim();
  const emailInput = document.getElementById('getInTouchEmail').value.trim();
  const numberInput = document.getElementById('getInTouchNumber').value.trim();

  if (nameInput && emailInput && numberInput) {
    e.preventDefault();
    setPopupVis(true);
  } else {
  }
  };

  const closePopup = () => {
    setPopupVis(false);
  };


  return (
    <>
        <div style={{backgroundImage: `url(${images[19].url})`,backgroundSize: "cover",backgroundRepeat : "no-repeat", width: "100%",height: "690px"}}>
        </div>

        <div className='BlackBg' style={{height : '588px'}}>
            
        <div className='HeadingBoxBlack'>
        <div className='HeadingBlackDiv'>
           <span className='BlackDivfirst'><hr/><p>UNMATCHED SUPPORT</p><hr/></span>
           <span className='BlackDivMiddle'><h1>Customer Support</h1></span>
           <span className='BlackDivLast'>Your satisfaction is our destination</span>
        </div>
        </div>
        
        <div className='DivContent' style={{height : '210px'}}>
        TheCarzilla.in is the beginning of a new era. One that is built on the foundation of transparent and meaningful automotive content in India. At TheCarzilla.in we will bring you the latest news, reviews, tech content and more to help you get closer to your buying decision.
        <br />
        TheCarzilla.in also promises to give the best prices and fastest delivery of your dream new car. 
        <br />TheCarzilla.in thus provides you with what you want - Credible reviews, exclusive content and cars at best prices!
        </div>
            
            <div className='btnForMoreDiv' >
            <button className='btnForMore'>Learn More</button>
            </div>

            <div className='WhiteHr'/>
            
        </div>

        <div className='getInTouch'>
          <div className={`getInTouchDiv ${popupVis ? 'active' : ''}`}>
            <div className='getInTouchForm'>
               <div className='TouchFormHeading'>
                  <img src={images[20].url} alt= 'Get In Touch' width='60%'/>
                  <p className='TouchFormHeadingHead'>Unlocking endless support for your car buying needs</p>
               </div>

               <form className='getInTouchFormDetails'>
                  <input id='getInTouchName' type='text' placeholder='Name *'></input>
                  <input id='getInTouchEmail' type='email' placeholder='Email'></input>
                  <input id='getInTouchNumber' type='number' placeholder='Phone number *'></input>
                  <select>
                      <option value="default" selected>How did you find us?</option>
                      <option value="Instagram">Instagram</option>
                      <option value="linkedIn">linkedIn</option>
                      <option value="Twitter">Twitter</option>
                      <option value="Others">Others</option>
                  </select>
                  <button onClick={openPopup}>SEND</button>
               </form>

               <div className='getInTouchFormContact'>
                    <div class="FormContactPhone">
                      <div class="contactIcon"> <FontAwesomeIcon icon={faPhoneVolume} /> </div>
                      <div class="contactPhoneheadings">  <p>PHONE</p> <p>+91 9457709575</p>  </div>
                    </div>
                    <div class="FormContactPhone">
                      <div class="contactIcon"> <FontAwesomeIcon icon={faEnvelopeOpenText} /> </div>
                      <div class="contactPhoneheadings">  <p>EMAIL</p> <p>help@thecarzilla.in</p>  </div>
                    </div>
               </div>
            </div>

            <div className='getInTouchPic'></div>
          </div>

          <div className={`BlackBg popup ${popupVis ? 'active' : ''}`}>
              <span className='popupCloseDiv'>
                 <button id='close_popup' onClick={closePopup}><FontAwesomeIcon className='popupCloseDivIcon' icon={faCircleXmark}></FontAwesomeIcon></button>
              </span>
              <div className='HeadingBoxBlack'>
              <div className='HeadingBlackDiv'>
                 <span className='BlackDivfirst' style={{color: 'black'}}><p>INQUIRY SUBMITTED</p></span>
                 <span className='BlackDivMiddle' style={{color: 'black'}}><h1>VROOM-VROOM!!</h1></span>
                 <span className='BlackDivMiddle' style={{color: 'black'}}><h1>Your query has been heard</h1></span>
                 <span className='BlackDivLast' style={{color: 'black'}}>Our team will contact you soon</span>
              </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default CustomerSupport;