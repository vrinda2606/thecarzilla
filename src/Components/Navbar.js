import React, { useState } from 'react'
import { Stack } from "@mui/material"; 
import {Link, NavLink} from "react-router-dom";
import {images} from '../utils/constants';
import SearchBar from  './SearchBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell,faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant" // Smooth scrolling animation
  });
};

const iconContainerStyle = {
    width: "40px",
    height: "40px",
    border: "1px solid #C3D4E966",
    borderRadius: "90px",
    marginTop: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  
  const iconStyle = {
    color: "#596780",
    fontSize: "20px" // Note: fontSize should be a string, not inside quotes
  };
  

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuBarIcon, setMenuBarIcon] = useState(faBars); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuBarIcon(menuOpen ? faBars : faX);
  };


  const navbarHeight = '6vw'; // Adjust acc to height of Navbar

   const scrollToContactForm = () => {
     const contactFormElement = document.getElementById('contact-form-container');
     if (contactFormElement) {
       const topPosition = contactFormElement.offsetTop - navbarHeight;
       window.scrollTo({ top: topPosition, behavior: 'smooth' });
     }
   };

  return (
      <Stack direction="row" 
         alignItems="center" 
         p={2} 
         width= "100%"
         className='Navbar'
         sx={{position: 'sticky',
              top: 0, 
              zIndex: 999, 
              background: 'white', 
              justifyContent: 'space-between',
              backgroundColor: "white"}}>
      <Link to="/" style={{display: 'flex' , alignItems: 'center'}} onClick={()=> window.scrollTo({top: 0,behavior: "smooth"})}>
      <img src={images[0].url} alt="logo" style={{width: "12vw",height: "4vw" ,marginLeft: "12px"}} />
      </Link>
      

      <div className='navLinks navbarIcons'>
        <NavLink exact activeclassname ='active' to="/" onClick={()=> window.scrollTo({top: 0,behavior: "instant"})}>Home</NavLink>
        <NavLink to="/" onClick={scrollToContactForm}>Buy New Car</NavLink>
        <NavLink activeclassname ='active' to="/">Blog</NavLink>
        <NavLink activeclassname ='active' onClick={scrollToTop} to="/Services">Services</NavLink>
      </div>    

      <div className='navbarIcons'>
        <SearchBar />
      </div>
      <div className='options navbarIcons'>
         <div className='like' style={{...iconContainerStyle, marginRight : "14px"}}>
            <FavoriteIcon style={iconStyle} />
         </div>
         <div className='notification' style={{...iconContainerStyle, marginRight : "14px"}}>
            <FontAwesomeIcon icon={faBell} style={iconStyle} />
         </div>
         <div className='setting' style={{...iconContainerStyle, marginRight : "14px"}}>
            <SettingsIcon style={iconStyle} />
         </div>
         <NavLink exact to='/Login' onClick={() => { window.scrollTo({top: 0,behavior: "smooth"})}}>
         <div className='profile' style={{marginTop: "0px",width: "35px",height: "35px",borderRadius: "90px",display: "flex",justifyContent: "center",alignItems: "center",}}>
            <FontAwesomeIcon icon={faUser} style={{color: "black",fontSize: "25px"}} />
         </div>
         </NavLink>
      </div>

      <div className='MenuRespons'>
         <FontAwesomeIcon icon={menuBarIcon} className='menuIconNav' onClick={toggleMenu}/>
      </div>
     </Stack>
  )
}

export default Navbar;