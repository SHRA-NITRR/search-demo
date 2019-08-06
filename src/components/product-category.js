import React from 'react';
import Product from './product'

const ProductCategory=(props)=>{
    
    return (
        Object.keys(props.productList).map((category)=>{
            return (
                <div key={category}>
                <h2>{category}</h2>
                    {
                        props.productList[category].map((product)=>{
                            return(<Product productDetails={product} key={product.name}></Product>)
                        })
                    }
                </div>
            )

        })
    )
}

export default ProductCategory;