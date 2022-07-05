import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBox } from "../../../../redux/boxes/boxesSlice";
import { P3 } from "../../../TextComponents/ParagraphTextComponents";
import cls from "./../Dashboard.module.scss";

const BoxItem = ({ address }) => {
    const { current, boxes } = useSelector((state) => state.boxes);

    const dispatch = useDispatch();

    const getBox = (email) => {
        return boxes.find((box) => box.email === email);
    };

    const changeCurrentBox = () => {
        localStorage.setItem("currentEmail", JSON.stringify(getBox(address)));
        dispatch(setCurrentBox(getBox(address)));
    };

    return (
        <li className={[cls.addressesItem, current.email === address && cls.active].join(" ")} onClick={changeCurrentBox}>
            <P3>
                {address} {/*({messages.length})*/}
            </P3>
        </li>
    );
};

export default BoxItem;

// <li className={[cls.addressesItem, current === id && cls.active].join(" ")} onClick={onClick}>
