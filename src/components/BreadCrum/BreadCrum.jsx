import React from 'react';
import arrowIcon from '../Assets/breadcrum_arrow.png';
import './bredcrum.css'

const BreadCrum = (props) => {
    const {product}=props
  return (
    <div className='breadcrum'>
    Home<img src={arrowIcon} alt=''/> SHOP<img src={arrowIcon} alt=''/>{product.category}<img src={arrowIcon} alt=''/>{product.name}
      
    </div>
  )
}

export default BreadCrum
