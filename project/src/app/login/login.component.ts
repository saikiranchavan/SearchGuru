import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { LoginService } from './login.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:LoginService,private localsto:LocalStorageService,
    private sessionSt:SessionStorageService) { }
  user;
  pass1;
  a;
  myObj={'username':this.user,'password':this.pass1}
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
  //if(a==1){
  userLogin(){
    //this.router.navigate(['/login'],{queryParams:{'username':this.user,'password':this.pass}});
    //console.log(this.a+"inside the user Login")
    this.service.getMethod1(this.user,this.pass1);
    //console.log('http://localhost:8081/api/userlogin?username='+this.user+'&password='+this.pass1);
  }

  trainerLogin(){
    //this.router.navigate(['/login'],{queryParams:{'username':this.user,'password':this.pass}});
    this.service.getMethod2(this.user,this.pass1);
    //console.log('http://localhost:8081/api/userlogin?username='+this.user+'&password='+this.pass1);
  }

  adminLogin(){
    //this.router.navigate(['/login'],{queryParams:{'username':this.user,'password':this.pass}});
    this.service.getMethod3(this.user,this.pass1);
    //console.log('http://localhost:8081/api/userlogin?username='+this.user+'&password='+this.pass1);
  }
  

  ngOnInit() {
  }

}
