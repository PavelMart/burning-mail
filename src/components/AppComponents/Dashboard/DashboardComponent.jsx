import { Row } from "antd";
import React from "react";
import cls from "./Dashboard.module.scss";
import { useSelector } from "react-redux";
import Adresses from "./Adresses/Addresses";
import Messages from "./Messages/Messages";

const DashboardComponent = () => {
    const { addresses, current } = useSelector((state) => state.mail);
    const currentAddress = addresses.find((address) => address.id === current);

    return (
        <div className={cls.dashboard}>
            <Row align="stretch" className={cls.dashboardBody}>
                <Adresses addresses={addresses} />
                <Messages currentAddress={currentAddress} count={addresses.length} />
            </Row>
        </div>
    );
};

export default DashboardComponent;
