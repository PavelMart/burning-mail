import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../api";

export const getMails = createAsyncThunk("mails/getMails", async ({ id }, thunkApi) => {
    try {
        const response = await $api.get(`boxes/${id}`);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});
