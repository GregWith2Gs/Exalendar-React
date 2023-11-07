import React, { useState } from "react";
import {DateTimePicker} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import exit from '../media/icons8-x-60.png';
import '../css/Event.css';

function Events({start, end}) {
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
        <form className='Form'>
            <div fluid className='MakeEvent'>
                <div className='lefthalf'>
                    <div className='rowspace'>
                        <div className='columnspace'>
                            Event Name:
                        </div>
                        <div className='columnspace'>
                            <input type="text" placeholder="Enter text..." value={eventName} onChange={(e)=>setEventName(e.target.value)}/>  
                        </div>
                        
                        <div className='exit'>
                            <img style={{ width: '100%', height: '100%'}} src={exit} alt="Logo" />
                        </div>

                    </div>
                    <div className='rowspace'>
                        thing

                    </div>
                    <div className='rowspace'>
                        thing

                        
                    </div>

                </div>
                
                <div className='righthalf'>
                    <DateTimePicker
                        label="End Date"
                        value={dayjs(end)}
                        onChange={(eventEnd) => setEventEnd(eventEnd)}
                        viewRenderers={{
                            hours: null,
                            minutes: null,
                            seconds: null,
                        }}
                    />

                </div>
                
            </div>
        </form>
    );
}



export default Events;
