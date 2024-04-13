import React from 'react';
import { images } from '../utils/servicesContent';

const Services = () => {
  return (
    <>
      <div className='servicesI'>
         <div className='servicesIImage'>
            <img src={images[0].url} alt='Services' style={{objectFit : 'contain',height: '100%',width : '100%'}}/>
         </div>
         <div className='servicesIContent'>
            <div className='servicesIContentHeading'>
              <h1>Enhance your ride with our diverse services</h1>
              <p>Choose from a diverse range of a car service designed to maintain and enhance your car journey</p>
            </div>
            <div className='servicesIContentIcons'>
               <div className='servIContentIcon'>
                 <div className='servIIconDiv'><img src={images[1].url} alt='Services' style={{objectFit : 'contain',height: '70%',width : '70%'}}/></div>
                 <div className='servIIconHeading'><h2>Fair</h2></div>
                 <div className='servIIconPara'><p>Price Guaranteed</p></div>
               </div>
               <div className='servIContentIcon'>
                 <div className='servIIconDiv'><img src={images[2].url} alt='Services' style={{objectFit : 'contain',height: '70%',width : '70%'}}/></div>
                 <div className='servIIconHeading'><h2>Support</h2></div>
                 <div className='servIIconPara'><p>Dedicated Team</p></div>
               </div>
               <div className='servIContentIcon'>
                 <div className='servIIconDiv'><img src={images[3].url} alt='Services' style={{objectFit : 'contain',height: '70%',width : '70%'}}/></div>
                 <div className='servIIconHeading'><h2>Data</h2></div>
                 <div className='servIIconPara'><p>Data Security</p></div>
               </div>
            </div>
         </div>
      </div>

      <div className='servicesII BlackBg'>
            <div className='WhiteHr' style={{margin : "1.2vw auto 0vw"}}/>
            <div style={{width: "35vw",margin:"1vw auto", height: "3.7vw", textAlign: "center" }} >
               <h1 style={{alignContent: "center",fontWeight: "700" ,fontFamily:"Lexend Deca", color: "white",lineHeight: "3.7vw",fontSize: "3vw" }}>What We Promise</h1>
            </div>

            <div className='servicesIIContent'>
                <div className='servIIcon'>
                    <div className='servIIDivIcon'><img src={images[4].url} alt='' width='70%' height='70%'/></div>
                    <div className='servIIDivHeading'><h1>Privacy</h1></div>
                    <div className='servIIDivContent'><p>Personal information and car records are kept strictly confidential.</p></div>
                </div>
                <div className='servIIcon'>
                    <div className='servIIDivIcon'><img src={images[5].url} alt='' width='70%' height='70%'/></div>
                    <div className='servIIDivHeading'><h1>Support</h1></div>
                    <div className='servIIDivContent'><p>Dedicated team available to assist you with any car-related queries.</p></div>
                </div>
                <div className='servIIcon'>
                    <div className='servIIDivIcon'><img src={images[6].url} alt='' width='70%' height='70%'/></div>
                    <div className='servIIDivHeading'><h1>Instant Service</h1></div>
                    <div className='servIIDivContent'><p>Book car services anytime, anywhere, with Instant Service at your fingertips!</p></div>
                </div>
                <div className='servIIcon'>
                    <div className='servIIDivIcon'><img src={images[7].url} alt='' width='70%' height='70%'/></div>
                    <div className='servIIDivHeading'><h1>Fair Price</h1></div>
                    <div className='servIIDivContent'><p>Enjoy transparent pricing and value-for-money services.</p></div>
                </div>
            </div>

            <div className='btnForMoreDiv'>
            <button className='btnForMore'>More Services</button>
            </div>
            <div className='WhiteHr'/>
      </div>

      <div className='servicesIII WhiteBg' style={{backgroundColor : "white"}}>
        <div className='servicesIIIContent'>
          <div className='headingBoxWhite'>
          <div className='HeadingWhiteDiv'>
            <span className='WhiteDivfirst'><hr/>Why Choose Us <hr/></span>
            <span className='WhiteDivMiddle'><h1>About the Process</h1></span>
            <span className='WhiteDivLast'>Buy your dream car in just three easy steps</span>
          </div>
          </div>
        
          <div className='servIIIDivIcon'>
            <img src={images[8].url} alt='' width='43%' height='75%' style={{marginLeft: '3vw'}}/>
            <img src={images[9].url} alt='' width='40%' height='70%'style={{marginTop : '1vw',marginRight : '3vw'}}/>
          </div>

        </div>
      </div>
    </>
  )
}

export default Services;