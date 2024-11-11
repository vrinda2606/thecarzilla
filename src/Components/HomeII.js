import React, { useEffect,useState } from 'react';
import {images} from '../utils/constants';
import Aos from 'aos';
import { motion } from 'framer-motion'


const HomeII = () => {

  useEffect( () => {
    Aos.init({duration : 2000});
  },[] )

  //resize function

  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => setSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);


return (
  <div className='Mobile-brand-wrapper'>
    {size>=700 ?(
     <div className='HomeII'>
        <div className='BlackBg homeII'>
            <div className='WhiteHr'/>
            <div className='homeIIHeading'>
               <h1 data-aos='fade-up'>Brands We Deal In</h1>
            </div>
            <div className='brands'>
               <div className='TATA brandsName' data-aos='fade-up'>
                 <img src={images[1].url} alt='TATA' className='brandsImage' style={{padding: "1vw 0.6vw",objectFit: "contain",}} />
               </div>
               <div className='SUZUKI brandsName brandsWithFlex' data-aos='fade-up'>
                 <img src={images[2].url} alt='SUZUKI' className='brandsImage' style={{ objectFit: "cover"}} />
               </div>
               <div className='HYUNDAI brandsName brandsWithFlex' data-aos='fade-up'>
                 <img src={images[3].url} alt='HYUNDAI' className='brandsImage' style={{ objectFit: "contain"}} />
               </div>
               <div className='TOYOTA brandsName' data-aos='fade-up'>
                 <img src={images[4].url} alt='TOYOTA' className='brandsImage' style={{padding: "1vw 0.6vw",objectFit: "contain"}} />
               </div>
               <div className='MG brandsName' data-aos='fade-up'>
                 <img src={images[5].url} alt='MG' className='brandsImage' style={{padding:"0.6vw 0.6vw 0.6vw 0.6vw",objectFit: "cover"}} />
               </div>
               <div className='HONDA brandsName brandsWithFlex' data-aos='fade-up'>
                 <img src={images[6].url} alt='HONDA' className='brandsImage' style={{objectFit: "cover"}} />
               </div>
            </div>

            <div className='brands'>
               <div className='SKODA brandsName brandsWithFlex' data-aos='fade-up'>
                 <img src={images[7].url} className='brandsImage' alt='SKODA' style={{objectFit: "cover"}} />
               </div>
               <div className='NISSAN brandsName brandsWithFlex' data-aos='fade-up'>
                 <img src={images[8].url} className='brandsImage' alt='NISSAN' style={{padding:"0.7vw 0.2vw", objectFit: "cover"}} />
               </div>
               <div className='VOLKSWAGON brandsName brandsWithFlex' data-aos='fade-up'>
                 <img src={images[9].url} className='brandsImage' alt='VOLKSWAGON' style={{padding:"0.7vw 0.2vw", objectFit: "contain"}} />
               </div>
               <div className='JEEP brandsName' data-aos='fade-up'>
                 <img src={images[10].url} className='brandsImage' alt='JEEP' style={{padding:"auto 0.2vw",objectFit: "contain"}} />
               </div>
               <div className='CITROEN brandsName' data-aos='fade-up'>
                 <img src={images[11].url} className='brandsImage' alt='CITROEN' style={{padding:"0vw 0.2vw",objectFit: "cover"}} />
               </div>
               <div className='KIA brandsName' data-aos='fade-up'>
                 <img src={images[12].url} className='brandsImage' alt='KIA' style={{padding:"auto 0.7vw",objectFit: "cover"}} />
               </div>
            </div>

            <div className='btnForMoreDiv'>
            <button className='btnForMore'>More Brands</button>
            </div>



            <div className='WhiteHr'/>
            
        </div>

     </div>
     ):(

      
      // mobile display component
      <div>
          <h3 className='mobile-version-headingII'>Brands We Deal In</h3>  
          
          
          <motion.div
            className='mobile-brand-row'
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          >
            {images.slice(1, 6).map((image, index) => (
              <div key={index} className='brand-logo'>
                <img src={image.url} alt={`Brand ${index}`} key={index} />
              </div>
            ))}
          </motion.div>
          

          {/* Second row with right-to-left animation */}
          <motion.div
            className='mobile-brand-row'
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          >
            {images.slice(6, 11).map((image, index) => (
              <div key={index} className='brand-logo'>
                <img src={image.url} alt={`Brand ${index + 5}`} />
              </div>
            ))}
          </motion.div>
        </div>
    )}
  </div>
  )
}

export default HomeII;