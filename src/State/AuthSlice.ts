import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/Api";
import { User } from "../types/userTypes";
import { stat } from "fs";

export const sendLoginSignupOtp =createAsyncThunk("/auth/sendLoginSignupOtp",
    async({email,role}:{email:string,role:string}, {rejectWithValue})=>{
        try {
            const response = await api.post("/auth/sent/login-signup-otp",{email,role})
            console.log("login otp",response);
            return response.data;
        } catch (error:any) {
            console.log("error ---- > ", error);
            return rejectWithValue(error.response.data.error||'Failed to send OTP');
        }
    }
)
export const signin =createAsyncThunk<any, any>("/auth/signin",
    async(loginRequest, {rejectWithValue})=>{
        try {
            const response = await api.post("/auth/signin",loginRequest)
            console.log("login otp",response.data);
            localStorage.setItem("jwt",response.data.jwt);
            return response.data.jwt;

        } catch (error) {
            console.log("error ---- > ", error);
        }
    }
)

export const signup =createAsyncThunk<any, any>("/auth/signup",
    async(signupRequest, {rejectWithValue})=>{
        try {
            const response = await api.post("/auth/signup",signupRequest);
            signupRequest.navigate("/");
            console.log("login otp",response.data);
            localStorage.setItem("jwt",response.data.jwt);
            return response.data.jwt;

        } catch (error) {
            console.log("error ---- > ", error);
        }
    }
)
export const fetchUserProfile =createAsyncThunk<any, any>("/api/users/profile",
    async({jwt}, {rejectWithValue})=>{
        try {
            const response = await api.get("/users/profile",{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            })
            console.log("user profile",response.data);
           
            return response.data;

        } catch (error) {
            console.log("error ---- > ", error);
        }
    }
)

export const logout = createAsyncThunk<any,any>("/auth/logout",
    async(navigate,{rejectWithValue})=>{
        try {
            localStorage.clear();
            console.log("logout success");
            navigate("/")
        } catch (error) {
            console.log("/")
        }
    }
)
interface AuthSate{
    jwt:String|null,
    otpSent:boolean,
    isLoggedIn:boolean,
    user:User |null,
    loading:boolean
    error:String|null
}
const initialState:AuthSate={
    jwt:null,
    otpSent:false,
    isLoggedIn:false,
    user:null,
    loading:false,
    error: null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(sendLoginSignupOtp.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(sendLoginSignupOtp.fulfilled, (state)=>{
            state.loading = false;
            state.otpSent = true;
        })
        builder.addCase(sendLoginSignupOtp.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })
        builder.addCase(signin.pending,(state,action)=>{
            state.loading = true;
            state.isLoggedIn = true;
        })      
        builder.addCase(signin.fulfilled,(state,action)=>{
            state.jwt=action.payload;
            state.isLoggedIn = true;
        })       
         builder.addCase(signup.rejected,(state,action)=>{
            state.isLoggedIn = false;
            state.error = action.payload as string;
        })       
        builder.addCase(fetchUserProfile.pending,(state)=>{
            state.loading= true;
            state.isLoggedIn= false;
            state.user=null;
        }) 
        builder.addCase(fetchUserProfile.fulfilled,(state,action)=>{
            state.user = action.payload;
           state.loading=false;
        })
        builder.addCase(fetchUserProfile.rejected,(state,action)=>{
           state.loading = false;
           state.user= null;
           state.isLoggedIn= false;
           state.error = action.payload as String;
        })
        builder.addCase(logout.fulfilled,(state)=>{
            state.jwt=null
            state.isLoggedIn = false;
            state.user = null;
        })
    }
})
export default authSlice.reducer;