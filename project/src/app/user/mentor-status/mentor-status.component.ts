import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserregisterService } from '../userregister.service';
import { RegisterService } from 'src/app/mentor/mentor/register.service';

@Component({
  selector: 'app-mentor-status',
  templateUrl: './mentor-status.component.html',
  styleUrls: ['./mentor-status.component.css']
})
export class MentorStatusComponent implements OnInit {

  constructor(private commonService:CommonService,private userService:UserregisterService,private mentorService:RegisterService) { }
  mentorIDs:any=[]
  mentorData:any=[];
  length;
  clicked=false;
  i=0;
  ngOnInit() {
    
  }
  getMentorStatus(){
    this.clicked=true;
    this.mentorData=this.commonService.getMentor();
    console.log(this.mentorData);
  }


}
