import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faLayerGroup, faLock } from '@fortawesome/free-solid-svg-icons';

const HomeII = () => {
  return (
    <div style={{backgroundColor: "#F6F7F9",width: "100%", height:"560px",fontFamily: "Space Grotesk"}}>
      <div className='headingBox' style={{padding: "2px",margin: "auto"}}>
      <div style={{ width: "700px", height: "145px", margin: "46px auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span style={{marginTop: "0px",display: "flex", alignItems: "center" }}><hr style={{width: "16px",border: "1px solid black",margin: "auto 10px"}}/>Why Choose Us <hr style={{width: "16px",border: "1px solid black",margin: "auto 10px"}}/></span>
        <span style={{marginTop:"13px"}}><h1 style={{ fontWeight: "600", fontSize: "45px", lineHeight: "63px" ,gap: "20px"}}>Experience the Difference</h1></span>
        <span style={{fontWeight: "700",color : "#7F808E",lineHeight: "25px",fontSize: "20px",height:"25px",marginTop:"17px"}}>Buy your dream car in just three easy steps</span>
      </div>
      </div>



      <div style={{textAlign:"center",maxWidth: "942px",maxHeight: "210px",display:"flex",flexDirection:"row",justifyContent: "space-between",margin: "70px auto"}}>
         <div className='card' style={{width: "280px",height: "209px",display: 'flex',flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
           <div className='cardIcon' style={{backgroundColor: "#000000",width: "64px",height:"64px",color:"white",display: "flex", justifyContent: "center", alignItems: "center" }}>
           <FontAwesomeIcon icon={faLayerGroup} style={{ color: "white",width: "25px",height:"25px"}} />
           </div>
           <div className='cardHeading' style={{width: "61px",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>DREAM</h6></div>
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
           <div className='cardHeading' style={{width: "61px",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>DEAL</h6></div>
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
           <div className='cardHeading' style={{width: "61px",height:"25px"}}><h6 style={{height:"100%",width:"100%",fontWeight: "600",fontSize: "18px",fontFamily: "Lexend Deca", lineHeight: "25.2px",color: "#03040A"}}>DRIVE</h6></div>
           <div className='cardDesc' style={{width:" 280px",height:"80px"}}>
              <p style={{fontFamily: "Space Grotesk",fontWeight: "400",fontSize: "15px",lineHeight: "25px"}}>
              Fermentum luctus convallis non lectus. Aliquam at ut viverra non arcu massa laoreet commodo ac.
              </p>
           </div>
         </div>
      </div>

    </div>
  )
}

export default HomeII;