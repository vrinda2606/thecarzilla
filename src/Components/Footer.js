import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-bootstrap';

const Footer = () => {
  return (
    <div style={{backgroundColor:"#03040A",width:"100%",height:"432px",display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
        

        <div className='footer'>
          <div className='footerOne' style={{width:"371px",height:'200px',display: 'flex',flexDirection: "column",justifyContent: "space-between"}}>
              <div style={{display: 'flex' , alignItems: 'center',width:"172px" ,height:"69px"}}>
              <img src='../Images/logo2.png' alt='logo' style={{width:"100%",height:"100%",objectFit: "cover"}} />
              </div>
              <div style={{width: '371px',height: "55px",color:'#E5E6E8'}}>
                <p style={{fontFamily:'Space Grotesk',fontWeight: "400",fontSize:"15px",lineHeight:"25px"}}>4th Floor, Pre-Incubation Lab, TBI-KIET, Ghaziabad - 201206</p>
              </div>
              <div className='contactSocial' style={{width:"206px",height: "38px",display: 'flex',justifyContent: 'space-between'}}>
                <div className='X social'><a href='/'><FontAwesomeIcon icon={faXTwitter} /></a></div>
                <div className='instagram social'><a href='/'><FontAwesomeIcon icon={faInstagram} /></a></div>
                <div className='youtube social'><a href='/'><FontAwesomeIcon icon={faYoutube} /></a></div>
                <div className='linkedIn social'><a href='/'><FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }}/></a></div>
              </div>
          </div>
           
          <div class="footerTwo">
            <ul className='footerTwo-1'>
                <h6>Company</h6>
                <NavLink className='links' to="/">Home</NavLink>
                <NavLink className='links' to="/">About us</NavLink>
                <NavLink className='links' to="/">Services</NavLink>               
                <NavLink className='links' to="/">Blogs</NavLink>
            </ul>
            <ul className='footerTwo-1'>
                <h6>Help</h6>
                <NavLink className='links' to="/">Customer Support</NavLink>
                <NavLink className='links' to="/">How It Works</NavLink>
                <NavLink className='links' to="/">Terms & Conditions</NavLink>
                <NavLink className='links' to="/">Privacy Policy</NavLink>
            </ul>
          </div>

          <div className='footerThree'>
            <div className='subscribe' style={{width: '300px',height: '180px',gap : '20px'}}>
                <h6 style={{height : '28px',width:'100%' ,fontFamily : 'Lexend Deca',fontWeight :'600',fontSize : '20px',lineHeight : '28px',color : '#FFFFFF'}}>
                Subscribe To Newsletter
                </h6>
                <input type='text' placeholder='Enter your email...' style={{textIndent: '20px',color: '#000000',fontFamily : 'Space Grotesk',fontWeight : '400',fontSize: '12px',lineHeight : '25px',height:'45px',width : '100%'}}></input>
                <button style={{backgroundColor: '#FF3F00',fontWeight: '500',fontSize:'14px',lineHeight :'18px',color : '#FFFFFF',width :'112px',height: '45px',padding : '16px, 20px, 16px, 20px',gap :'10px',fontFamily : 'Lexend Deca'}}>Subscribe</button>
            </div>
            <div className='startUpLogo' style={{width:'270px'}}>
                <div>
                  <p style={{width: '241px',color: '#FFFFFF',height:'28px',fontFamily :'Saira',fontWeight : '600',fontSize :'20px',lineHeight : '15px'}}>Proudly Recognized By</p>
                </div>
                <div className='startUp Logo'>
                  <img className='imageLogoStartup' src='../Images/StartUpLogo1.png' alt='Startup logo'/>
                  <img className='imageLogoStartup' src='../Images/StartupLogo2.png' alt='Startup logo 2'></img>
                </div>
            </div>
          </div>

        </div>

        <div className='bottom' style={{marginTop: '100px'}}>
            <hr width="1140px" style={{border: "1px solid #E5E6E8",margin:"auto"}}></hr>
            <div style={{display:"flex",justifyContent: "space-between",width: "1140px" ,height:"27px",color :"#E5E6E8",margin:"32px auto",fontFamily:"Space Grotesk",fontWeight: "400",fontSize :"12px"}}>
               <p style={{width: "159px", height:"100%", lineHeight:"27px"}}>Copyright ©2024 IgniteX</p>
               <p style={{width: "179px", height:"100%", lineHeight:"27px"}}>Designed by IgniteX Solutions </p>
            </div>
        </div>
    </div>
  )
}

export default Footer;