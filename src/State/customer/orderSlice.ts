import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderItem, OrderState } from "../../types/orderTypes";
import { api } from "../../config/Api";
import { Address } from "../../types/userTypes";
import axios from "axios";

const initialState: OrderState ={
    orders:[],
    orderItem : null,
    currentOrder :null,
    paymentOrder: null,
    loading: false,
    error: null,
    orderCancelled: false
}

const API_URL = "/orders";

export const fetchUserOrderHistory = createAsyncThunk<Order[], string>
        ("orders/fetchUserOrderHistory", 
            async(jwt, {rejectWithValue})=>{
                try {
                    const response = await api.get(`${API_URL}/user`,{
                        headers:{Authorization:`Bearer ${jwt}`},
                    });
                    console.log("order history fetched ", response.data);
                    return response.data;
                } catch (error: any) {
                    console.log("error ", error.response);
                    return rejectWithValue(error.response.data.error || "Failed to fetch order history");
                }
            }
        );

export const fetchorderById = createAsyncThunk<Order, {orderId:number; jwt: string}>
        ("orders/fetchOrderById", 
            async({orderId,jwt}, {rejectWithValue})=>{
                try {
                    const response = await api.get<Order>(`${API_URL}/${orderId}`,{
                        headers:{Authorization:`Bearer ${jwt}`},
                    });
                    console.log("order fetched ", response.data);
                    return response.data;
                } catch (error: any) {
                    console.log("error ", error.response);
                    return rejectWithValue(error.response.data.error || "Failed to fetch order");
                }
            }
        );

export const fetchOrderItemById = createAsyncThunk<OrderItem, {orderItemId:number; jwt: string}>
        ("orders/fetchOrderItemById", 
            async({orderItemId,jwt}, {rejectWithValue})=>{
                try {
                    const response = await api.get<OrderItem>(`${API_URL}/${orderItemId}`,{
                        headers:{Authorization:`Bearer ${jwt}`},
                    });
                    console.log("order item fetched ", response.data);
                    return response.data;
                } catch (error: any) {
                    console.log("error ", error.response);
                    return rejectWithValue("Failed to fetch order");
                }
            }
        );

export const createOrder = createAsyncThunk<any, {address:Address; jwt:string; paymentGateway: string}>
        ("orders/createOrder", 
            async({address,jwt, paymentGateway}, {rejectWithValue})=>{
                try {
                    const response = await api.post(`${API_URL}`,address,{
                        headers:{Authorization:`Bearer ${jwt}`},
                        params:{paymentMethod : paymentGateway}
                    });
                    console.log("order created ", response.data);
                    if(response.data.payment_link_url){
                        window.location.href = response.data.payment_link_url;
                    }
                    return response.data;
                } catch (error: any) {
                    console.log("error ", error.response);
                    return rejectWithValue(error.response.data.error || "Failed to fetch order");
                }
            }
        );


export const paymentSuccess = createAsyncThunk<any,
 {paymentId: string; jwt: string; paymentLinkId: string},
 {rejectValue: string}>
        ("orders/paymentSuccess", 
            async({paymentId,jwt, paymentLinkId}, {rejectWithValue})=>{
                try {
                    const response = await api.get(`payment/${paymentId}`,{
                        headers:{Authorization:`Bearer ${jwt}`},
                        params:{paymentLinkId}
                    });
                    console.log("payment success", response.data);
                    
                    return response.data;
                } catch (error: any) {
                    console.log("error ", error.response);
                    if(error.response){
                        return rejectWithValue(error.response.data.message);
                    }
                    return rejectWithValue(error.response.data.error || "Failed to Process Payment");
                }
            }
        );

export const cancelOrder = createAsyncThunk<Order,any>
        ("orders/cancelOrder", 
            async(orderId, {rejectWithValue})=>{
                try {
                    const response = await api.put(`${API_URL}/${orderId}/cancel`,{},{
                        headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}}`}
                    });
                    console.log("cancel order ", response.data);
                    return response.data;
                } catch (error: any) {
                    console.log("error ", error.response);
                    if(axios.isAxiosError(error) && error.response){
                        return rejectWithValue(error.response.data);
                    }
                    return rejectWithValue("An error occured while cancelling the order. ");
                }
            }
        );

const orderSlice = createSlice({
    name:"orders",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(fetchUserOrderHistory.pending, (state) =>{
                state.loading = true;
                state.error = null;
                state.orderCancelled = false;
            })
            .addCase(fetchUserOrderHistory.fulfilled, (state, action: PayloadAction<Order[]>) =>{
                state.orders = action.payload;
                state.loading = false;
            })
            .addCase(fetchUserOrderHistory.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload as string;
            })
            //fetch order by id
            .addCase(fetchorderById.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchorderById.fulfilled, (state, action: PayloadAction<Order>)=>{
                state.currentOrder = action.payload;
                state.loading =false;
            })

            .addCase(fetchorderById.rejected, (state, action)=>{
                state.loading = false;
                state.error =action.payload as string;
            })
            //create a new order

            .addCase(createOrder.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state, action: PayloadAction<any>)=>{
                state.paymentOrder = action.payload;
                state.loading = false;
            })
            .addCase(createOrder.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload as string;
            })

            //fetch OrderItemById 
            .addCase(fetchOrderItemById.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOrderItemById.fulfilled, (state, action)=>{
                state.orderItem = action.payload;
                state.loading = false;
            })
            .addCase(fetchOrderItemById.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload as string;
            }) 

            //payment success handle 
            .addCase(paymentSuccess.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(paymentSuccess.fulfilled, (state, action)=>{
                //payment success
                console.log("Payment Successful: ",action.payload);
                state.loading = false;
            })
            .addCase(paymentSuccess.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload as string;
            })
            
            //Cancel Order handler
            .addCase(cancelOrder.pending, (state)=>{
                state.loading = true;
                state.error = null;
                state.orderCancelled = false;
            })
            .addCase(cancelOrder.fulfilled, (state, action)=>{
                state.loading = false;
                state.orders = state.orders.map((order)=>{
                    return order.id === action.payload.id? action.payload:order;
                })
                state.orderCancelled = true;
                state.currentOrder= action.payload;
            })
            .addCase(cancelOrder.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

export default orderSlice.reducer;