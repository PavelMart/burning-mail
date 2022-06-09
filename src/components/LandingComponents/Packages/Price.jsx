import React from "react";
import { H1 } from "../../TextComponents/HeaderTextComponents";

const Price = ({ price }) => {
    return <H1 margin="0 0 50px">{price.toLocaleString("ru-RU", { style: "currency", currency: "USD" })}</H1>;
};

export default Price;
