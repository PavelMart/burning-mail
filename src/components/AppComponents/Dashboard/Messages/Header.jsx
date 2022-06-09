import React from "react";
import cls from "./../Dashboard.module.scss";
import { useDispatch } from "react-redux";
import { setCurrentAddress } from "../../../../redux/mail/mailSlice";
import { Col, Row } from "antd";
import Switch from "./Switch";
import { H4 } from "../../../TextComponents/HeaderTextComponents";
import Button from "../../../Buttons/Button";
import { BoldText } from "../../../TextComponents/TextComponents";

const Header = ({ address, id, count }) => {
    const dispatch = useDispatch();

    const toBackAdress = () => {
        if (id > 1) dispatch(setCurrentAddress(id - 1));
    };

    const toNextAdress = () => {
        if (id < count) dispatch(setCurrentAddress(id + 1));
    };
    return (
        <Row justify="space-between" align="middle" className={[cls.row, cls.header].join(" ")}>
            <Col>
                <Switch id={id} count={count} next={toNextAdress} back={toBackAdress}>
                    <H4>{address}</H4>
                </Switch>
            </Col>
            <Col>
                <Button type="gradient" className={cls.compose}>
                    <BoldText className={cls.composeText}>Compose</BoldText>
                </Button>
            </Col>
        </Row>
    );
};

export default Header;
