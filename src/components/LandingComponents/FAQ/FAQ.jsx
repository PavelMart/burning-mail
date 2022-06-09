import React from "react";
import cls from "./FAQ.module.scss";
import Section from "./../../Section/Section";
import Container from "./../../Container/Container";
import img from "./../../../assets/img/faq.png";
import { H2, H3 } from "./../../TextComponents/HeaderTextComponents";
import { P3 } from "./../../TextComponents/ParagraphTextComponents";
import { Col, Row } from "antd";

const items = [
    {
        title: "What is temporary mail?",
        text: "BurningMail disposable mail, will save you from spam and promotional emails. BurningMail disposable mail, will save you from spam and promotional emails. BurningMail disposable mail, will save you from spam and promotional emails.",
    },
    {
        title: "How it works?",
        text: "BurningMail disposable mail, will save you from spam and promotional emails. BurningMail disposable mail, will save you from spam and promotional emails. BurningMail disposable mail, will save you from spam and promotional emails.BurningMail disposable mail, will save you from spam and promotional emails. BurningMail disposable mail, will save you from spam and promotional emails. BurningMail disposable mail, will save you from spam and promotional emails.",
    },
    {
        title: "What's this for?",
        text: "BurningMail disposable mail, will save you from spam and promotional emails. BurningMail disposable mail, will save you from spam and promotional emails. BurningMail disposable mail, will save you from spam and promotional emails.BurningMail disposable mail, will save you from spam and promotional emails. BurningMail disposable mail, will save you from spam and promotional emails.",
    },
];

const FAQItem = ({ item }) => {
    return (
        <div className={cls.item}>
            <H3>{item.title}</H3>
            <P3>{item.text}</P3>
        </div>
    );
};

const FAQ = ({ sectionRef }) => {
    return (
        <Section sectionRef={sectionRef} id="faq" addClassName={cls.faq}>
            <Container>
                <H2>F.A.Q.</H2>
                <Row justify="space-between" align="middle">
                    <Col span={11}>
                        {items.map((item) => (
                            <FAQItem key={item.title} item={item} />
                        ))}
                    </Col>
                    <Col span={11}>
                        <img src={img} alt={img} />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default FAQ;
