import ReactBigCalendar from './ReactBigCalendar';

//import 'react-big-calendar/lib/sass/styles';
//import 'react-big-calendar/lib/addons/dragAndDrop/styles'; // if using DnD

import React, { useEffect, useState } from "react";

import DateTimePicker from 'react-datetime-picker';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigation from './Navigation';
import { BrowserRouter }  from "react-router-dom";
import '../css/Home.css';
import "../css/Styles.css";
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
import Events from './Events';



function Home() {
    //adding these right now as test for create event popup
    const [selectedEvent, setSelectedEvent] = useState(undefined)
    const [modalState, setModalState] = useState(false)



    const handleSelectedEvent = (event) => {
        setSelectedEvent(event)
        setModalState(true)
    }

    const handleSelected = (event) => {
        setSelectedEvent(event)
        setModalState(true)
    }



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

    const Modal = () => {
        return (
           <div>
            
              <Events />
           </div>
        )
    }

    return (
       
        <div className="Home" data-theme={darkMode ? "dark" : "light"}>
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
            
            

            
            <ReactBigCalendar/>
                    
            
            
        </div>
        
    );
}

export default Home;