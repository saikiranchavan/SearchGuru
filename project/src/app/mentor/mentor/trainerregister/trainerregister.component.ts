import { Component, OnInit } from '@angular/core';
import { trainerClass } from '../trainerClass';
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
  start_time_hour:Number;
  end_time_hour:Number;
  start_time_min:Number;
  end_time_min:Number;
  start_time_string;
  end_time_string;
  email_init="";
  trainerData1;
  constructor(private service:RegisterService,private router:Router) { }
  trainerData=new trainerClass("","",1234567890,new Date(2001,12,23,10,24,23),new Date(2001,10,1,22,10,8),this.start_time_hour,this.start_time_min,this.end_time_hour,this.end_time_min,["",""],"","",1,"",0,[],[]);
  checkValidate(){
   
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
    
    this.start_time=this.start_time_string.split(":");
    this.end_time=this.end_time_string.split(":");
    
    if(this.start_time[0].charAt(0)=='0'){
      this.start_time_hour=+this.start_time[0].charAt(1);
    }
    else{
      this.start_time_hour=+this.start_time[0];
    }
    
    if(this.start_time[1].charAt(0)=='0'){
      this.start_time_min=+this.start_time[1].charAt(1);
    }
    else{
      this.start_time_min=+this.start_time[1];  
    }
    
    if(this.end_time[0].charAt(0)=='0'){
      this.end_time_hour=+this.end_time[0].charAt(1);
    }
    else{
      this.end_time_hour=+this.end_time[0];
    }
    
    if(this.end_time[1].charAt(0)=='0'){
      this.end_time_min=+this.end_time[1].charAt(1);
    }
    else{
      this.end_time_min=+this.end_time[1];
    }
    
   
    
    console.log(this.start_time_hour+" "+this.start_time_min+" "+this.end_time_hour+" "+this.end_time_min);
    
    this.trainerData1=new trainerClass(this.trainerData.Mentorname,this.trainerData.Email,this.trainerData.Phoneno,this.trainerData.StartDate,this.trainerData.EndDate,this.start_time_hour,this.start_time_min,this.end_time_hour,this.end_time_min,this.trainerData.technologies,this.trainerData.Linked,this.trainerData.Password,this.trainerData.experience,this.trainerData.profile,0,[],[]);
    console.log(this.trainerData1);
    this.service.trainerRegister(this.trainerData1).subscribe(
      data=>{
        this.acknowledge=data;
        this.acknow=true;
        console.log(data);
        this.router.navigate(['/login']);
      },
      err=>{
        this.acknowledge=err;
        this.acknow=true;
      }
    );
  }
  
  
  
  ngOnInit() {
    
  }

}
