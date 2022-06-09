import { Row } from "antd";
import React from "react";
import cls from "./../Dashboard.module.scss";

const Switch = ({ id, count, next, back, children }) => {
    return (
        <Row align="center" wrap={false} className={cls.switch}>
            <button disabled={id === 1} className={[cls.button, cls.back].join(" ")} onClick={back}></button>
            {children}
            <button disabled={id === count} className={[cls.button, cls.next].join(" ")} onClick={next}></button>
        </Row>
    );
};

export default Switch;
