import React from "react";
import cls from "./Tabs.module.scss";
import TabsItem from "./TabsItem";

const Tabs = ({ items, selected, onClick }) => {
    return (
        <div className={cls.tabs}>
            {items.map((item) => {
                return <TabsItem key={item.key} onClick={onClick} item={item} selected={selected} />;
            })}
        </div>
    );
};

export default Tabs;
