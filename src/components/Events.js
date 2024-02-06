import React, { useState } from "react";
import {DateTimePicker} from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import exit from '../media/icons8-x-60.png';
import '../css/Event.css';


function Events({start, end, onExit}) {
    const [eventName, setEventName] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventStart, setEventStart] = useState(new Date());
    const [eventEnd, setEventEnd] = useState(new Date());
    

    
    

    function submitEvent() {
        console.log(eventName);

        onExit();
        
        let postData = {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                "type": eventType,
                "title": eventName,
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
                <div className='lefthalf'>
                    <div className='rowspace'>
                        <div className='columnspace'>
                            <TextField inputRef={eventName} id="standard-basic" label="Event Name" variant="standard" fullwidth={true} />
                        </div>
                        
                        
                        <div className='exit'>
                        
                            <Button 
                                onClick={() => {
                                    onExit();
                                }}
                                variant='contained' 
                                sx={{width:30, minWidth:0, minHeight:0, padding:0, margin:0}}
                                >
                                <img style={{ width: '30px', height: '30px'}} src={exit} alt="Logo" />
                            </Button>
                            

                        </div>
                        

                    </div>
                    <div className='rowspace'>
                        <div className='columnspace'>
                            <TextField inputRef={eventType} id="standard-basic" label="Event Type" variant="standard" fullwidth={true}/>
                        </div>

                    </div>
                    <div className='rowspace'>
                         <div className='columnspace'>
                            <TextField inputRef={eventDesc} id="standard-basic" label="Description" variant="standard" fullwidth={true}/>
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
                    <Button 
                        onClick={() => {
                            submitEvent();
                        }} 
                        variant='contained'>Submit</Button>
                </div>
                
            </div>
        </form>
    );
}



export default Events;
