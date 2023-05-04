const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const { connection } = require("./config/db");
const { teacherRouter } = require("./routers/teacher.router");

app.use("/teacher",teacherRouter);


app.listen(process.env.port, async () => {
    try {
      await connection;
      console.log("Connected to DB");
      console.log(`Listening at ${process.env.port}`);
    } catch (error) {
      console.log("Error in DB", error);
    }
  });