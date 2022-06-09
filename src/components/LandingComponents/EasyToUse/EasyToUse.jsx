import React from "react";
import cls from "./EasyToUse.module.scss";
import Container from "../../Container/Container";
import EasyToUseItem from "./EasyToUseItem";
import Section from "./../../Section/Section";
import { Row } from "antd";
import { FirstIcon, SecondIcon, ThirdIcon } from "./Icons";
import { H2 } from "../../TextComponents/HeaderTextComponents";

const items = [
    {
        icon: <FirstIcon />,
        title: "Create Account",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
    },
    {
        icon: <SecondIcon />,
        title: "Purchase Package",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
    },
    {
        icon: <ThirdIcon />,
        title: "Enjoy",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
    },
];

const EasyToUse = ({ sectionRef }) => {
    return (
        <Section sectionRef={sectionRef} addClassName={cls.easyToUse}>
            <Container>
                <H2>Easy To Use</H2>
                <Row justify="space-between">
                    {items.map((item) => (
                        <EasyToUseItem item={item} key={item.title} />
                    ))}
                </Row>
            </Container>
        </Section>
    );
};

export default EasyToUse;
