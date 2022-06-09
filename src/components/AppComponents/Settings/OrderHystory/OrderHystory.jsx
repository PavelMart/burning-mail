import React from "react";
import cls from "./../Settings.module.scss";
import { H3 } from "../../../TextComponents/HeaderTextComponents";
import { useSelector } from "react-redux";
import OrderList from "./OrderList";

const OrderHystory = () => {
    const { orders } = useSelector((state) => state.order);
    return (
        <div className={`${cls.settingsSection} ${cls.orderHystory}`}>
            <H3>Order Hystory</H3>
            <OrderList orders={orders} />
        </div>
    );
};

export default OrderHystory;
