import React from 'react'
import './newcollection.css'
import newCollections from '../Assets/new_collections'
import Item from './../Item/Item';


const Newcollection = () => {
  return (
    <div className='new-collection'>
    <h1>NEW COLLECTIONS</h1>
    <hr/>
    <div className='collection'>
    {newCollections.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} 
        image={item.image}
        newPrice={item.new_price}
        oldPrice={item.old_price}/>
    })}
    </div>
      
    </div>
  )
}

export default Newcollection
