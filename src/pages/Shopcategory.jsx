import React, { useContext } from 'react';
import './CSS/Shopcategory.css'
import { ShopContext } from './../context/ShopContext';
import dropdown from '../components/Assets/dropdown_icon.png';
import Item from './../components/Item/Item';



function Shopcategory(props) {
    const {AllProduct}=useContext(ShopContext)
    return (
        <div className='shop-category'>
        <img src={props.banner} alt='' className='banner'/>
        <div className='shopCategory-indexSort'>
        <p>
        <span>Showing 1-12</span>out of 36 products
        </p>
        <div className='shopcategory-sort'>
        Sort by <img src={dropdown} alt=''/>
        </div>
        </div>
        <div className='shopCategoryProducts'>
        {AllProduct.map((item,i)=>{
            if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} 
                image={item.image}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}/>
            }
            else{
              return null  
            }
        })}
        </div>
        <div className='shopCategory-loading'>
        See more..
        </div>

            
        </div>
    );
}

export default Shopcategory;