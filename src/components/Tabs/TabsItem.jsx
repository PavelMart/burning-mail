import React from "react";
import cls from "./Tabs.module.scss";

const TabsItem = ({ item, selected, onClick }) => {
    return (
        <li className={`${cls.item} ${selected === item.key ? cls.selected : null}`} onClick={onClick} data-key={item.key}>
            {item.label}
        </li>
    );
};

export default TabsItem;
