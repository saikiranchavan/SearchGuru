import { Time } from '@angular/common'

export class trainerClass{
    constructor( 
    public Mentorname:String,
    public Email:String,
    public Phoneno:Number,
    public StartDate:Date,
    public EndDate:Date,
    public Starttime:String,
    public Endtime:String,
    public technologies:Array<string>,
    public Linked:String,
    public Password:String,
    public experience:Number){}

        
}