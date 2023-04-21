import React, { useState } from "react";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from 'react-bootstrap/Stack';
import dayjs from "dayjs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import '../css/Event.css';

function Events() {
    const [eventName, setEventName] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventStart, setEventStart] = React.useState<dayjs | null>(dayjs('2022-04-17T15:30'));
    const [eventEnd, setEventEnd] = React.useState<dayjs | null>(dayjs('2022-04-17T15:30'));

    function submitEvent() {
        console.log(eventName);
        const retStart = eventStart.format('YYYY-MM-DDTHH:mm:ss');
        const retEnd = eventEnd.format('YYYY-MM-DDTHH:mm:ss');
        
        let postData = {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name": eventName,
                "type": eventType,
                "event_description": eventDesc,
                "event_date_start": retStart,
                "event_date_end": retEnd
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
        <form>
            <Container fluid className='Exalendar'>
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
                <Row className='add-space'>
                    
                    <Col>
                        <DateTimePicker 
                        label="Event Start Time"
                        onChange={(newVal)=> setEventStart(newVal)}
                        />
                    </Col>
                    <Col></Col>
                </Row>
                <Row className='add-space'>
                    <Col>Event End Time:</Col>
                    <Col>
                        <DateTimePicker
                        label="Event End Time"
                        onChange={(newVal)=> setEventEnd(newVal)}
                        />
                    </Col>
                    <Col></Col>
                </Row>
                <Row className='add-space'>
                    
                    <button onClick={submitEvent}>Create New Event</button>
                    
                </Row>
            </Container>
        </form>
    );
}

export default Events;
