const express = require("express");
var cors = require("cors");
require("dotenv").config();

const port = process.env.port;
const { connection } = require("./config/config");
const { userRoute } = require("./route/user.route");
const { authenticate } = require("./middleware/authenticate.middleware");
const { teacherRouter } = require("./route/teacher.router");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to apiace");
});

app.use(userRoute);
app.use(authenticate);
app.use("/teacher", teacherRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log("db connected");
  } catch (error) {
    console.log(error);
    console.log("db not connected something went wrong");
  }
  console.log("listning at port", port);
});
