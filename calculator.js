const express = require("express");
const bodyparser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });
app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Udaipur&units=metric&appid=6ae7ba12814b80647902e92c699bb41e";

  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherdata = JSON.parse(data);
      const temp = weatherdata.main.temp;
      const icon = weatherdata.weather[0].icon;
      const imageURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png";
      const weatherdes = weatherdata.weather[0].description;
      console.log(temp);
      res.setHeader("Content-Type", "text/html");
      res.write("The tempreature in Udaipur is " + temp + "°C");
      res.write("<h1>The weather is " + weatherdes + "</h1>");
      res.write("<img src =" + imageURL + ">");
      res.send();
    });
  });
});

// app.post("/", function (req, res) {
//   var num1 = Number(req.body.num1);
//   var num2 = Number(req.body.num2);
//   var result = num1 + num2;
//   res.send("result is " + result);
// });

app.listen(3000, function () {
  console.log("Port 3000 is Live");
});
