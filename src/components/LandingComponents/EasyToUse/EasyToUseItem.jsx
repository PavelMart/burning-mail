import React from "react";
import cls from "./EasyToUse.module.scss";
import { Col } from "antd";
import { H3 } from "../../TextComponents/HeaderTextComponents";
import { P3 } from "../../TextComponents/ParagraphTextComponents";

const EasyToUseItem = ({ item }) => {
    const { title, text, icon } = item;
    return (
        <Col span={8}>
            <div className={cls.item}>
                {icon}
                <H3 margin="0 0 20px">{title}</H3>
                <P3>{text}</P3>
            </div>
        </Col>
    );
};

export default EasyToUseItem;
