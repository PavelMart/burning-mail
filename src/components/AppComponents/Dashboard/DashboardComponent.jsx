import { Row } from "antd";
import React from "react";
import cls from "./Dashboard.module.scss";
import Adresses from "./Adresses/Addresses";
import Messages from "./Messages/Messages";

const DashboardComponent = () => {
    return (
        <div className={cls.dashboard}>
            <Row align="stretch" className={cls.dashboardBody}>
                <Adresses />
                <Messages />
            </Row>
        </div>
    );
};

export default DashboardComponent;
