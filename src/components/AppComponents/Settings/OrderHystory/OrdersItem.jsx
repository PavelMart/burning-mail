import React from "react";
import cls from "./../Settings.module.scss";

const OrdersItem = ({ order }) => {
    return (
        <tr className={cls.orderItem}>
            <td className={cls.bold}>{order.date}</td>
            <td className={cls.bold}>{order.time}</td>
            <td className={cls.bold}>{order.package}</td>
            <td>{order.status}</td>
        </tr>
    );
};

export default OrdersItem;
