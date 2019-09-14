import { Time } from '@angular/common'

export class trainerClass{
    Mentorname:String
    Email:String
    Phoneno:Number
    StartDate:Date
    EndDate:Date
    StartTime:Time
    EndTime:Time
    technologies:Array<string>
    Linked:String
    Password:String

    constructor(name,e,a,s,q,w,r,t,l,p){
        this.Mentorname=name;
        this.Email=e;
        this.Phoneno=a;
        this.StartDate=s;
        this.EndDate=q;
        this.StartTime=w;
        this.EndTime=r;
        this.technologies=t;
        this.Linked=l;
        this.Password=p;
    }
    
}