import React from 'react';
import newCardPhoto from "./Images/mobile version/new-car-card-photo.png";
import checkIcon from "./Images/mobile version/check.png";

const FindCar = () => {
  return (
    <div className="mobile-find-car-container">
      <div className="mobile-find-car-content">
        <h1 className="mobile-find-car-title">Find the perfect<br />car for You!</h1>
        <p className="mobile-find-car-description">Answer a few questions to find a car that fits your needs</p>
        <button className="mobile-find-car-button">Find my car</button>
      </div>
      <div className="mobile-card-container">
        <div className="mobile-card mobile-card-green">
          <img src={newCardPhoto} alt="Car" className="mobile-card-image" />
        </div>
        <div className="mobile-card mobile-card-white">
          <img src={newCardPhoto} alt="Car" className="mobile-card-image" />
          <img src={checkIcon} alt="Check" className="mobile-card-check-icon" />
        </div>
        <div className="mobile-card mobile-card-orange">
          <img src={newCardPhoto} alt="Car" className="mobile-card-image" />
        </div>
      </div>
    </div>
  );
};

export default FindCar;