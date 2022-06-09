import React from "react";
import { useDispatch } from "react-redux";
import { setScreen } from "../../redux/menu/menuSlice";
import cls from "./Popup.module.scss";
import PopupBody from "./PopupBody";
import PopupHeader from "./PopupHeader";

const Popup = ({ title, children, isClosed, onClosePopup, onSubmitForm }) => {
    const dispatch = useDispatch();

    const onClose = (e) => {
        const target = e.target;
        const closestPopup = target.closest(`.${cls.popup}`);
        const closestExit = target.closest(`.${cls.exit}`);

        if (!closestPopup || closestExit) onClosePopup();
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(setScreen("dashboard"));
        onSubmitForm();
        onClosePopup();
    };

    return (
        <div className={`${cls.wrapper} ${isClosed && cls.closed}`} onClick={onClose}>
            <div className={cls.popup}>
                <PopupHeader title={title} onClose={onClose} />
                <span className={cls.divider} />
                <PopupBody onSubmit={onSubmit}>{children}</PopupBody>
            </div>
        </div>
    );
};

export default Popup;
