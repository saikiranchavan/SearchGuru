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
                res.status(200).json(note)
            })
        }
    })
}