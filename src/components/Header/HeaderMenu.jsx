import React from "react";
import Menu from "./../Menu/LandingMenu/Menu";
import { useSelector, useDispatch } from "react-redux";
import { setCurrent } from "../../redux/menu/menuSlice";
import { Col, Row } from "antd";

const HeaderMenu = ({ type }) => {
    const { current, items } = useSelector((state) => state.menu);
    const dispatch = useDispatch();

    const onClick = (e) => {
        if (current !== e.target.dataset.key) dispatch(setCurrent(e.target.dataset.key));
    };

    return (
        type === "landing" && (
            <Col flex={1}>
                <Row>
                    <Menu onClick={onClick} selected={current} items={items} />
                </Row>
            </Col>
        )
    );
};

export default HeaderMenu;
