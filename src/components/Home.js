import ReactBigCalendar from './ReactBigCalendar';
import React, { useEffect, useState } from "react";

import Navigation from './Navigation';
import { BrowserRouter }  from "react-router-dom";
import '../css/Home.css';
import "../css/Styles.css";

function Home() {
    const [theme, setTheme] = useState("light");
    const handleThemeChange = () => {
        setTheme( theme === "light" ? "dark" : "light");
    
    };

    return (
       
        <div className="Home">
            <Navigation />
            <ReactBigCalendar />        
        </div>
        
    );
}

export default Home;