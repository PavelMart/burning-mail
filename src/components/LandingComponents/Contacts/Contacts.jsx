import React from "react";
import cls from "./Contacts.module.scss";
import Container from "../../Container/Container";
import Section from "../../Section/Section";
import Button from "../../Buttons/Button";
import { P2 } from "../../TextComponents/ParagraphTextComponents";
import { BoldText, ExtraBoldText } from "../../TextComponents/TextComponents";

const Contacts = ({ sectionRef }) => {
    return (
        <Section sectionRef={sectionRef} id="contact">
            <Container className={cls.body}>
                <P2 margin="0 0 45px">Any questions or suggestions? Let's talk</P2>
                <ExtraBoldText className={cls.link}>
                    <a href="mailto:hello@burningmail.to">hello@burningmail.to</a>
                </ExtraBoldText>
                <Button type="white" className={cls.button}>
                    <a className={cls.buttonLink} href="mailto:hello@burningmail.to">
                        <BoldText>Contact us</BoldText>
                    </a>
                </Button>
            </Container>
        </Section>
    );
};

export default Contacts;
