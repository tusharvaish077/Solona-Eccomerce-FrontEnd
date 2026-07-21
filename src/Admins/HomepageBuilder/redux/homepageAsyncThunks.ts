import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/Api";
import { HomepageSection } from "../types/homepage";

export const fetchHomepageSections = createAsyncThunk<
    HomepageSection[]
>(
    "homepage/fetchSections",
    async (_, { rejectWithValue }) => {
        try {

            const response = await api.get("/admin/homepage/sections");

            return response.data;

        } catch (error: any) {

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to fetch homepage sections"
            );

        }
    }
);

export const createHomepageSection = createAsyncThunk<
    HomepageSection,
    any
>(
    "homepage/createSection",
    async (request, { rejectWithValue }) => {

        try {

            const response = await api.post(
                "/admin/homepage/sections",
                request
            );

            return response.data;

        } catch (error: any) {

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to create homepage section"
            );

        }
    }
);

export const updateHomepageSection = createAsyncThunk<
    HomepageSection,
    { id: number; request: any }
>(
    "homepage/updateSection",
    async ({ id, request }, { rejectWithValue }) => {

        try {

            const response = await api.put(
                `/admin/homepage/sections/${id}`,
                request
            );

            return response.data;

        } catch (error: any) {

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to update homepage section"
            );

        }
    }
);

export const deleteHomepageSection = createAsyncThunk<
    number,
    number
>(
    "homepage/deleteSection",
    async (id, { rejectWithValue }) => {

        try {

            await api.delete(`/admin/homepage/sections/${id}`);

            return id;

        } catch (error: any) {

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to delete homepage section"
            );

        }
    }
);

export const enableHomepageSection = createAsyncThunk<
    HomepageSection,
    number
>(
    "homepage/enableSection",
    async (id, { rejectWithValue }) => {

        try {

            const response = await api.patch(
                `/admin/homepage/sections/${id}/enable`
            );

            return response.data;

        } catch (error: any) {

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to enable section"
            );

        }
    }
);

export const disableHomepageSection = createAsyncThunk<
    HomepageSection,
    number
>(
    "homepage/disableSection",
    async (id, { rejectWithValue }) => {

        try {

            const response = await api.patch(
                `/admin/homepage/sections/${id}/disable`
            );

            return response.data;

        } catch (error: any) {

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to disable section"
            );

        }
    }
);

export const reorderHomepageSections = createAsyncThunk<
    HomepageSection[],
    number[]
>(
    "homepage/reorderSections",
    async (orderedSectionIds, { rejectWithValue }) => {

        try {

            const response = await api.put(
                "/admin/homepage/reorder",
                {
                    orderedSectionIds
                }
            );

            return response.data;

        } catch (error: any) {

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to reorder homepage"
            );

        }
    }
);