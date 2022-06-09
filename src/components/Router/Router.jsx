import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import AppRouter from "./AppRouter";

const Router = ({ refList }) => {
    const { isAuth } = useSelector((state) => state.auth);

    return (
        <div className={["Router", isAuth && "AppRouter"].join(" ")}>
            {isAuth ? (
                <AppRouter />
            ) : (
                <Routes>
                    <Route path="/" element={<LandingPage refList={refList} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            )}
        </div>
    );
};

export default Router;
