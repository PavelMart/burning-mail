import { Col, Row } from "antd";
import React from "react";
import Container from "../../Container/Container";
import Section from "../../Section/Section";
import { H3 } from "../../TextComponents/HeaderTextComponents";
import cls from "./PaymentAcceptance.module.scss";
import aws from "./../../../assets/img/PaymentAcceptance/aws.svg";
import visa from "./../../../assets/img/PaymentAcceptance/visa.svg";
import mastercard from "./../../../assets/img/PaymentAcceptance/mastercard.svg";
import unionpay from "./../../../assets/img/PaymentAcceptance/unionpay.svg";

const PaymentAcceptance = ({ sectionRef }) => {
    return (
        <Section sectionRef={sectionRef} addClassName={cls.paymentAcceptance}>
            <Container>
                <Row>
                    <Col span={8} className={cls.col}>
                        <H3>Powered on</H3>
                        <img src={aws} alt={aws} />
                    </Col>
                    <Col span={16} className={cls.col}>
                        <H3>Payment Acceptance</H3>
                        <Row justify="space-around">
                            <img src={visa} alt={visa} />
                            <img src={mastercard} alt={mastercard} />
                            <img src={unionpay} alt={unionpay} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default PaymentAcceptance;
