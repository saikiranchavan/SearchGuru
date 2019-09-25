import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getMethod(a,b){
    this.http.get('http://localhost:8091/api/userlogin?username='+a+'&password='+b).subscribe(data=>{
      console.log(data);
    },
    err=>{
      console.log('error in getting in login service');
    }
    )
  }

}
