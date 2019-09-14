import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trainerClass } from './trainerClass';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  userRegister(){
    const c=new trainerClass();
    this.http.post('http://localhost:8081/api/userregister',)._subscribe
  }
}
