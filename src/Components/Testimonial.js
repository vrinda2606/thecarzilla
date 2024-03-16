import React from 'react'

const Testimonial = () => {
  return (
    <div style={{width:"100%",height: "745px",backgroundColor: "#F6F7F9"}}>
        <div className='headingBox' style={{padding: "2px",margin: "auto"}}>
        <div style={{ width: "700px", height: "145px", margin: "46px auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{marginTop: "0px",display: "flex", alignItems: "center" }}><hr style={{width: "16px",border: "1px solid black",margin: "auto 10px"}}/>Reviews<hr style={{width: "16px",border: "1px solid black",margin: "auto 10px"}}/></span>
              <span style={{marginTop:"13px"}}><h1 style={{ fontWeight: "600", fontSize: "45px", lineHeight: "63px" ,gap: "20px"}}>What Customer say about us?</h1></span>
              <span style={{fontWeight: "700",color : "#7F808E",lineHeight: "25px",fontSize: "20px",height:"25px",marginTop:"17px"}}>Delivering happiness</span>
        </div>
        </div>
    </div>
  )
}

export default Testimonial;