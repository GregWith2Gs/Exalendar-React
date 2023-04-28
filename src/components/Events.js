import React, { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import '../css/Event.css';
import { Select } from 'antd';


function Events() {
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
        <form>
            <Container fluid className='Exalendar'>
                <Row className='add-space'>
                    <Col>Event Name:</Col>
                    <Col><Select
                            showSearch
                            style={{
                            width: 160,
                            }}
                            value={eventType}
                            placeholder="Select or type event type"
                            onChange={(value) => setEventType(value)}
                            onSearch={(value) => console.log('search:', value)}
                            filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                            {
                                value: 'meeting',
                                label: 'Meeting',
                            },
                            {
                                value: 'lecture',
                                label: 'Lecture',
                            },
                            {
                                value: 'lab',
                                label: 'Lab',
                            },
                            ]}
                            allowClear
                /></Col>
                </Row>
                <Row className='add-space'>
                    <Col>Event Type:</Col>
                    <Col><Select
                            showSearch
                            style={{
                            width: 160,
                            }}
                            value={eventType}
                            placeholder="Select or type event type"
                            onChange={(value) => setEventType(value)}
                            onSearch={(value) => console.log('search:', value)}
                            filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                            {
                                value: 'meeting',
                                label: 'Meeting',
                            },
                            {
                                value: 'lecture',
                                label: 'Lecture',
                            },
                            {
                                value: 'lab',
                                label: 'Lab',
                            },
                            ]}
                            allowClear
                /></Col>
                </Row >
                <Row className='add-space'>
                    <Col>Event Description:</Col>
                    <Col><input type="text" placeholder="Enter text..." value={eventDesc} onChange={(e)=>setEventDesc(e.target.value)}/></Col>
                </Row>
                <Row className='add-space'>
                    <Col>Event Start Time:</Col>
                    <Col>
                        <DateTimePicker className='calendar'
                        onChange={setEventStart}
                        value={eventStart}
                        amPmAriaLabel="Select AM/PM"
                        calendarAriaLabel="Toggle calendar"
                        clearAriaLabel="Clear value"
                        dayAriaLabel="Day"
                        hourAriaLabel="Hour"
                        maxDetail="minute"
                        minuteAriaLabel="Minute"
                        monthAriaLabel="Month"
                        nativeInputAriaLabel="Date and time"
                        secondAriaLabel="Second"
                        yearAriaLabel="Year"
                        format="yyyy-MM-dd hh:mm a"
                        />
                    </Col>
                    <Col></Col>
                </Row>
                <Row className='add-space'>
                    <Col>Event End Time:</Col>
                    <Col>
                        <DateTimePicker className='calendar'
                        onChange={setEventEnd}
                        value={eventEnd}
                        minDate={eventStart}
                        amPmAriaLabel="Select AM/PM"
                        calendarAriaLabel="Toggle calendar"
                        clearAriaLabel="Clear value"
                        dayAriaLabel="Day"
                        hourAriaLabel="Hour"
                        maxDetail="minute"
                        minuteAriaLabel="Minute"
                        monthAriaLabel="Month"
                        nativeInputAriaLabel="Date and time"
                        secondAriaLabel="Second"
                        yearAriaLabel="Year"
                        format="yyyy-MM-dd hh:mm a"
                        />
                    </Col>
                    <Col></Col>
                </Row>
                <Row className='add-space'>
                    
                    <button onClick={submitEvent}>Submit</button>
                    
                </Row>
            </Container>
        </form>
    );
}

export default Events;
