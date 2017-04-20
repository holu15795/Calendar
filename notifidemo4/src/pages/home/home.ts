import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LocalNotifications, BackgroundMode } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public event = {
    timeStarts: `${new Date().getHours()}:${new Date().getMinutes()}`,
  };
  hhientai = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

  Hdat; Pdat; GioD; PhutD;
  Hhientai; Phientai; Gioht; Phutht; Shientai; Sht;
  kqH; kqP; kqS; kqCuoi = 0;
  i: number = 0;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    console.log(this.hhientai);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalPage');
  }
  datthongbao() {
    this.kiemtrah();
    this.kiemtratb();
    this.hienthongbao();
    let alert = this.alertCtrl.create({
      title: 'Thông Báo',
      subTitle: 'Đặt giờ thành công',
      buttons: ['OK']
    });
    alert.present();

  }
  hienthongbao() {
    let tgiancho = this.kqCuoi * 1000;
    let notifi = {
      id: this.i++,
      title: "Đến Giờ Hẹn !!!",
      text: "hú hú đến giờ rồi",
      at: new Date(new Date().getTime() + tgiancho)
    };
    LocalNotifications.schedule(notifi);
    console.log(notifi);
    BackgroundMode.enable();
  }
  kiemtratb() {
    this.kqH = this.GioD - this.Gioht;
    console.log("Giờ:")
    console.log(this.kqH);
    this.kqP = this.PhutD - this.Phutht;
    console.log("Phút:");
    console.log(this.kqP);
    this.kqS = 0 - this.Sht;
    console.log("Giây:");
    console.log(this.kqS);
    this.kqCuoi = this.kqH * 60 * 60 + this.kqP * 60 + this.kqS;
    console.log("Kết quả chờ:");
    console.log(this.kqCuoi);
  }
  kiemtrah() {
    this.hhientai = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    this.Hdat = this.event.timeStarts.split(':')[0];
    this.Pdat = this.event.timeStarts.split(':')[1];
    // this.Sdat = this.event.timeStarts.split(':')[2];
    this.GioD = parseInt(this.Hdat, 10);
    this.PhutD = parseInt(this.Pdat, 10);
    // this.Sd = parseInt(this.Sdat, 10);
    console.log("Giờ Đặt:");
    console.log(this.GioD);
    console.log("Phút Đặt");
    console.log(this.PhutD);

    this.Hhientai = this.hhientai.split(':')[0];
    this.Phientai = this.hhientai.split(':')[1];
    this.Shientai = this.hhientai.split(':')[2];
    // this.Sdat = this.event.timeStarts.split(':')[2];
    this.Gioht = parseInt(this.Hhientai, 10);
    this.Phutht = parseInt(this.Phientai, 10);
    this.Sht = parseInt(this.Shientai, 10);
    // this.Sd = parseInt(this.Sdat, 10);
    console.log("Giờ Hiện Tại:")
    console.log(this.Gioht);
    console.log("Phút Hiện Tại:")
    console.log(this.Phutht);
    console.log("Giây Hiện Tại:")
    console.log(this.Sht);

  }

}
