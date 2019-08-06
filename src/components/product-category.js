import React from 'react';
import Product from './product'

const ProductCategory=(props)=>{
    
    return (
        props.productList.map((product)=>{
            return(<Product name={product.name} key={product.name}></Product>)
        })
    )
}

export default ProductCategory;