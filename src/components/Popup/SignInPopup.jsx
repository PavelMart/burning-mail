import React from "react";
import cls from "./Popup.module.scss";
import Popup from "./Popup";
import PopupInput from "./PopupInput";
import PopupText from "./PopupText";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/authSlice";
import { closeSignIn, openSignUp, setSignInEmail, setSignInPassword } from "../../redux/popup/popupSlice";
import Button from "../Buttons/Button";
import { BoldText } from "../TextComponents/TextComponents";

const SignInPopup = () => {
    const { isSignInClosed, signInData } = useSelector((state) => state.popup);
    const dispatch = useDispatch();

    const onClosePopup = () => {
        dispatch(closeSignIn());
    };

    const onChangeEmail = (e) => {
        dispatch(setSignInEmail(e.target.value));
    };
    const onChangePassword = (e) => {
        dispatch(setSignInPassword(e.target.value));
    };

    const onSubmitForm = () => {
        dispatch(login(signInData));
    };

    const onChangePopup = () => {
        dispatch(closeSignIn());
        dispatch(openSignUp());
    };

    return (
        <Popup title="Sign-in" isClosed={isSignInClosed} onClosePopup={onClosePopup} onSubmitForm={onSubmitForm}>
            <PopupInput
                onChange={onChangeEmail}
                type="email"
                placeholder="Your E-mail"
                id="sign-in-email"
                label="E-mail"
                value={signInData.email}
            />
            <PopupInput
                onChange={onChangePassword}
                type="password"
                placeholder="Your Password"
                id="sign-in-password"
                label="Password"
                value={signInData.password}
            />
            <Button type="gradient" className={cls.button}>
                <BoldText>Sign-In</BoldText>
            </Button>
            <PopupText>
                Have no account?{" "}
                {
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={onChangePopup}>Sign-Up</a>
                }
            </PopupText>
        </Popup>
    );
};

export default SignInPopup;
