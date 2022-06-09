import { Row } from "antd";
import React from "react";
import PackagesItem from "./PackagesItem";

const PackagesList = ({ items }) => {
    return (
        <Row justify="space-between">
            {items.map((item) => (
                <PackagesItem item={item} key={item.title} />
            ))}
        </Row>
    );
};

export default PackagesList;
