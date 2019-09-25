import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  search:string;
  date1:Date;
  date2:Date;
  time1:Time;
  time2:Time;

  submit(){
    console.log(this.search+" "+this.date1+" "+this.date2+" "+this.time1+" "+this.time2);
  }
  ngOnInit() {
  }

}
