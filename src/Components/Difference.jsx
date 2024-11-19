import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Difference() {
  const swiperRef = useRef(null);
  const [direction, setDirection] = useState("right"); // Track motion direction

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const changeDirection = () => {
      if (direction === "right" && swiper.isEnd) {
        setDirection("left");
        swiper.autoplay.stop();
        swiper.slideTo(swiper.slides.length - 1, 1000); // Ensure it's fully on the last slide
        setTimeout(() => {
          swiper.autoplay.start();
        }, 100);
      } else if (direction === "left" && swiper.isBeginning) {
        setDirection("right");
        swiper.autoplay.stop();
        swiper.slideTo(0, 1000); // Ensure it's fully on the first slide
        setTimeout(() => {
          swiper.autoplay.start();
        }, 100);
      }
    };

    swiper.on("slideChange", changeDirection);

    return () => {
      swiper.off("slideChange", changeDirection);
    };
  }, [direction]);

  return (
    <div className="mobile11-swiper-parent">
      {/* Heading and Subheading */}
      <div className="mobile11-heading-container">
        <h2 className="mobile11-title">Experience the Difference</h2>
        <p className="mobile11-subtitle">Buy your dream car in just 3 easy steps</p>
      </div>

      {/* Swiper Section */}
      <div className="super-container">
        <div className="mobile11-swiper-container">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.8}
            loop={false} // Disable loop since we want custom alternating direction
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: direction === "left",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2.3,
                spaceBetween: 10,
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
