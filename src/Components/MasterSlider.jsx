import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Background1 from "./Images/mobile version/background1.png";

import 'swiper/css';
import 'swiper/css/pagination';



function MasterSlider() {
  return (
    <>
      <div style={{ padding: '12px 22px' }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.8}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            modifierClass: 'swiper-pagination',
          }}
          breakpoints={{
            320: {
              slidesPerView: 2.3,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1.8,
              spaceBetween: 16,
            }
          }}
        >
          <SwiperSlide>
            <img
              src={Background1}
              alt="slide 1"
              className="slide-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Background1}
              alt="slide 2"
              className="slide-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Background1}
              alt="slide 3"
              className="slide-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Background1}
              alt="slide 4"
              className="slide-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Background1}
              alt="slide 5"
              className="slide-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Background1}
              alt="slide 6"
              className="slide-image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default MasterSlider;