import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume , faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const CustomerSupport = () => {
  return (
    <>
        <div style={{backgroundImage: `url(${'../Images/CustomerSupport.png'})`,backgroundSize: "cover",backgroundRepeat : "no-repeat", width: "100%",height: "690px"}}>
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

            <div style={{width: "700px",backgroundColor: "white",margin:"51px auto", height: "3px"}} />
            
        </div>

        <div className='getInTouch'>
            <div className='getInTouchForm'>
               <div className='TouchFormHeading'>
                  <img src='../Images/Get in Touch.jpg' alt= 'Get In Touch' width='60%'/>
                  <p className='TouchFormHeadingHead'>Unlocking endless support for your car buying needs</p>
               </div>

               <form className='getInTouchFormDetails'>
                  <input type='text' placeholder='Name *'></input>
                  <input type='email' placeholder='Email'></input>
                  <input type='number' placeholder='Phone number *'></input>
                  <select>
                      <option value="default" selected>How did you find us?</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Family/Friend">Family/Friend</option>
                      <option value="Our Website">Our Website</option>
                      <option value="Advertisement">Advertisement</option>
                  </select>
                  <button>SEND</button>
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
    </>
  )
}

export default CustomerSupport;