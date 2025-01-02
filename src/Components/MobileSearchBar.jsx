import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "./Images/mobile version/search-normal.png";
import FilterImage from "./Images/mobile version/filter.png";

const MobileSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const options = [
    "Home",
    "Services",
    "AboutUs",
    "TermsAndConditions",
    "PrivacyPolicy",
    "HowItWorks",
    "Support",
    "Login",
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered =
      query !== ""
        ? options.filter((option) =>
            option.toLowerCase().includes(query.toLowerCase())
          )
        : [];
    setFilteredOptions(filtered);
  };

  const selectedOption = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setSearchQuery("");
    setFilteredOptions([]);
  };

  return (
    // CHANGE 1: Removed unnecessary z-index from wrapper
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "relative",
      }}
    >
      {/* CHANGE 2: Added a new container div to handle the search bar and dropdown
          without overflow:hidden that was hiding the dropdown */}
      <div
        style={{
          width: "339px",
          position: "relative",
          margin: "5px",
          marginBottom: "10px",
        }}
      >
        {/* CHANGE 3: Moved original search bar styles to this inner div */}
        <div
          style={{
            height: "40px",
            borderRadius: "70px",
            border: "1px solid #C3D4E966",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              padding: "0 10px",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <img
                src={SearchIcon}
                alt="Search"
                style={{ height: "18px", width: "18px" }}
              />
            </button>

            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search something here..."
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                marginLeft: "8px",
                fontSize: "12px",
              }}
            />

            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <img
                src={FilterImage}
                alt="Filter"
                style={{ height: "18px", width: "18px" }}
              />
            </button>
          </div>
        </div>

        {/* CHANGE 4: Updated dropdown positioning and styles */}
        {filteredOptions.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "45px", 
              left: 0,
              right: 0,
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "4px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              maxHeight: "200px",
              overflowY: "auto",
              zIndex:1000,
              
            }}
          >
            <ul
              style={{
                margin: 0,
                padding: "5px",
                listStyle: "none",
              }}
            >
              {filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={selectedOption}
                  style={{
                    padding: "5px",
                    cursor: "pointer",
                    fontSize: "12px",
                    
                    ':hover': {
                      backgroundColor: '#f5f5f5',
                    }
                  }}
                >
                  <Link
                    to={`/${option}`}
                    style={{
                      textDecoration: "none",
                      color: "#333",
                      
                      display: "block",
                      width: "100%",
                    }}
                  >
                    {option}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileSearchBar;