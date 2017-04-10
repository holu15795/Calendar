import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
// import {SettimePage} from '../settime/settime';

/*
  Generated class for the DetailOnecalenderuser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-onecalendaruser',
  templateUrl: 'detail-onecalendaruser.html'
})
export class DetailOnecalendaruserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailOnecalendaruserPage');
  }
  thongbao() {
    
    // this.navCtrl.push(SettimePage);
    let prompt = this.alertCtrl.create({
      title: 'Hẹn Giờ',
      message: "báo trước bao nhiêu phút ?",
      
      inputs: [
        {
          name: 'tgian',
          placeholder: 'Thời Gian',
          type:"number" 
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
}
