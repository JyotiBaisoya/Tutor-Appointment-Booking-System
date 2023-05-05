const mongoose = require("mongoose");

const teachSchema = mongoose.Schema({
    name:String,
    age:String,
    qualification:String,
    description:String,
    experience:String
})

const TeachModel = mongoose.model("teachers",teachSchema);

module.exports={TeachModel}