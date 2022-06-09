import React from "react";
import cls from "./Packages.module.scss";
import Price from "./Price";
import PackageAdvantagesList from "./PackageAdvantagesList";
import Button from "../../Buttons/Button";
import { H3orange } from "../../TextComponents/HeaderTextComponents";
import { P3 } from "../../TextComponents/ParagraphTextComponents";
import { Col } from "antd";
import { useDispatch } from "react-redux";
import { openSignIn } from "../../../redux/popup/popupSlice";
import { BoldText } from "../../TextComponents/TextComponents";

const PackagesItem = ({ item }) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(openSignIn());
    };

    const { title, text, advantages, price, outlined } = item;

    return (
        <Col span={8} className={cls.itemWrap}>
            <div className={`${cls.item} ${outlined && cls.outlined}`}>
                <H3orange margin="0 0 35px">{title}</H3orange>
                <P3 margin="0 0 30px">{text}</P3>
                <PackageAdvantagesList advantages={advantages} />
                <Price price={price} />
                <Button className={cls.button} type="orange" onClick={onClick}>
                    <BoldText>Buy now</BoldText>
                </Button>
            </div>
        </Col>
    );
};

export default PackagesItem;
