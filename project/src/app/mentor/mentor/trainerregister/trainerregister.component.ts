import { Component, OnInit } from '@angular/core';
import { trainerClass } from '../trainerClass';
import { timeout } from 'q';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainerregister',
  templateUrl: './trainerregister.component.html',
  styleUrls: ['./trainerregister.component.css']
})
export class TrainerregisterComponent implements OnInit {
  checkPass;
  start_time;
  end_time;
  start_time_string;
  end_time_string;
  email_init="";
  trainerData=new trainerClass("","",1234567890,new Date(2001,12,23,10,24,23),new Date(2001,10,1,22,10,8),"","",["",""],"","",1);
  constructor(private service:RegisterService,private router:Router) { }
  checkValidate(){
   // console.log("hello from validator");
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
    console.log(this.trainerData);
    //this.start_time_string=String(this.start_time);
    //this.end_time_string=String(this.end_time);
    this.service.trainerRegister(this.trainerData).subscribe(
      data=>{
        this.acknowledge=data;
        this.acknow=true;
        //console.log(data);
        this.router.navigate(['/login']);
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
