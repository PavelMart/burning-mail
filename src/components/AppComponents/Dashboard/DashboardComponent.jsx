import { Row } from "antd";
import React from "react";
import cls from "./Dashboard.module.scss";
import Messages from "./Messages/Messages";
import Boxes from "./Boxes/Boxes";

const DashboardComponent = () => {
    return (
        <div className={cls.dashboard}>
            <Row align="stretch" className={cls.dashboardBody}>
                <Boxes />
                <Messages />
            </Row>
        </div>
    );
};

export default DashboardComponent;
