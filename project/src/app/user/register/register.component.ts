import { Component, OnInit } from '@angular/core';
import { userClass } from '../userRClass';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checkPass;
  acknow;
  acknowledge;
  constructor(private service:UserregisterService) { }
  userData=new userClass("sai kiran","",1234567890,"");
  ngOnInit() {
  }

  checkValidate(){
    console.log("hello from validator");
    if(this.userData.Password==this.checkPass){
      
      return true;
    }
    else{
      return false;
    }
  }

  submit(){
    this.service.userRegister(this.userData).subscribe(
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

}
