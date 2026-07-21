import { createSlice } from "@reduxjs/toolkit";
import { HomepageSection } from "../types/homepage";
import {
    fetchHomepageSections,
    createHomepageSection,
    updateHomepageSection,
    deleteHomepageSection,
    enableHomepageSection,
    disableHomepageSection,
    reorderHomepageSections
} from "./homepageAsyncThunks";

interface HomepageState {

    sections: HomepageSection[];

    loading: boolean;

    error: string | null;

}

const initialState: HomepageState = {

    sections: [],

    loading: false,

    error: null

};

const homepageSlice = createSlice({

    name: "homepage",

    initialState,

    reducers: {},

    extraReducers: (builder) => {

        builder

            .addCase(fetchHomepageSections.pending, (state) => {

                state.loading = true;

            })

            .addCase(fetchHomepageSections.fulfilled, (state, action) => {

                state.loading = false;

                state.sections = action.payload;

            })

            .addCase(fetchHomepageSections.rejected, (state, action) => {

                state.loading = false;

                state.error = action.payload as string;

            })

            .addCase(createHomepageSection.fulfilled, (state, action) => {

                state.sections.push(action.payload);

            })

            .addCase(updateHomepageSection.fulfilled, (state, action) => {

                state.sections = state.sections.map(section =>
                    section.id === action.payload.id
                        ? action.payload
                        : section
                );

            })

            .addCase(deleteHomepageSection.fulfilled, (state, action) => {

                state.sections = state.sections.filter(
                    section => section.id !== action.payload
                );

            })

            .addCase(enableHomepageSection.fulfilled, (state, action) => {

                state.sections = state.sections.map(section =>
                    section.id === action.payload.id
                        ? action.payload
                        : section
                );

            })

            .addCase(disableHomepageSection.fulfilled, (state, action) => {

                state.sections = state.sections.map(section =>
                    section.id === action.payload.id
                        ? action.payload
                        : section
                );

            })

            .addCase(reorderHomepageSections.fulfilled, (state, action) => {

                state.sections = action.payload;

            });

    }

});

export default homepageSlice.reducer;