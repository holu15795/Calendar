import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { CreatecalendarPage } from '../pages/createcalendar/createcalendar';
import { HomecalendarPage } from '../pages/homecalendar/homecalendar';
import { DetailCalendarallPage } from '../pages/detail-calendarall/detail-calendarall';
import { DetailUserPage } from '../pages/detail-user/detail-user';
import { SetTimePage } from '../pages/set-time/set-time';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any;
  pages: Array<{ title: string, icon: string, component: any }>;

  rootPage = HomePage;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Lịch Công Việc Cá Nhân', icon: 'pulse', component: HomecalendarPage },
      { title: 'Lịch Công Việc Toàn Trường', icon: 'contacts', component: DetailCalendarallPage },
      { title: 'Thêm Lịch Công Việc Cá Nhân', icon: 'notifications', component: CreatecalendarPage },
      { title: 'Đặt Giờ Thông Báo', icon: 'ios-alarm', component: SetTimePage },
      { title: 'Thông Tin Cá Nhân', icon: 'man', component: DetailUserPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
