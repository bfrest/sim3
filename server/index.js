const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
require("dotenv").config();
const controller = require("./controller.js");

const app = express();
app.use(cors());

// this connects to the postgresql database
massive(process.env.CONNECTION_STRING).then(dbConnect => {
  app.set("db", dbConnect);

  console.log("IT'S ALIVE!");
});

app.use(bodyParser.json());

app.post("/api/register", controller.createUser);
app.post("/api/login", controller.attemptLogin);

app.listen(3001, () => {
  console.log("running on 3001");
});
