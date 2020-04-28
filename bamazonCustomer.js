function run() {

var inquirer = require("inquirer");
var mysql = require("mysql");

var connect = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon_db"
});

connect.connect(function(err) {
  if (err) throw err;
  //console.log("Connected!");
  
});



queryConnect();

function queryConnect() {
  connect.query("SELECT * FROM products", function (err, result) {
  if (err) throw err;
  for (let i = 0; i < result.length; i++) {
    console.log("ID: " + result[i].item_id + " || Name: " + result[i].product_name + " || Department: " + result[i].department_name + " || Price: $" +result[i].price + " || Quantity: " + result[i].stock_quantity);
  }})
  whichProduct();
}

  //ask the user what product they would like to buy
function whichProduct() {
    inquirer.prompt([
        {type: "input",
        message: "ID of item you would you like to purchase?",
        name: "userPurchase"
      }

    ]).then(function(response){
      console.log(response.userPurchase)
      var item = response.userPurchase
      itemPurchase(item)
    })};


    function itemPurchase (item) {
      inquirer.prompt([
        {type: "input",
        message: "How many of that item would you like to purchase?",
        name: "itemPurchase"
      }
    ]).then(function(response){
      console.log(response.itemPurchase)
      var item = response.itemPurchase

      //make another connection.query to database
      //check if userquantity > stock quantity
      //use update   to updateproduct table 
      //set stock quantity to original stock quantity - user quantity
    })};








  };

  run()