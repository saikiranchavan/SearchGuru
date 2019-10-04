const express=require('express')
const User=require('../../models/schema')

module.exports=function(router){
    router.get('/userregister/:name',function(req,res){
        
        v=req.params.name;

        let promise=User.find({"Username":v}).exec();
        promise.then(function(err,UserData){
            if(err)return console.log(err);
            res.json(UserData);
        });
        promise.catch(function(err){
            return res.status(400).json({message:"unable to get the data from the "})
        })
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
                res.status(200).json("user data is stored")
            })
        }
    })

    router.put('/userregister/:id',function(req,res){
        var user=req.body;
        
        var id=req.params.id;
        // console.log("inside put in express");
        console.log(req.body._id+"   id "+id);
        if(!user.Username||
            !user.Email||
            !user.Phoneno||
            !user.Password){
                res.json('show_message', {
                    message: "Sorry, you provided worng info", type: "error"});
        }
        else{
            User.findByIdAndUpdate(id,user, 
            function(err, response){
                console.log(response);
            });
        }
    })
}