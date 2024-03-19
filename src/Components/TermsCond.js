import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const TermsCond = () => {
  return (
    <>
       <div style={{backgroundImage: `url(${'../Images/TermsCond.jpeg'})`,backgroundSize: "cover",backgroundRepeat : "no-repeat", width: "100%",height: "590px",marginTop: "105px"}}>
        </div>

        <div className='BlackBg'>
            
        <div className='contactHeadingBlack'>
        <div className='HeadingBlackDiv'>
           <span className='BlackDivfirst'><hr/><p>BOOK YOUR DREAM CAR</p><hr/></span>
           <span style={{marginTop:"13px"}}><h1>Get Personalized Quote</h1></span>
           <span className='BlackDivLast'>Our experts will assist you personally</span>
        </div>
        </div>

            
            {/* <div style={{width: "501px",margin:"12px auto", height: "63px", textAlign: "center" }} >
            <button style={{fontFamily: 'Lexend Deca',lineHeight: '21px',letterSpacing: '0em',textAlign: 'center',fontSize: '15px',fontWeight: '400',backgroundColor: "white",width: "135px",height: "35px", color: "black",borderRadius: "10px",margin: "40px auto"}}>More Brands</button>
            </div>

            <div style={{width: "700px",backgroundColor: "white",margin:"51px auto", height: "3px"}} /> */}
            
        </div>

    </>
  )
}

export default TermsCond;