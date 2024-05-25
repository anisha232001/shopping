import React from 'react'
import { dataProduct } from './../Assets/Data';
import Item from './../Item/Item';
import './relatedproduct.css'

const RelatedProduct = () => {
  return (
    <div className='realatedProducts'>
    <h1>Related Product</h1>
    <hr/>
    <div className='relatedProducts-item'>
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

export default RelatedProduct
