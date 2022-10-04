import { Component, OnInit } from '@angular/core';

import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';

// make the <full-calendar> element globally available by calling this function at the top-level
defineFullCalendarElement();


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    }

  };

  toggleWeekends() {
    // make a copy while overriding some values
    this.calendarOptions = {
      ...this.calendarOptions,
      weekends: !this.calendarOptions.weekends,
    }
  }

}
