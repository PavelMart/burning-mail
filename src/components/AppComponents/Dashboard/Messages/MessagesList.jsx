import { Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import EmptyList from "../../../EmptyList/EmptyList";
import cls from "./../Dashboard.module.scss";
import MessagesItem from "./MessagesItem";

const MessagesList = () => {
    const { mails } = useSelector((state) => state.mail);

    return (
        <Row className={cls.messagesBody}>
            <ul className={cls.messagesList}>
                {mails.length ? mails.map((mail) => <MessagesItem message={mail} key={mail.id} />) : <EmptyList title="No mail yet" />}
            </ul>
        </Row>
    );
};

export default MessagesList;
