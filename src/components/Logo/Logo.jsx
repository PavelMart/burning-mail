import React from "react";
import LogoImg from "./../../assets/img/Logo.png";
import cls from "./Logo.module.css";

const Logo = () => {
    return (
        <a href="/" className={cls.link}>
            <img src={LogoImg} alt="Burning Mail" className={cls.img} />
        </a>
    );
};

export default Logo;
