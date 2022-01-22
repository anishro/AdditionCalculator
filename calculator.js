const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("result is " + result);
});

app.listen(3000, function () {
  console.log("Port 3000 is Live");
});
