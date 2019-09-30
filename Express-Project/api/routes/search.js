const express=require('express')
const Mentor=require('../../models/schema_men')
match:any=[]
module.exports=function(router){
    router.post('/search',function(req,res){
        console.log("inside search express");
        var user=req.body;
        if(!user.search||
            !user.startdate||
            !user.enddate
            //!user.starttime||
            //!user.endtime
            ){
                res.json('show_message', {
                    message: "Sorry, you provided worng info", type: "error"});
        }
        else{
            Mentor.find({$and:[{"technologies":user.search},{"StartDate":{$gte:user.startdate}}, {"EndDate":{$lte:user.enddate}}]},function(err,mentorData){
                if(err)return console.log(err);
                res.json(mentorData);
            });
        }
    })

}