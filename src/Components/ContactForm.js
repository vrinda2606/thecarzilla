import React from 'react'

const ContactForm = () => {
  return (
    <div style={{padding:"20px",Width: "100%",height: "545px",backgroundColor: "#292929",backgroundRepeat: 'repeat',backgroundImage : `url('../Images/bgEffect.png')`,backgroundSize: "612px auto",backgroundBlendMode: "overlay"}}>
      
      <div className='contactHeading' style={{width:"700px",height: "142px",margin: "auto",color: "#ffffff"}}>
      <div style={{ width: "700px", height: "142px", margin: "40px auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
         <span style={{marginTop: "0px",display: "flex", alignItems: "center" }}><hr style={{width: "16px",border: "1px solid",margin: "auto 10px"}}/><p style={{}}>BOOK YOUR DREAM CAR</p><hr style={{width: "16px",border: "1px solid",margin: "auto 10px"}}/></span>
         <span style={{marginTop:"13px"}}><h1 style={{ fontFamily:"Lexend Deca",fontWeight: "600", fontSize: "45px", lineHeight: "63px" ,gap: "20px"}}>Get Personalized Quote</h1></span>
         <span style={{ fontFamily:"Space Grotesk",fontWeight: "700",color : "#FFFFFF",lineHeight: "25px",fontSize: "20px",height:"25px",marginTop:"17px"}}>Our experts will assist you personally</span>
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