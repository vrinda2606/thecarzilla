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
        items: 5
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
        items: 1
      }
    };

const Testimonial = () => {


      return (
    <div className='WhiteBg' style={{height: "745px"}}>
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
                                    responsive={responsive} infinite={true} 
                                    className='testimonial_slider' 
                                    autoPlay 
                                    autoPlaySpeed={3000} 
                                    additionalTransfrom={0} 
                                    arrows centerMode={false} 
                                    containerClass="container" 
                                    dotListClass="" 
                                    focusOnSelect={true} 
                                    itemClass="" 
                                    keyBoardControl
                                    minimumTouchDrag={50} 
                                    pauseOnHover
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
  )
}

export default Testimonial;
                  /*
                                          <div className='testimonials'>
                                                <div className="blackCircle"><FontAwesomeIcon icon={faQuoteRight} /></div>
                                                <div className='testimonialHeader'>
                                                      <div className="customerImage"><img src='../Images/CustomerImage.png' alt=""/></div>
                                                      <div className="customerNameReview"><p>Jaspreet Singh</p><p>⭐⭐⭐⭐</p></div>
                                                </div>
                                                <div className='testimonailReview'>
                                                      <p>"Buying my Kia Seltos from theCarzilla.in was an absolute breeze! The seamless process, coupled with their excellent customer service, made my car buying experience truly delightful. I'm loving every moment in my new ride!"</p>
                                                </div>
                                          </div>
                                          <div className='testimonials'>
                                                <div className="blackCircle"><FontAwesomeIcon icon={faQuoteRight} /></div>
                                                <div className='testimonialHeader'>
                                                      <div className="customerImage"><img src='../Images/CustomerImage.png' alt=""/></div>
                                                      <div className="customerNameReview"><p>V2</p><p>⭐⭐⭐⭐</p></div>
                                                </div>
                                                <div className='testimonailReview'>
                                                      <p>"Buying my Kia Seltos from theCarzilla.in was an absolute breeze! The seamless process, coupled with their excellent customer service, made my car buying experience truly delightful. I'm loving every moment in my new ride!"</p>
                                                </div>
                                          </div>
                                          <div className='testimonials'>
                                                <div className="blackCircle"><FontAwesomeIcon icon={faQuoteRight} /></div>
                                                <div className='testimonialHeader'>
                                                      <div className="customerImage"><img src='../Images/CustomerImage.png' alt=""/></div>
                                                      <div className="customerNameReview"><p>V3</p><p>⭐⭐⭐⭐</p></div>
                                                </div>
                                                <div className='testimonailReview'>
                                                      <p>"Buying my Kia Seltos from theCarzilla.in was an absolute breeze! The seamless process, coupled with their excellent customer service, made my car buying experience truly delightful. I'm loving every moment in my new ride!"</p>
                                                </div>
                                          </div>
                                          <div className='testimonials'>
                                                <div className="blackCircle"><FontAwesomeIcon icon={faQuoteRight} /></div>
                                                <div className='testimonialHeader'>
                                                      <div className="customerImage"><img src='../Images/CustomerImage.png' alt=""/></div>
                                                      <div className="customerNameReview"><p>V4</p><p>⭐⭐⭐⭐</p></div>
                                                </div>
                                                <div className='testimonailReview'>
                                                      <p>"Buying my Kia Seltos from theCarzilla.in was an absolute breeze! The seamless process, coupled with their excellent customer service, made my car buying experience truly delightful. I'm loving every moment in my new ride!"</p>
                                                </div>
                                          </div>*/