import React from "react";
import cls from "./Packages.module.scss";
import trueIcon from "./../../../assets/img/fi-rr-check.svg";
import falseIcon from "./../../../assets/img/fi-rr-cross.svg";
import { P3 } from "../../TextComponents/ParagraphTextComponents";

const PackageAdvantage = ({ item }) => {
    const { title, available } = item;
    const icon = available ? trueIcon : falseIcon;

    return (
        <div className={cls.advantage}>
            <img src={icon} alt={title} />
            <P3>{title}</P3>
        </div>
    );
};

export default PackageAdvantage;
