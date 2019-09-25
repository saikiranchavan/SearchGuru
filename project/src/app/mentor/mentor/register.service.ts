import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trainerClass } from './trainerClass';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  acknowledge;
  trainerRegister(trainerData){
   // const c=new trainerClass(a,b,c,d,e,f);
    return this.http.post('http://localhost:8091/api/mentorregister',trainerData)
  }
}
