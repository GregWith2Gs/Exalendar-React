import React, { useState } from "react";
import {DateTimePicker} from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import dayjs, { Dayjs } from 'dayjs';
import exit from '../media/icons8-x-60.png';
import {Modal} from "react-bootstrap";
import '../css/Event.css';
import { Checkbox, FormGroup } from "@mui/material";


function Events({start, end, onExit}) {


    const options = [
        'CSCI-1200','CSCI-4970','ECSE-1100',"PHIL-2100"]

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
    //Frequency
    const [eFreq, setEFreq] = useState('no-repeat');
    function freqChange(event){
        setEFreq(event.target.value);
    }
    //Interval
    const [eInterval, setEInterval] = useState('');
    const onIntervalChange = (i) => {
        setEInterval(i.target.value)        
    }
    //Byday
    const [byDay, setByDay] = useState({
        c1: false,
        c2: false,
        c3: false,
        c4: false,
        c5: false,
        c6: false,
        c7: false
    });
    const handleByDayChange = (selectedDays) => {
        setByDay({
            ...byDay,
            [selectedDays.target.name]: selectedDays.target.checked,
        })
    }
    //End Date
    const [eEndDate, setEEndDate] = useState(Dayjs);
    //All Day
    const [allDay,setAllDay] = useState(false);

    const [showRepeats,setShowRepeats] = useState(false);


    


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
                "end_date": eEndDate.toISOString().slice(0, 19).replace('T', ' '),
                "interval": parseInt(eInterval),
                "byday": byDay
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
                <br></br>
                <div className="gridContainer">
                    <div className="mainGrid1">
                        <TextField
                                label="Event name" inputRef={eventName} variant="outlined" id="standard-basic"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--text-color)",
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "var(--text-color)",
                                            }
                                        },
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "var(--text-color)",
                                            }
                                        }
                                    },
                                }}
                            />
                    </div>
                    <div className="mainGrid2">
                        <TextField
                            label="Event Type" inputRef={eventType} variant="outlined" id="standard-basic"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--text-color)",
                                    },
                                    "&.Mui-focused": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--text-color)",
                                        }
                                    },
                                    "&:hover:not(.Mui-focused)": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--text-color)",
                                        }
                                    }
                                },
                            }}
                        />
                    </div>
                    <div className="mainGrid3">
                        <TextField
                                label="Event Description" inputRef={eventDesc} variant="outlined" id="standard-basic"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--text-color)",
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "var(--text-color)",
                                            }
                                        },
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "var(--text-color)",
                                            }
                                        }
                                    },
                                }}
                            />
                    </div>
                    <div className="mainGrid4">
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
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--text-color)",
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "var(--text-color)",
                                            }
                                        },
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "var(--text-color)",
                                            }
                                        }
                                    },
                                }}
                        />
                    </div>
                    <div className="mainGrid5">
                        <DateTimePicker
                            label="End Date"
                            value={dayjs(end)}
                            onChange={(eventEnd) => setEventEnd(eventEnd)}
                            viewRenderers={{
                                hours: null,
                                minutes: null,
                                seconds: null,
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--text-color)",
                                    },
                                    "&.Mui-focused": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--text-color)",
                                        }
                                    },
                                    "&:hover:not(.Mui-focused)": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--text-color)",
                                        }
                                    }
                                },
                            }}
                        />
                    </div>
                    <div className="mainGrid6">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={options}
                            renderInput={(params) => <TextField {...params} label="Select a class" />}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--text-color)",
                                    },
                                    "&.Mui-focused": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--text-color)",
                                        }
                                    },
                                    "&:hover:not(.Mui-focused)": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--text-color)",
                                        }
                                    }
                                },
                            }}
                        /> 
                    </div>
                </div>

                <div className='makebutton'>
                    <FormControlLabel control={<Checkbox 
                        style={{color: "white",}} />} 
                        label="All day" id="all-day-checkbox" 
                        onChange={(checkVal) => {setAllDay(checkVal.target.checked)}}/>
                    <Button 
                        onClick={() => {
                            setShowRepeats(true);
                        }} 
                        variant='contained' sx={{backgroundColor:'#db1d3d', textTransform:'none', "&:hover":{backgroundColor:'#5c0816'}}}>Event Repeats
                    </Button>
                    <Button 
                        onClick={() => {
                            submitEvent();
                        }} 
                        variant='contained' sx={{backgroundColor:'#db1d3d', textTransform:'none', "&:hover":{backgroundColor:'#5c0816'}}}>Submit
                    </Button>
                </div>
                
            <div className>
                <Modal show={showRepeats} onHide={() => setShowRepeats(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>Repeating Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal2">
                        <div className='grid-item-1'>                            
                        <TextField 
                            value={eInterval}
                            onChange={onIntervalChange}
                            id="standard-basic" 
                            label="Interval" variant="standard" fullwidth={false}/>
                        </div>
                        <div className="grid-item-2">
                        <FormLabel>Select Repeat Days</FormLabel>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox/>} label="Mon" checked={byDay.c1} onChange={handleByDayChange} name="c1"/>
                            <FormControlLabel control={<Checkbox/>} label="Tue" checked={byDay.c2} onChange={handleByDayChange} name="c2"/>
                            <FormControlLabel control={<Checkbox/>} label="Wed" checked={byDay.c3} onChange={handleByDayChange} name="c3"/>
                            <FormControlLabel control={<Checkbox/>} label="Thu" checked={byDay.c4} onChange={handleByDayChange} name="c4"/>
                            <FormControlLabel control={<Checkbox/>} label="Fri" checked={byDay.c5} onChange={handleByDayChange} name="c5"/>
                            <FormControlLabel control={<Checkbox/>} label="Sat" checked={byDay.c6} onChange={handleByDayChange} name="c6"/>
                            <FormControlLabel control={<Checkbox/>} label="Sun" checked={byDay.c7} onChange={handleByDayChange} name="c7"/>
                        </FormGroup>
                        </div>
                        <div className="grid-item-3">
                            <DateTimePicker
                                body= 'secondary'
                                label="End Date"
                                value={dayjs(start)}
                                onChange={(endDate) => setEEndDate(endDate)}
                                viewRenderers={{
                                    hours: null,
                                    minutes: null,
                                    seconds: null,
                                }}
                            />
                        </div>
                        <div className="rowspace grid-item-4">
                            <FormControl>

                                <FormLabel id="demo-row-radio-buttons-group-label">Frequency</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    onChange={freqChange}
                                    defaultValue="no-repeat"
                                >
                                    <FormControlLabel value="day" control={<Radio />} label="Daily" />
                                    <FormControlLabel value="week" control={<Radio />} label="Weekly" />
                                    <FormControlLabel value="month" control={<Radio />} label="Monthly" />
                                    <FormControlLabel value="year" control={<Radio />} label="Yearly" />
                                </RadioGroup>
                            </FormControl>
                        </div>  
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => setShowRepeats(false)}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            
        </form>
    );
}



export default Events;
