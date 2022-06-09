import React from "react";
import cls from "./Benefits.module.scss";
import { H4 } from "./../../TextComponents/HeaderTextComponents";
import { P3 } from "./../../TextComponents/ParagraphTextComponents";
import { Col } from "antd";

const BenefitsItem = ({ item }) => {
    const { icon, title, text } = item;
    return (
        <Col span={6} className={cls.itemWrap}>
            <div className={cls.item}>
                <img src={icon} alt={title} />
                <H4 margin="0 0 30px">{title}</H4>
                <P3>{text}</P3>
            </div>
        </Col>
    );
};

export default BenefitsItem;
