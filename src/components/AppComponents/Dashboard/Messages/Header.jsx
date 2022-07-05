import React from "react";
import cls from "./../Dashboard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";
import Switch from "./Switch";
import { H4 } from "../../../TextComponents/HeaderTextComponents";
import Button from "../../../Buttons/Button";
import { BoldText } from "../../../TextComponents/TextComponents";
import { setCurrentBox } from "../../../../redux/boxes/boxesSlice";

const Header = () => {
    const { boxes, current } = useSelector((state) => state.boxes);

    const dispatch = useDispatch();

    const index = boxes.findIndex((box) => box.id === current.id);

    const toNextBox = () => {
        if (index < boxes.length - 1) dispatch(setCurrentBox(boxes[index + 1]));
    };

    const toBackBox = () => {
        if (index > 0) dispatch(setCurrentBox(boxes[index - 1]));
    };

    return (
        <Row justify="space-between" align="middle" className={[cls.row, cls.header].join(" ")}>
            <Col>
                {!current ? (
                    <H4>Loading...</H4>
                ) : (
                    <Switch id={index} count={boxes.length} next={toNextBox} back={toBackBox}>
                        <H4>{current.email}</H4>
                    </Switch>
                )}
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
