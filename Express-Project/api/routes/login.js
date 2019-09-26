const express=require('express')
const User=require('../../models/schema')
const Mentor=require('../../models/schema_men')
match:any=[]
module.exports=function(router){
    router.get('/userlogin',function(req,res){
        
        //v=req.params.name;
        let a=req.query.username;
        let b=req.query.password;    
        User.find({$and:[{"Email":a},{"Password":b}]},function(err,UserData){
            if(err)return console.log(err);
            match=UserData;
            if(UserData.length==0){
                res.send("no user found");
            }
            else{
                res.json(UserData);
            }
        });
    })

    router.get('/mentorlogin',function(req,res){
        
        //v=req.params.name;
        
        let a=req.query.username;
        let b=req.query.password;    
        
        Mentor.find({$and:[{"Email":a},{"Password":b}]},function(err,UserData){
            if(err)return console.log(err);
            match=UserData;
            if(UserData.length==0){
                res.send("no user found");
            }
            else{
                res.json(UserData);
            }
        });
    })


    router.get('/adminlogin',function(req,res){
        
        //v=req.params.name;
        let a=req.query.username;
        let b=req.query.password;    
        User.find({"Username":a},{"Password":b},function(err,UserData){
            if(err)return console.log(err);
            match=UserData;
            if(UserData.length==0){
                res.send("no user found");
            }
            else{
                res.json(UserData);
            }
        });
    })

    
}