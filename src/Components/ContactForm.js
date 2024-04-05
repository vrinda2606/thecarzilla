import React, { useState } from 'react';

const ContactForm = () => {


  const [popupVis , setPopupVis] = useState(false);
  
  const openPopup = (e) => {
  
  const nameInput = document.getElementById('fname').value.trim();
  const emailInput = document.getElementById('email').value.trim();
  const numberInput = document.getElementById('number').value.trim();
  const brandInput = document.getElementById('brandChosen').value.trim();
  const modelInput = document.getElementById('modelChosen').value.trim();
  const cityInput = document.getElementById('cityChosen').value.trim();

  if (nameInput && emailInput && numberInput && brandInput && modelInput && cityInput) {
    e.preventDefault();
    setPopupVis(true);
    console.log(popupVis);
  } else {
    alert('Please fill in all the required fields.');
  }
  };

  const closePopup = () => {
    setPopupVis(false);
    console.log(popupVis);
  };

  return (
    <div id="contact-form-container" className='BlackBg' style={{height : '550px'}}>
    <div className='contactFormDiv'>
      <div className='HeadingBoxBlack'>
      <div className='HeadingBlackDiv'>
         <span className='BlackDivfirst'><hr /><p>BOOK YOUR DREAM CAR</p><hr/></span>
         <span className='BlackDivMiddle'><h1>Get Personalized Quote</h1></span>
         <span className='BlackDivLast'>Our experts will assist you personally</span>
      </div>
      </div>

      <div className='contactForm'>
      <form id="contact-form" className="contact-form">
                <div className="input-box">
                   <div className="input-field">
                       <label>Your Name<span className='asterisk'>*</span></label><br/>
                       <input className="name" id="fname" type="text" placeholder="Enter your name" required/>
                   </div>
                   <div className="input-field">
                       <label>Your Email<span className='asterisk'>*</span></label><br/>
                       <input className="email" id="email" type="email" placeholder="Enter your email" required/>
                   </div>
                   <div className="input-field">
                       <label>Phone Number<span className='asterisk'>*</span></label><br/>
                       <input className="number" id="number" type="number" placeholder="Enter your phone number" required />
                   </div>
                </div>

                <div className="input-box">
                   <div className="input-field">
                       <label>Brand<span className='asterisk'>*</span></label><br/>
                       <input className="brandChosen" id="brandChosen" type="text" placeholder="For Eg: Maruti Suzuki" required/>
                   </div>
                   <div className="input-field">
                       <label>Model<span className='asterisk'>*</span></label><br/>
                       <input className="modelChosen" id="modelChosen" type="text" placeholder="For Eg: Swift ZXI+" required/>
                   </div>
                   <div className="input-field">
                       <label>City<span className='asterisk'>*</span></label><br/>
                       <input className="cityChosen" id="cityChosen" type="text" placeholder="For Eg: Jaipur" required />
                   </div>
                </div>

                <div className="buttonContact">
                   <button type="submit" className="btnContact" onClick={openPopup}>Enquire Now</button>
                </div>
               </form>
      </div>
    </div>

      <div className={`popup ${popupVis ? 'active' : ''}`}>
           <div>
            <button id='close_popup' onClick={closePopup}>click</button>
           </div>
          <h2>Heyyyyaaa</h2>
      </div>
    </div>
  )
}

export default ContactForm;