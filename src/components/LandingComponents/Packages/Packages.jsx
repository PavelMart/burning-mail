import React from "react";
import Container from "../../Container/Container";
import Section from "../../Section/Section";
import { H2 } from "../../TextComponents/HeaderTextComponents";
import cls from "./Packages.module.scss";
import PackagesList from "./PackagesList";

const items = [
    {
        title: "1 Single E-mail",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
        advantages: [
            { title: "Instant Access", available: true },
            { title: "Private Addresses", available: true },
            { title: "Premium Domains", available: false },
            { title: "Long-Term Storage", available: false },
            { title: "Full Functionality", available: false },
            { title: "Anonimity & Security", available: true },
            { title: "No Ads", available: true },
        ],
        price: 1.99,
        outlined: false,
    },
    {
        title: "10 E-mails Package",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
        advantages: [
            { title: "Instant Access", available: true },
            { title: "Private Addresses", available: true },
            { title: "Premium Domains", available: false },
            { title: "Long-Term Storage", available: true },
            { title: "Full Functionality", available: false },
            { title: "Anonimity & Security", available: true },
            { title: "No Ads", available: true },
        ],
        price: 17.99,
        outlined: true,
    },
    {
        title: "100 E-mails Package",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
        advantages: [
            { title: "Instant Access", available: true },
            { title: "Private Addresses", available: true },
            { title: "Premium Domains", available: true },
            { title: "Long-Term Storage", available: true },
            { title: "Full Functionality", available: true },
            { title: "Anonimity & Security", available: true },
            { title: "No Ads", available: true },
        ],
        price: 69.99,
        outlined: false,
    },
];

const Packages = ({ sectionRef }) => {
    return (
        <Section sectionRef={sectionRef} id="pricing" addClassName={cls.packages}>
            <Container className={cls.body}>
                <H2>Packages</H2>
                <PackagesList items={items} />
            </Container>
        </Section>
    );
};

export default Packages;
