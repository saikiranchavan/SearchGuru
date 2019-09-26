const mongoose=require('mongoose');

const mentorSchema=new mongoose.Schema({
    Mentorname:{type:String},
    Email:{type:String},
    Phoneno:{type:Number},
    StartDate:{type:Date},
    EndDate:{type:Date},
    Starttime:{type:String},
    Endtime:{type:String},
    technologies:{type:Array},
    Linked:{type:String},
    Password:{type:String},
    experience:{type:Number}
})

module.exports=mongoose.model('Mentor',mentorSchema);