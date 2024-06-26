import React, { useState, useEffect, useCallback } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import Events from './Events';

import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

import { Dayjs } from 'dayjs';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar)

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState();
  const [isOpen, setIsOpen] =useState(false);
  const [eStart, setEStart] = useState(Dayjs);
  const [eEnd, setEEnd] = useState(Dayjs);

  function setEvents(eventData) {
    var data = [];
    eventData = eventData.results;
    for(let i=0; i < Object.keys(eventData).length; i++) {
      data.push({
        id: eventData[i].class_id,
        title: eventData[i].event_title,
        description: eventData[i].event_description,
        start: new Date(eventData[i].event_date_start),
        end: new Date(eventData[i].event_date_end)
      })
    }
    setEventsData(data);
  }

  useEffect(() => {
    fetch(`http://localhost:4000/`)
    .then((response) => response.json())
    .then((actualData) => setEvents(actualData));
   }, []);
  

  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true
      }

      setEventsData((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end, allDay }]
      })
    },
    [setEventsData]
  )

  const resizeEvent = useCallback(
    ({ event, start, end }) => {
        setEventsData((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end }]
      })
    },
    [setEventsData]
  )

  function changeHours(date, hours){
    date.setHours(date.getHours() + hours);
    return date;
  }

  const handleSelect = ({ start, end }) => {
    
    console.log(start);
    console.log(end);
    setEStart(changeHours(start,12))
    setEEnd(changeHours(end,-12))

    setIsOpen((isOpen) => !isOpen);

    
  };

  const closeEvents = () => {
    setIsOpen((isOpen) => !isOpen);
  }



  return (
    <div className="App">
      <DnDCalendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "78.5vh", width: "98%"}}
        resizable={true}
        onSelectEvent={(event) => alert(event.description)}
        draggableAccessor={(event) => true}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        onSelectSlot={handleSelect}
      />

      {isOpen && <Events start={eStart} end={eEnd} onExit={() => closeEvents()} />}
    </div>

    
  );
}
