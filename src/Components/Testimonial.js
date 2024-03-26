import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { testimonialContent } from '../utils/testimonialsContent';

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
        

        <div className='testimonialCarousel'>
            {testimonialContent.map( (item,index) => (
              <div key={index} className='testimonials'>
                <div class="blackCircle"><FontAwesomeIcon icon={faQuoteRight} /></div>
                <div className='testimonialHeader'>
                      <div class="customerImage"><img src={item.img} alt=""/></div>
                      <div class="customerNameReview"><p>{item.name}</p><p>{item.rating}</p></div>
                </div>
                <div className='testimonailReview'>
                      <p>{item.review}</p>
                </div>
              </div>
            )
            )}
            
            {/*
            <div className='testimonials'>
                <div class="blackCircle"><FontAwesomeIcon icon={faQuoteRight} /></div>
                <div className='testimonialHeader'>
                      <div class="customerImage"><img src='../Images/CustomerImage.png' alt=""/></div>
                      <div class="customerNameReview"><p>Jaspreet Singh</p><p>⭐⭐⭐⭐</p></div>
                </div>
                <div className='testimonailReview'>
                      <p>"Buying my Kia Seltos from theCarzilla.in was an absolute breeze! The seamless process, coupled with their excellent customer service, made my car buying experience truly delightful. I'm loving every moment in my new ride!"</p>
                </div>
            </div>
            */}

        </div>
    </div>
  )
}

export default Testimonial;