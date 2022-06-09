import React from "react";
import cls from "./../Settings.module.scss";
import img from "./../../../../assets/img/App/no-orders.png";

const EmptyOrderList = () => {
    return (
        <div className={cls.emptyList}>
            <img src={img} alt="No orders" />
        </div>
    );
};

export default EmptyOrderList;
