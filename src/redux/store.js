import { configureStore } from "@reduxjs/toolkit";
import menu from "./menu/menuSlice";
import auth from "./auth/authSlice";
import popup from "./popup/popupSlice";
import order from "./order/orderSlice";
import mail from "./mail/mailSlice";
import boxes from "./boxes/boxesSlice";

const store = configureStore({
    reducer: {
        menu,
        auth,
        popup,
        order,
        mail,
        boxes,
    },
});

export default store;
