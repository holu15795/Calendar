import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, AlertController } from 'ionic-angular';

import { DetailHomecalenderPage } from '../detail-homecalender/detail-homecalender';
// import { DetailOnecalendaruserPage } from '../detail-onecalendaruser/detail-onecalendaruser';
import { CalendarComponent } from '../../share/calendar-week/calendar-week';

@Component({
  selector: 'page-homecalendar',
  templateUrl: 'homecalendar.html'
})
export class HomecalendarPage {
  @ViewChild(CalendarComponent) private _calendarComponent: CalendarComponent;
  today = new Date();
  myDayofWeek: any;
  getDayCalendar: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController) {
    this.myDayofWeek = this.dayOfWeek(this.today.getDay());
  }

  datgioAll() {
    // this.navCtrl.push(SettimePage);
    let prompt = this.alertCtrl.create({
      title: 'Hẹn Giờ Cho Tất Cả Công Việc Hôm Nay',
      message: "báo trước bao nhiêu phút ?",
      inputs: [
        {
          name: 'tgian',
          placeholder: 'Thời Gian',
          type: "number"
        },
      ],

      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  
  thongbaomoi() {
    // this.navCtrl.push(SettimePage);
    let prompt = this.alertCtrl.create({
      title: 'Công Việc Mới',
      message:`<h3>Tiêu Đề: Lên Lớp C++ <br \>
        Mô Tả: B-09-01 <br \>
        Ngày: 25-03-2017 <br \>
        Thời Gian BĐ: 8:20 am <br \>
        Thời gian KT: 11:20 am </h3>
       `,
      cssClass:'alert-thongbao',
      buttons: ['OK']
    });
    prompt.present();
  }

  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomecalenderPage');
  }
  DetailOneCalendar() {
    this.navCtrl.push(DetailHomecalenderPage);
  }
  getDate() {
    this.getDayCalendar = this._calendarComponent.getDate().value;
    console.log("Date ", this.getDayCalendar)
  }
  dayOfWeek(value): Promise<any> {
    var kq;
    switch (value) {
      case 0:
        kq = 'CN';
        break;
      case 1:
        kq = 'T2';
        break;
      case 2:
        kq = 'T3 ';
        break;
      case 3:
        kq = 'T4';
        break;
      case 4:
        kq = 'T5';
        break;
      case 5:
        kq = 'T6';
        break;
      case 6:
        kq = 'T7';
        break;
    }
    return kq;
  }
}
