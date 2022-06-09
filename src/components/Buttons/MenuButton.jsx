import React, { useEffect, useState } from "react";
import cls from "./Button.module.scss";
import Menu from "./../Menu/AppMenu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../../redux/menu/menuSlice";
import { setIsAuth } from "../../redux/auth/authSlice";

const MenuButton = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasMessage = true;

    const openUserMenu = (e) => {
        const circle = e.target.closest(`.${cls.circle}`);
        const userMenu = e.target.closest(`.${cls.userMenu}`);
        const buttons = e.target.closest(`.${cls.innerButtons}`);
        if ((circle && !userMenu) || buttons) setIsOpen(!isOpen);
    };

    const { screen } = useSelector((state) => state.menu);

    const dispatch = useDispatch();

    useEffect(() => {
        document.addEventListener("click", closeUserMenu);

        return () => {
            document.addEventListener("click", closeUserMenu);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const closeUserMenu = (e) => {
        const circle = e.target.closest(`.${cls.circle}`);
        const userMenu = e.target.closest(`.${cls.userMenu}`);
        if (!circle && !userMenu) setIsOpen(false);
    };

    const changeScreen = (e) => {
        dispatch(setScreen(e.target.parentNode.dataset.key));
    };

    const logOut = () => {
        setIsOpen(false);
        dispatch(setIsAuth(false));
    };

    return (
        <div className={[cls.button, cls.circle, className].join(" ")} onClick={openUserMenu}>
            <div className={[cls.body, hasMessage && cls.hasMessage].join(" ")}>
                <Menu isOpen={isOpen} setIsOpen={setIsOpen} screen={screen} changeScreen={changeScreen} logOut={logOut} />
            </div>
        </div>
    );
};

export default MenuButton;
