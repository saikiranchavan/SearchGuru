import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  constructor(private http:HttpClient) { }
  userRegister(userData){
    // const c=new trainerClass(a,b,c,d,e,f);
    console.log(userData); 
    return this.http.post('http://localhost:8091/api/userregister',userData)
   }
}
