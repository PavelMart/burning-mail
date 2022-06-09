import React from "react";
import cls from "./Footer.module.scss";
import Container from "./../Container/Container";
import { Col, Row } from "antd";
import Logo from "./../Logo/Logo";
import { P2, P3 } from "../TextComponents/ParagraphTextComponents";

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <Container>
                <Row align="middle">
                    <Col span={10} className={cls.bodyCol}>
                        <Logo />
                        <P3 margin="0 0 40px">
                            BurningMail disposable mail, will save you from spam and promotional emails. BurningMail disposable mail, will
                            save you from spam and promotional emails. BurningMail disposable mail, will save you from spam and promotional
                            emails.
                        </P3>
                        <P3>Company LLC, Sweden (c) 2022</P3>
                    </Col>
                    <Col span={10} offset={2} className={cls.linkCol}>
                        <span className={cls.divider} />
                        <Row>
                            <Col span={7}>
                                <a href="#home">
                                    <P2>Home</P2>
                                </a>
                                <a href="#benefits">
                                    <P2>Benefits</P2>
                                </a>
                                <a href="#clients">
                                    <P2>Clients</P2>
                                </a>
                            </Col>
                            <Col span={7}>
                                <a href="#cases">
                                    <P2>Use Cases</P2>
                                </a>
                                <a href="#pricing">
                                    <P2>Pricing</P2>
                                </a>
                                <a href="#faq">
                                    <P2>FAQ</P2>
                                </a>
                            </Col>
                            <Col span={8} offset={2}>
                                <a href="#contact">
                                    <P2>Contact Us</P2>
                                </a>
                                <a href="#terms">
                                    <P2>Terms & Conditions</P2>
                                </a>
                                <a href="#policy">
                                    <P2>Privacy Policy</P2>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
export default Footer;
