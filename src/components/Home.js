import ReactBigCalendar from './ReactBigCalendar';
import React, { useEffect, useState } from "react";

import DateTimePicker from 'react-datetime-picker';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigation from './Navigation';
import { BrowserRouter }  from "react-router-dom";
import '../css/Home.css';
import "../css/Styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Events from './Events';



function Home() {
    const [eventName, setEventName] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventStart, setEventStart] = useState(new Date());
    const [eventEnd, setEventEnd] = useState(new Date());
    const [darkMode, setDarkMode] = useState(false);
    //const [theme, setTheme] = useState('light');
    const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
    
    function submitEvent() {
        console.log(eventName);
        
        let postData = {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name": eventName,
                "type": eventType,
                "event_description": eventDesc,
                "event_date_start": eventStart.toJSON,
                "event_date_end": eventEnd.toJSON
            })
        }
        console.log(postData);
        fetch('http://localhost:4000/', postData)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Handle data
        })
    }

    return (
       
                <div className="Home" data-theme={darkMode ? "dark" : "light"}>
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
                            <button onClick={toggleDarkMode}>light/dark</button>
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