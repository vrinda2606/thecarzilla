import React from 'react';
import { FAQContent } from '../utils/FAQContent';
import Accordian from './Accordian';
import { images } from '../utils/servicesContent';

const FAQ = () => {

  return (
    <>

     <div className='FAQ BlackBg'>
        <div className='HeadingBoxBlack'>
        <div className='HeadingBlackDiv'>
           <span className='BlackDivfirst'><hr/><p>FAQ'S</p><hr/></span>
           <span className='BlackDivMiddle'><h1>Frequently Asked Questions</h1></span>
           <span className='BlackDivLast'>A Team Dedicated Towards Their Customers</span>
        </div>
        </div>

       <div className='mainDivFAQ'>
        <div className='FAQS'>
          {
            FAQContent.map( (curEle) => {
                const {id} = curEle;
                return <Accordian key={id} {...curEle}/>
            })
          }
                  
        </div>

        <div className='FAQImage'>
            <img src={images[10].url} alt='' width='100%' height='100%' />
        </div>
       </div>
       
       <div className="buttonFAQ">
          <button className="btnFAQ">View More</button>
       </div>
        </div>
    </>
  )
}

export default FAQ;