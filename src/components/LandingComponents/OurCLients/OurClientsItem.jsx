import { Col, Row } from "antd";
import React from "react";
import { H3 } from "../../TextComponents/HeaderTextComponents";
import { P3 } from "../../TextComponents/ParagraphTextComponents";
import cls from "./OurClients.module.scss";

const OurClientsItem = ({ item }) => {
    let imgOrder, textOrder, imgJustify, textJustify;
    const { img, title, text, imgPosition } = item;

    if (imgPosition === "right") {
        textOrder = 0;
        imgOrder = 1;
        imgJustify = "end";
        textJustify = "start";
    } else {
        textOrder = 1;
        imgOrder = 0;
        imgJustify = "start";
        textJustify = "end";
    }

    return (
        <Row justify="space-between" align="middle" className={cls.item}>
            <Col flex="1 0 50%" order={textOrder}>
                <Row justify={textJustify}>
                    <Col>
                        <H3>{title}</H3>
                        <span className={cls.divider} />
                        <P3>{text}</P3>
                    </Col>
                </Row>
            </Col>
            <Col flex="1 0 50%" order={imgOrder}>
                <Row justify={imgJustify}>
                    <img src={img} alt={title} />
                </Row>
            </Col>
        </Row>
    );
};

export default OurClientsItem;
