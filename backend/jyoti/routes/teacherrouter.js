const express = require("express");
const {TeacherModel} = require("../models/teachermodel");
const {TeachModel} = require("../models/teachmodel")

const teacherRouter = express.Router();

teacherRouter.post("/register",async(req,res)=>{
    const payload = req.body;
    try {
        const teach = new TeacherModel(payload);
    await teach.save() 
    res.send("registered successfully")
    } catch (error) {
        res.send({"error":error.message})
    }
   
})

teacherRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try {
       const data = await TeacherModel.find({email,password});
       if(data){
         res.send("logged in")
       }else{
        res.send("wrong credentails")
       } 
    } catch (error) {
       res.send({"error":error.message}) 
    } 
})

teacherRouter.get("/getall",async(req,res)=>{
    try {
        const data = await TeachModel.find()
        res.send(data)
    } catch (error) {
        res.send({"error":error.message})
    }
    
    
})

teacherRouter.post("/add",async(req,res)=>{
    const payload = req.body;
    try {
        const teacher = new TeachModel(payload);
        await teacher.save();
        res.send("teacher is added")
    } catch (error) {
        res.send({"error":error.message})
    }
})

teacherRouter.patch("/update/:id",async(req,res)=>{
    const id = req.params.id;
    const payload = req.body
    try {
        let updated = await TeachModel.findByIdAndUpdate({_id:id},payload)
        res.send("updated")
    } catch (error) {
        res.send({"error":error.message})
    }
})

teacherRouter.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        await TeachModel.findByIdAndDelete({_id:id});
        res.send("deleted")
    } catch (error) {
        res.send({"error":error.message})
    }
});
 
module.exports={teacherRouter}
