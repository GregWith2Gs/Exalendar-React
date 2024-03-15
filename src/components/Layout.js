import React from "react";
import Navigation from './Navigation';
import { BrowserRouter }  from "react-router-dom";

import '../css/Home.css';
import "../css/Styles.css";

import WebRoutes from "./WebRoutes.js"

const Layout = () => {
    return (
        <BrowserRouter>
            <div className="Layout">
                <Navigation />
                <div classname="Content">
                    <WebRoutes />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Layout;