import React from "react";
import cls from "./Popup.module.scss";
import Popup from "./Popup";
import PopupInput from "./PopupInput";
import PopupText from "./PopupText";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/authSlice";
import { closeSignUp, setSignUpConfirmPassword, setSignUpEmail, setSignUpPassword } from "../../redux/popup/popupSlice";
import Button from "../Buttons/Button";
import { BoldText } from "../TextComponents/TextComponents";

const SignUpPopup = () => {
    const { isSignUpClosed, signUpData } = useSelector((state) => state.popup);
    const dispatch = useDispatch();

    const onClosePopup = () => {
        dispatch(closeSignUp());
    };

    const onChangeEmail = (e) => {
        dispatch(setSignUpEmail(e.target.value));
    };
    const onChangePassword = (e) => {
        dispatch(setSignUpPassword(e.target.value));
    };
    const onConfirmPassword = (e) => {
        dispatch(setSignUpConfirmPassword(e.target.value));
    };

    const onSubmitForm = () => {
        dispatch(login(signUpData));
    };

    return (
        <Popup title="Sign-up" isClosed={isSignUpClosed} onClosePopup={onClosePopup} onSubmitForm={onSubmitForm}>
            <PopupInput onChange={onChangeEmail} type="email" placeholder="Your E-mail" id="sign-up-email" label="E-mail" />
            <PopupInput onChange={onChangePassword} type="password" placeholder="Your Password" id="sign-up-password" label="Password" />
            <PopupInput
                onChange={onConfirmPassword}
                type="password"
                placeholder="Your Password"
                id="sign-up-confirm-password"
                label="Password"
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
