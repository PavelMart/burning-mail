import { Col } from "antd";
import React from "react";
import Logo from "../Logo/Logo";
import cls from "./Header.module.scss";

const HeaderLogo = () => {
    return (
        <Col className={cls.logo}>
            <Logo />
        </Col>
    );
};

export default HeaderLogo;
