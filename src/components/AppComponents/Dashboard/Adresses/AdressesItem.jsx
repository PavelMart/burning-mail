import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentAddress } from "../../../../redux/mail/mailSlice";
import { P3 } from "../../../TextComponents/ParagraphTextComponents";
import cls from "./../Dashboard.module.scss";

const AdressesItem = ({ address }) => {
    const { address: mail, messages, id } = address;
    const { current } = useSelector((state) => state.mail);

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(setCurrentAddress(id));
    };

    return (
        <li className={[cls.addressesItem, current === id && cls.active].join(" ")} onClick={onClick}>
            <P3>
                {mail} ({messages.length})
            </P3>
        </li>
    );
};

export default AdressesItem;
