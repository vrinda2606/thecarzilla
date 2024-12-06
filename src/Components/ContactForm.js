import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import emailjs from "@emailjs/browser";
import axios from "axios";

const ContactForm = () => {
  // import Aos from 'aos';
  const url = "https://sheetdb.io/api/v1/td2o97q6i4v81";

  // Function to send form data to the API
  const sendData = async (formData) => {
    try {
      const response = await axios.post(url, { data: formData });
      console.log("Data sent successfully:", response.data); // Log the response from the API
    } catch (error) {
      console.error("Error sending data:", error); // Log any errors
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // data-aos='fade-up'

  const [popupVis, setPopupVis] = useState(false);
  const form = useRef();

  const openPopup = (e) => {
    const formData = {
      name: document.getElementById("fname").value.trim(),
      email: document.getElementById("email").value.trim(),
      number: document.getElementById("number").value.trim(),
      brand: document.getElementById("brandChosen").value.trim(),
      model: document.getElementById("modelChosen").value.trim(),
      city: document.getElementById("cityChosen").value.trim(),
    };
    const nameInput = document.getElementById("fname").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const numberInput = document.getElementById("number").value.trim();
    const brandInput = document.getElementById("brandChosen").value.trim();
    const modelInput = document.getElementById("modelChosen").value.trim();
    const cityInput = document.getElementById("cityChosen").value.trim();

    if (
      nameInput &&
      emailInput &&
      numberInput &&
      brandInput &&
      modelInput &&
      cityInput
    ) {
      e.preventDefault();
      emailjs
        .sendForm("service_hrraeq5", "template_ulf7l9f", form.current, {
          publicKey: "WAwu7R3mje_b0w9WY",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            e.target.reset();
            setTimeout(() => {}, 2000);
          },
          (error) => {
            alert("FAILED...", error.text);
          }
        );
      setPopupVis(true);
      sendData(formData);
    } else {
    }
  };

  const closePopup = () => {
    setPopupVis(false);
  };

  return (
    <div
      id="contact-form-container"
      className="BlackBg"
      style={{ height: "38vw" }}
    >
      <div className={`contactFormDiv ${popupVis ? "active" : ""}`}>
        <div className="HeadingBoxBlack" data-aos="fade-up">
          <div className="HeadingBlackDiv">
            <span className="BlackDivfirst">
              <hr />
              <p>BOOK YOUR DREAM CAR</p>
              <hr />
            </span>
            <span className="BlackDivMiddle">
              <h1>Get Personalized Quote</h1>
            </span>
            <span className="BlackDivLast">
              Our experts will assist you personally
            </span>
          </div>
        </div>

        <div className="contactForm" data-aos="fade-up">
          <form
            ref={form}
            onSubmit={openPopup}
            id="contact-form"
            className="contact-form"
          >
            <div className="input-box">
              <div className="input-field">
                <label>
                  Your Name<span className="asterisk">*</span>
                </label>
                <br />
                <input
                  className="name"
                  id="fname"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-field">
                <label>
                  Your Email<span className="asterisk">*</span>
                </label>
                <br />
                <input
                  className="email"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-field">
                <label>
                  Phone Number<span className="asterisk">*</span>
                </label>
                <br />
                <input
                  className="number"
                  id="number"
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div className="input-box">
              <div className="input-field">
                <label>
                  Brand<span className="asterisk">*</span>
                </label>
                <br />
                <input
                  className="brandChosen"
                  id="brandChosen"
                  type="text"
                  placeholder="For Eg: Maruti Suzuki"
                  required
                  name="brand"
                />
              </div>
              <div className="input-field">
                <label>
                  Model<span className="asterisk">*</span>
                </label>
                <br />
                <input
                  className="modelChosen"
                  id="modelChosen"
                  type="text"
                  name="model"
                  placeholder="For Eg: Swift ZXI+"
                  required
                />
              </div>
              <div className="input-field">
                <label>
                  City<span className="asterisk">*</span>
                </label>
                <br />
                <input
                  className="cityChosen"
                  id="cityChosen"
                  type="text"
                  name="city"
                  placeholder="For Eg: Jaipur"
                  required
                />
              </div>
            </div>

            <div className="buttonContact">
              <button type="submit" className="btnContact">
                Enquire Now
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={`BlackBg popup ${popupVis ? "active" : ""}`}>
        <span className="popupCloseDiv">
          <button id="close_popup" onClick={closePopup}>
            <FontAwesomeIcon
              className="popupCloseDivIcon"
              icon={faCircleXmark}
            ></FontAwesomeIcon>
          </button>
        </span>
        <div className="HeadingBoxBlack">
          <div className="HeadingBlackDiv">
            <span className="BlackDivfirst" style={{ color: "black" }}>
              <p>INQUIRY SUBMITTED</p>
            </span>
            <span className="BlackDivMiddle" style={{ color: "black" }}>
              <h1>VROOM-VROOM!!</h1>
            </span>
            <span className="BlackDivMiddle" style={{ color: "black" }}>
              <h1>Your query has been heard</h1>
            </span>
            <span className="BlackDivLast" style={{ color: "black" }}>
              Our team will contact you soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;