var fs = require("fs");
var mysql = require('mysql');
var nelisa = require("./nelisa");
 var spazaStringPurchase = nelisa.readData('./files/purchases.csv');

 var list = [];
 spazaStringPurchase.forEach(function(n) {
   var x = n.split(";")
   list.push(x);
 })

var multiDeminArr = [];
list.forEach(function(data){

var arr = [];
arr.push(data[0]);
arr.push(data[1]);
arr.push(data[2]);
arr.push(data[3]);
arr.push(data[4]);

multiDeminArr.push(arr);

})

console.log(multiDeminArr);


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
  //console.log(results);
  if (err) throw err


  var saleCatID = [];

  results.forEach(function(n) {

    multiDeminArr.forEach(function(array) {
      if (array[2] === n.description) {

console.log(array[3]);
        var arrayProduct = [];
        arrayProduct.push(array[0]);
        arrayProduct.push(array[1]);
        arrayProduct.push(n.id)
        arrayProduct.push(array[3]);
        arrayProduct.push(array[4]);
        saleCatID.push(arrayProduct)
      }
    })
  })

  var sql = "INSERT INTO purchases (supplier, purchase_date, prod_id ,quantity, cost ) VALUES ?"
  var values = [];
  saleCatID.forEach(function(array){
    values.push(array);
  })
  dbOption.query(sql, [values], function(err) {
    if (err) throw err
    dbOption.end();
  })
   });
