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

const Home = () => {
      const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => setSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
      return(<>
      <HomeI />
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