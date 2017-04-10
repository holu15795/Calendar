import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomecalendarPage } from '../pages/homecalendar/homecalendar';
import { ChangeHomecalendarPage } from '../pages/change-homecalendar/change-homecalendar';
import { DetailHomecalenderPage } from '../pages/detail-homecalender/detail-homecalender';
import { CreatecalendarPage } from '../pages/createcalendar/createcalendar';
import { DetailCalendarallPage } from '../pages/detail-calendarall/detail-calendarall';
import { DetailUserPage } from '../pages/detail-user/detail-user';
import { DetailOnecalendaruserPage } from '../pages/detail-onecalendaruser/detail-onecalendaruser';
import { CalendarComponent } from '../share/calendar-week/calendar-week';
import { DetailOnecalendarallPage } from '../pages/detail-onecalendarall/detail-onecalendarall';
import { UpdateUserPage } from '../pages/update-user/update-user';
import { ChangepassPage } from '../pages/changepass/changepass';
import { SettimePage } from '../pages/settime/settime';
import { SetTimePage } from '../pages/set-time/set-time';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomecalendarPage,
    CreatecalendarPage,
    DetailCalendarallPage,
    DetailUserPage,
    DetailOnecalendaruserPage,
    CalendarComponent,
    DetailOnecalendarallPage,
    UpdateUserPage,
    ChangepassPage,
    SettimePage,
    DetailHomecalenderPage,
    ChangeHomecalendarPage,
    SetTimePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomecalendarPage,
    CreatecalendarPage,
    DetailCalendarallPage,
    DetailUserPage,
    DetailOnecalendaruserPage,
    CalendarComponent,
    DetailOnecalendarallPage,
    UpdateUserPage,
    ChangepassPage,
    SettimePage,
    DetailHomecalenderPage,
    ChangeHomecalendarPage,
    SetTimePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
