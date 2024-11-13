import React from 'react';
import { useNavigate } from 'react-router-dom';
import newCardPhoto from "./Images/mobile version/new-car-card-photo.png";

const ExploreService = () => {
  const navigate = useNavigate();

  const handleExploreServices = () => {
    navigate('/Services');
  };

  return (
    <div className="mobile-find-car-container-1">
      <div className="mobile-find-car-content-1">
        <h1 className="mobile-find-car-title-1">Enhance your ride with <br /> our diverse services</h1>
        <p className="mobile-find-car-description-1">Choose from a diverse range of a car service designed to maintain and enhance your car journey</p>
        <button 
          className="mobile-find-car-button-1"
          onClick={handleExploreServices}
        >
          Explore Services
        </button>
      </div>
      <div className="mobile-card-row-1">
        <div className="mobile-card-1 mobile-card-orange-1">
          <img src={newCardPhoto} alt="Car" className="mobile-card-image-1" />
        </div>
        <div className="mobile-card-1 mobile-card-white-1">
          <img src={newCardPhoto} alt="Car" className="mobile-card-image-1" />
        </div>
        <div className="mobile-card-1 mobile-card-green-1">
          <img src={newCardPhoto} alt="Car" className="mobile-card-image-1" />
        </div>
      </div>
    </div>
  );
};

export default ExploreService;
