import { Col } from "antd";
import React from "react";
import cls from "./../Dashboard.module.scss";
import Middle from "./Middle";
import Header from "./Header";
import MessagesList from "./MessagesList";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../../../redux/mail/mailSlice";

const Messages = () => {
    const { addresses, current } = useSelector((state) => state.mail);
    const { messages, address, id } = addresses.find((address) => address.id === current);

    const dispatch = useDispatch();

    const onDeleteMessage = (id, messageId) => {
        dispatch(deleteMessage(id, messageId));
    };

    return (
        <Col span={18} className={cls.messages}>
            <Header address={address} id={id} count={addresses.length} />
            <Middle messages={messages} />
            <MessagesList messages={messages} onDeleteMessage={onDeleteMessage} addressId={id} />
        </Col>
    );
};

export default Messages;
