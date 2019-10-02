const express=require('express')
const Mentor=require('../../models/schema_men')

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
        console.log(mentor);
        console.log("hellow from mentor registeration");
        console.log(!mentor.Mentorname||!mentor.Email||
            !mentor.Phoneno||
            !mentor.StartDate||
            !mentor.EndDate||
            !mentor.technologies.length>0||
            !mentor.Linked||
            !mentor.Password||
            !mentor.experience);
        if(!mentor.Mentorname||!mentor.Email||
            !mentor.Phoneno||
            !mentor.StartDate||
            !mentor.EndDate||
            !mentor.technologies.length>0||
            !mentor.Linked||
            !mentor.Password||
            !mentor.profile||
            !mentor.experience){
                res.json('show_message', {
                    message: "Sorry, you provided worng info", type: "error"});
        }
        else{
            let note=new Mentor(req.body)
            console.log(note);
            note.save(function(err,note){
                if(err){
                    return res.status(400).json(err);
                }
                res.status(200).json("Trainer Data has been saved");
            })
        }
    })
}