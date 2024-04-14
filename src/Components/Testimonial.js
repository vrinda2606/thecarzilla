import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { testimonialContent } from '../utils/testimonialsContent';
const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
      }
    };

const Testimonial = () => {


      return (
    <div className='WhiteBg' style={{height: "48vw"}}>
    <div className='WhiteBgContent'>
        <div className='headingBoxWhite'>
        <div className='HeadingWhiteDiv'>
              <span className='WhiteDivfirst'><hr/>Reviews<hr/></span>
              <span className='WhiteDivMiddle'><h1>What Customer say about us?</h1></span>
              <span className='WhiteDivLast'>Delivering happiness</span>
        </div>
        </div>
        
      <div className='testimonial'>
            <Container>
                  <Row>
                        <Col>
                              <div className='testimonial-box'>
                                <Carousel 
                                    responsive={responsive} 
                                    infinite={true} 
                                    className='testimonial_slider' 
                                    autoPlay 
                                    autoPlaySpeed={3000} 
                                    additionalTransfrom={0} 
                                    arrows centerMode={false} 
                                    containerClass="container" 
                                    dotListClass="" 
                                    // focusOnSelect={true} 
                                    itemClass="" 
                                    keyBoardControl={true}
                                    minimumTouchDrag={50} 
                                    pauseOnHover ={false}
                                    renderArrowsWhenDisabled={false}
                                    renderButtonGroupOutside={true}
                                    renderDotsOutside = {true}
                                    rewind={false}
                                    rewindWithAnimation={false}
                                    rtl={false}
                                    shouldResetAutoplay
                                    showDots
                                    sliderClass=""
                                    slidesToSlide={1}
                                    swipeable>
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
                                    </Carousel>
                              </div>
                        </Col>
                  </Row>
            </Container>
      </div>
     </div>
    </div>
  )
}

export default Testimonial;


/*
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { testimonialContent } from '../utils/testimonialsContent';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CustomLeftArrow = ({ onClick }) => (
    <button onClick={onClick} className="arrow-btn left">
        <FontAwesomeIcon icon={faArrowLeft} />
    </button>
);

const CustomRightArrow = ({ onClick }) => (
    <button onClick={onClick} className="arrow-btn right">
        <FontAwesomeIcon icon={faArrowRight} />
    </button>
);


const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
      }
    };

const Testimonial = () => {
  const [centeredItem, setCenteredItem] = useState(0);

  const handleAfterChange = (previousSlide, { currentSlide }) => {
      setCenteredItem(currentSlide);
  };

      return (
    <div className='WhiteBg' style={{height: "48vw"}}>
    <div className='WhiteBgContent'>
        <div className='headingBoxWhite'>
        <div className='HeadingWhiteDiv'>
              <span className='WhiteDivfirst'><hr/>Reviews<hr/></span>
              <span className='WhiteDivMiddle'><h1>What Customer say about us?</h1></span>
              <span className='WhiteDivLast'>Delivering happiness</span>
        </div>
        </div>
        
        <div className='testimonial'>
                    <Container>
                        <Row>
                            <Col>
                                <div className='testimonial-box'>
                                    <Carousel 
                                        responsive={responsive} 
                                        infinite={true} 
                                        autoPlay 
                                        autoPlaySpeed={3000} 
                                        arrows
                                        showDots
                                        afterChange={handleAfterChange}
    customLeftArrow={<CustomLeftArrow />}
    customRightArrow={<CustomRightArrow />}
                                        containerClass="carousel-container"
                                        dotListClass="carousel-dot-list"
                                        itemClass="carousel-item"
                                        sliderClass=""
                                    >
                                        {testimonialContent.map((item, index) => (
                                            <div key={index} className='testimonials'>
                                                <div className="blackCircle"><FontAwesomeIcon icon={faQuoteRight} /></div>
                                                <div className='testimonialHeader'>
                                                    <div className="customerImage"><img src={item.img} alt={item.name} /></div>
                                                    <div className="customerNameReview"><p>{item.name}</p><p>{item.rating}</p></div>
                                                </div>
                                                <div className='testimonailReview'>
                                                    {item.review}
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
  )
}

export default Testimonial;

.arrow-btn {
  border: none;
  background-color: transparent;
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1000;
}

.arrow-btn.left {
  left: 10px;
}

.arrow-btn.right {
  right: 10px;
}

.arrow-btn svg {
  color: #333;
  font-size: 24px;
}

.carousel-arrow {
  font-size: 20px; 
  color: #333; 
}
.carousel-dot-list .react-multi-carousel-dot button {
  background-color: #888; 
  width: 10px; 
  height: 10px; 
}

@media (max-width: 1024px) {
  .carousel-arrow {
      font-size: 16px;
  }
  .carousel-dot-list .react-multi-carousel-dot button {
      width: 8px;
      height: 8px;
  }
}
@media (max-width: 464px) {
  .carousel-arrow {
      font-size: 12px;
  }
  .carousel-dot-list .react-multi-carousel-dot button {
      width: 6px;
      height: 6px;
  }
}
*/