import React from "react";
import EmptyList from "../../../EmptyList/EmptyList";
import cls from "./../Settings.module.scss";
import OrdersItem from "./OrdersItem";

const OrderList = ({ orders }) => {
    if (!orders.length) return <EmptyList title="No orders yet" />;
    return (
        <div className={cls.orderList}>
            <table className={cls.orderTable}>
                <tbody>
                    {orders.map((order) => (
                        <OrdersItem key={order.id} order={order} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;
