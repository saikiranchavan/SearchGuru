const express=require('express')
const Mentor=require('../../models/schema_men')

module.exports=function(router){
    router.get('/mentorregister/:id',function(req,res){
        
        v=req.params.id;
        console.log(v);
        let promise=Mentor.find({"_id":v});
        promise.then(function(err,mentorData){
            if(err)return console.log(err);
            console.log(mentorData);
            res.json(mentorData);
        });
        promise.catch(function(err){
            return res.status(501).json({message:"unable to get the data from the mentor"})
        })
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

    router.put('/mentorregister/:id',function(req,res){
        var mentor=req.body;
        var id =req.params.id;
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
            console.log("inside update trainer");
            Mentor.findByIdAndUpdate(id,mentor, 
                function(err, response){
                    console.log(response);
            });
        }
    })


}