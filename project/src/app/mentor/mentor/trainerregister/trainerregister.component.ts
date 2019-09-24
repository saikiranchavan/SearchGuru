import { Component, OnInit } from '@angular/core';
import { trainerClass } from '../trainerClass';
import { timeout } from 'q';

@Component({
  selector: 'app-trainerregister',
  templateUrl: './trainerregister.component.html',
  styleUrls: ['./trainerregister.component.css']
})
export class TrainerregisterComponent implements OnInit {

  trainerData=new trainerClass("","",1234567890,new Date(2001,12,23,10,24,23),new Date(2001,10,1,22,10,8),["",""],"","");
  constructor() { }
  tstart_date;
  tstart_time;
  
  
  
  ngOnInit() {
    console.log(this.tstart_date);
    console.log(this.tstart_time);
    
  }

}
