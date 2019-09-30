const express=require('express')
const Admin=require('../../models/schema')

module.exports=function(router){
    
    router.post('/adminregister',function(req,res){
        var user=req.body;
        if(!user.Username||
            !user.Email||
            !user.Phoneno||
            !user.Password){
                res.json('show_message', {
                    message: "Sorry, you provided worng info", type: "error"});
        }
        else{
            let note=new User(req.body)
            note.save(function(err,note){
                if(err){
                    return res.status(400).json(err);
                }
                res.status(200).json("user data is stored")
            })
        }
    })
}