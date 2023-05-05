const { TeacherModel } = require("../models/teacher.model");
const teacherRouter = require("express").Router();

//get all teacher
teacherRouter.get("/",async(req,res)=>{
  res.send("welcome")
})
teacherRouter.get("/allteacher", async (req, res) => {
    const Teachers = await TeacherModel.find()
    res.send(Teachers)
  });

  teacherRouter.post("/addteacher", async (req, res) => {
    let {
      teacherName,
      email,
      qualifications,
      experience,
      phoneNo,
      city,
      subject,
      image,
      about,
    } = req.body;
    try {
      let teacher = new TeacherModel({
        teacherName,
        email,
        qualifications,
        experience,
        phoneNo,
        city,
        subject,
        image,
        about,
      });
      await teacher.save();
      res.status(201).send({ msg: "teacher has been created", teacher });
    } catch (error) {
      res
        .status(500)
        .send({ msg: "Error in created teacher" });
    }
  });

module.exports = {teacherRouter};