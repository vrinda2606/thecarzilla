import React from 'react';
import {NavLink} from "react-router-dom";

const Login = () => {
  return (
    <div className='login'>
       <div className='loginLogo'></div>
       <div className='loginForm'>
           <div className='loginHeading'>
              <h1>Welcome To</h1>
              <h1>TheCarzilla.in</h1>
           </div>
           <div className='loginDetails'>
               <div className='loginDetailsDivI'>Login to Your Account</div>
               <div className='loginDetailsDivIII'>
                    <input className='otp_for_verification' type='number' placeholder='Enter OTP'/>
               </div>
               <div className='loginDetailsDivIV'>
               <NavLink exact to='/Home' onClick={() => { window.scrollTo({top: 0,behavior: "smooth"})}}>
                  <button>Verify OTP</button>
               </NavLink>
               </div>
               <div className='loginDetailsDivV'><button>Resend Code</button></div>
           </div>
       </div>
    </div>
  )
}

export default Login;