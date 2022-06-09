import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current: "home",
    screen: "dashboard",
    items: [
        {
            label: "Home",
            key: "home",
        },
        {
            label: "Benefits",
            key: "benefits",
        },
        {
            label: "Clients",
            key: "clients",
        },
        {
            label: "Use Cases",
            key: "cases",
        },

        {
            label: "Pricing",
            key: "pricing",
        },

        {
            label: "FAQ",
            key: "faq",
        },
        {
            label: "Contact Us",
            key: "contact",
        },
    ],
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setCurrent(state, action) {
            state.current = action.payload;
        },
        setScreen(state, action) {
            state.screen = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCurrent, setScreen } = menuSlice.actions;

export default menuSlice.reducer;
