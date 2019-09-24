import { Component, OnInit } from '@angular/core';
import { userClass } from '../userRClass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor() { }
  userData=new userClass("","",1234567890,"");
  ngOnInit() {
  }

}
