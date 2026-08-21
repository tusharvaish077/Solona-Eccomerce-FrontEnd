import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Brand } from "../../types/brandTypes";


// ===============================
// FETCH ALL BRANDS
// ===============================

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


// ===============================
// CREATE BRAND
// ===============================

export const createBrand = createAsyncThunk<
    Brand,
    any
>(
    "brand/createBrand",

    async (request, { rejectWithValue }) => {

        try {

            const response = await api.post(
                "/admin/brands",
                request
            );

            return response.data;

        } catch (error: any) {

            console.log(error);

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to create brand"
            );
        }
    }
);


// ===============================
// UPDATE BRAND
// ===============================

export const updateBrand = createAsyncThunk<
    Brand,
    { id: number; request: any }
>(
    "brand/updateBrand",

    async ({ id, request }, { rejectWithValue }) => {

        try {

            const response = await api.put(
                `/admin/brands/${id}`,
                request
            );

            return response.data;

        } catch (error: any) {

            console.log(error);

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to update brand"
            );
        }
    }
);


// ===============================
// DELETE BRAND
// ===============================

export const deleteBrand = createAsyncThunk<
    number,
    number
>(
    "brand/deleteBrand",

    async (id, { rejectWithValue }) => {

        try {

            await api.delete(
                `/admin/brands/${id}`
            );

            return id;

        } catch (error: any) {

            console.log(error);

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to delete brand"
            );
        }
    }
);