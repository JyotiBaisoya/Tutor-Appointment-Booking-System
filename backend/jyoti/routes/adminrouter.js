const express = require("express");
const {AdminModel} = require("../models/adminmodel")

const adminRouter = express.Router();

adminRouter.post("/register",async(req,res)=>{
    const payload = req.body;
    try {
        const admin = new AdminModel(payload);
    await admin.save() 
    res.send("registered successfully")
    } catch (error) {
        res.send({"error":error.message})
    }
   
})

adminRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try {
       const data = await AdminModel.find({email,password});
       if(data){
         res.send("logged in")
       }else{
        res.send("wrong credentails")
       } 
    } catch (error) {
       res.send({"error":error.message}) 
    } 
})

module.exports = {adminRouter}