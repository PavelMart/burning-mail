import React from "react";
import cls from "./Popup.module.scss";

const PopupInput = ({ type, label, placeholder, id, onChange, value, error }) => {
    return (
        <>
            <label className={cls.label} htmlFor={id}>
                {`${label} `}
                {error && <span className={cls.warning}>{error}</span>}
            </label>
            <input onChange={onChange} className={cls.input} type={type} placeholder={placeholder} id={id} value={value} />
        </>
    );
};

export default PopupInput;
