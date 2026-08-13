import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import productSlice from "./customer/ProductSlice";
import authSlice from "./AuthSlice";
import cartSlice from "./customer/cartSlice";
import orderSlice from "./customer/orderSlice";
import wishlistSlice from "./customer/wishlistSlice";
import sellerOrderSlice from "./seller/sellerOrderSlice";
import transactionSlice from "./seller/transactionSlice";
import adminSlice from "./admin/adminSlice";
import homeSlice from "./customer/homeSlice";
import brandReducer from "../Brand/redux/brandSlice";
import dealSlice from "./admin/DealSlice";
import homepageReducer from "../Admins/HomepageBuilder/redux/homepageSlice";
import customerHomepageReducer from "./customer/customers/homepageSlice";
const rootReducer = combineReducers({
    seller:sellerSlice,
    sellerProduct: sellerProductSlice,
    product:productSlice,
    auth:authSlice,
    cart:cartSlice,
    order:orderSlice,
    wishlist:wishlistSlice,
    home:homeSlice,

    //seller
    sellerOrder:sellerOrderSlice,
    transaction:transactionSlice,

    //admin
    adminSlice:adminSlice,
    deal: dealSlice,
    homepageAdmin: homepageReducer,
    brand: brandReducer,

    // homepage: homepageReducer
    homepage: customerHomepageReducer,
    

});
const store = configureStore({
  reducer: rootReducer,
});
if (typeof window !== "undefined") {
  (window as any).store = store;
}
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export  const useAppDispatch =()=>useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState>=useSelector;
export default store;