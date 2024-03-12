import React, { useState } from "react";
import {DateTimePicker} from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import Select from 'react-select';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import dayjs, { Dayjs } from 'dayjs';
import exit from '../media/icons8-x-60.png';
import '../css/Event.css';


function Events({start, end, onExit}) {
    //Initialize Event variables and add reactivity

    //Name
    const [eName, setEName] = useState("");
    const onNameChange = (e: any) => setEName(e.target.value);
    //Type
    const [eType, setEType] = useState('');
    const onTypeChange = (t: any) => setEType(t.target.value);
    //Description
    const [eDescription, setEDescription] = useState('');
    const onDescChange = (d: any) => setEDescription(d.target.value);
    //Location
    const [eLocation, setELocation] = useState('');
    const onLocationChange = (l: any) => setELocation(l.target.value);
    //Start Date
    const [eStart, setEStart] = useState(Dayjs);
    //End Date
    const [eEnd, setEEnd] = useState(Dayjs);
    //Class Name
    const [className, setClassName] = useState('');
    const handleSelectorChange = (selectedClass) => {
        setClassName(selectedClass.value);
    }
    //Frequence
    const [eFreq, setEFreq] = useState('no-repeat');
    function freqChange(event){
        setEFreq(event.target.value);
    }
    //Interval
    const [eInterval, setEInterval] = useState();
    const onIntervalChange = (i) => {
        if(!isNaN(parseInt(i.target.value)))
            setEInterval(parseInt(i.target.value))        
        else
            setEInterval(0);
    }

    const options = [
        {value: 'CSCI-1100', label: 'CSCI-1100'},
        {value: 'CSCI-1200', label: 'CSCI-1200'},
        {value: 'CSCI-2200', label: 'CSCI-2200'},
        {value: 'CSCI-2500', label: 'CSCI-2500'}
    ]


    
    

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
                "location": eLocation,
                "start": eStart.toISOString().slice(0, 19).replace('T', ' '),
                "end": eEnd.toISOString().slice(0, 19).replace('T', ' '),
                "freq": eFreq,
                "end_date": null, // todo: add field - date to end repetition
                "interval": eInterval,
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

                    <div className='rowspace'>
                         <div className='columnspace'>
                            <TextField 
                            value={eLocation}
                            onChange={onLocationChange}
                            id="standard-basic" 
                            label="Location" variant="standard" fullwidth={true}/>
                        </div>
                    </div>
                    <div className='rowspace'>
                         <div className='columnspace'>
                            <TextField 
                            value={eInterval}
                            onChange={onIntervalChange}
                            id="standard-basic" 
                            label="Interval" variant="standard" fullwidth={true}/>
                        </div>
                    </div>
                </div>
                
                <div className='righthalf'>
                    <div className='rowspace'>
                    <DateTimePicker
                        body= 'secondary'
                        label="Start Date"
                        value={dayjs(start)}
                        onChange={(eventStart) => setEStart(eventStart)}
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
                        onChange={(eventEnd) => setEEnd(eventEnd)}
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
                <div className="rowspace">
                    <FormControl>

                        <FormLabel id="demo-row-radio-buttons-group-label">Frequency</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={freqChange}
                            defaultValue="no-repeat"
                        >
                            <FormControlLabel value="no-repeat" control={<Radio />} label="One time" />
                            <FormControlLabel value="day" control={<Radio />} label="Day" />
                            <FormControlLabel value="week" control={<Radio />} label="Week" />
                            <FormControlLabel value="month" control={<Radio />} label="Month" />
                            <FormControlLabel value="year" control={<Radio />} label="Year" />
                        </RadioGroup>
                    </FormControl>
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
