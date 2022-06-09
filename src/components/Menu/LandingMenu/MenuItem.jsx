import React from "react";
import { RegularText } from "../../TextComponents/TextComponents";
import cls from "./Menu.module.scss";

const MenuItem = ({ item, selected, onClick }) => {
    return (
        <li className={`${cls.item} ${selected === item.key ? cls.selected : null}`} onClick={onClick} data-key={item.key}>
            <a href={`#${item.key}`} data-key={item.key}>
                <RegularText>{item.label}</RegularText>
            </a>
        </li>
    );
};

export default MenuItem;
