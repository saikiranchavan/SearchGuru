import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //mentorSearchResult
  constructor(private userService:UserregisterService) { }
  search:string;
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
  rating_array;
  proposed :boolean=false;
  check(){
    this.proposed=true;
  }

  ratingObj(){
    console.log("inside rating obj")
    this.rating_array=Array(this.mentorSearchResult.rating).fill(3);
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
        console.log(data);
        this.mentorSearchResult=data;
      },
      err=>{
        console.log("no search data is found");
      });
  }
  ngOnInit() {
  }

}
