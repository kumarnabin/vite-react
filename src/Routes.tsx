import React from "react";

import {Route, Routes as AllRoutes} from "react-router-dom";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Root from "./pages/Root";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function Routes() {
    return (
        <AllRoutes>
            <Route path="/" element={<Root/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/setting" element={<Setting/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </AllRoutes>
    );
}

export default Routes;
