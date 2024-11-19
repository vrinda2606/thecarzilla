import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import CarImage from '../Components/Images/mobile version/image 9.png'; 

const ExploreCar = () => {
    return (
        <div className="mobile-explore-main-container">
            <div className="mobile-explore-container">
                <div className="mobile-explore-heading-container">
                    <h2 className='super-h2'>
                        Experts<br /> Recommendation
                    </h2>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="mobile-explore-main-slider-container">
                            {/* Car Image */}
                            <div className="mobile-explore-car-image-container">
                                <img src={CarImage} alt="Tata Tiago 2024" />
                            </div>
                            {/* Grey Details Container */}
                            <div className="mobile-explore-car-details-container">
                                <div className="car-details-left">
                                    <h3>2024 Tata Tiago</h3>
                                    <p>₹ 8.50 Lakhs</p>
                                </div>
                                <div className="car-details-right">
                                    <p>Limited (O) 1.4 Petrol AT</p>
                                    <p className="emi">EMI Starts at ₹25000</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Duplicate slide for testing */}
                    <SwiperSlide>
                        <div className="mobile-explore-main-slider-container">
                            <div className="mobile-explore-car-image-container">
                                <img src={CarImage} alt="Tata Tiago 2024" />
                            </div>
                            <div className="mobile-explore-car-details-container">
                                <div className="car-details-left">
                                    <h3>2024 Tata Tiago</h3>
                                    <p>₹ 8.50 Lakhs</p>
                                </div>
                                <div className="car-details-right">
                                    <p>Limited (O) 1.4 Petrol AT</p>
                                    <p className="emi">EMI Starts at ₹25000</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className="mobile-explore-button">Explore Now</button>
            </div>
        </div>
    );
};

export default ExploreCar;
