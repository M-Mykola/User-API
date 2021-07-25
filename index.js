const express = require("express");
const mongooseConnection = require("./db");
const router = require("./router");

const app = express();
app.use(express.json());
app.use(router);
mongooseConnection();

app.listen(3000, function () {
  console.log("server started");
});
