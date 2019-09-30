import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router:Router,private localsto:LocalStorageService,private sessionSt:SessionStorageService) { }
  public username1;
  check_localdata:boolean=false;
  check_Mentor_Login:boolean=true;
  check_Admin_Login:boolean=false;
  username_loc_data=[];
  username_loc_data1=[];
  provideUserName(data){
    console.log("this is data inside provide User name"+data);
    this.username1=data;
  }

  getUserName():string{
    console.log("this is inside getUserNmae"+this.username1);
    return this.username1;
  }

  checkLocalToken():boolean{
    //return true;
    this.username_loc_data=this.localsto.retrieve("user");
    //console.log(this.username_loc_data[0]+" "+this.username_loc_data[1]);
    
    //this.username=this.commonService.getUserName();
    //console.log(this.username+"  "+"this is the username");
    if(this.username_loc_data===null){
       this.check_localdata=false;
    }
    else{
       this.check_localdata=true;
    } 
    return this.check_localdata;
    
  }

  LogoutUser(){
    //this.username_loc_data1=this.localsto.retrieve("user");
    //if(this.username_loc_data1[0]==="User")
    this.localsto.clear("user");

    console.log("the user data is deleted");
    this.router.navigate(['home']);
  }

  mentorLogin():boolean{
    if(this.checkLocalToken()&&!this.check_Mentor_Login){
      return true;
    }
    else{
      return false;
    }
  }

  adminLogin():boolean{
    if(this.checkLocalToken()&&this.check_Admin_Login){
      return true;
    }
    else{
      return false;
    }
  }
}
