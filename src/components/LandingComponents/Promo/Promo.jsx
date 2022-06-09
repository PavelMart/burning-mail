import React from "react";
import cls from "./Promo.module.scss";
import Container from "../../Container/Container";
import Section from "./../../Section/Section";
import { H1 } from "../../TextComponents/HeaderTextComponents";
import { P3 } from "../../TextComponents/ParagraphTextComponents";
import Button from "../../Buttons/Button";
import { BoldText } from "../../TextComponents/TextComponents";

const Promo = ({ sectionRef }) => {
    return (
        <Section sectionRef={sectionRef} id="home" addClassName={cls.promo}>
            <Container className={cls.body}>
                <H1 margin="0 0 36px">BurningMail disposable mail, will save you from spam and promotional emails.</H1>
                <P3 margin="0 0 47px">
                    BurningMail disposable mail, will save you from spam and promotional emails. BurningMail disposable mail, will save you
                    from spam and promotional emails. BurningMail disposable mail, will save you from spam and promotional emails.
                </P3>
                <Button type="gradient_border" className={cls.button}>
                    <BoldText>
                        <a href="#pricing">See packages</a>
                    </BoldText>
                </Button>
            </Container>
        </Section>
    );
};

export default Promo;
