import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { setScreen } from "../../redux/menu/menuSlice";
import { closeSignIn, closeSignUp, setErrors } from "../../redux/popup/popupSlice";
import cls from "./Popup.module.scss";
import PopupBody from "./PopupBody";
import PopupHeader from "./PopupHeader";

const validate = ({ email, password, confirmPassword }) => {
    const errors = {};

    if (!email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = "Invalid email address";
    }

    if (!password) {
        errors.password = "Required";
    } else if (password.length < 4) {
        errors.password = "Too small!";
    } else if (password.length > 12) {
        errors.password = "Too big!";
    }

    if (confirmPassword) {
        if (password !== confirmPassword) {
            errors.confirmPassword = "Password isn't correct";
        }
    }

    return errors;
};

const Popup = ({ title, children, submitForm, closed }) => {
    const { signInData, signUpData } = useSelector((state) => state.popup);
    const validateData = title === "Sign-up" ? signUpData : signInData;

    const dispatch = useDispatch();

    const closePopup = () => {
        switch (title) {
            case "Sign-up":
                dispatch(closeSignUp());
                break;
            case "Sign-in":
                dispatch(closeSignIn());
                break;
            default:
                break;
        }
        dispatch(setErrors({}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const validateResult = validate(validateData);

        if (!validateResult.email && !validateResult.password && !validateResult.confirmPassword) {
            dispatch(setScreen("dashboard"));
            submitForm();
            closePopup();
        } else dispatch(setErrors(validateResult));
    };

    return (
        <CSSTransition in={!closed} timeout={500} classNames="popup-animation" unmountOnExit={true} mountOnEnter={false}>
            <div className={`${cls.wrapper}`} onClick={closePopup}>
                <div className={cls.popup} onClick={(e) => e.stopPropagation()}>
                    <PopupHeader title={title} close={closePopup} />
                    <span className={cls.divider} />
                    <PopupBody onSubmit={onSubmit}>{children}</PopupBody>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Popup;
