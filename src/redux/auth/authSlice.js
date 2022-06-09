import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: true,
    email: "",
    password: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAuth(state, action) {
            state.isAuth = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        login(state, action) {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isAuth = true;
        },
        logout(state) {
            state.email = "";
            state.password = "";
            state.isAuth = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setIsAuth, setEmail, setPassword, logout, login } = authSlice.actions;

export default authSlice.reducer;
