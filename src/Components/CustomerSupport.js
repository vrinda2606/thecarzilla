import React from 'react'

const CustomerSupport = () => {
  return (
    <>
        <div style={{backgroundImage: `url(${'../Images/CustomerSupport.png'})`,backgroundSize: "cover",backgroundRepeat : "no-repeat", width: "100%",height: "690px",marginTop: "10px"}}>
        </div>

        <div className='BlackBg' style={{height : '588px'}}>
            
        <div className='HeadingBoxBlack'>
        <div className='HeadingBlackDiv'>
           <span className='BlackDivfirst'><hr/><p>UNMATCHED SUPPORT</p><hr/></span>
           <span className='BlackDivMiddle'><h1>Customer Support</h1></span>
           <span className='BlackDivLast'>Your satisfaction is our destination</span>
        </div>
        </div>
        
        <div className='DivContent' style={{height : '210px'}}>
        TheCarzilla.in is the beginning of a new era. One that is built on the foundation of transparent and meaningful automotive content in India. At TheCarzilla.in we will bring you the latest news, reviews, tech content and more to help you get closer to your buying decision.
        <br />
        TheCarzilla.in also promises to give the best prices and fastest delivery of your dream new car. 
        <br />TheCarzilla.in thus provides you with what you want - Credible reviews, exclusive content and cars at best prices!
        </div>
            
            <div className='btnForMoreDiv' >
            <button className='btnForMore'>Learn More</button>
            </div>

            <div style={{width: "700px",backgroundColor: "white",margin:"51px auto", height: "3px"}} />
            
        </div>

        <div className='getInTouch'>
            
        </div>
    </>
  )
}

export default CustomerSupport;