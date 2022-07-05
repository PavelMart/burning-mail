import { createSlice } from "@reduxjs/toolkit";
import { getMails } from "./mailActions";

const initialState = {
    isLoading: false,
    error: "",
    mails: [],
};

const mailSlice = createSlice({
    name: "mail",
    initialState,
    reducers: {},
    extraReducers: {
        [getMails.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getMails.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.mails = action.payload;
        },
        [getMails.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default mailSlice.reducer;
