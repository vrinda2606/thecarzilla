import React from 'react';

const HomeII = () => {
return (
     <div className='Home'>
        <div className='homeII' style={{padding: "20px",backgroundColor: "#292929", width: "100%" , height: "665px" ,backgroundRepeat: 'repeat',backgroundImage : `url('../Images/bgEffect.png')`,backgroundSize: "612px auto",backgroundBlendMode: "overlay"}}>
            <div style={{width: "700px",backgroundColor: "white",margin:"42px auto 0px", height: "3px"}} />
            
            <div style={{width: "501px",margin:"18px auto", height: "63px", textAlign: "center" }} >
               <h1 style={{alignContent: "center",fontWeight: "700" ,fontFamily:"Lexend Deca", color: "white",lineHeight: "63px",fontSize: "45px" }}>Brands We Deal In</h1>
            </div>
            
            <div className='brands' style={{width: "1169px",height : "124px",marginTop:"55px",marginLeft: "160px",display: "flex",justifyContent: "space-between"}}>
               <div className='TATA' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px"}}>
                 <img src='../Brands/TATA.png' alt='TATA' style={{padding:"10px 5px",objectFit: "contain",maxWidth : "124px",maxHeight : "124px"}} />
               </div>
               <div className='SUZUKI' style={{ backgroundColor: "white", borderRadius: "10px", width: "124px", height: "124px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                 <img src='../Brands/SUZUKI.png' alt='SUZUKI' style={{ objectFit: "cover", width: "100%", height: "100%" }} />
               </div>
               <div className='HYUNDAI' style={{ backgroundColor: "white", borderRadius: "10px", width: "124px", height: "124px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                 <img src='../Brands/HYUNDAI.png' alt='HYUNDAI' style={{ objectFit: "contain", width: "100%", height: "100%" }} />
               </div>
               <div className='TOYOTA' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px"}}>
                 <img src='../Brands/TOYOTA.png' alt='TOYOTA' style={{paddingTop:"10px",objectFit: "contain", width: "100%", height: "100%" }} />
               </div>
               <div className='MG' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px"}}>
                 <img src='../Brands/MG.png' alt='MG' style={{padding:"10px 5px 10px 8px",objectFit: "cover",maxWidth : "124px",maxHeight : "124px"}} />
               </div>
               <div className='HONDA' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px",display: "flex", justifyContent: "center", alignItems: "center"}}>
                 <img src='../Brands/HONDA.png' alt='HONDA' style={{objectFit: "cover",maxWidth : "124px",maxHeight : "124px"}} />
               </div>
            </div>

            <div className='brands' style={{width: "1169px",height : "124px",marginTop:"55px",marginLeft: "160px",display: "flex",justifyContent: "space-between"}}>
               <div className='SKODA' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px",display: "flex", justifyContent: "center", alignItems: "center"}}>
                 <img src='../Brands/SKODA.png' alt='SKODA' style={{objectFit: "cover",Width : "100%",Height : "100%"}} />
               </div>
               <div className='NISSAN' style={{ backgroundColor: "white", borderRadius: "10px", width: "124px", height: "124px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                 <img src='../Brands/NISSAN.png' alt='NISSAN' style={{padding:"10px 5px", objectFit: "cover", width: "100%", height: "100%" }} />
               </div>
               <div className='VOLKSWAGON' style={{ backgroundColor: "white", borderRadius: "10px", width: "124px", height: "124px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                 <img src='../Brands/VOLKSWAGON.png' alt='VOLKSWAGON' style={{padding:"10px 5px", objectFit: "contain", width: "100%", height: "100%" }} />
               </div>
               <div className='JEEP' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px"}}>
                 <img src='../Brands/JEEP.png' alt='JEEP' style={{padding:"30px 5px 0 5px",objectFit: "cover",maxWidth : "124px",maxHeight : "124px"}} />
               </div>
               <div className='CITROEN' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px"}}>
                 <img src='../Brands/CITROEN.png' alt='CITROEN' style={{padding:"0 5px 0 5px",objectFit: "cover",maxWidth : "124px",maxHeight : "124px"}} />
               </div>
               <div className='KIA' style={{backgroundColor: "white",borderRadius: "10px",width: "124px",height : "124px"}}>
                 <img src='../Brands/KIA.png' alt='KIA' style={{padding:"25px 5px 0 5px",objectFit: "cover",maxWidth : "124px",maxHeight : "124px"}} />
               </div>
            </div>

            <div className='btnForMoreDiv'>
            <button className='btnForMore'>More Brands</button>
            </div>



            <div style={{width: "700px",backgroundColor: "white",margin:"51px auto", height: "3px"}} />
            
        </div>

     </div>
  )
}

export default HomeII;