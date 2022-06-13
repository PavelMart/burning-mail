import React from "react";
import cls from "./EmptyList.module.scss";
import img from "./../../assets/img/App/no-orders.png";

const EmptyList = ({ title }) => {
    return (
        <div className={cls.emptyList}>
            <img src={img} alt="No orders" />
        </div>
    );
};

export default EmptyList;
