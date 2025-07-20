import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './Theme/theme';
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/ProductDetails/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';


function App() {
  return (
    
<ThemeProvider theme={theme}>
  <CssBaseline />
  {/* start */}
  <div className="">
     <Navbar/>
     {/* <Home/> */}
     {/* <Product/> */}
     {/* <ProductDetails/> */}
     {/* <Review/> */}
     {/* <Cart/> */}
     <Checkout/>
   </div>
   
</ThemeProvider>
   
  );
}

export default App;
