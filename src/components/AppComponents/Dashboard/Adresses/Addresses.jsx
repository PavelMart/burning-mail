import React from "react";
import cls from "./../Dashboard.module.scss";
import AdressesList from "./AdressesList";
import { Col } from "antd";
import { H3 } from "../../../TextComponents/HeaderTextComponents";
import { useSelector } from "react-redux";

const Adresses = () => {
    const { addresses } = useSelector((state) => state.mail);

    return (
        <Col span={6} className={cls.addresses}>
            <H3>Your E-Mails ({addresses.length})</H3>
            <AdressesList addresses={addresses} />
        </Col>
    );
};

export default Adresses;
