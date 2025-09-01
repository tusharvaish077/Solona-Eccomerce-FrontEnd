import { CartItem } from "../types/cartType";

export const sumCartItemSellignPrice=(cartItems: CartItem[])=>{
    return cartItems.reduce((acc,item)=>acc+item.sellingPrice*item.quantity,0);
}