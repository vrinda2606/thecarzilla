import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Logo from "../Components/Images/logo2.png";
import Twitter from "../Components/Images/mobile version/twitter.png";
import Youtube from "../Components/Images/mobile version/youtube.png";
import Insta from "../Components/Images/mobile version/instagram.png";
import PlayStore from "../Components/Images/mobile version/Mobile App Store Badges (4).png";
import AppleStore from "../Components/Images/mobile version/Mobile App Store Badges (5).png";
import Drop from "../Components/Images/mobile version/down 1.png";

const MobileFooter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSection, setOpenSection] = useState(null);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  
  const handleNavigation = (path) => {
    navigate(path);
    setOpenSection(null); 
  };

  
  const toggleDropdown = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="mobile-footer-container">
      {/* Logo Section */}
      <div className="mobile-footer-logo-container">
        <img src={Logo} alt="The Carzilla Logo" className="mobile-footer-logo" />
      </div>

      {/* Social Media Icons */}
      <div className="mobile-footer-social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} alt="Twitter" className="mobile-footer-icon" />
        </a>
        <a href="https://www.instagram.com/thecarzilla.in/" target="_blank" rel="noopener noreferrer">
          <img src={Insta} alt="Instagram" className="mobile-footer-icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={Youtube} alt="YouTube" className="mobile-footer-icon" />
        </a>
      </div>

      {/* Links Section */}
      <div className="mobile-footer-links-container">
        <a
          style={{
            marginBottom: "20px",
            marginTop: "0px",
            fontWeight: "300",
            fontSize: "10px",
            lineHeight: "10px",
          }}
          href="mailto:support@thecarzilla.in"
          className="mobile-footer-link"
        >
          support@thecarzilla.in
        </a>

        {/* About TheCarzilla.in */}
        <p className="mobile-footer-link" onClick={() => toggleDropdown("about")}>
          About TheCarzilla.in
          <img
            src={Drop}
            alt="Dropdown"
            className={`mobile-footer-dropdown-icon ${openSection === "about" ? "rotated" : ""}`}
          />
        </p>
        {openSection === "about" && (
          <div className="mobile-footer-dropdown-content">
            <p onClick={() => handleNavigation('/AboutUs')}>About Us</p>
            <p onClick={() => handleNavigation('/HowItWorks')}>How It Works</p>
            <p onClick={() => handleNavigation('/TermsAndConditions/:TermsAndConditionsII')}>
              Terms and Conditions
            </p>
            <p onClick={() => handleNavigation('/PrivacyPolicy/:PrivacyPolicyII')}>Privacy Policy</p>
          </div>
        )}

        {/* Services */}
        <p className="mobile-footer-link" onClick={() => toggleDropdown("services")}>
          Services
          <img
            src={Drop}
            alt="Dropdown"
            className={`mobile-footer-dropdown-icon ${openSection === "services" ? "rotated" : ""}`}
          />
        </p>
        {openSection === "services" && (
          <div className="mobile-footer-dropdown-content">
            <p>Coming SOON!!!!</p>
          </div>
        )}

        {/* Blogs */}
        <p className="mobile-footer-link" onClick={() => toggleDropdown("blogs")}>
          Blogs
          <img
            src={Drop}
            alt="Dropdown"
            className={`mobile-footer-dropdown-icon ${openSection === "blogs" ? "rotated" : ""}`}
          />
        </p>
        {openSection === "blogs" && (
          <div className="mobile-footer-dropdown-content">
            <p>Coming SOON!!!!</p>
          </div>
        )}

        {/* Help */}
        <p className="mobile-footer-link" onClick={() => toggleDropdown("help")}>
          Help
          <img
            src={Drop}
            alt="Dropdown"
            className={`mobile-footer-dropdown-icon ${openSection === "help" ? "rotated" : ""}`}
          />
        </p>
        {openSection === "help" && (
          <div className="mobile-footer-dropdown-content">
            <p onClick={() => handleNavigation('/Support')}>Customer Support</p>
          </div>
        )}

        {/* Connect With Us */}
        <p className="mobile-footer-link" onClick={() => toggleDropdown("connect")}>
          Connect With Us
          <img
            src={Drop}
            alt="Dropdown"
            className={`mobile-footer-dropdown-icon ${openSection === "connect" ? "rotated" : ""}`}
          />
        </p>
        {openSection === "connect" && (
          <div className="mobile-footer-dropdown-content">
            <p onClick={() => window.open('https://www.linkedin.com/company/thecarzilla-in/', '_blank')}>LinkedIn</p>
            <p onClick={() => window.open('https://www.instagram.com/thecarzilla.in/', '_blank')}>Instagram</p>
            <p onClick={() => window.open('https://www.twitter.com', '_blank')}>Twitter</p>
            <p onClick={() => window.open('https://www.facebook.com', '_blank')}>Facebook</p>
          </div>
        )}
      </div>

      {/* App Store Badges */}
      <div className="mobile-footer-store-container">
        <p className="mobile-footer-store-heading">Soon Available on</p>
        <div className="mobile-footer-store-icons">
          <img src={PlayStore} alt="Google Play Store" className="mobile-footer-store-badge" />
          <img src={AppleStore} alt="Apple App Store" className="mobile-footer-store-badge" />
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr style={{ borderTop: "0.5px solid #E5E6E8" }} />

      {/* Copyright Section */}
      <div className="mobile-footer-copyright">
        <p>Copyright ©2024 IgniteX Solutions Pvt. Ltd.</p>
      </div>
    </div>
  );
};

export default MobileFooter;
