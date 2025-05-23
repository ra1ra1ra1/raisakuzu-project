import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import allLocales from "@fullcalendar/core/locales-all";
import { useState } from "react";
import "./Calendar.css";

function Home() {
  const [firstDay, setFirstDay] = useState(1);

  return (
    
    <div>
       
      <FullCalendar
        locales={allLocales}
        locale="ja"
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        height="auto"
        firstDay={firstDay}
        dayCellClassNames={(arg) => {
        const day = arg.date.getDay();
        if (day === 6) return "saturday-bg"; // 土曜日
        if (day === 0) return "sunday-bg"; // 日曜日
        return "";
      }}

        

        headerToolbar={{
          left: "prev,next today firstDay",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        views={{
          dayGridMonth: { buttonText: '月' },
          timeGridWeek: { buttonText: '週' },
          timeGridDay: { buttonText: '日' },
          firstDay: { buttonText: '曜日切り替え' },
        }}
        customButtons={{
          firstDay: {
            text: "曜日切り替え",
            click: function () {
            setFirstDay(firstDay === 1 ? 0 : 1);

           
            },
          },
        }}
      />
      <p className="text test" >テキスト</p>
    </div>
    
  );
}

export default Home;

