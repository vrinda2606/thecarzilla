import React from 'react';
import HomeI from './HomeI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faLayerGroup, faLock } from '@fortawesome/free-solid-svg-icons';

const HowDoesItWork = () => {
  return (
    <>
        <HomeI />
        <div className='BlackBg' style={{height : '495px'}}>
            
        <div className='HeadingBoxBlack'>
        <div className='HeadingBlackDiv'>
           <span className='BlackDivfirst'><hr/><p>WE ARE DIFFERENT</p><hr/></span>
           <span className='BlackDivMiddle'><h1>How It Works</h1></span>
           <span className='BlackDivLast'>Our way of delivering happiness is different!</span>
        </div>
        </div>
        
        <div className='DivContent' style={{height : '110px'}}>
        We understand that a car is not just a high-ticket purchase for you, it's a dream! And we want to assure you that we will be alongside you throughout this journey from car selection to car purchase to car maintenance and beyond.
        </div>
            
            <div className='btnForMoreDiv' >
            <button className='btnForMore'>Learn More</button>
            </div>

            <div style={{width: "700px",backgroundColor: "white",margin:"51px auto", height: "3px"}} />
            
        </div>


    <div className='WhiteBg' style={{height:"auto"}}>
        <div className='headingBoxWhite'>
          <div className='HeadingWhiteDiv'>
            <span className='WhiteDivfirst'><hr/>TO BUY A NEW CAR <hr/></span>
            <span className='WhiteDivMiddle'><h1>Just Follow Three Easy Steps</h1></span>
            <span className='WhiteDivLast'>That's all you need to do!</span>
          </div>
        </div>



      <div style={{textAlign:"center",maxWidth: "942px",maxHeight: "210px",display:"flex",flexDirection:"row",justifyContent: "space-between",margin: "70px auto"}}>
         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faLayerGroup} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "61px",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>Inquire</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px",color: '#7F808E'}}>
              Fill the Inquiry Form
              </p>
           </div>
         </div>

         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faLock} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "61px",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>Booking</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px",color: '#7F808E'}}>
              Book your dream car
              </p>
           </div>
         </div>
         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faHeadphones} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "61px",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>Delivery</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px",color: '#7F808E'}}>
              Get the car delivered
              </p>
           </div>
         </div>
      </div>
      
      <div style={{color : '#000000B2',fontFamily : 'Poppins',fontWeight : '600', fontSize : '20px',lineHeight : '30px',width : '93%',textAlign: 'center',margin: '-50px auto',paddingBottom: '100px'}}>
      Along with you, investors like AY Ventures , Shakunt Finance and TBI-KIET  have also put their trust in us. And we promise to uphold the trust you all have put in us. By the way, we love all cars, new or old and if in case you want to give your old darling a farewell, we will get you the best price for that beauty as well :)
      </div>

    </div>
    </>
  )
}

export default HowDoesItWork;