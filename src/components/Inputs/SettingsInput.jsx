import React from "react";
import cls from "./Input.module.scss";

const SettingsInput = ({ type, value, onChange, disabled, onBlur, autoFocus, reffer }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={cls.settingsInput}
            onBlur={onBlur}
            autoFocus={autoFocus}
            ref={reffer}
        />
    );
};

export default SettingsInput;
