import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
        <div style={{backgroundImage: `url(${'../Images/PrivacyPolicy.jpeg'})`,backgroundSize: "cover",backgroundRepeat : "no-repeat", width: "100%",height: "600px",marginTop: "105px"}}>
        </div>

        <div className='BlackBg' style={{height : '500px'}}>
            
        <div className='HeadingBoxBlack'>
        <div className='HeadingBlackDiv'>
           <span className='BlackDivfirst'><hr/><p>WE ARE DIFFERENT</p><hr/></span>
           <span className='BlackDivMiddle'><h1>Privacy Policy</h1></span>
           <span className='BlackDivLast'>Our way of delivering happiness is different!</span>
        </div>
        </div>
        
        <div className='DivContent' style={{height : '120px'}}>
        We at IgniteX Solutions Private Limited are committed to serving you better and value you as our customer/user of our website. We respect your right to privacy. This privacy policy directs the way in which TheCarzilla.in collects, uses, maintains and discloses information collected from you in the course of using the website <a href='https://thecarzilla.in/'> thecarzilla.in</a>. This privacy policy applies to the website of TheCarzilla.in and all the services offered by TheCarzilla.in.
        </div>
            
            <div className='btnForMoreDiv' >
            <button className='btnForMore'>Learn More</button>
            </div>

            <div style={{width: "700px",backgroundColor: "white",margin:"51px auto", height: "3px"}} />
            
        </div>
    </>
  )
}

export default PrivacyPolicy;