import ReactBigCalendar from './ReactBigCalendar';
import React, { useEffect, useState } from "react";

import Navigation from './Navigation';
import { BrowserRouter }  from "react-router-dom";
import '../css/Home.css';
import "../css/Styles.css";
//import Events from './Events';



function Home() {
    



    const [eventName, setEventName] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventStart, setEventStart] = useState(new Date());
    const [eventEnd, setEventEnd] = useState(new Date());
    
    
    
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
       
        <div className="Home">
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
            
            

            
            <ReactBigCalendar/>
                    
            
            
        </div>
        
    );
}

export default Home;