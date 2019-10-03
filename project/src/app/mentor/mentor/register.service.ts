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
    return this.http.post('http://localhost:8091/api/mentorregister',trainerData);
  }

  getTrainer(id){
    return this.http.get('http://localhost:8091/api/mentorregister/'+id)
  }

  updateTrainer(object,id){
    console.log("inside update trainer"+object+"   "+id);
    console.log(object+" id:"+id)
     return this.http.put('http://localhost:8091/api/mentorregister/'+id,object).subscribe(data=>{
       console.log("got data from express put trainer");
     },
     err=>{
       console.log(err);
     });
  }
}
