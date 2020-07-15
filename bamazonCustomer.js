var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require("cli-table3");
var colors = require("colors");
require("console.table");

//connection to bamazon database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon_db",
});

connection.connect(function (err) {
  if (err) throw err;
  //console.log("Connected!");
  queryConnect();
});

var totalSales = 0;

function queryConnect() {
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;

  
    console.table(result);
    whichProduct();
    // for (let i = 0; i < result.length; i++) {
    //   console.log("ID: " + result[i].item_id + " || Name: " + result[i].product_name + " || Department: " + result[i].department_name + " || Price: $" +result[i].price + " || Quantity: " + result[i].stock_quantity);
    // }
  });
}

//ask the user what product they would like to buy
function whichProduct() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "ID of item you would you like to purchase?",
        name: "item_ID",
      },
      {
        type: "input",
        message: "How many of that item would you like to purchase?",
        name: "itemPurchase",
      },
    ])
    .then(function (response) {
      connection.query(
        "select * from products WHERE item_id = ? ",
        response.item_ID,
        function (err, data) {
          if (err) throw err;
          var stock_quantity =
            data[0].stock_quantity - parseInt(response.itemPurchase);
          if (stock_quantity >= 0) {
            connection.query(
              "update products set stock_quantity = ? WHERE item_id = ?",
              [stock_quantity, response.item_ID],
              function (err, results) {
                if (err) throw err;

                totalSales =
                  totalSales +
                  parseFloat(data[0].price) * response.itemPurchase;

                console.log(
                  "You have successfully purchased your item, Your",
                  colors.green("total"),
                  "sale is: $",
                  colors.yellow(totalSales.toFixed(2))
                );
                queryConnect();
              }
            );
          } else {
            console.log(colors.red("Not enough in stock"));
            queryConnect();
          }
        }
      );
    });
}
