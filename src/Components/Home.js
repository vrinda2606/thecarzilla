import React,{useState,useEffect} from 'react';
import { images } from '../utils/constants';
import {brands} from '../utils/brands';
import HomeI from './HomeI';
import HomeII from './HomeII';
import ContactForm from './ContactForm';
import Team from './Team';
import Testimonial from './Testimonial';
import LiteApp from './LiteApp';

const Home = () => {
      return(<>
      <HomeI />
      <HomeII />
      <ContactForm />
      <Testimonial />
      <Team />
      <LiteApp />
      </>
      )
};

export default Home;