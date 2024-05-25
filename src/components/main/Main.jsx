import React from 'react'
import './Main.css';
import handIcon from '../Assets/hand_icon.png';
import ArrowIcon from '../Assets/arrow.png';
import HeroImage from '../Assets/hero_image.png'

const Main = () => {
  return (
    <div className='main'>
<div className='main-left'>
<h2>NEW ARRIVALS ONLY</h2>
<div className=''>
<div className='main-hand-icon'>
<p>new</p>
<img src={handIcon} alt=''/>

</div>
<p>collection </p>
<p>for everyone</p>
</div>
<div className='main-latest-btn'>
<div>Latest Collection</div>
<img src={ArrowIcon} alt=''/>
</div>
</div>
<div className='main-right'>
<img src={HeroImage} alt='' />

</div>
      
    </div>
  )
}
 
export default Main
