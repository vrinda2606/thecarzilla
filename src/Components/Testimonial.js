import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { testimonialContent } from '../utils/testimonialsContent';
import Aos from 'aos';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,borderRadius:'50%', background: "black"}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,borderRadius:'50%', background: "black"}}
      onClick={onClick}
    />
  );
}

const Testimonial = () => {

  // import Aos from 'aos';
  useEffect( () => {
    Aos.init({duration : 2000});
  },[] )
  // data-aos='fade-up'

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Width up to 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Width up to 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

      return (
    <div className='WhiteBg' style={{height: "52vw"}}>
    <div className='WhiteBgContent'>
        <div className='headingBoxWhite' data-aos='fade-up'>
        <div className='HeadingWhiteDiv'>
              <span className='WhiteDivfirst'><hr/>Reviews<hr/></span>
              <span className='WhiteDivMiddle'><h1>What Customer say about us?</h1></span>
              <span className='WhiteDivLast'>Delivering happiness</span>
        </div>
        </div>
        
      <div className='testimonial'>
      <Slider {...settings} >
      {testimonialContent.map( (item,index) => (
              <div key={index} className='testimonials'>
                <div className="blackCircle"><FontAwesomeIcon icon={faQuoteRight} /></div>
                <div className='testimonialHeader'>
                      <div className="customerImage"><img src={item.img} alt=""/></div>
                      <div className="customerNameReview"><p>{item.name}</p><p>{item.rating}</p></div>
                </div>
                <div className='testimonailReview'>
                      {item.review}
                </div>
              </div>
            )
            )}
      </Slider>
      </div>
     </div>
    </div>
  )
}

export default Testimonial;