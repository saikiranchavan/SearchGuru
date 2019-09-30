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

  constructor(private userService:UserregisterService) { }
  search:string;
  date1:Date;
  date2:Date;
  time1:String;
  time2:String;
  object;
  submit(){
     console.log(this.search+" "+this.date1+" "+this.date2+" "+this.time1+" "+this.time2);
    //console.log(this.search+" "+this.date1+" "+this.date2);
    this.object={search:this.search,startdate:this.date1,enddate:this.date2,starttime:this.time1,endtime:this.time2}
    this.userService.SearchMentor(this.object).subscribe(
      data=>{
        console.log(data);
      },
      err=>{
        console.log("no search data is found");
      });
  }
  ngOnInit() {
  }

}
