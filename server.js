'use strict';
var fs = require("fs");
var handlebars = require("handlebars");
var exphbs = require('express-handlebars');
var express = require('express');
var mysql = require('mysql');
var myConnection = require('express-myconnection');
var bodyParser = require('body-parser');
var categories = require('./routes/categories');
var products = require('./routes/products');
var sales = require('./routes/sales');
var purchases = require('./routes/purchases');
var nelisa = require("./nelisa");
var productCategories = require("./files/category.json");
var spazaStringPurchase = nelisa.readData('./files/purchases.csv');
var app = express();

var dbOptions = {
  host: 'localhost',
  user: 'root',
  password: '0839535220',
  port: 3306,
  database: 'nelisa'
};


var weeklyStats = function(path) {

  //console.log(path);

  var spazaString = nelisa.readData(path);
  var soldProducts = nelisa.GroupingData(spazaString);
  var categoryWeek = nelisa.getMapCategory(productCategories, soldProducts);
  var PurchasedForWeek = nelisa.GroupPurchaseData(spazaStringPurchase);
  var totalSellingWeek = nelisa.totalSellingGroupData(spazaString);
  var purchasedAdded = nelisa.weekPurchases(PurchasedForWeek);
  var Profit = nelisa.getProfit(purchasedAdded, totalSellingWeek);
  var categoryProfit = nelisa.getMapCategory(productCategories, Profit);

  var mostPopular = nelisa.mostPopular(soldProducts),
    leastPopular = nelisa.leastPopular(soldProducts),
    notPopularCategory = nelisa.leastPopular(categoryWeek),
    popularCategory = nelisa.mostPopular(categoryWeek),
    mostProfitableProduct = nelisa.mostPopular(Profit),
    profitCategory = nelisa.mostPopular(categoryProfit);

  var stats = [mostPopular, leastPopular, popularCategory, notPopularCategory, mostProfitableProduct, profitCategory];
  var statsDescription = ["Most popular product", "Least popular product", "Popular category",
    "Least popular category", "Most profitable product", "Profit category"
  ];

  stats.forEach(function(stat, index) {
    stat.description = statsDescription[index];
  });


  return {
    mostPopular: stats[0],
    leastPopular: stats[1],
    popularCategory: stats[2],
    notPopularCategory: stats[3],
    mostProfitableProduct: stats[4],
    profitCategory: stats[5]
  }
}

var weeklyStatsWeekFor1 = weeklyStats("./files/week1.csv")
var weeklyStatsWeekFor2 = weeklyStats("./files/week2.csv")
var weeklyStatsWeekFor3 = weeklyStats("./files/week3.csv")
var weeklyStatsWeekFor4 = weeklyStats("./files/week4.csv")

var weekStat = {
  week1: weeklyStatsWeekFor1,
  week2: weeklyStatsWeekFor2,
  week3: weeklyStatsWeekFor3,
  week4: weeklyStatsWeekFor4
}



//..............................................................................

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
  }))
  // parse application/json
app.use(bodyParser.json())

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', {
    error: err
  });
}

//setup the handlers

app.get('/categories', categories.show);
app.get('/categories/add', categories.showAdd);
 app.get('/categories/edit/:id', categories.get);
 app.post('/categories/update/:id', categories.update);
 app.post('/categories/add', categories.add);
// //this should be a post but this is only an illustration of CRUD - not on good practices
 app.get('/categories/delete/:id', categories.delete);
////////////////////////////////////////////////////////////////////////////////
 app.get('/products', products.show);
 app.get('/products/add', products.showAdd);
 app.get('/products/edit/:id', products.get);
 app.post('/products/update/:id', products.update);
 app.get('/products/delete/:id', products.delete);
 app.post('/products/add', products.add);

 ////////////////////////////////////////////////////////////////////////

 app.get('/sales', sales.show);
 app.get('/sales/add_sales', sales.showAdd);
//app.get('/sales/edit/:id', sales.showEdit);
 app.post('/sales/add_sales', sales.addsale);
 app.get('/sales/edit_sales/:id', sales.get);
 // app.get('/sales/add_sales', sales.addsale);
// app.post('/sales/update/:id', sales.salesUpdate);
 app.post('/sales/update/:id', sales.update);

 app.get('/sales/delete/:id', sales.delete);
 ///////////////////////////////////////////////////////////////////


 app.get('/purchases', purchases.show);
 app.get('/purchases/add_purchases', purchases.showAdd);
 app.post('/purchases/add_purchases', purchases.addPurchases);

 app.get('/purchases/edit_purchases/:id', purchases.get);
 app.post('/purchases/update/:id', purchases.update);
 app.get('/purchases/delete/:id', purchases.delete);
 //tion of CRUD - not on good practices
// app.get('/products/delete/:id', products.delete);



app.use(errorHandler);

//..............................................................................
app.get('/sales/:week', function(req, res) {
  var week = req.params.weekStat;
  // console.log(week);
  res.render("index", weekStat[req.params.week]);
});
app.get("/contact", function(req, res) {
  res.render("contact");
});



//set the port number to an existing environment variable PORT or default to 5000
app.set('port', (process.env.PORT || 5000));
//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});









// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
// // create a route
// app.get('/', function(req, res){
//   res.render( "home")
// });
// app.get('/sales/:week_name', function(req, res) {
//   var weekname = req.params.week_name;
//   var weeklyFile = "../files/" + weekname + ".csv";
//   var data = weeklyStats(weeklyFile, "../files/purchases.csv");
//   res.render("weeklyStats", {
//     key: data,
//     week: weekname
//   });
// });
// start the server
// var server = app.listen(3000, function() {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('App listening at http://%s:%s', host, port);
// });
