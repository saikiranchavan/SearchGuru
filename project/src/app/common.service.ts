import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router:Router,private localsto:LocalStorageService,private sessionSt:SessionStorageService) { }
  public username1;
  check_localdata:boolean;
  username_loc_data;
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
    console.log(this.username_loc_data[0]+" "+this.username_loc_data[1]);
    
    //this.username=this.commonService.getUserName();
    //console.log(this.username+"  "+"this is the username");
    if(this.username_loc_data.length===0||this.username_loc_data===null){
       this.check_localdata=false;
    }
    else{
       this.check_localdata=true;
    } 
    return this.check_localdata;
    
  }
}
