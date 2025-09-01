import { Product } from "./ProuductTypes";
import { User } from "./userTypes";

export interface CartItem{
    id:number;
    cart?: CartItem;
    product:Product;
    size:String;
    quantity: number;
    mrpPrice:number;
    sellingPrice: number;
    userId:number;
}

export interface Cart{
    id:number;
    user:User;
    cartItems: CartItem[];
    totalSellingPrice:number;
    totalItem:number;
    totalMrpPrice:number;
    disxount:number;
    couponCode:string | null;
    
}