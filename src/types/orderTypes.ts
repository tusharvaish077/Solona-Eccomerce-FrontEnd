import { Product } from "./ProuductTypes";
import { Address, User } from "./userTypes";

export interface OrderState{
    orders: Order[];
    orderItem: OrderItem|null;
    currentOrder: Order | null;
    paymentOrder: any | null;
    loading: boolean;
    error: string | null;
    orderCancelled: boolean;
}

export interface Order{
    id: number;
    orderId: string;
    user : User;
    sellerId: number;
    orderItems: OrderItem[];
    orderDate: string;
    shippingAddress : Address;
    paymentDetais: any;
    totalMrpPrice: number;
    totalSellignPrice?: number;
    discount: number;
    orderStatus: OrderStatus;
    totalItem: number;
    deliverDate: String;
}

export enum OrderStatus{
        PENDING ='PENDING',
        SHIPPED ='SHIPPED',
        DELIVERED = 'DELIVERED',
        CANCELLED ='CANCELLED',
}
export interface OrderItem{
    id: number;
    order: Order;
    product: Product;
    size :string;
    quantity: number;
    mrpPrice : number;
    sellingPrice: number;
    userId: number;
}