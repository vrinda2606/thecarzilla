import React, { useState, useEffect } from 'react';
import { Stack } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { images } from '../utils/constants';
import SearchBar from './SearchBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

const iconContainerStyle = {
  width: "2.6vw",
  height: "2.6vw",
  border: "0.15vw solid #C3D4E966",
  borderRadius: "50%",
  marginTop: "0vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const iconStyle = {
  padding: 'auto',
  color: "#596780",
  fontSize: "1.3vw"
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open', !menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    toggleMenu();
  };

  const navbarHeight = 90; // Adjust according to height of Navbar

  const scrollToContactForm = () => {
    const contactFormElement = document.getElementById('contact-form-container');
    if (contactFormElement) {
      const topPosition = contactFormElement.offsetTop - navbarHeight;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
    toggleMenu();
  };

  useEffect(() => {
    return () => {
      // Ensure scrolling is re-enabled when component is unmounted
      document.body.classList.remove('menu-open');
    };
  }, []);

  return (
    <>
      <Stack direction="row"
        alignItems="center"
        p={2}
        width="100%"
        className='Navbar'
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 999,
          background: 'white',
          justifyContent: 'space-between',
          backgroundColor: "white"
        }}>

        <Link to="/" style={{ display: 'flex', alignItems: 'center', marginLeft: "1vw" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={images[0].url} alt="logo" style={{ width: "12vw", height: "4vw" }} />
        </Link>

        <div className='navLinks navbarIcons'>
          <NavLink exact activeclassname='active' to="/" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>Home</NavLink>
          <NavLink to="/" onClick={scrollToContactForm}>Buy New Car</NavLink>
          <NavLink activeclassname='active' to="/">Blog</NavLink>
          <NavLink activeclassname='active' onClick={() => window.scrollTo({ top: 0, behavior: "instant" })} to="/Services">Services</NavLink>
        </div>

        <div className='navbarIcons'>
          <SearchBar />
        </div>

        <div className='options navbarIcons'>
          <div className='like' style={{ ...iconContainerStyle, marginRight: "1vw" }}>
            <FavoriteIcon style={iconStyle} />
          </div>
          <div className='notification' style={{ ...iconContainerStyle, marginRight: "1vw" }}>
            <FontAwesomeIcon icon={faBell} style={iconStyle} />
          </div>
          <div className='setting' style={{ ...iconContainerStyle, marginRight: "1vw" }}>
            <FontAwesomeIcon icon={faGear} style={iconStyle} />
          </div>
          <NavLink exact to='/Login' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
            <div className='profile' style={{
              marginTop: "0vw",
              width: "2.6vw",
              height: "2.6vw",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <FontAwesomeIcon icon={faUser} style={{ color: "black", fontSize: "1.5vw" }} />
            </div>
          </NavLink>
        </div>

        <div className='MenuRespons'>
          <FontAwesomeIcon icon={menuOpen ? faX : faBars} className='menuIconNav' onClick={toggleMenu} />
        </div>

        <div className={`MenuDropdown ${menuOpen ? 'MenuShow' : ''}`}>
          <NavLink className='MenuDropdownOpt' exact activeclassname='active' to="/" onClick={scrollToTop}>Home</NavLink>
          <NavLink className='MenuDropdownOpt' to="/" onClick={scrollToContactForm}>Buy New Car</NavLink>
          <NavLink className='MenuDropdownOpt' activeclassname='active' to="/">Blog</NavLink>
          <NavLink className='MenuDropdownOpt' activeclassname='active' onClick={scrollToTop} to="/Services">Services</NavLink>
        </div>
      </Stack>
    </>
  );
};

export default Navbar;
