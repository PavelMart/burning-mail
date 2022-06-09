import React from "react";
import cls from "./TextComponents.module.scss";

export const H1 = ({ children, margin, padding, className }) => {
    return (
        <h1 className={[cls.h1, className].join(" ")} style={{ margin, padding }}>
            {children}
        </h1>
    );
};

export const H2 = ({ children, margin, padding, className }) => {
    return (
        <h2 className={[cls.h2, className].join(" ")} style={{ margin, padding }}>
            {children}
        </h2>
    );
};

export const H3 = ({ children, margin, padding, className }) => {
    return (
        <h3 className={[cls.h3, className].join(" ")} style={{ margin, padding }}>
            {children}
        </h3>
    );
};

export const H3orange = ({ children, margin, padding, className }) => {
    return (
        <h3 className={[cls.h3, cls.orange, className].join(" ")} style={{ margin, padding }}>
            {children}
        </h3>
    );
};

export const H4 = ({ children, margin, padding, className }) => {
    return (
        <h4 className={[cls.h4, className].join(" ")} style={{ margin, padding }}>
            {children}
        </h4>
    );
};
