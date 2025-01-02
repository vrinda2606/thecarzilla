import React from 'react';
import HomeI from './HomeI';
import HomeIII from './HomeIII';
// import PopUp from './PopUp';
import ContactForm from "./ContactForm"


// import Team from './Team';

import Testimonial from './Testimonial';
import LiteApp from './LiteApp';
import HomeII from './HomeII';
import { useState,useEffect } from 'react';
import FindCar from './FindCar';
import ExploreServices from "./ExploreService"
import Master from './Master';
import MasterSlider from './MasterSlider';
import Difference from './Difference';

import MobileSearchBar from './MobileSearchBar';
import ExploreCar from './ExploreCar';
import MobileTestimonial from './MobileTestimonial';
import MobileBlogs from './MobileBlogs';

const Home = () => {
      const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => setSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
      return(<>

      {size <=500?( <MobileSearchBar/>):(<></>)}
      {size <=500?( <Master/>):(<HomeI/>)}
      {/* {size<=500 ?(<MasterSlider/>):(<></>)} */}
      <ContactForm />
      {size <=500 ?(<Difference/>):(<HomeIII />)}
      
      <HomeII />
      {size <=500?( <FindCar/>):(<></>)}
      {size <=500?(<ExploreCar/>):(<></>)}
      {size <=500?( <ExploreServices/>):(<></>)}
      
      {size <=500?(<MobileBlogs/>):(<></>)}
      {size <=500 ?(<MobileTestimonial/>):(<Testimonial />)}
      
      
      
      <LiteApp />
      </>
      )
};

export default Home;