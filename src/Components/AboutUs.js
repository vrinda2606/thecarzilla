import React from 'react';
import HomeI from "./HomeI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faLayerGroup, faLock } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  return (
    <>
      <HomeI />
      <div className='BlackBg' style={{height : '42vw'}}>
            
        <div className='HeadingBoxBlack'>
        <div className='HeadingBlackDiv'>
           <span className='BlackDivfirst'><hr/><p>WHY CHOOSE US</p><hr/></span>
           <span className='BlackDivMiddle'><h1>About Us</h1></span>
           <span className='BlackDivLast'>Our Company Overview</span>
        </div>
        </div>
        
        <div className='DivContent' style={{height : '7vw'}}>
        TheCarzilla.in is the beginning of a new era. One that is built on the foundation of transparent and meaningful automotive content in India. At TheCarzilla.in we will bring you the latest news, reviews, tech content and more to help you get closer to your buying decision.
        </div>
        <div className='DivContent' style={{height : '7vw'}}>
        TheCarzilla.in also promises to give the best prices and fastest delivery of your dream new car.TheCarzilla.in, thus provides you with what you want - Credible reviews, exclusive content and cars at the best prices!
        </div>
            
            <div className='btnForMoreDiv' >
            <button className='btnForMore'>Learn More</button>
            </div>

            <div className='WhiteHr'/>
            
        </div>


    <div className='WhiteBg' style={{height:"55vw"}}>
    <div className='WhiteBgContent'>
        <div className='headingBoxWhite'>
          <div className='HeadingWhiteDiv'>
            <span className='WhiteDivfirst'><hr/>OUR PLUS POINTS<hr/></span>
            <span className='WhiteDivMiddle'><h1>Features</h1></span>
            <span className='WhiteDivLast'>What makes us different</span>
          </div>
        </div>


      <div>
      <div style={{textAlign:"center",maxWidth: "942px",maxHeight: "210px",display:"flex",flexDirection:"row",justifyContent: "space-between",margin: "70px auto"}}>
         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faLayerGroup} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "auto",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>Best Price</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px",color: '#7F808E'}}>
              We offer You the lowest price in the market.
              </p>
           </div>
         </div>

         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faLock} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "auto",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>What Drives Us?</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px",color: '#7F808E'}}>
              A Determination to make your car purchase journey,a smooth ride.
              </p>
           </div>
         </div>
         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faHeadphones} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "auto",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>Earliest Available</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px",color: '#7F808E'}}>
              We Promise to get you your dream car before anyone else in the market.
              </p>
           </div>
         </div>
      </div>

      <div style={{textAlign:"center",maxWidth: "942px",maxHeight: "210px",display:"flex",flexDirection:"row",justifyContent: "space-between",margin: "70px auto"}}>
         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faLayerGroup} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "auto",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>Door-Step Delivery</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px",color: '#7F808E'}}>
              Financial assistance, Used car inspection, payment and delivery - all done at your doorstep.
              </p>
           </div>
         </div>

         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faLock} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "auto",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>What Fuels Us?</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px",color: '#7F808E'}}>
              We are a group of ex co-founders, engineers and top of all- car lovers.
              </p>
           </div>
         </div>
         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faHeadphones} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "auto",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>Complete Transparency</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px",color: '#7F808E'}}>
              We offer best price guarantee and will never send any hidden charges your way.
              </p>
           </div>
         </div>
      </div>
      </div>
       </div>
    </div>
    </>
  )
}

export default AboutUs;