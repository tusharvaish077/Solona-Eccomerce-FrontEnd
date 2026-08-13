import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Brand } from "../../types/brandTypes";
export const fetchBrands = createAsyncThunk<Brand[]>(
    "brand/fetchBrands",

    async (_, { rejectWithValue }) => {

        try {

            const response = await api.get("/api/brands");

            return response.data;

        } catch (error: any) {

            console.log(error);

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to fetch brands"
            );

        }

    }
);