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

   SearchMentor(object){
     return this.http.post('http://localhost:8091/api/search',object)
   }

   proposeMentor(object,id){
     console.log(object+" id:"+id)
     return this.http.put('http://localhost:8091/api/userregister/'+id,object).subscribe(data=>{
       console.log("got data from express put");
     },
     err=>{
       console.log(err);
     });
   }
}
