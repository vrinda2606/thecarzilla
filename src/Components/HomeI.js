import React,{useState,useEffect} from 'react';
// import { images } from '../utils/constants';
// import {brands} from '../utils/brands';
import {background} from '../utils/background';
import Aos from "aos";

const HomeI = () => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // State for transition animation

  useEffect( () => {
   Aos.init({duration : 2000})
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true); // Start transition animation
      setTimeout(() => { // Timer for transition duration
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % background.length);
        setIsTransitioning(false); // End transition animation
      }, 500); // Adjust transition duration in milliseconds (300ms here)
    }, 5000); // Update interval in milliseconds (2 seconds here)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='Home'>
       <img src={background[currentImageIndex].url} alt="" style={{
            width: '100%',
            height: '100%',
            transition: 'opacity 1s ease-in-out',
            opacity: isTransitioning ? 0.7 : 1, 
        }} />

       <div className="homeI">
            <div className='homeFindCar' data-aos='fade-right'>
               
               <div className="FindCarHeading">
                  <h1>Find your right car</h1>
               </div>
               
               <div className="FindCarType">
                  <div className="CarTypeNew">New Car</div>
                  <div className="CarTypeUsed">Used Car</div>
               </div>

               <div className='contactFormInitial'>
                  <form 
                     // onSubmit={window.alert("Your details have been sent successfully.")}
                     id="contact-form-inital"
                     className="contact-form-inital">

                  <div className="input-field-initial">
                     <input className="fname_initial" id="fname_initial" type="text" name="fname_initial" placeholder="Enter your name" required /><br/>
                  </div>
                  <div className="input-field-initial">
                     <input className="number_initial" id="number_initial" type="tel" name="number_initial" placeholder="Phone Number" required /><br/>
                  </div>
                  <div className="input-field-initial">
                     <select id="brandChosen_initial" class="brandChosen_initial" name="platform" required>
                        <option value="" selected>Brand</option>
                        <option value="TATA">TATA</option>
                        <option value="SUZUKI">SUZUKI</option>
                        <option value="HYUNDAI">HYUNDAI</option>
                        <option value="TOYOTA">TOYOTA</option>
                        <option value="MG">MG</option>
                        <option value="HERO">HERO</option>
                        <option value="SKODA">SKODA</option>
                        <option value="NISSAN">NISSAN</option>
                        <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                        <option value="JEEP">JEEP</option>
                        <option value="CITROEN">CITROEN</option>
                        <option value="KIA">KIA</option>
                     </select>
                     <br/>
                  </div>
                  <div className="input-field-initial">
                     <input className="modelChosen_initial" id="modelChosen_initial" type="text" name="modelChosen_initial" placeholder="Model" required /><br/>
                  </div>
                  <div className="input-field-initial">
                     <input className="cityChosen_initial" id="cityChosen_initial" type="text" name="cityChosen_initial" placeholder="City" required /><br/>
                  </div>

                  <div className="buttonContactInitial">
                     <button type="submit" className="btnContactInitial">
                     Enquire Now
                     </button>
                  </div>

                  </form>
               </div>

            </div>

        </div>
     </div>
  )
}

export default HomeI
