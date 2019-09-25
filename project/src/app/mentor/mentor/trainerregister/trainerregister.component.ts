import { Component, OnInit } from '@angular/core';
import { trainerClass } from '../trainerClass';
import { timeout } from 'q';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-trainerregister',
  templateUrl: './trainerregister.component.html',
  styleUrls: ['./trainerregister.component.css']
})
export class TrainerregisterComponent implements OnInit {
  checkPass;
  trainerData=new trainerClass("","",1234567890,new Date(2001,12,23,10,24,23),new Date(2001,10,1,22,10,8),["",""],"","");
  constructor(private service:RegisterService) { }
  checkValidate(){
    console.log("hello from validator");
    if(this.trainerData.Password==this.checkPass){
      
      return true;
    }
    else{
      return false;
    }
  }
  tstart_date;
  tstart_time;
  acknowledge;
  acknow=false;
  submit(){
    //console.log(this.trainerData);
    this.service.trainerRegister(this.trainerData).subscribe(
      data=>{
        this.acknowledge=data;
        this.acknow=true;
      },
      err=>{
        this.acknowledge=err;
        this.acknow=true;
      }
    );
  }
  
  
  
  ngOnInit() {
    console.log(this.tstart_date);
    console.log(this.tstart_time);
    
  }

}
