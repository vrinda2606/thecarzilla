import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div style={{backgroundColor:"#03040A",width:"100%",height:"432px"}}>
        

        <div>
          <div className='footerI' style={{width:"371px",height:'200px',display: 'flex',flexDirection: "column",justifyContent: "space-between"}}>
              <div style={{display: 'flex' , alignItems: 'center',width:"172px" ,height:"69px",marginLeft:"-30px"}}>
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
        </div>

        {/* <div className='bottom'>
            <hr width="1140px" style={{border: "1px solid #E5E6E8",margin:"auto"}}></hr>
            <div style={{display:"flex",justifyContent: "space-between",width: "1140px" ,height:"27px",color :"#E5E6E8",margin:"32px auto",fontFamily:"Space Grotesk",fontWeight: "400",fontSize :"12px" ,}}>
               <p style={{width: "159px", height:"100%", lineHeight:"27px"}}>Copyright ©2024 IgniteX</p>
               <p style={{width: "179px", height:"100%", lineHeight:"27px"}}>Designed by IgniteX Solutions </p>
            </div>
        </div> */}
    </div>
  )
}

export default Footer;