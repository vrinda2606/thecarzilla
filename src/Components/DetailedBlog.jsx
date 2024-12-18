import React from "react";
import BlogImage from "../Components/Images/mobile version/mobile-desire.png";
import BlogUser from "../Components/Images/mobile version/blog-profile.png";
import BlogShare from "../Components/Images/mobile version/mobile-blog-share.png";
import ExploreService from "./ExploreService";
import MobileTestimonial from "./MobileTestimonial";
import LiteApp from "./LiteApp";

const DetailedBlog = () => {
  return (
    <div className="mobile-detail-blog-container">
      {/* Comment Section */}
      <div className="mobile-detail-blog-section">
        <div className="mobile-detail-blog-header">
          <h2>Write your Comment on Kia Carnival</h2>
          <input
            type="text"
            placeholder="Write a Comment....."
            className="mobile-detail-blog-input"
          />
          <button className="mobile-detail-blog-button">Post Comment</button>
        </div>
      </div>

      {/* Explore Blogs Section */}
      <div className="mobile-detail-blog-section">
        <h3 className="mobile-detail-blog-heading">Explore Top Blogs</h3>
        <div className="mobile-detail-blog-grid">
          {/* Repeating Blog Card */}
          {[1, 2].map((_, index) => (
            <div key={index} className="mobile-detail-blog-card">
              <img
                src={BlogImage}
                alt="Blog"
                className="mobile-detail-blog-image"
              />
              <div className="mobile-detail-blog-content">
                <h3 className="mobile-detail-blog-title">
                  Maruti Dzire 2024 Launched
                </h3>
                <div className="mobile-detail-blog-meta">
                  <div className="mobile-detail-blog-author">
                    <img
                      src={BlogUser}
                      alt="Author"
                      className="mobile-detail-blog-author-img"
                    />
                    <span className="mobile-detail-blog-author-name">
                      Shruti Yadav
                    </span>
                  </div>
                  <div className="mobile-detail-blog-date">
                    <span>June 28, 2018</span>
                    <span className="mobile-detail-blog-share">
                      <img
                        src={BlogShare}
                        alt="share"
                        className="mobile-detail-blog-share-icon"
                      />{" "}
                      1K shares
                    </span>
                  </div>
                </div>
                <p className="mobile-detail-blog-description">
                  Our blog is dedicated to providing fresh insights, practical
                  tips, and inspiring stories to fuel your passion and
                  curiosity.
                </p>
                <a href="#" className="mobile-detail-blog-link">
                  View Post
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ExploreService/>
      <MobileTestimonial/>
      <LiteApp/>
    </div>
  );
};

export default DetailedBlog;
