import React, { useState } from 'react'
import Background from "./Images/mobile version/futuristic-interior-sci-fi-room-background 2.png"
import Car from "./Images/mobile version/view-3d-car-removebg-preview 1 (1).png"
import Salesman from "./Images/mobile version/smiling-handsome-hispanic-salesman-handing-keys-new-car-studio 1 (1).png"
import PopUp from './PopUp'

const Master = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="mobile-container-wrapper">
      <div className="mobile-ad-container">
        <div className="mobile-background-wrapper">
          <img src={Background} alt="background" className="mobile-background-image" />
          <div className="mobile-content">
            <div className='mobile-text-container'>
              <h2 className='mobile-heading'>Your Dream Car<br/> Just One Click Away</h2>
            </div>
            <div className='mobile-description-container'>
              <p className="mobile-description">Schedule a test drive from the wide range of our car collection</p>
            </div>
            <button className="mobile-enquire-btn1" onClick={openPopup}>
              Enquire Now
            </button>
          </div>
        </div>
        <img src={Car} alt="car" className="mobile-car-image" />
        <img src={Salesman} alt="salesman" className="mobile-salesman-image" />
      </div>

      <PopUp 
        isOpen={isPopupOpen} 
        onClose={closePopup}
      />
    </div>
  )
}

export default Master