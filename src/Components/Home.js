import React from 'react';
import HomeI from './HomeI';
import HomeIII from './HomeIII';
import ContactForm from './ContactForm';
import Team from './Team';
import Testimonial from './Testimonial';
import LiteApp from './LiteApp';
import HomeII from './HomeII';

const Home = () => {
      return(<>
      <HomeI />
      <HomeII />
      <HomeIII />
      <ContactForm />
      <Testimonial />
      <Team />
      <LiteApp />
      </>
      )
};

export default Home;