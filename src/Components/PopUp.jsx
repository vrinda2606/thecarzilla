import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import axios from "axios";

const PopUp = ({ isOpen, onClose }) => {
  const form = useRef();
  const url = "https://sheetdb.io/api/v1/td2o97q6i4v81";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  // Prevent background scroll when popup is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const sendData = async (formData) => {
    try {
      const response = await axios.post(url, { data: formData });
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      name: document.getElementById("popup_name").value.trim(),
      email: document.getElementById("popup_email").value.trim(),
      number: document.getElementById("popup_phone").value.trim(),
      brand: document.getElementById("popup_brand").value.trim(),
      model: document.getElementById("popup_model").value.trim(),
      city: document.getElementById("popup_city").value.trim(),
    };
  
    if (Object.values(formData).every(field => field)) {
      emailjs
        .sendForm("service_hrraeq5", "template_ulf7l9f", form.current, {
          publicKey: "WAwu7R3mje_b0w9WY",
        })
        .then(() => {
          console.log("SUCCESS!");
          sendData(formData); 
          setIsSubmitted(true);
          setIsError(false);
          e.target.reset(); 
        })
        .catch((error) => {
          console.error("Error sending data:", error.text);
          setIsError(true);
          setIsSubmitted(false);
        });
    } 
  };

  if (!isOpen) return null;

  return (
    <div className="mobile-popup-overlay" onClick={onClose}>
      <div className="mobile-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="mobile-close-btn" onClick={onClose}>X</button>
        
        {isError ? (
          <div className='mobile-popup-content1'>
            <h2 className="mobile-popup-title" style={{color: "#FF4423"}}>Oops!</h2>
            <p className="mobile-popup-subtitle">
              Something went wrong. Please try again.
            </p>
            <button 
              className='mobile-enquire-btn' 
              style={{width:"100%"}} 
              onClick={() => {
                setIsError(false);
                setIsSubmitted(false);
              }}
            >
              Try Again
            </button>
          </div>
        ) : isSubmitted ? (
          <div className='mobile-popup-content1'>
            <h2 className="mobile-popup-title">VROOM VROOM!!</h2>
            <p className="mobile-popup-subtitle">
              Your data has been submitted. Our team will contact you shortly.
            </p>
            <button className='mobile-enquire-btn' style={{width:"100%"}} onClick={onClose}>Close</button>
          </div>
        ) : (
          <div>
            <h2 className="mobile-popup-title">Get Personalized Quote</h2>
            <p className="mobile-popup-subtitle">
              Our experts will assist you personally
            </p>
            <form ref={form} className="mobile-popup-form" onSubmit={handleSubmit}>
              <div className="mobile-form-group">
                <label>Your Name<span style={{color:"red"}}>*</span></label>
                <input
                  type="text"
                  name="name"
                  id="popup_name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mobile-form-group">
                <label>Your Email<span style={{color:"red"}}>*</span></label>
                <input
                  type="email"
                  name="email"
                  id="popup_email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mobile-form-group">
                <label>Phone Number<span style={{color:"red"}}>*</span></label>
                <input
                  type="tel"
                  name="phone"
                  id="popup_phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="mobile-form-group">
                <label>Brand<span style={{color:"red"}}>*</span></label>
                <input
                  type="text"
                  name="brand"
                  id="popup_brand"
                  placeholder="For Eg: Maruti Suzuki"
                  required
                />
              </div>
              <div className="mobile-form-group">
                <label>Model<span style={{color:"red"}}>*</span></label>
                <input
                  type="text"
                  name="model"
                  id="popup_model"
                  placeholder="For Eg: Swift ZXI+"
                  required
                />
              </div>
              <div className="mobile-form-group">
                <label>City<span style={{color:"red"}}>*</span></label>
                <input
                  type="text"
                  name="city"
                  id="popup_city"
                  placeholder="For Eg: Jaipur"
                  required
                />
              </div>
              <div className="mobile-form-actions">
                <button type="submit" className="mobile-enquire-btn">
                  Enquire Now
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUp;