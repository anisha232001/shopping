import React ,{useContext}from 'react';
import './productDisplay.css';
import starIcon from '../Assets/star_icon.png';
import starDullIcon from '../Assets/star_dull_icon.png'
import { ShopContext } from './../../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='productDisplay'>
    <div className='productdisplay-left'>
    <div className='productdisplay-img-list'>
    <img src={product.image} alt=''/>
    <img src={product.image} alt=''/>
    <img src={product.image} alt=''/>
    <img src={product.image} alt=''/>
    
    </div>
    <div className='productdisplay-img'>
    <img src={product.image} alt='' className='productdisplay-main-img'/>
    </div>
    </div>
    <div className='productdisplay-right'>
    <h1>{product.name}</h1>
    <div className='productdisplay-right-star'>
    <img src={starIcon} alt=''/>
    <img src={starIcon} alt=''/>
    <img src={starIcon} alt=''/>
    <img src={starIcon} alt=''/>
    <img src={starDullIcon} alt=''/>
    <p>(134)</p>


    </div>
    <div className='productdisplay-right-prices'>
    <div className='productdisplay-right-price-old'>${product.oldPrice}</div>
    <div className='productdisplay-right-price-new'>${product.newPrice}</div>
    </div>
    <div className='productdisplay-right-description'>
    
    For those who want all goods and bads here they are:

    1. Build Quality
     On Ear headphones (not over ear headphones)
     Lighter overall weight than its competitors (187 grams)
     Neither too Sturdy not too Flimsy
     Foldable (earcups)
     Chance for fingerprint attraction
     Very precisely fits my beefy head
     Ear cups are soft and will suit if u have average sized ear
    </div>
    <div className='productdisplay-right-size'>
    <h1>Select Size</h1>
   <div className='productdisplay-right-sizes'>
   <div>S</div>
   <div>M</div>
   <div>L</div>
   <div>Xl</div>
   <div>Xxl</div>
   </div>
    </div>  
 <Link to='/cart'><button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button></Link>
    <p className='productdisplay-right-category'><span>Category:</span>Women,T-shirt,Crop</p>
    <p className='productdisplay-right-category'><span>Tags:</span>Modern,Latest</p>
    </div>
      
    </div>
  )
}

export default ProductDisplay
