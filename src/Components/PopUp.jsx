import React, { useState } from 'react';

const PopUp = ({ isOpen, onClose }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    model: '',
    city: ''
  });

  // State to track form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent background scroll when popup is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      brand: '',
      model: '',
      city: ''
    });

    // Update state to show confirmation message
    setIsSubmitted(true);

    // Optionally close the popup here if needed
    // onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="mobile-popup-overlay" onClick={onClose}>
      <div className="mobile-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="mobile-close-btn" onClick={onClose}>X</button>
        
        {isSubmitted ? (
          <div>
            <h2 className="mobile-popup-title">VROOM VROOM!!</h2>
            <p className="mobile-popup-subtitle">
              Your data has been submitted. Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="mobile-popup-title">Get Personalized Quote</h2>
            <p className="mobile-popup-subtitle">
              Our experts will assist you personally
            </p>
            <form className="mobile-popup-form" onSubmit={handleSubmit}>
              <div className="mobile-form-group">
                <label>Your Name
                  <span style={{color:"red"}}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mobile-form-group">
                <label>Your Email
                  <span style={{color:"red"}}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mobile-form-group">
                <label>Phone Number
                  <span style={{color:"red"}}>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="mobile-form-group">
                <label>Brand
                  <span style={{color:"red"}}>*</span>
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  placeholder="For Eg: Maruti Suzuki"
                  required
                />
              </div>
              <div className="mobile-form-group">
                <label>Model
                  <span style={{color:"red"}}>*</span>
                </label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  placeholder="For Eg: Swift ZXI+"
                  required
                />
              </div>
              <div className="mobile-form-group">
                <label>City
                  <span style={{color:"red"}}>*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="For Eg: Jaipur"
                  required
                />
              </div>
              <div className="mobile-form-actions">
                <button
                  type="submit"
                  className="mobile-enquire-btn"
                >
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
