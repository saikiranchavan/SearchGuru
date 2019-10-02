const express=require('express')
const Mentor=require('../../models/schema_men')
match:any=[]
st=[];
et=[];
module.exports=function(router){
    router.post('/search',function(req,res){
        
        var user=req.body;
        console.log(req.body);
        if(!user.search||
            !user.startdate||
            !user.enddate
            
            ){
                res.json('show_message', {
                    message: "Sorry, you provided worng info", type: "error"});
        }
        else{
            
            // Mentor.find({$and:[{"technologies":user.search},{"StartDate":{$gte:user.startdate}}, {"EndDate":{$lte:user.enddate}}, {"Starttime_hour":{$gte:user.starttime_hour}},{"Starttime_min":{$gte:user.starttime_min}}, {"Endtime_hour":{$lte:user.endtime_hour}},{"Endtime_min":{$lte:user.endtime_min}}]},function(err,mentorData){
            //     if(err)return console.log(err);
            //     res.json(mentorData);
            // });
            Mentor.find({"technologies":user.search},function(err,mentorData){
                if(err)return console.log(err);
                res.json(mentorData);
            });
        }
    })

}