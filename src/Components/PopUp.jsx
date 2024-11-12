import React from 'react';

const PopUp = ({ isOpen, onClose }) => {
  // Prevent background scroll when popup is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="mobile-popup-overlay" onClick={onClose}>
      <div className="mobile-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="mobile-close-btn" onClick={onClose}>X</button>
        <h2 className="mobile-popup-title">Get Personalized Quote</h2>
        <p className="mobile-popup-subtitle">Our experts will assist you personally</p>
        <form className="mobile-popup-form">
          <div className="mobile-form-group">
            <label>Your Name
                <span style={{color:"red"}}>
                    *
                </span>
                
                </label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="mobile-form-group">
            <label>Your Email
            <span style={{color:"red"}}>
                    *
                </span>
            </label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="mobile-form-group">
            <label>Phone Number
            <span style={{color:"red"}}>
                    *
                </span>
            </label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="mobile-form-group">
            <label>Brand
            <span style={{color:"red"}}>
                    *
                </span>
            </label>
            <input type="text" placeholder="For Eg: Maruti Suzuki" />
          </div>
          <div className="mobile-form-group">
            <label>Model
            <span style={{color:"red"}}>
                    *
                </span>
            </label>
            <input type="text" placeholder="For Eg: Swift ZXI+" />
          </div>
          <div className="mobile-form-group">
            <label>City
                <span style={{color:"red"}}>
                    *
                </span>
                
            </label>
            <input type="text" placeholder="For Eg: Jaipur" />
          </div>
          <div className="mobile-form-actions">
            <button
              type="button"
              className="mobile-enquire-btn"
              onClick={() => alert('Congratulations! Our team will contact you soon.')}
            >
              Enquire Now
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
