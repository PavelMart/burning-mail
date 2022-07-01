import { createSlice } from "@reduxjs/toolkit";
import { signin, signup, logout } from "./authActions";

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
        [signup.fulfilled.type]: (state, action) => {
            state.isAuth = true;
            state.error = "";
            state.user = action.payload;
        },
        [signup.rejected.type]: (state, action) => {
            state.error = action.payload;
        },
        [signin.fulfilled.type]: (state, action) => {
            state.isAuth = true;
            state.error = "";
            state.user = action.payload;
        },
        [signin.rejected.type]: (state, action) => {
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
    },
});

export default authSlice.reducer;
