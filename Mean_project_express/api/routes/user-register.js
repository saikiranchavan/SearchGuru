const express=require('express')
const User=require('../../model/schema')

module.exports=function(router){
    router.get('/userregister/:name',function(req,res){
        
        v=req.params.name;

        User.find({"Username":v},function(err,UserData){
            if(err)return console.log(err);
            res.json(UserData);
        });
    })

    router.post('/userregister',function(req,res){
        console.log(req.body);
        let note=new User(req.body);
        if(!note.Username||
            !note.Email||
            !note.Phoneno||
            !note.Password){
                res.json('show_message', {
                    message: "Sorry, you provided worng info", type: "error"});
        }
        else{
            
            note.save(function(err,note){
                if(err){
                    return res.status(400).json(err);
                }
                res.status(200).json("user data has been saved")
            })
        }
        //console.log(req.body);
    })
}