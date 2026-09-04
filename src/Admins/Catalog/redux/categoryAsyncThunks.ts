import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/Api";

export interface Category {
    id: number;
    name: string;
    image?: string;
    enabled: boolean;
    displayOrder?: number;
    parentId?: number | null;
    parentName?: string | null;
}

export interface CreateCategoryRequest {
    name: string;
    image?: string;
    enabled?: boolean;
    displayOrder?: number;
    parentId?: number | null;
}

export interface UpdateCategoryRequest {
    name: string;
    image?: string;
    enabled?: boolean;
    displayOrder?: number;
    parentId?: number | null;
}

const getAuthConfig = (jwt: string | null) => ({
    headers: {
        Authorization: `Bearer ${jwt}`
    }
});

export const fetchCategories = createAsyncThunk<Category[], string | null>(
    "category/fetchCategories",
    async (jwt, { rejectWithValue }) => {
        try {
            const response = await api.get(
                "/api/admin/categories",
                getAuthConfig(jwt)
            );
            console.log("Fetched categories:", response.data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to fetch categories"
            );
        }
    }
);

export const fetchRootCategories = createAsyncThunk<Category[], string | null>(
    "category/fetchRootCategories",
    async (jwt, { rejectWithValue }) => {
        try {
            const response = await api.get(
                "/api/admin/categories/root",
                getAuthConfig(jwt)
            );
            console.log("Fetched root categories:", response.data); 
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to fetch root categories"
            );
        }
    }
);

export const fetchChildCategories = createAsyncThunk<
    Category[],
    { parentId: number; jwt: string | null }
>(
    "category/fetchChildCategories",
    async ({ parentId, jwt }, { rejectWithValue }) => {
        try {
            const response = await api.get(
                `/api/admin/categories/${parentId}/children`,
                getAuthConfig(jwt)
            );
            console.log(`Fetched child categories for parentId ${parentId}:`, response.data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to fetch child categories"
            );
        }
    }
);

export const createCategory = createAsyncThunk<
    Category,
    { request: CreateCategoryRequest; jwt: string | null }
>(
    "category/createCategory",
    async ({ request, jwt }, { rejectWithValue }) => {
        try {
            const response = await api.post(
                "/api/admin/categories",
                request,
                getAuthConfig(jwt)
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to create category"
            );
        }
    }
);

export const updateCategory = createAsyncThunk<
    Category,
    { id: number; request: UpdateCategoryRequest; jwt: string | null }
>(
    "category/updateCategory",
    async ({ id, request, jwt }, { rejectWithValue }) => {
        try {
            const response = await api.put(
                `/api/admin/categories/${id}`,
                request,
                getAuthConfig(jwt)
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to update category"
            );
        }
    }
);

export const deleteCategory = createAsyncThunk<
    number,
    { id: number; jwt: string | null }
>(
    "category/deleteCategory",
    async ({ id, jwt }, { rejectWithValue }) => {
        try {
            await api.delete(
                `/api/admin/categories/${id}`,
                getAuthConfig(jwt)
            );
            return id;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to delete category"
            );
        }
    }
);

export const enableCategory = createAsyncThunk<
    number,
    { id: number; jwt: string | null }
>(
    "category/enableCategory",
    async ({ id, jwt }, { rejectWithValue }) => {
        try {
            await api.patch(
                `/api/admin/categories/${id}/enable`,
                {},
                getAuthConfig(jwt)
            );
            return id;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to enable category"
            );
        }
    }
);

export const disableCategory = createAsyncThunk<
    number,
    { id: number; jwt: string | null }
>(
    "category/disableCategory",
    async ({ id, jwt }, { rejectWithValue }) => {
        try {
            await api.patch(
                `/api/admin/categories/${id}/disable`,
                {},
                getAuthConfig(jwt)
            );
            return id;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to disable category"
            );
        }
    }
);