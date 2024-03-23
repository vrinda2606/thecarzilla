import React,{useState,useEffect} from 'react';
import { images } from '../utils/constants';
import {brands} from '../utils/brands';

const HomeI = () => {
  //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000);
//     return () => clearInterval(intervalId); // Cleanup function to clear the interval when component unmounts or rerenders
//     }, []);
// currentImageIndex instead of 1
return (
     <div className='Home'>

        <div className="homeI">
            <div className='homeFindCar'>
               <h1>Find your right car</h1>
            </div>
        </div>
     </div>
  )
}

export default HomeI
