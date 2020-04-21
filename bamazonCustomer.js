var inquire = require("inquire");
var mysql = require("mysql");

var connect = mysql.createConnection({
  host: "localhost",
  name: "bamazon",
  port: 3306,
  user: "root",
  password: "password"
});

connect.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});