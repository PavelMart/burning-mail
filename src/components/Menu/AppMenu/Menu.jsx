import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { setIsAuth } from "../../../redux/auth/authSlice";
// import { setScreen } from "../../../redux/menu/menuSlice";
import { H4 } from "../../TextComponents/HeaderTextComponents";
import { P3 } from "../../TextComponents/ParagraphTextComponents";
import cls from "./Menu.module.scss";

const AppMenu = ({ isOpen, screen, changeScreen, logOut }) => {
    return (
        <div className={[cls.userMenu, isOpen && cls.userOpenMenu].join(" ")}>
            <H4>ivanov@gmail.com</H4>
            <div className={cls.innerButtons}>
                <Link to={"dashboard"}>
                    <button className={`${screen === "dashboard" && cls.active}`} data-key="dashboard" onClick={changeScreen}>
                        <P3>Dashboard</P3>
                    </button>
                </Link>
                <Link to={"settings"}>
                    <button className={`${screen === "settings" && cls.active}`} data-key="settings" onClick={changeScreen}>
                        <P3>Settings</P3>
                    </button>
                </Link>
            </div>
            <div>
                <button className={cls.logOut} onClick={logOut}>
                    <P3>Log Out</P3>
                </button>
            </div>
        </div>
    );
};

export default AppMenu;
