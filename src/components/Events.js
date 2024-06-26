import React, { useState } from "react";
import {DateTimePicker} from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import Select from 'react-select';
import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import exit from '../media/icons8-x-60.png';
import '../css/Event.css';
import { Day } from "react-big-calendar";


function Events({start, end, onExit}) {
    const [eName, setEName] = useState("");
    const onNameChange = (n: any) => setEName(n.target.value);
    const [eType, setEType] = useState('');
    const onTypeChange = (t: any) => setEType(t.target.value);
    const [eDescription, setEDescription] = useState('');
    const onDescChange = (d: any) => setEDescription(d.target.value);
    const [eStart, setEStart] = useState(dayjs(start));
    const [eEnd, setEEnd] = useState(dayjs(start));
    const [className, setClassName] = useState('');
    
    const options = [
        {value: 'CSCI-1100', label: 'CSCI-1100'},
        {value: 'CSCI-1200', label: 'CSCI-1200'},
        {value: 'CSCI-2200', label: 'CSCI-2200'},
        {value: 'CSCI-2500', label: 'CSCI-2500'}
    ]

    const handleSelectorChange = (selectedClass) => {
        setClassName(selectedClass.value);
    }
    
    

    function submitEvent() {

        console.log(eEnd.toISOString().slice(0, 19).replace('T', ' '));


        onExit();
        
        let postData = {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                "className": className,
                "name": eName,
                "type": eType,
                "description": eDescription,
                "location": null, // todo: add field - for building/room #, hyperlinks, etc
                "start": eStart.toISOString().slice(0, 19).replace('T', ' '),
                "end": eEnd.toISOString().slice(0, 19).replace('T', ' '),
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
                            <TextField
                            value={eName} 
                            onChange={onNameChange}
                            id="standard-basic"
                            label="Event Name"
                            variant="standard" fullwidth={true} />
                        </div>
                        
                        
                        <div className='exit'>
                        
                            <Button 
                                onClick={() => {
                                    onExit();
                                }}
                                variant='contained' 
                                sx={{width:30, minWidth:0, minHeight:0, padding:0, margin:0, backgroundColor:'#db1d3d', "&:hover":{backgroundColor:'#5c0816'}}}
                                >
                                <img style={{ width: '30px', height: '30px'}} src={exit} alt="Logo" />
                            </Button>
                            

                        </div>
                        

                    </div>
                    <div className='rowspace'>
                        <div className='columnspace'>
                            <TextField 
                            value={eType}
                            onChange={onTypeChange}
                            id="standard-basic" 
                            label="Event Type" 
                            variant="standard" 
                            fullwidth={true}/>
                        </div>

                    </div>
                    <div className='rowspace'>
                         <div className='columnspace'>
                            <TextField 
                            value={eDescription}
                            onChange={onDescChange}
                            id="standard-basic" 
                            label="Description" variant="standard" fullwidth={true}/>
                        </div>
                        
                    </div>

                </div>
                
                <div className='righthalf'>
                    <div className='rowspace'>
                    <DateTimePicker
                        //defaultValue={dayjs(start)}
                        body= 'secondary'
                        label="Start Date"
                        value={dayjs(eStart)}
                        onChange={(newStart) => setEStart(newStart)}
                        viewRenderers={{
                            hours: null,
                            minutes: null,
                            seconds: null,
                        }}
                    />
                    </div>
                    <div className='rowspace'>

                    
                    <DateTimePicker
                        //defaultValue={dayjs(end)}
                        label="End Date"
                        value={dayjs(eEnd)}
                        onChange={(newEnd) => setEEnd(newEnd)}
                        viewRenderers={{
                            hours: null,
                            minutes: null,
                            seconds: null,
                        }}
                    />
                    </div>

                    <div className='rowspace'>
                    <Select options={options} onChange={handleSelectorChange} defaultValue={{label: "Select a course", value: ""}}/>
                    </div>
                </div>

                <div className='makebutton'>
                    <Button 
                        onClick={() => {
                            submitEvent();
                        }} 
                        variant='contained' sx={{backgroundColor:'#db1d3d', textTransform:'none', "&:hover":{backgroundColor:'#5c0816'}}}>Submit</Button>
                </div>
                
            </div>
        </form>
    );
}



export default Events;
