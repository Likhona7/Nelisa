var fs = require("fs");
var handlebars = require("handlebars");
var nelisa = require("../nelisa");
var productCategories = require("../files/category.json");
var spazaStringPurchase = nelisa.readData('./files/purchases.csv');





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
    popularCategory = nelisa.mostPopular(categoryWeek),
    notPopularCategory = nelisa.leastPopular(categoryWeek),
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
  //console.log(weeklyStatsWeekFor1);
var weeklyStatsWeekFor2 = weeklyStats("./files/week2.csv")
var weeklyStatsWeekFor3 = weeklyStats("./files/week3.csv")
var weeklyStatsWeekFor4 = weeklyStats("./files/week4.csv")

var weekStat = {
  week1: weeklyStatsWeekFor1,
  week2: weeklyStatsWeekFor2,
  week3: weeklyStatsWeekFor3,
  week4: weeklyStatsWeekFor4
}

console.log(weekStat);

//..............................................................................
var results = {};


var express = require('express');
var app = express();

// create a route
app.get('/', function (req, res) {
 res.send('Hello World!');
});

//start the server
app.get('/hello', function (req, res) {
 res.send(results);
});

app.get("/message", function(req, res){
  res.send("rendering content to browser")

})


var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});
