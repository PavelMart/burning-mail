import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [
        {
            date: "May, 24",
            time: "16:21",
            package: "25 E-mails Package",
            status: "Awaiting payment",
            id: 1,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "100 E-mails Package",
            status: "DONE",
            id: 2,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "25 E-mails Package",
            status: "Awaiting payment",
            id: 3,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "100 E-mails Package",
            status: "DONE",
            id: 4,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "25 E-mails Package",
            status: "Awaiting payment",
            id: 5,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "100 E-mails Package",
            status: "DONE",
            id: 6,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "25 E-mails Package",
            status: "Awaiting payment",
            id: 7,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "100 E-mails Package",
            status: "DONE",
            id: 8,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "25 E-mails Package",
            status: "Awaiting payment",
            id: 9,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "100 E-mails Package",
            status: "DONE",
            id: 10,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "25 E-mails Package",
            status: "Awaiting payment",
            id: 11,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "100 E-mails Package",
            status: "DONE",
            id: 12,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "25 E-mails Package",
            status: "Awaiting payment",
            id: 13,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "100 E-mails Package",
            status: "DONE",
            id: 14,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "25 E-mails Package",
            status: "Awaiting payment",
            id: 15,
        },
        {
            date: "May, 24",
            time: "16:21",
            package: "125 E-mails Package",
            status: "DONE",
            id: 16,
        },
    ],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
});

export default orderSlice.reducer;
