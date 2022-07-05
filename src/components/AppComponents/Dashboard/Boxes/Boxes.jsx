import React, { useEffect } from "react";
import cls from "./../Dashboard.module.scss";
import { Col } from "antd";
import { H3 } from "../../../TextComponents/HeaderTextComponents";
import { useDispatch, useSelector } from "react-redux";
import BoxList from "./BoxList";
import Loader from "../../../Loader/Loader";
import { getBoxes } from "../../../../redux/boxes/boxesActions";

const Boxes = () => {
    const { boxes, isLoading } = useSelector((state) => state.boxes);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBoxes());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Col span={6} className={cls.addresses}>
            <H3>Your E-Mails ({boxes.length})</H3>
            {isLoading ? <Loader /> : <BoxList boxes={boxes} />}
        </Col>
    );
};

export default Boxes;
