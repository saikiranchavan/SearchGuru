import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { UserregisterService } from '../userregister.service';
import { CommonService } from 'src/app/common.service';
import { RegisterService } from 'src/app/mentor/mentor/register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //mentorSearchResult
  constructor(private userService:UserregisterService,private commonService:CommonService,private mentorService:RegisterService) { }
  search:string;
  init=1;
  date1:Date;
  date2:Date;
  start_time_string:String;
  end_time_string:String;
  start_time;
  end_time;
  start_time_hour:Number;
  end_time_hour:Number;
  start_time_min:Number;
  end_time_min:Number;
  mentorSearchResult:any=[]
  object;
  rating_array=[];
  userdata;
  proposed :boolean[];
  check(c){
    
    this.proposed[c]=true;
    this.userdata=this.commonService.getUser();
    var obj1={"mentorstatus":[this.mentorSearchResult[c]._id,"proposed"]};
    this.userdata.mentorProposal.push(obj1);
    var obj2={"userstatus":[this.userdata._id,"proposed"]};
    this.mentorSearchResult[c].userWhoProposed.push(obj2);
    this.userService.proposeMentor(this.userdata,this.userdata._id);
    this.mentorService.updateTrainer(this.mentorSearchResult[c],this.mentorSearchResult[c]._id);
  }

  
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
    this.object={search:this.search,startdate:this.date1,enddate:this.date2,starttime_hour:this.start_time_hour,starttime_min:this.start_time_min,endtime_hour:this.end_time_hour,endtime_min:this.end_time_min}
    console.log(this.object);
    this.userService.SearchMentor(this.object).subscribe(
      data=>{
        var i=0;
        console.log(data);
        this.mentorSearchResult=data;
        console.log(this.mentorSearchResult[1]._id);
        this.proposed=new Array(this.mentorSearchResult.length);
       
        for(i;i<this.mentorSearchResult.length;i++){
          this.proposed[i]=false;
        }
        
        if(this.mentorSearchResult.rating>0&&this.mentorSearchResult.rating<=5){
          this.rating_array=Array(this.mentorSearchResult.rating).fill(3);
        }
        else{
          this.rating_array=[];
        }
      },
      err=>{
        console.log("no search data is found");
      });
  }
  ngOnInit() {
  }

}
