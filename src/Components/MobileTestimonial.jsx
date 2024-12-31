import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import DeliveryImage from "../Components/Images/mobile version/car-delivery.avif";
import "swiper/css";
import "swiper/css/pagination";

const MobileTestimonial = () => {
  const testimonials = [
    
    {
      title: "Outstanding Service and Support!",
      content:
        "TheCarzilla team was professional and helpful throughout. I got the best deal and a car I love. They ensured all my requirements were met.",
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      image: DeliveryImage,
    },
  ];

  return (
    <div className="mobile-test-main-container">
      <h2 className="mobile-test-title">Our Customers Loves Us</h2>
      <div className="mobile-test-card-container">
        <div className="mobile-testimonial-card">
          {/* Swiper wraps only the content inside the card */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            loop={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="mobile-testimonial-content">
                  <div className="mobile-testimonial-content-container">
                  <h3 className="mobile-testimonial-title">{testimonial.title}</h3>
                  <p className="mobile-testimonial-text">{testimonial.content}</p>
                  <p className="mobile-testimonial-author">
                    {testimonial.name} <br />
                    <span>{testimonial.location}</span>
                  </p>
                  </div>
                  <div className="mobile-testimonial-image-container">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="mobile-testimonial-image"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MobileTestimonial;
