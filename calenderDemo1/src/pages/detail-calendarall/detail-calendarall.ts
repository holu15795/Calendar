import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, AlertController } from 'ionic-angular';

import { CalendarComponent } from '../../share/calendar-week/calendar-week';
import { DetailOnecalendarallPage } from '../detail-onecalendarall/detail-onecalendarall';
import { DetailOnecalendaruserPage } from '../detail-onecalendaruser/detail-onecalendaruser';

/*
  Generated class for the DetailCalenderall page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-calendarall',
  templateUrl: 'detail-calendarall.html'
})
export class DetailCalendarallPage {
  @ViewChild(CalendarComponent) private _calendarComponent: CalendarComponent;
  today = new Date();
  myDayofWeek: any;
  getDayCalendar: any;
  id: number = 1;;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController) {
    this.myDayofWeek = this.dayOfWeek(this.today.getDay());

  }
  toantruong() {
    this.id = 1;
    console.log(this.id);
  }
  canhan() {
    this.id = 2;
    console.log(this.id);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailCalendarallPage');
  }

  detailOneCalendarAll() {
    this.navCtrl.push(DetailOnecalendarallPage);
  }

  detailOneCalendarUser() {
    this.navCtrl.push(DetailOnecalendaruserPage);
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
