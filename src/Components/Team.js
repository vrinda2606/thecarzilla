import React from 'react'

const Team = () => {
  return (
    <div style={{padding:"20px",Width: "100%",height: "740px",backgroundColor: "#1E1E1E",backgroundRepeat: 'repeat',backgroundImage : `url('../Images/bgEffect.png')`,backgroundSize: "612px auto",backgroundBlendMode: "overlay"}}>
        <div className='contactHeading' style={{width:"700px",height: "142px",margin: "auto",color: "#ffffff"}}>
        <div style={{ width: "700px", height: "142px", margin: "40px auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{marginTop: "0px",display: "flex", alignItems: "center" }}><hr style={{width: "16px",border: "1px solid",margin: "auto 10px"}}/><p style={{}}>OUR TEAM</p><hr style={{width: "16px",border: "1px solid",margin: "auto 10px"}}/></span>
            <span style={{marginTop:"13px"}}><h1 style={{ fontFamily:"Lexend Deca",fontWeight: "600", fontSize: "45px", lineHeight: "63px" ,gap: "20px"}}>Meet Our Leadership Team</h1></span>
            <span style={{ fontFamily:"Space Grotesk",fontWeight: "700",color : "#FFFFFF",lineHeight: "25px",fontSize: "20px",height:"25px",marginTop:"17px"}}>A team dedicated towards their customers</span>
      </div>
      </div>
    </div>
  )
}

export default Team;