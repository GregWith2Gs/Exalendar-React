import ReactBigCalendar from './ReactBigCalendar';
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Navigation from './Navigation';
import { BrowserRouter }  from "react-router-dom";
import '../css/Home.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Events from './Events';

function Home() {
    const [theme, setTheme] = useState("light");
    const handleThemeChange = () => {
        setTheme( theme === "light" ? "dark" : "light");
    
    };

    return (
        <div>
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
            <Row>
                <Col xs="auto">
                    <Form.Control placeholder="Menu"/>
                    <Form.Control placeholder="Day"/>
                    <Form.Control placeholder="Week"/>
                    <Form.Control placeholder="Month"/>
                    <Form.Control placeholder="Agenda"/>
                    <Form.Control placeholder="light/dark"/>
                    <button onClick={handleThemeChange}>light/dark</button>
                </Col>
                <Col xs="auto">
                        <ReactBigCalendar />
                    <br></br>
                </Col>
                <Col xs="auto">
                    <Events/>                    
                </Col>
            </Row>
        </div>
    );
}

export default Home;