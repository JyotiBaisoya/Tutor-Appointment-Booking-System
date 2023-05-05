const express = require("express");
const {connection} = require("./config/db")
const app = express();
app.use(express.json());
require("dotenv").config();
const {teacherRouter} = require("./routes/teacherrouter");
const {adminRouter} = require("./routes/adminrouter");


app.use("/teacher",teacherRouter);
app.use("/admin",adminRouter)

app.get("/",(req,res)=>{
    res.send("Working Fine")
})

app.listen(process.env.port,async()=>{

    try {
        await connection
        console.log("connected to db")
        console.log(`server is running on port ${process.env.port}`) 
    } catch (error) {
        res.send(error)
    }
    
})

