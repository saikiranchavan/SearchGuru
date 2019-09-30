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
            !user.enddate||
            !user.starttime||
            !user.endtime
            ){
                res.json('show_message', {
                    message: "Sorry, you provided worng info", type: "error"});
        }
        else{
            st=user.starttime.split(":");
            et=user.endtime.split(":");
            //console.log(user.starttime+" "+user.endtime)
            const start_h=parseInt(st[0]);
            const start_m=parseInt(st[1]);
            const end_h=parseInt(et[0]);
            const end_m=parseInt(et[1]);
            Mentor.find({$and:[{"technologies":user.search},{"StartDate":{$gte:user.startdate}}, {"EndDate":{$lte:user.enddate}}, {"Starttime":{$gte:user.startdate}}, {"Endtime":{$lte:user.enddate}}]},function(err,mentorData){
                if(err)return console.log(err);
                res.json(mentorData);
            });
        }
    })

}