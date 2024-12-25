import React, { useState } from 'react';
import BlogImage from '../Components/Images/mobile version/mobile-desire.png';
import BlogUser from '../Components/Images/mobile version/blog-profile.png';
import BlogShare from '../Components/Images/mobile version/mobile-blog-share.png';
import MobileSearchBar from './MobileSearchBar';
import Master from './Master';
import FindCar from './FindCar';
import ExploreService from './ExploreService';
import MobileTestimonial from './MobileTestimonial';
import LiteApp from './LiteApp';
import { useNavigate } from 'react-router-dom';

const LoadBlog = () => {
  const [initialCards] = useState([1, 2, 3, 4]); // Always shown cards
  const [extraCards] = useState([5, 6, 7, 8]); // Additional cards to load
  const [showMore, setShowMore] = useState(false); // Tracks visibility of extra cards

  const navigate = useNavigate();

  const handleToggleMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const BlogCard = () => (
    <div className="load-mobile-card">
      <img src={BlogImage} alt="Blog" className="load-mobile-card-image" />
      <div className="load-mobile-card-content">
        <h3 className="load-mobile-card-title">Maruti Dzire 2024 Launched</h3>
        <div className="load-mobile-card-meta">
          <div className="load-mobile-author-section">
            <img src={BlogUser} alt="Author" className="load-mobile-author-image" />
            <span className="load-mobile-author-name">Shruti Yadav</span>
          </div>
          <div className="load-mobile-date-section">
            <span className="load-mobile-date">June 28, 2018</span>
            <span className="load-mobile-shares">
              <img src={BlogShare} alt="share" className="load-mobile-share-icon" /> 1K shares
            </span>
          </div>
        </div>
        <p className="load-mobile-card-description">
          Our blog is dedicated to providing fresh insights, practical tips, and inspiring stories to fuel your passion and curiosity.
        </p>
        <a onClick={() => navigate('/mobiledetailblog')} className="load-mobile-card-link">
          View Post
        </a>
      </div>
    </div>
  );

  return (
    <div>
      <MobileSearchBar />
      <Master />

      {/* Blog Section */}
      <div className="load-mobile-container">
        <div className="load-mobile-grid">
          {initialCards.map((_, index) => (
            <div key={index} className="load-mobile-card-wrapper">
              <BlogCard />
            </div>
          ))}
          {showMore &&
            extraCards.map((_, index) => (
              <div key={`extra-${index}`} className="load-mobile-card-wrapper">
                <BlogCard />
              </div>
            ))}
        </div>
        <button onClick={handleToggleMore} className="load-mobile-load-more">
          {showMore ? 'Close More' : 'Load More'}
        </button>
      </div>

      <FindCar />
      <ExploreService />
      <MobileTestimonial />
      <LiteApp />
    </div>
  );
};

export default LoadBlog;
