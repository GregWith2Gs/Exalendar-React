import React, { useState } from "react";
import {DateTimePicker} from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
                            <TextField id="standard-basic" label="Event Name" variant="standard" fullwidth={true} />
                        </div>
                        
                        
                        <div className='exit'>
                        
                            <Button
                                variant='contained' 
                                
                                sx={{width:30, minWidth:0, mindHeight:0, padding:0, margin:0}}
                                >
                                <img style={{ width: '30px', height: '30px'}} src={exit} alt="Logo" />
                            </Button>
                            

                        </div>
                        

                    </div>
                    <div className='rowspace'>
                        <div className='columnspace'>
                            <TextField id="standard-basic" label="Event Type" variant="standard" fullwidth={true}/>
                        </div>

                    </div>
                    <div className='rowspace'>
                         <div className='columnspace'>
                            <TextField id="standard-basic" label="Description" variant="standard" fullwidth={true}/>
                        </div>
                        
                    </div>

                </div>
                
                <div className='righthalf'>
                    <div className='rowspace'>
                    <DateTimePicker
                        body= 'secondary'
                        label="Start Date"
                        value={dayjs(start)}
                        onChange={(eventStart) => setEventStart(eventStart)}
                        viewRenderers={{
                            hours: null,
                            minutes: null,
                            seconds: null,
                        }}
                    />
                    </div>
                    <div className='rowspace'>

                    
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

                <div className='makebutton'>
                    <Button variant='contained'>Success</Button>
                </div>
                
            </div>
        </form>
    );
}



export default Events;
