import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faLayerGroup, faLock } from '@fortawesome/free-solid-svg-icons';

const HomeIII = () => {
  return (
    <div className='WhiteBg' style={{height:"600px"}}>
     <div className='WhiteBgContent'>
      <div className='headingBoxWhite'>
      <div className='HeadingWhiteDiv'>
        <span className='WhiteDivfirst'><hr/>Why Choose Us <hr/></span>
        <span className='WhiteDivMiddle'><h1>Experience the Difference</h1></span>
        <span className='WhiteDivLast'>Buy your dream car in just three easy steps</span>
      </div>
      </div>



      <div style={{textAlign:"center",maxWidth: "942px",maxHeight: "210px",display:"flex",flexDirection:"row",justifyContent: "space-between",margin: "90px auto"}}>
         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faLayerGroup} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "61px",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>Dream</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px"}}>
              Fermentum luctus convallis non lectus. Aliquam at ut viverra non arcu massa laoreet commodo ac.
              </p>
           </div>
         </div>

         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faLock} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "61px",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>Deal</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px"}}>
              Fermentum luctus convallis non lectus. Aliquam at ut viverra non arcu massa laoreet commodo ac.
              </p>
           </div>
         </div>
         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faHeadphones} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "61px",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>Drive</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px"}}>
              Fermentum luctus convallis non lectus. Aliquam at ut viverra non arcu massa laoreet commodo ac.
              </p>
           </div>
         </div>
      </div>
      </div>
    </div>
  )
}

export default HomeIII;