import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Createcalender page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-createcalendar',
  templateUrl: 'createcalendar.html'
})
export class CreatecalendarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }


  public event = {
    month: '2017-03-22',
    timeStarts: '07:43',
    timeEnds: '07:50'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatecalendarPage');
  }

}
