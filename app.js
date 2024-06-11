//const http = require("http");
//const routes = require('./routes');
const express = require("express");
const bodyParser = require("body-parser");
const path =  require('path');

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

//Handle Error with Status
app.use((req, res, next) => {
  //res.status(404).send("<h1>Page not ound</h1>");
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

//console.log(routes.someText);
//const server = http.createServer(routes.handler);
// const server = http.createServer(app);
// server.listen(3003);

app.listen(3000);
