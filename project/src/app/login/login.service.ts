import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getMethod1(a,b){
    return this.http.get('http://localhost:8091/api/userlogin?username='+a+'&password='+b)
    
  }

  getMethod2(a,b){
    console.log("mentor login"+a+" "+b);
    return this.http.get('http://localhost:8091/api/mentorlogin?username='+a+'&password='+b);
  }

  getMethod3(a,b){
    return this.http.get('http://localhost:8091/api/adminlogin?username='+a+'&password='+b)
  }
}
