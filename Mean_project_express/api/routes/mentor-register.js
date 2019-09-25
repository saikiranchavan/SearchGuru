const express=require('express')
const Mentor=require('../../model/schema')

module.exports=function(router){
    router.get('/mentorregister/:name',function(req,res){
        
        v=req.params.name;

        Mentor.find({"Mentorname":v},function(err,mentorData){
            if(err)return console.log(err);
            res.json(mentorData);
        });
    })

    router.post('/mentorregister',function(req,res){
        var mentor=req.body;
        if(!mentor.Mentorname||!mentor.Email||
            !mentor.Phoneno||
            !mentor.Starttime||
            !mentor.Endtime||
            !mentor.technologies||
            !mentor.Linked||
            !mentor.Password){
                res.json('show_message', {
                    message: "Sorry, you provided worng info", type: "error"});
        }
        else{
            let note=new Mentor(req.body)
            note.save(function(err,note){
                if(err){
                    return res.status(400).json(err);
                }
                res.status(200).json("trainer data has been saved")
            })
        }
    })
}