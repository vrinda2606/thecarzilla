import React, { useState } from 'react';
import BlogImage from '../Components/Images/mobile version/mobile-desire.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import BlogUser from '../Components/Images/mobile version/blog-profile.png';
import BlogShare from '../Components/Images/mobile version/mobile-blog-share.png';

const MobileBlogs = () => {
  const [autoplay, setAutoplay] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleLoadMore = () => {
    setAutoplay(false);
    setShowMore(true);
  };

  const handleExploreMore = () => {
    setAutoplay(true)
    navigate('/mobileblogs');
  };

  const BlogCard = () => (
    <div className="mobile-blog-card">
      <img src={BlogImage} alt="Blog" className="mobile-blog-card-image" />
      <div className="mobile-blog-card-content">
        <h3 className="mobile-blog-card-title">Maruti Dzire 2024 Launched</h3>
        <div className="mobile-blog-card-meta">
          <div className="mobile-blog-author-section">
            <img src={BlogUser} alt="Author" className="mobile-blog-author-image" />
            <span className="mobile-blog-author-name">Shruti Yadav</span>
          </div>
          <div className="mobile-blog-date-section">
            <span className="mobile-blog-date">June 28, 2018</span>
            <span className="mobile-blog-shares">
              <img src={BlogShare} alt="share" className="mobile-blog-share-icon" /> 1K shares
            </span>
          </div>
        </div>
        <p className="mobile-blog-card-description">
          Our blog is dedicated to providing fresh insights, practical tips, and inspiring stories to fuel your passion and curiosity.
        </p>
        <a onClick={()=>navigate("/detailblog")} className="mobile-blog-card-link">View Post</a>
      </div>
    </div>
  );

  return (
    <div className="mobile-blog-container">
      <h1 className="mobile-blog-title">Blogs</h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : true}
        
          
      >
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
      </Swiper>

      <div className="mobile-blog-extra-cards">
        {showMore && (
          <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          
          
            
        >
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
        </Swiper>
        )}
      </div>

      <button
        onClick={showMore ? handleExploreMore : handleLoadMore}
        className="mobile-blog-button"
      >
        {showMore ? 'Explore More' : 'Load More'}
      </button>
    </div>
  );
};

export default MobileBlogs;
