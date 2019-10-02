const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    Username:{type:String},
    Email:{type:String},
    Phoneno:{type:Number},
    Password:{type:String},
    mentorProposal:{type:Array}  
})


module.exports=mongoose.model('User',UserSchema);
