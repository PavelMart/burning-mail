import React from "react";
import cls from "./Popup.module.scss";

const PopupText = ({ children }) => {
    return <div className={cls.popupText}>{children}</div>;
};

export default PopupText;
