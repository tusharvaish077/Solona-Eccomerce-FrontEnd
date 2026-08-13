import { createSlice } from "@reduxjs/toolkit";
import { Brand } from "../../types/brandTypes";
import { fetchBrands } from "./brandAsyncThunk";

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

            .addCase(fetchBrands.pending, (state) => {

                state.loading = true;

            })

            .addCase(fetchBrands.fulfilled, (state, action) => {

                state.loading = false;

                state.brands = action.payload;

            })

            .addCase(fetchBrands.rejected, (state, action) => {

                state.loading = false;

                state.error = action.payload as string;

            });

    }

});

export default brandSlice.reducer;