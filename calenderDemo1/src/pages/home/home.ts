import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
import { HomecalendarPage } from '../homecalendar/homecalendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }
  homecalender() {
    this.navCtrl.setRoot(HomecalendarPage);
  }
}
