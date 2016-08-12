var fs = require("fs");
var mysql = require('mysql');
var nelisa = require("./nelisa");
var spazaString = nelisa.readData('./files/week2.csv');
var productCategories = require("./files/category.json");
var soldProducts = nelisa.GroupingData(spazaString);
var categoryWeek = nelisa.getMapCategory(productCategories, soldProducts);


var dbOption = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coder123',
  port: 3306,
  database: 'nelisa'
});


console.log('You are now connected 2 likhonas work...')
  //get your categories from the database
dbOption.query('SELECT * FROM products', function(err, results) {
  if (err) throw err
