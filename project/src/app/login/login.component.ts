import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:LoginService) { }
  user;
  pass1;

  myObj={'username':this.user,'password':this.pass1}

  login(){
    //this.router.navigate(['/login'],{queryParams:{'username':this.user,'password':this.pass}});
    this.service.getMethod(this.user,this.pass1);
    console.log('http://localhost:8081/api/userlogin?username='+this.user+'&password='+this.pass1);
  }
  ngOnInit() {
  }

}
