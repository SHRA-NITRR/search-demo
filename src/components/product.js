import React from 'react';


const Product=(props)=>{
    const {name, price, stocked}=props.productDetails;
    return( 
            <div className='panel panel-default'>
               <div className="panel-body product-details">
                    <span className={stocked?'prd-name':'prd-name text-danger'}>{name}</span>
                    <span className='prd-price'>{price}</span>
                </div>
               
            </div>
        )
}

export default Product;