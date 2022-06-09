import { Row } from "antd";
import React from "react";
import Container from "../../Container/Container";
import { H2 } from "../../TextComponents/HeaderTextComponents";
import { images } from "./images";
import cls from "./OurClients.module.scss";
import OurClientsItem from "./OurClientsItem";
import Section from "./../../Section/Section";

const items = [
    {
        img: images.individuals,
        title: "Individuals",
        text: "For those who don't want to risk much, but strongly want to meet someone online, temporary mail can be a great compromise for personal safety. If some suspicious (or not so suspicious) type on a dating site wants to turn correspondence into personal emails, I recommend securing yourself at least that way.",
        imgPosition: "right",
    },
    {
        img: images.developers,
        title: "Developers",
        text: "I tried using temporary mail to extend access to trial versions of IQBuzz and PressIndex, and when I finally settled on one of them (it was IQBuzz, for those interested), I registered the only software I needed on my main mail. On the whole, since then, I've been testing everything on temporary mail.",
        imgPosition: "left",
    },
    {
        img: images.marketers,
        title: "Marketers",
        text: "Often you need to check the quality of the functionality or the display of the developed letter - and temporary mail helps to save time and quickly sort out possible problems yourself.",
        imgPosition: "right",
    },
    {
        img: images.testers,
        title: "Testers",
        text: "If you are a web developer and have written program code, it should certainly be tested for bugs. One-time mail will allow you to make an unlimited number of requests from new addresses.",
        imgPosition: "left",
    },
];

const OurClients = ({ sectionRef }) => {
    return (
        <Section sectionRef={sectionRef} id="clients">
            <Container className={cls.body}>
                <H2>Our Clients</H2>
                <Row>
                    {items.map((item) => (
                        <OurClientsItem item={item} key={item.title} />
                    ))}
                </Row>
            </Container>
        </Section>
    );
};

export default OurClients;
