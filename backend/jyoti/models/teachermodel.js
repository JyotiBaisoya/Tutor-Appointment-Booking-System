const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const TeacherModel = mongoose.model("teacher",teacherSchema)

module.exports = {TeacherModel}