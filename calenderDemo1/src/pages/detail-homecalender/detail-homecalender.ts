import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomecalendarPage } from '../homecalendar/homecalendar';
import { ChangeHomecalendarPage } from '../change-homecalendar/change-homecalendar';

/*
  Generated class for the DetailHomecalender page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-homecalender',
  templateUrl: 'detail-homecalender.html'
})
export class DetailHomecalenderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailHomecalenderPage');
  }
  xoalich() {
    let confirm = this.alerCtrl.create({
      title: 'Bạn có muốn xóa lịch này?',
      buttons: [
        {
          text: 'Không',
          handler: () => {
            console.log('Không clicked');
          }
        },
        {
          text: 'Có',
          handler: () => {
            console.log('Có clicked');
            this.navCtrl.setRoot(HomecalendarPage);
          }
        }
      ]
    });
    confirm.present()
  }
  datgio() {
    // this.navCtrl.push(SettimePage);
    let prompt = this.alerCtrl.create({
      title: 'Hẹn Giờ',
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
  sualich() {
    this.navCtrl.push(ChangeHomecalendarPage);
  }
}
