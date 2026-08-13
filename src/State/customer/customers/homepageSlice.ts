import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomepageSection } from "../../../types/homepage";
import { fetchHomepage } from "./homepageAsyncThunks";

interface HomepageState {
    sections: HomepageSection[];
    loading: boolean;
    error: string | null;
}

const initialState: HomepageState = {
    sections: [],
    loading: false,
    error: null,
};

const homepageSlice = createSlice({
    name: "customerHomepage",
    initialState,
    reducers: {},

    extraReducers: (builder) => {

        builder

            .addCase(fetchHomepage.pending, (state) => {

                state.loading = true;
                state.error = null;

            })

            .addCase(
                fetchHomepage.fulfilled,
                (state, action: PayloadAction<HomepageSection[]>) => {

                    state.loading = false;
                    state.sections = action.payload;

                }
            )

            .addCase(fetchHomepage.rejected, (state, action) => {

                state.loading = false;
                state.error =
                    (action.payload as string) ??
                    "Failed to fetch homepage";

            });

    },
});

export default homepageSlice.reducer;