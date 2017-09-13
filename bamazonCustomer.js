var mysql = require('mysql');

var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bamazon_db'
  });

  connection.connect(function(err){
    if(err) throw err;
});

connection.query(
    "SELECT * FROM products", function (err, res){
        if (err) throw err;

        for (i=0; i<res.length; i++){
        console.log("=====================================\n");
        console.log("Product ID: " + res[i].product_id + " || Product Name: " + res[i].product_name + " || PRICE : $" + res[i].price);
        }
    }
);
