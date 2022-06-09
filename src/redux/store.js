import { configureStore, combineReducers } from "@reduxjs/toolkit";
import menu from "./menu/menuSlice";
import auth from "./auth/authSlice";
import popup from "./popup/popupSlice";
import order from "./order/orderSlice";
import mail from "./mail/mailSlice";

const rootReducer = combineReducers({
    menu,
    auth,
    popup,
    order,
    mail,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
