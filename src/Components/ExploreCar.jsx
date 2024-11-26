import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { carRecommendations } from '../utils/ExploreCarData'; // Update import path

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
                    {carRecommendations.map((car, index) => (
                        <SwiperSlide key={index}>
                            <div className="mobile-explore-main-slider-container">
                                <div className="mobile-explore-car-image-container">
                                    <img src={car.image} alt={`${car.model} ${car.year}`} />
                                </div>
                                <div className="mobile-explore-car-details-container">
                                    <div className="car-details-left">
                                        <h3>{car.year} {car.model}</h3>
                                        <p>{car.price}</p>
                                    </div>
                                    <div className="car-details-right">
                                        <p>{car.variant}</p>
                                        <p className="emi">EMI Starts at {car.emiStart}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="mobile-explore-button">Explore Now</button>
            </div>
        </div>
    );
};

export default ExploreCar;