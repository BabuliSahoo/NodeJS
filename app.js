//const http = require("http");
//const routes = require('./routes');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);

//Handle Error with Status
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not ound</h1>");
});

//console.log(routes.someText);
//const server = http.createServer(routes.handler);
// const server = http.createServer(app);
// server.listen(3003);

app.listen(3003);
