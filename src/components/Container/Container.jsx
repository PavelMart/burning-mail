import React from "react";
import cls from "./Container.module.scss";

const Container = ({ children, className, style }) => {
    return (
        <div className={cls.container} style={{ ...style }}>
            <div className={className}>{children}</div>
        </div>
    );
};

export default Container;
