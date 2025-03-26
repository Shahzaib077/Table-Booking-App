import { format, getDay, parse, startOfWeek } from "date-fns";
import enUS from "date-fns/locale/en-US";
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './MyCalendar.css';

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const MyCalendar = ({ events }) => {
  return (
    <div className="calendar-main-container">
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, textAlign: "center" }}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
