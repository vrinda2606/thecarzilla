import React from 'react'
import Background from "./Images/mobile version/background.png"
import Car from "./Images/mobile version/3d-car.png"
import Salesman from "./Images/mobile version/saleman.png"

const Master = () => {
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
            <button className="mobile-enquire-btn">Enquire Now</button>
          </div>
        </div>
        <img src={Car} alt="car" className="mobile-car-image" />
        <img src={Salesman} alt="salesman" className="mobile-salesman-image" />
      </div>
    </div>
  )
}

export default Master