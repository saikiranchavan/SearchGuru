import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router'
import { LoginService } from './login.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:LoginService,private localsto:LocalStorageService,
    private sessionSt:SessionStorageService,private commonService:CommonService) { }
  user;
  pass1;
  a;
  username_loc_data=[];
  username_loc=[];
  email_init="";
  data;
  myObj={'username':this.user,'password':this.pass1}
  @Output() childEvent=new EventEmitter();
  Login(){
    if(this.a==1){
      this.userLogin();
    }
    else if(this.a==2){
      this.trainerLogin();
    }
    else if(this.a==3){
      this.adminLogin();
    }
  }
  
  userLogin(){
    
    
    this.service.getMethod1(this.user,this.pass1).subscribe(data=>{
      console.log(data);
      this.commonService.provideUser(data);
      this.data=data;
      
      this.commonService.provideUserName(this.data.Username);
      this.commonService.getUserName();
      this.childEvent.emit(this.data.Username);
      this.username_loc=["User",this.user];
      this.localsto.store("user",this.username_loc);
      this.username_loc_data=this.localsto.retrieve("user");
      console.log(this.username_loc_data[0]+" "+this.username_loc_data[1]);
      this.router.navigate(['/home']);
    },
    err=>{
      //console.log('error in getting in login service');
      this.data="No User Found With this Username or Password";
    }
    )
    
  }

  trainerLogin(){
    //this.router.navigate(['/login'],{queryParams:{'username':this.user,'password':this.pass}});
    //this.service.getMethod2(this.user,this.pass1);
    this.service.getMethod2(this.user,this.pass1).subscribe(data=>{
      console.log(data);
      this.data=data;
      this.commonService.provideUserName(data[0].Mentorname);
      this.commonService.getUserName();
      this.childEvent.emit(data[0].Mentorname);
      this.username_loc=["Mentor",this.user];
      this.localsto.store("user",this.username_loc);
      this.username_loc_data=this.localsto.retrieve("user");
      this.commonService.check_Mentor_Login=false;
      console.log(this.username_loc_data[0]+" "+this.username_loc_data[1]);
      this.router.navigate(['/mentorhome']);
    },
    err=>{
      //console.log('error in getting in login service');
      this.data="No Mentor Found With this Username or Password";
    }
    )
    
  }

  adminLogin(){
    //this.router.navigate(['/login'],{queryParams:{'username':this.user,'password':this.pass}});
    //this.service.getMethod3(this.user,this.pass1);
    this.service.getMethod3(this.user,this.pass1).subscribe(data=>{
      this.data=data;
      this.commonService.provideUserName("Admin Ganesh");
      this.commonService.getUserName();
      this.childEvent.emit(data[0].Username);
      this.username_loc=["Admin",this.user];
      this.localsto.store("user",this.username_loc);
      this.username_loc_data=this.localsto.retrieve("user");
      this.commonService.check_Admin_Login=true;
      console.log(this.username_loc_data[0]+" "+this.username_loc_data[1]);
      this.router.navigate(['/adminhome']);
    },
    err=>{
      //console.log('error in getting in login service');
      this.data="No Admin Found With this Username or Password";
    }
    )
  }
  

  ngOnInit() {
  }

}
