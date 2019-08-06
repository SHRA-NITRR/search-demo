export const filterProducts=(initialData, searchText='', onlyInStock)=>{
    const  regex = new RegExp("^" + searchText, "i");
    
    const filterOnlyInStock=(filteredOnSearch)=>{
        return filteredOnSearch.filter(product=>product.stocked);
    }
    const filteredOnSearch= initialData.filter((product)=>regex.test(product.name));
    
    return onlyInStock? filterOnlyInStock(filteredOnSearch): filteredOnSearch;
}

export const categorizeProduct=(products)=>{
    const categorizedProducts={};

    products.forEach((product)=>{
        if(categorizedProducts.hasOwnProperty(product.category)){
            categorizedProducts[product.category].push(product);
        }else{
            categorizedProducts[product.category]=[product];        
        }
        
    })
    return categorizedProducts;
}