import { createSlice } from "@reduxjs/toolkit";

import {
    Category,
    fetchCategories,
    fetchRootCategories,
    fetchChildCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    enableCategory,
    disableCategory
} from "./categoryAsyncThunks";

interface CategoryState {
    categories: Category[];
    rootCategories: Category[];
    childCategories: Category[];
    loading: boolean;
    error: string | null;
}

const initialState: CategoryState = {
    categories: [],
    rootCategories: [],
    childCategories: [],
    loading: false,
    error: null
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        clearChildCategories: (state) => {
            state.childCategories = [];
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(fetchRootCategories.fulfilled, (state, action) => {
                state.rootCategories = action.payload;
            })

            .addCase(fetchChildCategories.fulfilled, (state, action) => {
                state.childCategories = action.payload;
            })

            .addCase(createCategory.fulfilled, (state, action) => {
                state.categories.push(action.payload);

                if (!action.payload.parentId) {
                    state.rootCategories.push(action.payload);
                }
            })

            .addCase(updateCategory.fulfilled, (state, action) => {
                state.categories = state.categories.map(category =>
                    category.id === action.payload.id
                        ? action.payload
                        : category
                );

                state.rootCategories = state.rootCategories.map(category =>
                    category.id === action.payload.id
                        ? action.payload
                        : category
                );
            })

            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.categories = state.categories.filter(
                    category => category.id !== action.payload
                );

                state.rootCategories = state.rootCategories.filter(
                    category => category.id !== action.payload
                );
            })

            .addCase(enableCategory.fulfilled, (state, action) => {
                state.categories = state.categories.map(category =>
                    category.id === action.payload
                        ? { ...category, enabled: true }
                        : category
                );
            })

            .addCase(disableCategory.fulfilled, (state, action) => {
                state.categories = state.categories.map(category =>
                    category.id === action.payload
                        ? { ...category, enabled: false }
                        : category
                );
            });
    }
});

export const { clearChildCategories } = categorySlice.actions;

export default categorySlice.reducer;