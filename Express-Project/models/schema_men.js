const mongoose=require('mongoose');

const mentorSchema=new mongoose.Schema({
    Mentorname:{type:String},
    Email:{type:String},
    Phoneno:{type:Number},
    StartDate:{type:Date},
    EndDate:{type:Date},
    Starttime_hour:{type:Number},
    Starttime_min:{type:Number},
    Endtime_hour:{type:Number},
    Endtime_min:{type:Number},
    technologies:{type:Array},
    Linked:{type:String},
    Password:{type:String},
    experience:{type:Number},
    profile:{type:String},
    rating:{type:Number},
    fees:{type:Number},
    userWhoProposed:{type:Array},
    userWhoFinalised:{type:Array}
})

module.exports=mongoose.model('Mentor',mentorSchema);