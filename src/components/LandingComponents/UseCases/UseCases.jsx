import React, { useState } from "react";
import Container from "../../Container/Container";
import cls from "./UseCases.module.scss";
import { H2 } from "../../TextComponents/HeaderTextComponents";
import Section from "../../Section/Section";
import Individuals from "./Individuals";
import Developers from "./Developers";
import Marketers from "./Marketers";
import Testers from "./Testers";
import Tabs from "../../Tabs/Tabs";

const items = [
    {
        label: "Individuals",
        key: "individuals",
        component: <Individuals />,
    },
    {
        label: "Developers",
        key: "developers",
        component: <Developers />,
    },
    {
        label: "Marketers",
        key: "marketers",
        component: <Marketers />,
    },
    {
        label: "Testers",
        key: "testers",
        component: <Testers />,
    },
];

const UseCases = ({ sectionRef }) => {
    const [currentItem, setCurrentItem] = useState(items[0]);

    const onClick = (e) => {
        const item = items.find((item) => item.key === e.target.dataset.key);
        setCurrentItem(item);
    };
    return (
        <Section sectionRef={sectionRef} id="cases" addClassName={cls.useCases}>
            <Container>
                <H2>Use Cases</H2>
                <Tabs items={items} selected={currentItem.key} onClick={onClick} bordered={true} />
                {currentItem.component}
            </Container>
        </Section>
    );
};

export default UseCases;
