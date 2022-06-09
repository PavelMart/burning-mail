import { Col, Row } from "antd";
import React from "react";
import cls from "./../Dashboard.module.scss";
import Button from "../../../Buttons/Button";
import { BoldText, RegularText } from "../../../TextComponents/TextComponents";
import Switch from "./Switch";

const Middle = ({ messages }) => {
    return (
        <Row className={[cls.row, cls.middle].join(" ")} justify="space-between" align="middle">
            <Col>
                <Button type="gray" className={cls.refresh}>
                    <BoldText className={cls.refreshText}>Refresh</BoldText>
                </Button>
                <Button type="gray" className={cls.clear}>
                    <BoldText className={cls.clearText}>Clear</BoldText>
                </Button>
            </Col>
            <Col>
                <Switch id={1} count={1}>
                    <RegularText className={cls.messagesCount}>{messages.length}</RegularText>
                </Switch>
            </Col>
        </Row>
    );
};

export default Middle;
