// const acces = require("./verifytoken");
// const acces2 = require("./verifytoken2");
// const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const mysqlcon = require("./dbconnection");
const path = require("path");
const port = process.env.PORT || 3000;
const fs = require("fs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
mysqlcon.connect()

app.use(express.static(path.join(__dirname, "views")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// require("./login")(app, express, mysqlcon);
require("./registeration")(app, express, mysqlcon);



// View Engine Setup
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname,"views")))
// app.set("view engine", "ejs");


app.listen(port, () => {
  console.log(`listeningg ${port}`);
});