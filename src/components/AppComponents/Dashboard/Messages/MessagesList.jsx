import { Row } from "antd";
import React from "react";
import cls from "./../Dashboard.module.scss";
import MessagesItem from "./MessagesItem";

const MessagesList = ({ messages }) => {
    return (
        <Row className={cls.messagesBody}>
            <ul className={cls.messagesList}>
                {messages.map((message) => (
                    <MessagesItem message={message} key={Math.random()} />
                ))}
            </ul>
        </Row>
    );
};

export default MessagesList;
