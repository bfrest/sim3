const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
require("dotenv").config();
const controller = require("./controller.js");

const app = express();

// this connects to the postgresql database
massive(process.env.CONNECTION_STRING).then(dbConnect => {
  app.set("db", dbConnect);

  console.log("IT'S ALIVE!");
});

app.use(cors());
app.use(bodyParser.json());

app.post("/api/register", controller.createUser);

app.listen(3001, () => {
  console.log("running on 3001");
});
