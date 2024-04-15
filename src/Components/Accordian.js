import React, { useState } from 'react'

const Accordian = ( {ques , ans} ) => {

  const [show , setShow] = useState(false);
 
  return (
    <>
      <div className='FAQQues'>
         <div>
          <p onClick={() => setShow(!show)}> {show ? '-' : '+'} </p>
         </div>
         <h3>{ques}</h3>
      </div>
      {show && <p className='FAQAns'>{ans}</p>}
      <hr className='FAQHr'/>
    </>
  )
}

export default Accordian;