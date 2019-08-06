import React, {useState, useEffect } from 'react';
import {getProducts} from './repositories/getProducts'
import ProductCategory from './components/product-category';
import SearchInput from './components/search-input';
import  Checkbox from './components/checkbox';
import {filterProducts, categorizeProduct} from './utility';
import './App.css';


function App() {
  const [allProducts, setAllProducts]=useState([]);
  const [filteredProduct, setFilteredProduct]=useState([]);
  const [onlyInStock, setOnlyInStock]=useState(false);
  const [searchText, setSearchText]=useState('');

  useEffect(() => {
    async function fetchProduct() {
      const response = await getProducts();
      setAllProducts(response);
      setFilteredProduct(response);
    }

    fetchProduct();
  }, []);

  const handleSearch=(searchText)=>{
    const filteredProduct=filterProducts(allProducts, searchText, onlyInStock);
    setSearchText(searchText);
    setFilteredProduct(filteredProduct);
  }

  const handleOnCheck=(isChecked)=>{
    const filteredProduct=filterProducts(allProducts, searchText, isChecked);

    setFilteredProduct(filteredProduct);
    setOnlyInStock(isChecked);
  }
  return (
    <div className="App">
      
      <div className="form-group">
        <SearchInput onSearch={(searchText)=>{handleSearch(searchText)}}/>
        <Checkbox onCheck={(isChecked)=>{handleOnCheck(isChecked)}} isChecked={onlyInStock}/>
        </div>
        <ProductCategory productList={categorizeProduct(filteredProduct)}/>
    </div>
  );
}

export default App;
