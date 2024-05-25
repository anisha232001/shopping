import React from 'react';
import './newletter.css'

const Newletter = () => {
  return (
    <div className='newsletter'>
    <h1>Get exclusive Offers On Your Email</h1>
    <p>Subscribe to your newsLetter and stay updated</p>
    <div>
    <input type='email' placeholder='Your Email id'/>
    <button>Subscribe</button>
    </div>
      
    </div>
  )
}

export default Newletter
