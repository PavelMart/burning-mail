import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../api";

export const signup = createAsyncThunk("user/signup", async ({ email, password }, thunkAPI) => {
    try {
        const response = await $api.post("/users/registration", { email, password });
        localStorage.setItem("token", response.data.accessToken);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const signin = createAsyncThunk("user/signin", async ({ email, password }, thunkAPI) => {
    try {
        const response = await $api.post("/users/login", { email, password });
        localStorage.setItem("token", response.data.accessToken);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
    try {
        const response = await $api.post("/users/logout");
        localStorage.removeItem("token");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});