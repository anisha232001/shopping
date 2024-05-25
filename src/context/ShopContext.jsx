import { createContext,useState } from "react";
import { AllProduct } from './../components/Assets/Allproduct';
import All from './../pages/All';



export const ShopContext=createContext(null)

const getDefaultCart=()=>{
    let cart={}
    for(let index=0;index<AllProduct.length+1;index++){
        cart[index]=0
    }
    return cart
}

const ShopcontextProvider=(props)=>{

    const [cartItems,setCartItems]=useState(getDefaultCart())

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }

    const removeCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=AllProduct.find((product)=>product.id===Number(item))
                totalAmount +=itemInfo.newPrice*cartItems[item]
            }
        }
        return totalAmount;

    }
    const getTotalcartItems=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue={getTotalCartAmount,AllProduct,cartItems,addToCart,removeCart,getTotalcartItems}

    return(
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}
export default ShopcontextProvider;