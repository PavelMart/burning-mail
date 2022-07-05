import { createSlice } from "@reduxjs/toolkit";
import { getBoxes } from "./boxesActions";

const initialState = {
    current: null,
    isLoading: false,
    error: "",
    boxes: [],
};

const boxesSlice = createSlice({
    name: "boxes",
    initialState,
    reducers: {
        setCurrentBox(state, action) {
            state.current = action.payload;
        },
    },
    extraReducers: {
        [getBoxes.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getBoxes.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.boxes = action.payload;

            let current;
            let isCurrentExistsInBoxes;

            const currentJSON = localStorage.getItem("currentEmail");

            if (currentJSON) {
                current = JSON.parse(currentJSON);
                isCurrentExistsInBoxes = state.boxes.find((box) => current.email === box.email);
            }

            state.current = current && isCurrentExistsInBoxes ? current : state.boxes[0];
        },
        [getBoxes.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { setCurrentBox } = boxesSlice.actions;
export default boxesSlice.reducer;
