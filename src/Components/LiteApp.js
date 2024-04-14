import React from 'react';

const LiteApp = () => {
  return (
    <div className='WhiteBg AppLite' style={{height: "40vw"}}>
           <div className='appLite'>
                <div className='appLiteHeading'>
                    <div className='headingBoxWhite'>
                    <div className='HeadingWhiteDiv'>
                      <span className='WhiteDivfirst'><hr/>COMING SOON<hr/></span>
                      <span className='WhiteDivMiddle'><h1>TheCarzilla.in </h1></span>
                      <span className='WhiteDivLast' style={{color : "#000000"}}>One stop solution app for all your car needs</span>
                    </div>
                    </div>
                </div>

                <div className="buttonContactApp">
                    <button className="btnContactApp">Coming Soon</button>
                </div>

                <p className='para'>An App that caters all your car needs, Including Genuine Spare Parts, Fastag Recharge & many more</p>
                <h6>Soon Available on</h6>
                <div className='playStore'>
                    <div className="playStoreBtnI"></div>
                   <div className='playStoreBtnII'></div>
                </div>
           </div>
           <div className='mobileApp' >
                {/* <img className='mobileAppBg' src='../Images/LiteAppBg.png' alt='' />
                <img className='LiteAppBgPhone' src='../Images/LiteAppBgPhone.png' alt=''/> */}
           </div>
    </div>
  )
}

export default LiteApp;