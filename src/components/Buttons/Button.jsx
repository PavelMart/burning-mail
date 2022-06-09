import React from "react";
import cls from "./Button.module.scss";

const Button = ({ type, children, className, onClick }) => {
    let buttonType;

    switch (type) {
        case "gradient_border":
            buttonType = cls.gradientBorder;
            break;
        case "gradient":
            buttonType = cls.gradient;
            break;
        case "orange":
            buttonType = cls.orange;
            break;
        case "white":
            buttonType = cls.white;
            break;
        case "no_border":
            buttonType = cls.noBorder;
            break;
        case "gray":
            buttonType = cls.gray;
            break;
        default:
            break;
    }
    return (
        <button className={[cls.button, buttonType, className].join(" ")} onClick={onClick}>
            <div className={[cls.body].join(" ")}>
                <div className={cls.text}>{children}</div>
            </div>
        </button>
    );
};

export default Button;
