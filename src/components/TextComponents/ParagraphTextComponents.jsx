import React from "react";
import cls from "./TextComponents.module.scss";

export const P1 = ({ children, margin, padding, className }) => {
    return (
        <p className={[cls.p_large, className].join(" ")} style={{ margin, padding }}>
            {children}
        </p>
    );
};

export const P2 = ({ children, margin, padding, className }) => {
    return (
        <p className={[cls.p_medium, className].join(" ")} style={{ margin, padding }}>
            {children}
        </p>
    );
};

export const P3 = ({ children, margin, padding, className }) => {
    return (
        <p className={[cls.p_small, className].join(" ")} style={{ margin, padding }}>
            {children}
        </p>
    );
};
