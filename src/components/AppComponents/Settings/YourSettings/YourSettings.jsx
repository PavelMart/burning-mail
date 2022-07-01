import React, { useRef, useState } from "react";
import cls from "./../Settings.module.scss";
import SettingsInput from "../../../Inputs/SettingsInput";
import Button from "../../../Buttons/Button";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { H3, H4 } from "../../../TextComponents/HeaderTextComponents";
import { BoldText } from "../../../TextComponents/TextComponents";
import { logout } from "../../../../redux/auth/authActions";

const YourSettings = () => {
    const {
        user: { email, password },
    } = useSelector((state) => state.auth);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const dispatch = useDispatch();

    const [emailChangeDisabled, setEmailChangeDisabled] = useState(true);
    const [passwordChangeDisabled, setPasswordChangeDisabled] = useState(true);

    const onChangeEmail = (e) => {
        // dispatch(setEmail(e.target.value));
    };

    const onChangePassword = (e) => {
        // dispatch(setPassword(e.target.value));
    };

    const onClickChangeEmail = () => {
        setEmailChangeDisabled(false);
        setTimeout(() => emailRef.current.focus());
    };

    const onClickChangePassword = () => {
        setPasswordChangeDisabled(false);
        setTimeout(() => passwordRef.current.focus());
    };

    const onBlur = () => {
        setEmailChangeDisabled(true);
        setPasswordChangeDisabled(true);
    };

    const onLogOut = () => {
        dispatch(logout());
    };

    return (
        <div className={`${cls.settingsSection} ${cls.yourSettings}`}>
            <H3>Your Settings</H3>
            <Row wrap={false}>
                <Col className={cls.firstCol}>
                    <Row justify="space-between" style={{ marginBottom: 40 }}>
                        <H4>Your E-mail</H4>
                        <SettingsInput
                            type="email"
                            value={email}
                            disabled={emailChangeDisabled}
                            onChange={onChangeEmail}
                            reffer={emailRef}
                            onBlur={onBlur}
                        />
                    </Row>
                    <Row justify="space-between" style={{ marginBottom: 40 }}>
                        <H4>Your Password</H4>
                        <SettingsInput
                            type="password"
                            value={password}
                            disabled={passwordChangeDisabled}
                            onChange={onChangePassword}
                            reffer={passwordRef}
                            onBlur={onBlur}
                        />
                    </Row>
                    <Row>
                        <Col className={cls.buttonWrapper}>
                            <Button type="gradient" onClick={onLogOut}>
                                <BoldText>Log Out</BoldText>
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col className={cls.secondCol}>
                    <Row>
                        <Button type="no_border" className={cls.changeButton} onClick={onClickChangeEmail}>
                            Change E-mail
                        </Button>
                    </Row>
                    <Row>
                        <Button type="no_border" className={cls.changeButton} onClick={onClickChangePassword}>
                            Change Password
                        </Button>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default YourSettings;
