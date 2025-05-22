import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import allLocales from "@fullcalendar/core/locales-all";


function Home() {
  return (
    <div>
      <FullCalendar
        locales={allLocales}
        locale="ja"
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        height="auto"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        views={{
          dayGridMonth: { buttonText: '月' },
          timeGridWeek: { buttonText: '週' },
          timeGridDay: { buttonText: '日' },
        }}
      />
    </div>
    
  );
}

export default Home;
