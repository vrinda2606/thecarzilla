import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

function Difference() {
  return (
    <div className="mobile11-swiper-parent">
      {/* Heading and Subheading */}
      <div className="mobile11-heading-container">
        <h2 className="mobile11-title">Experience the Difference</h2>
        <p className="mobile11-subtitle">Buy your dream car in just 3 easy steps</p>
      </div>

      {/* Swiper Section */}
      <div className='super-container'>
        <div className="mobile11-swiper-container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16} // Consistent spacing
            slidesPerView={1.8}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 2.3,
                spaceBetween: 10, // Consistent spacing for all breakpoints
              },
              480: {
                slidesPerView: 1.8,
                spaceBetween: 16,
              },
            }}
          >
            <SwiperSlide>
              <div className="mobile11-card">
                <h3 className="mobile11-card-title">Dream</h3>
                <p className="mobile11-card-text">
                  Dream big, drive bigger. Find your dream car effortlessly and start living the dream.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile11-card">
                <h3 className="mobile11-card-title">Deal</h3>
                <p className="mobile11-card-text">
                  Don't just dream it, deal it! Score big savings on your dream car today and drive off with confidence.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile11-card">
                <h3 className="mobile11-card-title">Drive</h3>
                <p className="mobile11-card-text">
                  Fuel your passion for driving and ride away with your dream car making every mile memorable.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Difference;
