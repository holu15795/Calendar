import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatePicker } from 'ionic-native';
/*
  Generated class for the Tkb page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
/**
 * @author: Tâm Anh 09/03/2017
 * Create calendar week
 */
@Component({
    selector: 'calendar-week',
    template: `
    <div class="card-background-page">
        <ion-item-group>
        <ion-item-divider class="di-item" color="lightblue">

        <ion-item color="white" (click)="openCalendar()" class="date-label">
            
            <input type="hidden" color="light" [(ngModel)]="myDate" />
            <h1>{{ myDate | date : 'MMMM' }} </h1>

        </ion-item>
       
        </ion-item-divider>
        <ion-item class="date-item">
            <ion-grid>
                <ion-row>
                <ion-col width-p7 *ngFor="let item of dateArray">
                    <span class="date">{{item.thu}}</span>
                </ion-col>
                </ion-row>
                <ion-row>
                <ion-col width-p7 *ngFor="let item of dateArray ; let i = index">
                    <span *ngIf="i===3" class="dateSelect">{{item.ngay}}</span>
                    <span *ngIf="i==2 || i==4" class="date1" (click)="change(item)">{{item.ngay}}</span>
                    <span *ngIf="i==1 || i==5" class="date2" (click)="change(item)">{{item.ngay}}</span>
                    <span *ngIf="i==0 || i==6" class="date3" (click)="change(item)">{{item.ngay}}</span>
                </ion-col>
                </ion-row>
            </ion-grid>
        </ion-item>
    </ion-item-group>
  </div>
  `,
    styles: ['calendar-week.scss']
})
export class CalendarComponent implements OnInit {
    @ViewChild('dateTime') dateTime;
    @Output() valueUpdated = new EventEmitter();
    today = new Date();
    dateArray = [];
    myDate: string;
    myDayofWeek: any;
    mid = new Date(this.today);
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        //myDate : chuỗi hiện ngày tháng năm 
        this.myDate = this.today.toDateString();
        this.myDayofWeek = this.dayOfWeek(this.today.getDay());
        this.scrollDate();
    }

    ngOnInit() {

    }

    public getDate() {
        return { value: this.mid };
    }

    /**
     * @function: open calendar
      custom calendar và reset lại calendar week 
     */
    openCalendar() {
        DatePicker.show({
            date: new Date(this.mid),
            mode: 'date',
            cancelButtonColor: '#009999',
            okText: 'OK',
            cancelText: 'Hủy',
            androidTheme: 5,
            locale: 'vi-VN'
        }).then(date => {
            //set mid ( ngày nằm giữa trong calendar week ) và cập nhật lại calendar week
            this.mid = date;
            this.scrollDate();
            this.valueUpdated.emit(this.mid);
        },
        ).catch(
            err => console.log('Error occurred while getting date: ', err)
            );
    }

    scrollDate() {
        this.dateArray = [];
        let flex = new Date(this.mid);
        //lấy ngày cho số đầu tiên trong mảng
        flex.setDate(flex.getDate() - 3);
        for (var i = 0; i < 7; i++) {
            var thu = this.dayOfWeek(flex.getDay());
            this.dateArray[i] = {
                'thu': thu,
                'ngay': flex.getDate().toString(),
                'thang': flex.getMonth().toString(),
                'nam': flex.getFullYear().toString()
            };
            //set phần tử thứ 4 là mid ( ngày làm mốc giữa mảng )
            if (i === 3) {
                this.mid.setDate(flex.getDate());
                this.mid.setMonth(flex.getMonth());
                this.mid.setFullYear(flex.getFullYear());
            }
            flex.setDate(flex.getDate() + 1);
        }
        //set lại myDate để hiển thị
        this.myDate = this.mid.toDateString();
        this.valueUpdated.emit(this.mid);
    }
    /**
     * @function: lui lại tuần trước đó, tính từ ngày đang chỉ định
     */
    previous() {
        this.mid.setDate(this.mid.getDate() - 7);
        this.scrollDate();
        // this.valueUpdated.emit(this.mid);
    }

    /**
     * @function: di chuyển tới tuần tiếp theo, tính từ ngày đang chỉ định
     */
    next() {
        this.mid.setDate(this.mid.getDate() + 7);
        this.scrollDate();
        // this.valueUpdated.emit(this.mid);
    }
    /**
     * @function: chọn ngày muốn xem thông tin
     * @param : item : ngày mình chọn trên view
     */
    change(item) {
        this.mid.setDate(item.ngay);
        this.mid.setMonth(item.thang);
        this.mid.setFullYear(item.nam);
        this.scrollDate();
        // this.valueUpdated.emit(this.mid);
    }

    /**
     * @function : lấy tên cho thứ hiện trên mảng ngày trong tuần
     * @param : value : giá trị mà Date trả về cho tháng
     * @returns: string
     */

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
