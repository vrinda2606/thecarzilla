import React from 'react'
import { Stack } from "@mui/material"; // used to create layout with a horizontal/vertcal stack of elements
import {Link, NavLink} from "react-router-dom"; // creates links for navigation within React appn
import {images} from '../utils/constants';
import SearchBar from  './SearchBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

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
    fontSize: "20px", // Note: fontSize should be a string, not inside quotes
  };
  

const Navbar = () => {
  return (
      <Stack direction="row" 
         alignItems="center" 
         p={2} 
         width= "100%"
         height="105px"
         sx={{position: 'fixed', //position: 'sticky'
              top: 0, zIndex: 999, background: 'white', justifyContent: 'space-between',backgroundColor: "white"}}>
      <Link to="/" style={{display: 'flex' , alignItems: 'center'}} >
      <img src={images[0].url} alt="logo" style={{width: "172px",height: "180px", marginTop: "10px" ,marginLeft: "12px"}} />
      </Link>
      

      <div className='navLinks' style={{marginTop:"10px",fontWeight: 700,width:"460px",height: "25px",display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <NavLink activeClassName='active' exact to="/">Home</NavLink>
        <NavLink  activeClassName='active' to="/">Buy New Car</NavLink>
        <NavLink  activeClassName='active' to="/">Blog</NavLink>
        <NavLink  activeClassName='active' to="/">Services</NavLink>
      </div>    

      <SearchBar />
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
         <div className='profile' style={{marginTop: "0px",width: "35px",height: "35px",borderRadius: "90px",display: "flex",justifyContent: "center",alignItems: "center",}}>
            <FontAwesomeIcon icon={faUser} style={{color: "black",fontSize: "25px"}} />
         </div>
      </div>
     </Stack>
  )
}

export default Navbar;