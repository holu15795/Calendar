import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { UpdateUserPage } from '../update-user/update-user';
import { ChangepassPage } from '../changepass/changepass';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-detail-user',
  templateUrl: 'detail-user.html'
})
export class DetailUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailUserPage');
  }
  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Bạn có muốn đăng xuất?',
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
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    confirm.present()
  }
  changePass() {
    this.navCtrl.push(ChangepassPage);
  }
  updateUser() {
    this.navCtrl.push(UpdateUserPage);
  }
}
