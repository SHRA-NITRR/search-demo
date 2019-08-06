import React, {useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getProducts} from './repositories/getProducts'
import ProductCategory from './components/product-category';
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from './components/search-input';
import  Checkbox from './components/checkbox';
import {filterProducts, categorizeProduct} from './utility';
import './App.css';
import './radio.scss';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

function App() {
  const [allProducts, setAllProducts]=useState([]);
  const [filteredProduct, setFilteredProduct]=useState([]);
  const [loading, setLoading]=useState(false);
  const [onlyInStock, setOnlyInStock]=useState(false);
  const [searchText, setSearchText]=useState(false);

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
  const muiClasses=useStyles();

  return (
    <div className="App">
      
      <div >
        <SearchInput onSearch={(searchText)=>{handleSearch(searchText)}}/>
        <Checkbox onCheck={(isChecked)=>{handleOnCheck(isChecked)}} isChecked={onlyInStock}/>
        <ProductCategory productList={categorizeProduct(filteredProduct)}/>

          {
            loading&&
            <div className='loading-indicator'>
              <CircularProgress className={muiClasses.progress}/>
            </div>
          }
      </div>
    </div>
  );
}

export default App;
