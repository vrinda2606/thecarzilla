import React,{useState,useEffect} from 'react';
import { images } from '../utils/constants';
import {brands} from '../utils/brands';
import HomeI from './HomeI';
import HomeII from './HomeII';

const Home = () => {
      return(<>
      <HomeI />
      <HomeII />
      </>
      )
};

export default Home;