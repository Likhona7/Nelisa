var fs = require("fs");
var mysql = require('mysql');
var nelisa = require("./nelisa");
var spazaString = nelisa.readData('./files/week2.csv');
var productCategories = require("./files/category.json");
var soldProducts = nelisa.GroupingData(spazaString);
var categoryWeek = nelisa.getMapCategory(productCategories, soldProducts);
/////////////////////////////////////////////////////////////////////////////
var multiDeminArr = [];

//console.log(productCategories);


for (var key in productCategories) {
  //console.log(key);

  var arr = [];
  arr.push(key);
  arr.push(productCategories[key]);
  multiDeminArr.push(arr);}
//console.log(multiDeminArr);
var dbOption = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0839535220',
  port: 3306,
  database: 'nelisa'});
////////////////////////////////////////////////////////////////////////////////
console.log('You are now connected 2 likhonas work...')
  //get your categories from the database
dbOption.query('SELECT * FROM categories', function(err, results) {
  if (err) throw err
  // var catIdMap = {};// results.forEach(function(n) {//catIdMap[n.description] = n.id;//   })
  var productCatID = [];
  results.forEach(function(n) {
      multiDeminArr.forEach(function(array) {
//console.log(array);
        if (array[1] === n.description) {
          var arrayProduct = [];
          arrayProduct.push(array[0]);
          arrayProduct.push(n.id)
          productCatID.push(arrayProduct);
        }
      })
    })
  var sql = "INSERT INTO products (description, category_id  ) VALUES ?";
  var values = [];
  productCatID.forEach(function(array) {
    values.push(array);
  })
  dbOption.query(sql, [values], function(err) {
    if (err) throw err
    dbOption.end();
  })
})
