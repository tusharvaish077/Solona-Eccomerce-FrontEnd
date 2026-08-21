import { createSlice } from "@reduxjs/toolkit";
import { Brand } from "../../types/brandTypes";

import {
    fetchBrands,
    createBrand,
    updateBrand,
    deleteBrand
} from "./brandAsyncThunk";

interface BrandState {
    brands: Brand[];
    loading: boolean;
    error: string | null;
}

const initialState: BrandState = {
    brands: [],
    loading: false,
    error: null
};

const brandSlice = createSlice({

    name: "brand",

    initialState,

    reducers: {},

    extraReducers: (builder) => {

        builder

            // =========================
            // FETCH BRANDS
            // =========================

            .addCase(fetchBrands.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchBrands.fulfilled, (state, action) => {
                state.loading = false;
                state.brands = action.payload;
            })

            .addCase(fetchBrands.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })


            // =========================
            // CREATE BRAND
            // =========================

            .addCase(createBrand.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(createBrand.fulfilled, (state, action) => {
                state.loading = false;

                state.brands.push(action.payload);
            })

            .addCase(createBrand.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })


            // =========================
            // UPDATE BRAND
            // =========================

            .addCase(updateBrand.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(updateBrand.fulfilled, (state, action) => {
                state.loading = false;

                state.brands = state.brands.map((brand) =>
                    brand.id === action.payload.id
                        ? action.payload
                        : brand
                );
            })

            .addCase(updateBrand.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })


            // =========================
            // DELETE BRAND
            // =========================

            .addCase(deleteBrand.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(deleteBrand.fulfilled, (state, action) => {
                state.loading = false;

                state.brands = state.brands.filter(
                    (brand) => brand.id !== action.payload
                );
            })

            .addCase(deleteBrand.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });

    }

});

export default brandSlice.reducer;