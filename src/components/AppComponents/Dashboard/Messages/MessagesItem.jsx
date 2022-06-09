import React from "react";
import cls from "./../Dashboard.module.scss";

const MessagesItem = ({ message }) => {
    return <div className={cls.item}>{message.from}</div>;
};

export default MessagesItem;
