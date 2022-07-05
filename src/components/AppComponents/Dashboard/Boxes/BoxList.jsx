import React from "react";
import cls from "./../Dashboard.module.scss";
import BoxItem from "./BoxItem";

const BoxList = ({ boxes }) => {
    return (
        <ul className={cls.addressesList}>
            {boxes.map((box) => (
                <BoxItem address={box.email} key={box.id} />
            ))}
        </ul>
    );
};

export default BoxList;
