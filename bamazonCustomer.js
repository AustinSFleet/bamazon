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
    buySomething();
    }
);



function buySomething (){
    inquirer
    .prompt([
        {
        type: "input",
        name: "product",
        message: "Input the product number of the item you'd like to buy"
        },
        {
        type: "input",
        name: "quantity",
        message: "How many would you like to buy?",
        validate: function(value){
            if (isNaN(value) === false){
                return true;
            }
            return false;
        }

        },
    ]).then(function(answer){
        var query = "SELECT product_id, stock_quantity FROM products WHERE id = ?";
            connection.query(query, answer.product, function(err, res){
                    console.log("You bought " + answer.quantity + " " + "product_name" + "s")
            })
    })
};



