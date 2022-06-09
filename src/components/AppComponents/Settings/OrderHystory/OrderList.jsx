import React from "react";
import cls from "./../Settings.module.scss";
import EmptyOrderList from "./EmptyOrderList";
import OrdersItem from "./OrdersItem";

const OrderList = ({ orders }) => {
    if (!orders.length) return <EmptyOrderList />;
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
