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
  i=0;
  ngOnInit() {
    this.mentorIDs=this.commonService.getUser().mentorProposal;
    //console.log(this.mentorIDs[0].mentorstatus[0]);
    
    this.length=this.mentorIDs.length;
    console.log(this.length+" this is the length");
    for(this.i;this.i<this.length;this.i++){
      this.mentorService.getTrainer(this.mentorIDs[this.i].mentorstatus[0]).subscribe(data=>{
        console.log(data);
        this.mentorData[this.i]=data;
        console.log(this.mentorData[this.i]);
      },
      err=>{
        console.log(err);
      });
       
       
     }
     
  }

}
