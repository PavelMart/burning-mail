import React from "react";
import cls from "./Settings.module.scss";
import Container from "../../Container/Container";
import YourSettings from "./YourSettings/YourSettings";
import OrderHystory from "./OrderHystory/OrderHystory";

const SettingsComponent = () => {
    return (
        <div className={cls.settings}>
            <Container className={cls.body}>
                <YourSettings />
                <OrderHystory />
            </Container>
        </div>
    );
};

export default SettingsComponent;
