import React, { useEffect, useRef, useState } from "react";
import { Row } from "antd";
import cls from "./Header.module.scss";
import Container from "../Container/Container";
import HeaderMenu from "./HeaderMenu";
import HeaderButtons from "./HeaderButtons";
import HeaderLogo from "./HeaderLogo";
import { useDispatch, useSelector } from "react-redux";
import { scrollHandler } from "../../utils/scrollUtils";

const MyHeader = ({ type, refList }) => {
    const { current } = useSelector((state) => state.menu);
    const dispatch = useDispatch();

    const headerRef = useRef(null);

    const [withoutPadding, setWithoutPadding] = useState(false);

    const onScroll = () => {
        scrollHandler(dispatch, refList, current, headerRef, setWithoutPadding);
    };

    useEffect(() => {
        setWithoutPadding(false);
    }, [type]);

    useEffect(() => {
        if (type === "landing") {
            document.addEventListener("scroll", onScroll);
        } else {
            setWithoutPadding(true);
            document.removeEventListener("scroll", onScroll);
        }

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, type]);

    return (
        <header ref={headerRef} className={`${cls.header} ${withoutPadding && cls.withoutPadding}`}>
            <Container>
                <Row align="bottom" justify="space-between" wrap={{ xs: true, lg: false }}>
                    <HeaderLogo />
                    <HeaderMenu type={type} />
                    <HeaderButtons type={type} />
                </Row>
            </Container>
        </header>
    );
};

export default MyHeader;
