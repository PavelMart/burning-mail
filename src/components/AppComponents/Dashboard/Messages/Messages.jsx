import { Col } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMails } from "../../../../redux/mail/mailActions";
import cls from "./../Dashboard.module.scss";
import Header from "./Header";
import Middle from "./Middle";
import MessagesList from "./MessagesList";

const Messages = () => {
    const { current } = useSelector((state) => state.boxes);

    const dispatch = useDispatch();

    useEffect(() => {
        if (current) dispatch(getMails({ id: current.id }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current]);

    return (
        <Col span={18} className={cls.messages}>
            <Header />
            <Middle />
            <MessagesList />
        </Col>
    );
};

export default Messages;
