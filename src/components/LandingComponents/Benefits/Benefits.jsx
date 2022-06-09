import React from "react";
import Container from "../../Container/Container";
import BenefitsList from "./BenefitsList";
import Section from "./../../Section/Section";
import { icons } from "./icons";

const items = [
    {
        icon: icons.personalDomain,
        title: "Personal Domain",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
    },
    {
        icon: icons.premiumDomains,
        title: "Premium Domains",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
    },
    {
        icon: icons.instantAccess,
        title: "Instant Access",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
    },
    {
        icon: icons.privateAdresses,
        title: "Private Addresses",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
    },
    {
        icon: icons.longTermStorage,
        title: "Long-Term Storage",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
    },
    {
        icon: icons.fullFunctionality,
        title: "Full Functionality",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
    },
    {
        icon: icons.anonimitySecurity,
        title: "Anonimity & Security",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
    },
    {
        icon: icons.noAds,
        title: "No Ads",
        text: "Mail disposable mail, will save you from spam and promotional emails.",
    },
];

const Benefits = ({ sectionRef }) => {
    return (
        <Section sectionRef={sectionRef} id="benefits">
            <Container>
                <BenefitsList items={items} />
            </Container>
        </Section>
    );
};

export default Benefits;
