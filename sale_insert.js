 var fs = require("fs");
 var mysql = require('mysql');
 var nelisa = require("./nelisa");
 var spazaString = nelisa.readData('./files/week2.csv');
 var productCategories = require("./files/category.json");
 var soldProducts = nelisa.GroupingData(spazaString);
 var categoryWeek = nelisa.getMapCategory(productCategories, soldProducts);

 var list = [];
 spazaString.forEach(function(n) {
   var x = n.split(",")
   list.push(x);
 })
 //console.log(spazaString);
 var sortedList = list.map(function(product) {
   return {
     Day: product[0],
     Dates: product[1],
     Item: product[2],
     SoldItem: product[3],
     SalePrice: product[4]
   }
 })


 var saleDate = [];
 sortedList.forEach(function(n) {


     var arr = [];
    // console.log(n.SoldItem);
     arr.push(n.Dates);
      arr.push(n.Item);
      arr.push(n.SoldItem);
      arr.push(n.SalePrice);
    saleDate.push(arr);



//console.log(saleDate);

 })

 //console.log(saleDate);

 var dbOption = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '0839535220',
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

     saleDate.forEach(function(array) {
       if (array[1] === n.description) {


         var arrayProduct = [];
         arrayProduct.push(array[0]);
         arrayProduct.push(array[2]);
         arrayProduct.push(array[3]);

         arrayProduct.push(n.id)
         saleCatID.push(arrayProduct)
       }
     })
   })
console.log(saleCatID);
var sql = "INSERT INTO sales (sale_date, quantity, price, product_id ) VALUES ?"

var values = [];

saleCatID.forEach(function(array){
  values.push(array);
})

dbOption.query(sql, [values], function(err) {
  if (err) throw err
  dbOption.end();
})
 });
