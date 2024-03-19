import React from 'react'

const ContactForm = () => {
  return (
    <div className='BlackBg' style={{height : '550px'}}>
      
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
                       <input className="brandChosen" id="brandChosen" type="text" placeholder="Choose..." required/>
                   </div>
                   <div className="input-field">
                       <label>Model<span className='asterisk'>*</span></label><br/>
                       <input className="modelChosen" id="modelChosen" type="text" placeholder="Choose..." required/>
                   </div>
                   <div className="input-field">
                       <label>City<span className='asterisk'>*</span></label><br/>
                       <input className="cityChosen" id="cityChosen" type="text" placeholder="Choose..." required />
                   </div>
                </div>

                <div className="buttonContact">
                   <button type="submit" className="btnContact">Enquire Now</button>
                </div>
               </form>
      </div>


    </div>
  )
}

export default ContactForm;