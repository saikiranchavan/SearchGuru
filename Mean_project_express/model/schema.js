const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    Username:{type:String},
    Email:{type:String},
    Phoneno:{type:Number},
    Password:{type:String}  
})

// const mentorSchema=new mongoose.Schema({
//     Mentorname:{type:String},
//     Email:{type:String},
//     Phoneno:{type:Number},
//     Starttime:{type:Date},
//     Endtime:{type:Date},
//     technologies:{type:Array},
//     Linked:{type:String},
//     Password:{type:String}
// })

module.exports=mongoose.model('User',UserSchema);
//module.exports=mongoose.model('Mentor',mentorSchema);