import React from "react";
import cls from "./Popup.module.scss";
import Popup from "./Popup";
import PopupInput from "./PopupInput";
import PopupText from "./PopupText";
import { useDispatch, useSelector } from "react-redux";
import { closeSignIn, openSignUp, setSignInEmail, setSignInPassword } from "../../redux/popup/popupSlice";
import Button from "../Buttons/Button";
import { BoldText } from "../TextComponents/TextComponents";
import { signin } from "../../redux/auth/authActions";

const SignInPopup = () => {
    const { isSignInClosed, signInData, errors } = useSelector((state) => state.popup);
    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        dispatch(setSignInEmail(e.target.value));
    };
    const onChangePassword = (e) => {
        dispatch(setSignInPassword(e.target.value));
    };

    const submitForm = () => {
        dispatch(signin(signInData));
    };

    const onChangePopup = () => {
        dispatch(closeSignIn());
        dispatch(openSignUp());
    };

    return (
        <Popup title="Sign-in" submitForm={submitForm} closed={isSignInClosed}>
            <PopupInput
                onChange={onChangeEmail}
                type="email"
                placeholder="Your E-mail"
                id="sign-in-email"
                label="E-mail"
                value={signInData.email}
                error={errors.email}
            />
            <PopupInput
                onChange={onChangePassword}
                type="password"
                placeholder="Your Password"
                id="sign-in-password"
                label="Password"
                value={signInData.password}
                error={errors.password}
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
