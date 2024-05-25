import React ,{useContext}from 'react';
import { ShopContext } from '../../context/ShopContext';
import removeIcon from '../Assets/cart_cross_icon.png'
import './cartItem.css'

const CartItem = () => {
    const {getTotalCartAmount,AllProduct,cartItems,removeCart}=useContext(ShopContext)
  return (
    <div className='cartitems'>
    <div className='cartitems-format-main'>
    <p>Product</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>

    </div>
    <hr/>
{AllProduct.map((e)=>{
    if(cartItems[e.id]>0)
    {
        return     <div className='cartitems-format cartitems-format-main' key={e.id}>
        <img src={e.image} alt='' className='cartIcon-product-icon'/>
        <p>{e.name}</p>
        <p>${e.newPrice}</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>${e.newPrice*cartItems[e.id]}</p>
        <img src={removeIcon} alt='' onClick={()=>{removeCart(e.id)}}  className='cartItems-remove-icon'/>
        </div>
    }
    return null;
})}
<div className='cartitems-down'>
<div className='caritems-total'>
<h1>Cart Totals</h1>

<div>
<div className='cartitems-total-item'>
<p>SubTotal</p>
<p>${getTotalCartAmount()}</p>

</div>
<hr/>
<div className='cartitems-total-item'>
<p>shipping Fee</p>
<p>Free</p>
</div>

<hr/>
<div className='cartitems-total-item'>
<h3>Total</h3>
<h3>${getTotalCartAmount()}</h3>
</div>
</div>
<button>PROCEED TO CHECKOUT</button>
</div>
<div className='cartitems-promocode'>
<p>If you have a promo code, Enter it here</p>
<div className='cartitem-promobox'>
<input type='text' placeholder='promo code'/>
<button>Submit</button>
</div>
      
    </div>
    </div>
    </div>
  )
}

export default CartItem
