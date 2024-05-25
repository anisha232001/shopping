import React from 'react'
import Item from '../Item/Item';
import { dataProduct } from './../Assets/Data';
import './popular.css'

const Popular = () => {
  return (
    <div className='popular'>
    <h1>POPULAR IN WOMEN</h1>
    <hr/>
    <div className='popular-item'>
    {dataProduct.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} 
        image={item.image}
        newPrice={item.newPrice}
        oldPrice={item.oldPrice}/>
    })}
    </div>

      
    </div>
  )
}

export default Popular
