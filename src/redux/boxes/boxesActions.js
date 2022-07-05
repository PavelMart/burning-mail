import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../api";

export const getBoxes = createAsyncThunk("boxes/getBoxes", async (_, thunkAPI) => {
    try {
        const response = await $api.get("/boxes");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
