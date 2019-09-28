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
      
      this.commonService.provideUserName(data[0].Username);
      this.commonService.getUserName();
      this.childEvent.emit(data[0].Username);
      this.username_loc=["User",this.user];
      this.localsto.store("user",this.username_loc);
      this.username_loc_data=this.localsto.retrieve("user");
      console.log(this.username_loc_data[0]+" "+this.username_loc_data[1]);
      this.router.navigate(['/home']);
    },
    err=>{
      console.log('error in getting in login service');
    }
    )
    
  }

  trainerLogin(){
    //this.router.navigate(['/login'],{queryParams:{'username':this.user,'password':this.pass}});
    this.service.getMethod2(this.user,this.pass1);
    
  }

  adminLogin(){
    //this.router.navigate(['/login'],{queryParams:{'username':this.user,'password':this.pass}});
    this.service.getMethod3(this.user,this.pass1);
    
  }
  

  ngOnInit() {
  }

}
