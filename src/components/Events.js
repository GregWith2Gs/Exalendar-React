import React, { useState } from "react";
import {DateTimePicker} from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
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
    const [classID, setClassID] = useState('');
    
    const options = [
        'CSCI-1200','CSCI-4970','ECSE-1100',"PHIL-2100"
    ]

    const handleSelectorChange = (selectedClass) => {
        setClassID(selectedClass.value);
    }
    
    

    function submitEvent() {
        console.log(eventName);

        onExit();
        
        let postData = {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                "classID": classID,
                "name": eventName,
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
