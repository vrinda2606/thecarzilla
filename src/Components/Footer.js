import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {NavLink} from "react-router-dom";
import {images} from '../utils/constants';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // Smooth scrolling animation
    });
  };


  return (
    <div className='footerMain'>
        

        <div className='footer'>
          <div className='footerOne'>
              <div style={{display: 'flex' , alignItems: 'center',width:"13vw" ,height:"5vw"}}>
              <img src={images[16].url} alt='logo' style={{width:"100%",height:"100%",objectFit: "cover"}} />
              </div>
              <div style={{width: '100%',height: "4.2vw",color:'#E5E6E8'}}>
                <p style={{fontFamily:'Space Grotesk',fontWeight: "400",fontSize:"1vw",lineHeight:"2.1vw"}}>4th Floor, Pre-Incubation Lab, TBI-KIET, Ghaziabad - 201206</p>
              </div>
              <div className='contactSocial'>
                <div className='X social'><a href='/' target='blank'><FontAwesomeIcon icon={faXTwitter} /></a></div>
                <div className='instagram social'><a href='https://www.instagram.com/thecarzilla.in?igsh=MW12ZWF0YzIyeXkzYg%3D%3D&utm_source=qr' target='blank'><FontAwesomeIcon icon={faInstagram} /></a></div>
                <div className='youtube social'><a href='https://www.youtube.com/@thecarzilla' target='blank'><FontAwesomeIcon icon={faYoutube} /></a></div>
                <div className='linkedIn social'><a href='https://www.linkedin.com/company/thecarzilla-in/' target='blank'><FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }}/></a></div>
              </div>
          </div>
           
          <div className="footerTwo">
            <ul className='footerTwo-1'>
                <h6>Company</h6>
                <NavLink className='links' onClick={scrollToTop} to="/">Home</NavLink>
                <NavLink className='links' onClick={scrollToTop} to="/AboutUs">About us</NavLink>
                <NavLink className='links' onClick={scrollToTop} to="/Services">Services</NavLink>               
                <NavLink className='links' onClick={scrollToTop} to="/">Blogs</NavLink>
            </ul>
            <ul className='footerTwo-1'>
                <h6>Help</h6>
                <NavLink className='links' onClick={scrollToTop} to="/Support">Customer Support</NavLink>
                <NavLink className='links' onClick={scrollToTop} to="/HowItWorks">How It Works</NavLink>
                <NavLink className='links' onClick={scrollToTop} to="/TermsAndConditions">Terms & Conditions</NavLink>
                <NavLink className='links' onClick={scrollToTop} to="/PrivacyPolicy">Privacy Policy</NavLink>
                <NavLink className='links' onClick={scrollToTop} to="/CancellationAndRefundPolicy">Refund Policy</NavLink>
            </ul>
          </div>

          <div className='footerThree'>
            <div className='subscribe' >
                <h6 style={{height : '1.9vw',width:'100%' ,fontFamily : 'Lexend Deca',fontWeight :'600',fontSize : '1.2vw',lineHeight : '1.9vw',color : '#FFFFFF'}}>
                Subscribe To Newsletter
                </h6>
                <input type='text' placeholder='Enter your email...' style={{textIndent: '1.7vw',color: '#000000',fontFamily : 'Space Grotesk',fontWeight : '400',fontSize: '0.8vw',lineHeight : '1.6vw',height:'3.2vw',width : '100%'}}></input>
                <button style={{backgroundColor: '#FF3F00',fontWeight: '500',fontSize:'1vw',lineHeight :'1.2vw',color : '#FFFFFF',width :'8vw',height: '3.1vw',padding : '1vw 1.1vw',gap :'0.5vw',fontFamily : 'Lexend Deca'}}>Subscribe</button>
            </div>
            <div className='startUpLogo'>
                <div>
                  <p style={{width: '100%',color: '#FFFFFF',height:'1.7vw',fontFamily :'Saira',fontWeight : '600',fontSize :'1.3vw',lineHeight : '1.7vw'}}>Proudly Recognized By</p>
                </div>
                <div className='startUpLogoImg'>
                  <img className='imageLogoStartup' src={images[17].url} alt='Startup logo'/>
                  <img className='imageLogoStartup' src={images[18].url} alt='Startup logo 2'></img>
                </div>
            </div>
          </div>

        </div>

        <div className='bottom'>
            <hr width="100%" style={{border: "0.1vw solid #E5E6E8",margin:"auto"}}></hr>
            <div style={{display:"flex",justifyContent: "space-between",width: "100%" ,height:"1.7vw",color :"#E5E6E8",margin:"1.7vw 0vw 0vw",fontFamily:"Space Grotesk",fontWeight: "400",fontSize :"0.8vw"}}>
               <p >Copyright ©2024 IgniteX Solutions Pvt. Ltd.</p>
               <p >Designed by IgniteX Solutions </p>
            </div>
        </div>
    </div>
  )
}

export default Footer;