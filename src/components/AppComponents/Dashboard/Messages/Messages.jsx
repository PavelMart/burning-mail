import { Col } from "antd";
import React from "react";
import cls from "./../Dashboard.module.scss";
import Middle from "./Middle";
import Header from "./Header";
import MessagesList from "./MessagesList";

const Messages = ({ currentAddress, count }) => {
    const { address, id, messages } = currentAddress;

    return (
        <Col span={18} className={cls.messages}>
            <Header address={address} id={id} count={count} />
            <Middle messages={messages} />
            <MessagesList messages={messages} />
        </Col>
    );
};

export default Messages;
