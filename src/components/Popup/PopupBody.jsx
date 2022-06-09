import React from "react";
import cls from "./Popup.module.scss";

const PopupBody = ({ children, onSubmit }) => {
    return (
        <div className={cls.body}>
            <form className={cls.form} onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    );
};

export default PopupBody;
