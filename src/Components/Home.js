import React from 'react';
import HomeI from './HomeI';
import HomeIII from './HomeIII';
import PopUp from './PopUp';
import ContactForm from "./ContactForm"
import Testimonial from './Testimonial';
import LiteApp from './LiteApp';
import HomeII from './HomeII';
import { useState,useEffect } from 'react';
import FindCar from './FindCar';
import ExploreServices from "./ExploreService"
import Master from './Master';
import MasterSlider from './MasterSlider';

import MobileSearchBar from './MobileSearchBar';

const Home = () => {
      const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => setSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
      return(<>

      {size <700?( <MobileSearchBar/>):(<></>)}
      {size <700?( <Master/>):(<HomeI/>)}
      {size<700 ?(<MasterSlider/>):(<></>)}
      <ContactForm />
      <HomeIII />
      <HomeII />
      {size <700?( <FindCar/>):(<></>)}
      {size <700?( <ExploreServices/>):(<></>)}
      <PopUp/>
     
      
      <Testimonial />
      
      
      <LiteApp />
      </>
      )
};

export default Home;