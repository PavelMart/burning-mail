import React from "react";
import cls from "./Benefits.module.scss";
import BenefitsItem from "./BenefitsItem";
import { Row } from "antd";

const BenefitsList = ({ items }) => {
    return (
        <Row justify="space-between" className={cls.list}>
            {items.map((item) => (
                <BenefitsItem item={item} key={item.title} />
            ))}
        </Row>
    );
};

export default BenefitsList;
