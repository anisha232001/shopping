import React, { useState ,useContext} from 'react'
import logo from '../Assets/logo.png';
import cartIcon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { ShopContext } from './../../context/ShopContext';

const Navbar = () => {
    const [menu,setMenu]=useState("shop");
    const {getTotalcartItems}=useContext(ShopContext)
  return (
    <div className='navbar'>
    <div className='nav-logo'>
    <img src={logo} alt=""/>
    <p>E-Commerce</p>
    </div>
      <ul className='nav-menu'>
      <li onClick={()=>{setMenu("shop")}}>
      <Link style={{textDecoration:'none'}} to='/'>All</Link>{menu==='shop'?<hr/>:<></>}</li>
      
      <li onClick={()=>{setMenu("mens")}}>
      <Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
      
      <li onClick={()=>{setMenu("womens")}}>
      <Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
      
      <li onClick={()=>{setMenu("kids")}}>
      <Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>

      </ul>
      <div className='nav-login-cart'>
      <Link to='/login'><button>Login</button></Link>
      <Link to='/cart'><img src={cartIcon} alt=''/>
      </Link>
      <div className='nav-cart-count'>{getTotalcartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
