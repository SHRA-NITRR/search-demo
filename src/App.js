import React, {useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getProducts} from './repositories/getProducts'
import ProductCategory from './components/product-category';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import './radio.scss';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

function App() {
  const [allProducts, setAllProducts]=useState([]);
  const [loading, setLoading]=useState(false);
  useEffect(() => {
    async function fetchProduct() {
      const response = await getProducts();
      setAllProducts(response);
    }

    fetchProduct();
  }, []);


console.log(allProducts);

  const muiClasses=useStyles();

  return (
    <div className="App">
      
      <div >
      <ProductCategory productList={allProducts}/>

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
