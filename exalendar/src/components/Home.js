import ReactBigCalendar from './ReactBigCalendar';
import React, { useState } from "react";

function Home() {
    const [eventName, setEventName] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventStart, setEventStart] = useState('');
    const [eventEnd, setEventEnd] = useState('');

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
                    <input type="text" value={eventStart} onChange={(e)=>setEventStart(e.target.value)}/>
                </label>
                <label>
                    Event end time:
                    <input type="text" value={eventEnd} onChange={(e)=>setEventEnd(e.target.value)}/>
                </label>
                <button onClick={submitEvent}>Submit</button>
            </form>
        </div>
    );
}

export default Home;