import React from "react";
import cls from "./Header.module.scss";
import MenuButton from "../Buttons/MenuButton";
import Button from "../Buttons/Button";
import { Col, Row } from "antd";
import { useDispatch } from "react-redux";
import { openSignIn, openSignUp } from "../../redux/popup/popupSlice";
import { BoldText } from "../TextComponents/TextComponents";

const HeaderButtons = ({ type }) => {
    const dispatch = useDispatch();

    const onClickSignIn = () => {
        dispatch(openSignIn());
    };

    const onClickSignUp = () => {
        dispatch(openSignUp());
    };

    return (
        <Col>
            <Row justify="space-between">
                {type === "landing" ? (
                    <>
                        <Button type="gradient_border" className={cls.button} onClick={onClickSignIn}>
                            <BoldText>Sign-in</BoldText>
                        </Button>
                        <Button type="gradient" className={cls.button} onClick={onClickSignUp}>
                            <BoldText>Sign-up</BoldText>
                        </Button>
                    </>
                ) : (
                    <MenuButton type={type} />
                )}
            </Row>
        </Col>
    );
};

export default HeaderButtons;
