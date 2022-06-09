import React from "react";
import cls from "./../Dashboard.module.scss";
import AdressesItem from "./AdressesItem";

const AdressesList = ({ addresses }) => {
    return (
        <ul className={cls.addressesList}>
            {addresses.map((address) => (
                <AdressesItem address={address} key={address.id} />
            ))}
        </ul>
    );
};

export default AdressesList;
