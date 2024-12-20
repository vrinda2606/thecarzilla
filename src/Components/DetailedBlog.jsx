import React from "react";
import BlogImage from "../Components/Images/mobile version/mobile-desire.png";
import BlogUser from "../Components/Images/mobile version/blog-profile.png";
import BlogShare from "../Components/Images/mobile version/mobile-blog-share.png";
import ExploreService from "./ExploreService";
import MobileTestimonial from "./MobileTestimonial";
import LiteApp from "./LiteApp";
import { useNavigate } from "react-router-dom";
import MobileSearchBar from "./MobileSearchBar";

import DetailsBlogImg1 from "../Components/Images/mobile version/detail-blog-img-1.png";
import DetailsBlogImg2 from "../Components/Images/mobile version/detail-blog-img-2.png";
import DetailsBlogImg3 from "../Components/Images/mobile version/detail-blog-img-3.png";

import Chat from "../Components/Images/mobile version/chat.png";
import View from "../Components/Images/mobile version/view.png";
import Send from "../Components/Images/mobile version/send.png";


const DetailedBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="mobile-detail-blog-container">
      <MobileSearchBar />
      <div className="mobile-blog-details-showcase">
        {/* Blog Image */}
        <img src={DetailsBlogImg3} alt="Blog" className="mobile-blog-detail-image" />

        {/* Heading */}
        <h1 className="mobile-blog-detail-title">
          Over 400 People Now Own The Kia Carnival Limousine
        </h1>

        {/* Author Section */}
        <div className="mobile-blog-detail-author-section">
          <div className="mobile-blog-detail-author-info">
            <p className="mobile-blog-detail-publish-details">
              Published On: Dec 20, 2024 06:51 PM
            </p>
            <div className="mobile-blog-detail-author">
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <img
                  src={BlogUser}
                  alt="Author"
                  className="mobile-blog-detail-author-image"
                />
                <div className="mobile-blog-detail-author-details">
                  <p className="mobile-blog-detail-author-name">Shruti Yadav</p>
                </div>

              </div>
              <button className="mobile-blog-detail-follow-button">Follow</button>
            </div>
          </div>

          <div className="mobile-blog-detail-stats">
            <div className="mobile-blog-detail-stat">
              <img src={View} alt="Views" className="mobile-blog-detail-icon" />
              <span className="mobile-blog-detail-stat-author">2.6K+</span>
            </div>
            <div className="mobile-blog-detail-stat">
              <img src={Send} alt="Shares" className="mobile-blog-detail-icon" />
              <span className="mobile-blog-detail-stat-author">100+</span>
            </div>
            <div className="mobile-blog-detail-stat">
              <img src={Chat} alt="Comments" className="mobile-blog-detail-icon" />
              <span className="mobile-blog-detail-stat-author">56+</span>
            </div>
          </div>
        </div>


        {/* Description */}
        <p className="mobile-blog-detail-description">
          The Kia Carnival, launched in October, has found over 400 homes since the deliveries commenced 2 months ago. Since its launch, the premium MPV has had over 3300 bookings, and its waiting period has now reached 6 months. Here is a quick overview of this premium Kia MPV.
          <br />
          <br />
          In terms of features, the Carnival comes with two 12.3-inch displays (touchscreen infotainment and digital driver's display) and an 11-inch heads-up display. Carnival also comes with 3-zone auto AC, a 12-way electrically adjustable driver seat and an 8-way electrically adjustable front passenger seat.
                  </p>

        {/* New Design Section */}
        <div className="mobile-blog-details-design">
          <img
            src={DetailsBlogImg1}
            alt="Car"
            className="mobile-blog-details-image"
          />
          <div className="mobile-blog-details-tabs">
            <button className="mobile-blog-details-tab">Gallery</button>
            <button className="mobile-blog-details-tab">Reviews</button>
          </div>
          <div className="mobile-blog-details-info">
            <p className="mobile-blog-detail-description">
              The Kia Carnival, launched in October, has found over 400 homes
              since the deliveries commenced 2 months ago. Since its launch, the
              premium MPV has had over 3300 bookings, and its waiting period has{' >'}
              reached 6 months. Here is a quick overview of this premium Kia
              MPV
              <br />
              <br/>
            
                
                In terms of features, the Carnival comes with two 12.3-inch
                displays (touchscreen infotainment and digital driver's display)
                and an 11-inch heads-up display. Carnival also comes with 3-zone
                auto AC, a 12-way electrically adjustable driver seat and an 8-way
                electrically adjustable front passenger seat.
              </p>

          </div>
        </div>

        {/* Section from Screenshot */}
        <div className="mobile-blog-details-price-section">
          <img
            src={DetailsBlogImg2}
            alt="Car Overview"
            className="mobile-blog-details-price-image"
          />
          <button className="mobile-blog-details-price-button">
            View Best Price
          </button>
          <div className="mobile-blog-details-price-info">
            <p className="mobile-blog-detail-description">
              The Kia Carnival, launched in October, has found over 400 homes
              since the deliveries commenced 2 months ago. Since its launch, the
              premium MPV has had over 3300 bookings, and its waiting period has
              now reached 6 months. Here is a quick overview of this premium Kia
              MPV.
              <br/>
              <br/>
              In terms of features, the Carnival comes with two 12.3-inch
              displays (touchscreen infotainment and digital driver's display)
              and an 11-inch heads-up display. Carnival also comes with 3-zone
              auto AC, a 12-way electrically adjustable driver seat and an 8-way
              electrically adjustable front passenger seat.
            </p>
          </div>
        </div>
      </div>

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
                <a
                  onClick={() => navigate("/mobiledetailblog")}
                  className="mobile-detail-blog-link"
                >
                  View Post
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ExploreService />
      <MobileTestimonial />
      <LiteApp />
    </div>
  );
};

export default DetailedBlog;
