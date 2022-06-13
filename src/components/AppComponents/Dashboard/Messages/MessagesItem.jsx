import React, { useState } from "react";
import Button from "../../../Buttons/Button";
import { RegularText } from "../../../TextComponents/TextComponents";
import cls from "./../Dashboard.module.scss";

const MessagesItem = ({ message, onDeleteMessage, addressId }) => {
    const [selected, setSelected] = useState(false);

    const getContentText = (content) => {
        const element = document.createElement("p");
        element.insertAdjacentHTML("beforeend", content);
        return element.textContent;
    };

    const openMessage = () => {
        setSelected(!selected);
    };

    return (
        <div className={cls.messageItem}>
            <div className={[cls.messageInfo, selected && cls.selected].join(" ")} onClick={openMessage}>
                <div className={cls.from}>{message.from}</div>
                <div className={cls.theme}>{message.theme}</div>
                <div className={cls.shortText}>{getContentText(message.content)}</div>
                {selected ? (
                    <div className={cls.buttons}>
                        <Button type="gray" className={cls.forward}>
                            <RegularText>Forward</RegularText>
                        </Button>
                        <Button type="gray" className={cls.reply}>
                            <RegularText>Reply</RegularText>
                        </Button>
                        <Button type="gray" className={cls.delete} onClick={() => onDeleteMessage({ addressId, messageId: message.id })}>
                            <RegularText>Delete</RegularText>
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className={cls.time}>{message.time}</div>
                        <div className={cls.date}>{message.date}</div>
                    </>
                )}
            </div>
            <div className={[cls.messageText, selected && cls.selected].join(" ")} dangerouslySetInnerHTML={{ __html: message.content }} />
        </div>
    );
};

export default MessagesItem;
