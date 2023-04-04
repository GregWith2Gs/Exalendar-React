import React, { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

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
                <label>
                    Event name:
                    <input type="text" width= "1px" value={eventName} onChange={(e)=>setEventName(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    Event type:
                    <input type="text" value={eventType} onChange={(e)=>setEventType(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    Event description:
                    <input type="text" value={eventDesc} onChange={(e)=>setEventDesc(e.target.value)}/>
                </label>
                <br></br>
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
                <br></br>
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
    );
}

export default Events;