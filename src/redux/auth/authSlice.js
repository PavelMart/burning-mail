import { createSlice } from "@reduxjs/toolkit";
import { signin, signup, logout, checkAuth } from "./authActions";

const initialState = {
    isLoading: false,
    isAuth: false,
    user: {},
    error: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [signup.pending.type]: (state) => {
            state.isLoading = true;
        },
        [signin.pending.type]: (state) => {
            state.isLoading = true;
        },
        [checkAuth.pending.type]: (state) => {
            state.isLoading = true;
        },
        [signup.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = "";
            state.user = action.payload;
        },
        [signup.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [signin.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = "";
            state.user = action.payload;
        },
        [signin.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [logout.fulfilled.type]: (state, action) => {
            state.isAuth = false;
            state.error = "";
            state.user = {};
        },
        [logout.rejected.type]: (state, action) => {
            state.isAuth = false;
            state.error = action.payload;
            state.user = {};
        },
        [checkAuth.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = "";
            state.user = action.payload;
        },
        [checkAuth.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default authSlice.reducer;
