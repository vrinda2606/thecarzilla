import React from 'react';
import {images} from '../utils/constants';

const HomeII = () => {
return (
     <div className='Home'>
        <div className='homeII' style={{padding: "20px",backgroundColor: "#292929", width: "100%" , height: "680px" ,backgroundRepeat: 'repeat',backgroundImage : `url('../Images/bgEffect.png')`,backgroundSize: "612px auto",backgroundBlendMode: "overlay"}}>
            <div className='WhiteHr' style={{margin : "42px auto 0px"}}/>
            
            <div style={{width: "501px",margin:"18px auto", height: "63px", textAlign: "center" }} >
               <h1 style={{alignContent: "center",fontWeight: "700" ,fontFamily:"Lexend Deca", color: "white",lineHeight: "63px",fontSize: "45px" }}>Brands We Deal In</h1>
            </div>
            
            <div className='brands' style={{width: "75%",height : "124px",margin:"55px auto",display: "flex",justifyContent: "space-between"}}>
               <div className='TATA' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px"}}>
                 <img src={images[1].url} alt='TATA' style={{padding:"10px 5px",objectFit: "contain",maxWidth : "124px",maxHeight : "124px"}} />
               </div>
               <div className='SUZUKI' style={{ backgroundColor: "white", borderRadius: "10px", width: "124px", height: "124px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                 <img src={images[2].url} alt='SUZUKI' style={{ objectFit: "cover", width: "100%", height: "100%" }} />
               </div>
               <div className='HYUNDAI' style={{ backgroundColor: "white", borderRadius: "10px", width: "124px", height: "124px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                 <img src={images[3].url} alt='HYUNDAI' style={{ objectFit: "contain", width: "100%", height: "100%" }} />
               </div>
               <div className='TOYOTA' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px"}}>
                 <img src={images[4].url} alt='TOYOTA' style={{paddingTop:"10px",objectFit: "contain", width: "100%", height: "100%" }} />
               </div>
               <div className='MG' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px"}}>
                 <img src={images[5].url} alt='MG' style={{padding:"10px 5px 10px 8px",objectFit: "cover",maxWidth : "124px",maxHeight : "124px"}} />
               </div>
               <div className='HONDA' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px",display: "flex", justifyContent: "center", alignItems: "center"}}>
                 <img src={images[6].url} alt='HONDA' style={{objectFit: "cover",maxWidth : "124px",maxHeight : "124px"}} />
               </div>
            </div>

            <div className='brands' style={{width: "75%",height : "124px",margin:"55px auto",display: "flex",justifyContent: "space-between"}}>
               <div className='SKODA' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px",display: "flex", justifyContent: "center", alignItems: "center"}}>
                 <img src={images[7].url} alt='SKODA' style={{objectFit: "cover",Width : "100%",Height : "100%"}} />
               </div>
               <div className='NISSAN' style={{ backgroundColor: "white", borderRadius: "10px", width: "124px", height: "124px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                 <img src={images[8].url} alt='NISSAN' style={{padding:"10px 5px", objectFit: "cover", width: "100%", height: "100%" }} />
               </div>
               <div className='VOLKSWAGON' style={{ backgroundColor: "white", borderRadius: "10px", width: "124px", height: "124px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                 <img src={images[9].url} alt='VOLKSWAGON' style={{padding:"10px 5px", objectFit: "contain", width: "100%", height: "100%" }} />
               </div>
               <div className='JEEP' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px"}}>
                 <img src={images[10].url} alt='JEEP' style={{padding:"30px 5px 0 5px",objectFit: "cover",maxWidth : "124px",maxHeight : "124px"}} />
               </div>
               <div className='CITROEN' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px"}}>
                 <img src={images[11].url} alt='CITROEN' style={{padding:"0 5px 0 5px",objectFit: "cover",maxWidth : "124px",maxHeight : "124px"}} />
               </div>
               <div className='KIA' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px"}}>
                 <img src={images[12].url} alt='KIA' style={{padding:"25px 5px 0 5px",objectFit: "cover",maxWidth : "124px",maxHeight : "124px"}} />
               </div>
            </div>

            <div className='btnForMoreDiv'>
            <button className='btnForMore'>More Brands</button>
            </div>



            <div className='WhiteHr'/>
            
        </div>

     </div>
  )
}

export default HomeII;