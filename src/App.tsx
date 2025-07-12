import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './Theme/theme';
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import Home from './customer/pages/Home/Home';
import ShopByCategory from './customer/pages/ShopByCategory/ShopByCategory';

function App() {
  return (
    
<ThemeProvider theme={theme}>
  <CssBaseline />
  {/* start */}
  <div className="">
     <Navbar/>
     <Home/>
     <ShopByCategory/>
   </div>
   {/* end these block are wrapped in custom theme teal */}
</ThemeProvider>
   
  );
}

export default App;
