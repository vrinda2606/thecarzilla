import React from 'react'
import { Stack } from "@mui/material"; // used to create layout with a horizontal/vertcal stack of elements
import {Link, NavLink} from "react-router-dom"; // creates links for navigation within React appn
import {images} from '../utils/constants';
import SearchBar from  './SearchBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';


const options = ['home', 'services', 'about us','blogs','customer support','how it works','terms and conditions','privacy policy'];

const handleSelect = (selectedOption) => {
   let pathToComponent;
   switch (selectedOption) {
     case 'home':
       pathToComponent = '/';
       break;
     case 'services':
       pathToComponent = '/services'; // Assuming your services component is at '/services'
       break;
     case 'about us':
       pathToComponent = '/Aboutus'; // Assuming your about us component is at '/about-us'
       break;
     // Add similar cases for other options
     default:
       pathToComponent = '/'; // Handle unexpected options (optional)
   }
 
   // Use Link component directly for redirection (replace NavLink if not using exact path matching)
   return <Link to={pathToComponent}>{selectedOption}</Link>;
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
   const navbarHeight = 105; // Adjust acc to height of Navbar

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
         height="90px"
         sx={{position: 'sticky',
              top: 0, zIndex: 999, background: 'white', justifyContent: 'space-between',backgroundColor: "white"}}>
      <Link to="/" style={{display: 'flex' , alignItems: 'center'}} onClick={()=> window.scrollTo({top: 0,behavior: "smooth"})}>
      <img src={images[0].url} alt="logo" style={{width: "172px",height: "56px" ,marginLeft: "12px"}} />
      </Link>
      

      <div className='navLinks' style={{marginTop:"10px",fontWeight: 700,width:"460px",height: "25px",display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <NavLink exact activeclassname ='active' to="/" onClick={()=> window.scrollTo({top: 0,behavior: "instant"})}>Home</NavLink>
        <NavLink to="/" onClick={scrollToContactForm}>Buy New Car</NavLink>
        <NavLink activeclassname ='active' to="/">Blog</NavLink>
        <NavLink activeclassname ='active' to="/">Services</NavLink>
      </div>    

      <SearchBar options={options} handleSelect={handleSelect} />
      <div className='options' style={{ display: "flex",marginTop:"10px",marginRight:"30px",justifyContent: "space-evenly"}}>
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
     </Stack>
  )
}

export default Navbar;