const express=require('express')
const User=require('../../model/schema')

match:any=[]
module.exports=function(router){
    router.get('/userlogin',function(req,res){
        
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