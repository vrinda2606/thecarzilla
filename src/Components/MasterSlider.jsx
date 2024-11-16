import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Background1 from "./Images/mobile version/background1.png";


function MasterSlider() {
  const settings = {
    dots: true, // Enable dots
    infinite: true, // Infinite loop
    slidesToShow: 3, // Show 1 full slide + part of the next
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false, // No navigation arrows
    centerPadding: "2px", 
    easing:"linear"
    
  };

  return (
    <div className="mobile-version-slider-wrapper">
      <div className="mobile-version-slider-container">
        <Slider {...settings}>
          <div className="mobile-version-slide">
            <img
              src={Background1}
              alt="slide-1"
              className="mobile-version-slide-image"
            />
          </div>
          <div className="mobile-version-slide">
            <img
              src={Background1}
              alt="slide-2"
              className="mobile-version-slide-image"
            />
          </div>
          <div className="mobile-version-slide">
            <img
              src={Background1}
              alt="slide-3"
              className="mobile-version-slide-image"
            />
          </div>
          <div className="mobile-version-slide">
            <img
              src={Background1}
              alt="slide-4"
              className="mobile-version-slide-image"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default MasterSlider;
