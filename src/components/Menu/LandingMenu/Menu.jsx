import React from "react";
import MenuItem from "./MenuItem";
import cls from "./Menu.module.scss";

const Menu = ({ items, selected, onClick }) => {
    return (
        <div className={cls.menu}>
            {items.map((item) => {
                return <MenuItem key={item.key} onClick={onClick} item={item} selected={selected} />;
            })}
        </div>
    );
};

export default Menu;
