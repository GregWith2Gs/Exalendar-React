import React, { useState } from "react";
import {DateTimePicker} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
//import Stack from 'react-bootstrap/Stack';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
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
                "description": eventDesc,
                "location": null, // todo: add field - for building/room #, hyperlinks, etc
                "start": eventStart.toJSON,
                "end": eventEnd.toJSON,
                "freq": null, // todo: add field - DAILY, WEEKLY, MONTHLY, or YEARLY
                "end_date": null, // todo: add field - date to end repetition
                "interval": null, // todo: add field - int; repeat every 'x'th Day, Week, Month, or Year
                "byday": null // todo: add field - array containing any combo of SU, MO, TU, WE, TH, FR, SA
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
                <Row className='add-space'>
                    <Col>Event Name:</Col>
                    <Col><input type="text" placeholder="Enter text..." value={eventName} onChange={(e)=>setEventName(e.target.value)}/></Col>
                </Row>
                <Row className='add-space'>
                    <Col>Event Type:</Col>
                    <Col><input type="text" placeholder="Enter text..." value={eventType} onChange={(e)=>setEventType(e.target.value)}/></Col>
                </Row >
                <Row className='add-space'>
                    <Col>Event Description:</Col>
                    <Col><input type="text" placeholder="Enter text..." value={eventDesc} onChange={(e)=>setEventDesc(e.target.value)}/></Col>
                </Row>

                <Row className='add-space'></Row>

                <Row className='date-form'>
                    
                    <Col>
                        <DateTimePicker
                            label="Start Date"
                            value={dayjs(start)}
                            onChange={(eventStart) => setEventStart(eventStart)}
                            viewRenderers={{
                                hours: null,
                                minutes: null,
                                seconds: null,
                            }}
                        />

                    </Col>
                    
                </Row>

                <Row className='date-form'>
                    
                    <Col>
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

                    </Col>
                
                    
                    
                </Row>
                <Row className='add-space'>
                    
                    <button onClick={submitEvent}>Create New Event</button>
                    
                </Row>
            </div>
        </form>
    );
}

export default Events;
