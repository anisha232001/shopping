import React ,{useState} from 'react';
import './CSS/LoginSignup.css'

function LoginSignup(props) {
    const[state,setState]=useState('Login')
    return (
        <div className='loginsignup'>
        <div className='loginSignup-container'>
        <h1>SignUp</h1>
        <div className='loginSignup-fields'>
        <input type='text' placeholder='Your name'/>
        <input type='email' placeholder='Email Address'/>
        <input type='password' placeholder='Password'/>

        </div>
        <button>Continue..</button>
        <p className='loginsignup-login'><span>Already have an account?</span></p>
        <div className='loginsignup-agree'>
        <input type='checkbox' name='' id=''/>
        <p>By continuing ,i agree terms of use & privacy policy </p>
        </div>
        </div>
            
        </div>
    );
}

export default LoginSignup;