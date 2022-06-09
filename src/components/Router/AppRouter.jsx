import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "../../pages/DashboardPage";
import SettingsPage from "../../pages/SettingsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    );
};

export default AppRouter;
