const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();

const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);

  console.log("Server: 10-4");
});

app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("running on 3001");
});
