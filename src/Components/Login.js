import React from 'react';
import {NavLink} from "react-router-dom";
import { images } from '../utils/constants';

const Login = () => {
  return (
    <div className='login'>
       <div className='loginLogo'>
         <img src={images[24].url} alt='Login' style={{objectFit : 'contain',height: '100%',width : '100%'}} />
       </div>
       <div className='loginForm'>
           <div className='loginHeading'>
              <h1>Welcome To</h1>
              <h1>TheCarzilla.in</h1>
           </div>
           <div className='loginDetails'>
               <div className='loginDetailsDivI'>Login to Your Account</div>
               <div className='loginDetailsDivII'><p>Phone Number</p></div>
               <div className='loginDetailsDivIII'>
                     <select className='Country_code'>
                          <option value="default" selected>+91</option>
                     </select>
                     <input className='Phone_number_for_otp' type='number' placeholder='Enter your phone number'/>
               </div>
               <div className='loginDetailsDivIV'>
               <NavLink exact to='/Login/:OtpVerify' onClick={() => { window.scrollTo({top: 0,behavior: "smooth"})}}>
                  <button>Send OTP</button>
               </NavLink>
               </div>

           </div>
       </div>
    </div>
  )
}

export default Login;