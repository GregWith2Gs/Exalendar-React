import ReactBigCalendar from './ReactBigCalendar';
import React, { useState } from "react";
import DateTimePicker from 'react-datetime-picker';

function Home() {
    const [eventName, setEventName] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventStart, setEventStart] = useState(null);
    const handleStartDatetime = (datetime) => {
        setEventStart(datetime);
    };
    const [eventEnd, setEventEnd] = useState(null);
    const handleEndDatetime = (datetime) => {
        setEventEnd(datetime);
    };

    function submitEvent() {
        console.log(eventName);
        
        let postData = {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name": eventName,
                "type": eventType,
                "event_description": eventDesc,
                "event_date_start": eventStart,
                "event_date_end": eventEnd
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
        <div>
            <h1>Home Page</h1>
            <ReactBigCalendar />
            <br></br>
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
                    <DateTimePicker selected={eventStart} onChange={handleStartDatetime}/>
                </label>
                <label>
                    Event end time:
                    <DateTimePicker selected={eventEnd} onChange={handleEndDatetime}/>
                </label>
                <button onClick={submitEvent}>Submit</button>
            </form>
        </div>
    );
}

export default Home;