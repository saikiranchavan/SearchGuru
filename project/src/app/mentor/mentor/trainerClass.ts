import { Time } from '@angular/common'

export class trainerClass{
    constructor( 
    public Mentorname:String,
    public Email:String,
    public Phoneno:Number,
    public StartDate:Date,
    public EndDate:Date,
    public Starttime_hour:Number,
    public Starttime_min:Number,
    public Endtime_hour:Number,
    public Endtime_min:Number,
    public technologies:Array<string>,
    public Linked:String,
    public Password:String,
    public experience:Number,
    public profile:String,
    public rating:Number,
    public userWhoProposed:Array<string>,
    public userWhoFinalised:Array<string>){}

        
}