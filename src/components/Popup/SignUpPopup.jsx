import React from "react";
import cls from "./Popup.module.scss";
import Popup from "./Popup";
import PopupInput from "./PopupInput";
import PopupText from "./PopupText";
import { useDispatch, useSelector } from "react-redux";
import { setSignUpConfirmPassword, setSignUpEmail, setSignUpPassword } from "../../redux/popup/popupSlice";
import Button from "../Buttons/Button";
import { BoldText } from "../TextComponents/TextComponents";
import { signup } from "../../redux/auth/authActions";

const SignUpPopup = () => {
    const { isSignUpClosed, signUpData, errors } = useSelector((state) => state.popup);
    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        dispatch(setSignUpEmail(e.target.value));
    };
    const onChangePassword = (e) => {
        dispatch(setSignUpPassword(e.target.value));
    };
    const onConfirmPassword = (e) => {
        dispatch(setSignUpConfirmPassword(e.target.value));
    };

    const submitForm = () => {
        dispatch(signup(signUpData));
    };

    return (
        <Popup title="Sign-up" submitForm={submitForm} closed={isSignUpClosed}>
            <PopupInput
                onChange={onChangeEmail}
                type="email"
                placeholder="Your E-mail"
                id="sign-up-email"
                label="E-mail"
                error={errors.email}
            />
            <PopupInput
                onChange={onChangePassword}
                type="password"
                placeholder="Your Password"
                id="sign-up-password"
                label="Password"
                error={errors.password}
            />
            <PopupInput
                onChange={onConfirmPassword}
                type="password"
                placeholder="Your Password"
                id="sign-up-confirm-password"
                label="Password"
                error={errors.confirmPassword}
            />
            <PopupText>
                I have read and agreed with
                {
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a>Terms & Conditions</a>
                }
                and
                {
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a>Privacy Policy</a>
                }
            </PopupText>
            <Button type="gradient" className={cls.button}>
                <BoldText>Sign-Up</BoldText>
            </Button>
        </Popup>
    );
};

export default SignUpPopup;
