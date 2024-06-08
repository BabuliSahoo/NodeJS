const http = require("http");

//const routes = require('./routes');
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="Text" name="Title"><button type="submit">Add Product</button><form1>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("Another  middleware!");
  res.send("<h1>Hello from Express</h1>");
});

//console.log(routes.someText);
//const server = http.createServer(routes.handler);
// const server = http.createServer(app);
// server.listen(3003);

app.listen(3003);
