import React, { useState, useEffect, useCallback } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar)

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState(events);

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

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };
  return (
    <div className="App">
      <DnDCalendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "80vh", width: "90vh" }}
        resizable={true}
        onSelectEvent={(event) => alert(event.description)}
        draggableAccessor={(event) => true}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}
