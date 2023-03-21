import ReactBigCalendar from './ReactBigCalendar';
import React, { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        fetch('http://localhost:3306/', postData)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Handle data
        })
    }

    return (
        <div>
            <h1>Home Page</h1>
            <ReactBigCalendar />
            <br></br>
            {/* <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Event Name</Form.Label>
                <Form.Control placeholder="Name of event" />
            </Form.Group>
            <Form.Label>Event Type</Form.Label>
            <Form.Select aria-label="Event Type">
                <option value="class">class</option>
                <option value="event">event</option>
                <option value="test">test</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Event Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Event Start</Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>Event End</Form.Label>
            </Form.Group>
            </Form> */}

            <form>
                <label>
                    Event name:
                    <input type="text" value={eventName} onChange={(e)=>setEventName(e.target.value)}/>
                </label>
                <label>
                    Event type:
                    <input type="text" value={eventType} onChange={(e)=>setEventType(e.target.value)}/>
                </label>
                <label>
                    Event description:
                    <input type="text" value={eventDesc} onChange={(e)=>setEventDesc(e.target.value)}/>
                </label>
                <label>
                    Event start time:
                    <DateTimePicker 
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
                </label>
                <label>
                    Event end time:
                    <DateTimePicker 
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
                </label>
                <button onClick={submitEvent}>Submit</button>
            </form>
        </div>
    );
}

export default Home;