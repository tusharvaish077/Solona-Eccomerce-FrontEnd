import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './Theme/theme';
// @ts-ignore: CSS module declarations are not available in this TS config
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/ProductDetails/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BecomeSeller from './customer/pages/Become Seller/BecomeSeller';
import SellerDashboard from './seller/Pages/SellerDashboard/SellerDashboard';
import AdminDashboard from './admin/Pages/Dashboard/AdminDashboard';
import { fetchProducts } from './State/fetchProduct';
import { useAppDispatch, useAppSelector } from './State/Store';
import { fetchSellerProfile } from './State/seller/sellerSlice';
import Auth from './customer/pages/Auth/Auth';
import { fetchUserProfile } from './State/AuthSlice';
import PaymentSuccess from './customer/pages/Checkout/PaymentSuccess';
import Wishlist from './customer/pages/Wishlist/Wishlist';
import { getWishlistByUserId } from './State/customer/wishlistSlice';
import { createHomeCategories, fetchHomePageData } from './State/customer/customers/asyncThunks';
import { homeCategories } from './data/HomeCategories';
import HomepageManagement from './Admins/HomepageBuilder/pages/HomepageManagement';



function App() {
  const dispatch = useAppDispatch();
  const {seller,auth} = useAppSelector(store =>store)
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(fetchSellerProfile(localStorage.getItem("jwt")||""));
    dispatch(createHomeCategories(homeCategories));
    //  this line creating bug,
    // this code is creating seed data which is incorrect. This need to be done by backend only
  },[]);

  useEffect(()=>{
    if(seller.profile){
      navigate("/seller");
    }
  },[seller.profile]);

  useEffect(()=>{
    dispatch(fetchUserProfile({jwt:auth.jwt || localStorage.getItem("jwt") || ""}));
     console.log("Dispatching fetchHomePageData...");
    dispatch(fetchHomePageData())
  },[auth.jwt])



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
     {/* <Checkout/> */}
     {/* <Account/> */}

      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/login" element={<Auth/>}/>
        <Route path ="/products/:category" element={<Product/>}/>
        <Route path ="/reviews/:productId" element={<Review/>}/>
        <Route path ="/product-details/:category/:name/:productId" element={<ProductDetails/>}/>
        <Route path ="/cart" element={<Cart/>}/>
        <Route path ="/wishlist" element={<Wishlist/>}/>
        <Route path ="/checkout" element={<Checkout/>}/>
        <Route path ="/payment-success/:orderId" element={<PaymentSuccess/>}/>
        <Route path ="/account/*" element={<Account/>}/>
        <Route path ="/become-seller/*" element={<BecomeSeller/>}/>
        <Route path ="/seller/*" element={<SellerDashboard/>}/>
        <Route path ="/admin/*" element={<AdminDashboard/>}/>
        <Route path="/admin/homepage" element={<HomepageManagement />} />
      </Routes>


   </div>
   
</ThemeProvider>
   
  );
}

export default App;
