import { Row } from "antd";
import React from "react";
import EmptyList from "../../../EmptyList/EmptyList";
import cls from "./../Dashboard.module.scss";
import MessagesItem from "./MessagesItem";

const MessagesList = ({ messages, onDeleteMessage, addressId }) => {
    return (
        <Row className={cls.messagesBody}>
            <ul className={cls.messagesList}>
                {messages.length ? (
                    messages.map((message) => (
                        <MessagesItem message={message} key={message.id} onDeleteMessage={onDeleteMessage} addressId={addressId} />
                    ))
                ) : (
                    <EmptyList title="No mail yet" />
                )}
            </ul>
        </Row>
    );
};

export default MessagesList;
