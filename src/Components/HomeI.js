import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from 'react-bootstrap/Form';
import React,{useState,useEffect} from 'react';
// import { images } from '../utils/constants';
// import {brands} from '../utils/brands';
import {background} from '../utils/background';

const HomeI = () => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // State for transition animation

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true); // Start transition animation
      setTimeout(() => { // Timer for transition duration
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % background.length);
        setIsTransitioning(false); // End transition animation
      }, 300); // Adjust transition duration in milliseconds (300ms here)
    }, 2000); // Update interval in milliseconds (2 seconds here)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className='Home'
      style={{
        backgroundImage: `url(${background[currentImageIndex].url})`,
        backgroundSize : 'cover',
        transition: 'opacity 0.5s ease-in-out',
        opacity: isTransitioning ? 0.9 : 1, 
      }}
    >

        <div className="homeI">
            <div className='homeFindCar'>
               
               <div className="FindCarHeading">
                  <h1>Find your right car</h1>
               </div>
               
               <div className="FindCarType">
                  <div className="CarTypeNew">New Car</div>
                  <div className="CarTypeUsed">Used Car</div>
               </div>
               
               <div className="FindCarBudgetBrand">
               <Form>
                  <div key={`inline-radio`} className="radio-group">
                     <Form.Check
                         inline
                         label="By Budget"
                         name="group1"
                         type='radio'
                         id={`inline-radio-1`}
                         defaultChecked
                     />
                     <Form.Check
                         inline
                         label="By Brand"
                         name="group1"
                         type='radio'
                         id={`inline-radio-2`}
                     />
                  </div>
               </Form>
               </div>

               <div className="FindCarSelection">
                    <select className="FindCarBudget">
                        <option value="Select Budget" defaultValue>Select Budget</option>
                     </select>
                     <select className="FindCarVehicleType">
                        <option value="All Vehicle Type" defaultValue>All Vehicle Type</option>
                     </select>
               </div>

               <div className="FindCarSelectBtn">
                  <button>Search</button>
               </div>

               <div className="FindCarAdvancedSearch"><p>Advance Search <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p></div>

            </div>

        </div>
     </div>
  )
}

export default HomeI
