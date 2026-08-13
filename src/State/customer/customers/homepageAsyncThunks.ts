import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/Api";
import { HomepageSection } from "../../../types/homepage";

export const fetchHomepage = createAsyncThunk<
    HomepageSection[]
>(
    "customerHomepage/fetchHomepage",
    async (_, { rejectWithValue }) => {

        try {

            const response = await api.get("/api/homepage");

            return response.data;

        } catch (error: any) {

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to fetch homepage"
            );

        }

    }
);