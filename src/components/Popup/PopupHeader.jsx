import React from "react";
import Button from "../Buttons/Button";
import { H4 } from "../TextComponents/HeaderTextComponents";
import cls from "./Popup.module.scss";

const PopupHeader = ({ title, onClose }) => {
    return (
        <div className={cls.header}>
            <H4>{title}</H4>
            <Button addClassName={cls.exit} onClick={onClose} />
        </div>
    );
};

export default PopupHeader;
