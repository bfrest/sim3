const express = require("express"),
  bodyParser = require("body-parser"),
  massive = require("massive"),
  cors = require("cors"),
  controller = require("./controller.js");
require("dotenv").config();

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
app.get("/api/posts", controller.getPosts);

app.listen(3001, () => {
  console.log("running on 3001");
});
