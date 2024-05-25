import React,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum/BreadCrum';
import Description from '../components/Description Box/Description';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import RelatedProduct from '../components/Related Products/RelatedProduct';
import { ShopContext } from './../context/ShopContext';

function Product(props) {
    const {AllProduct}=useContext(ShopContext)
    const {productId}=useParams()
    const product=AllProduct.find((e)=>e.id===Number(productId))
    return (
        <div>
            <BreadCrum product={product}/>
            <ProductDisplay product={product}/>
            <Description/>
            <RelatedProduct/>
        </div>
    );
}

export default Product;