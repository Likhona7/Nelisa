var fs = require("fs");
var handlebars = require("handlebars");
var exphbs = require('express-handlebars');
var express = require('express');
var app = express();

var nelisa = require("../nelisa");
var productCategories = require("../files/category.json");
var spazaStringPurchase = nelisa.readData('../files/purchases.csv');

// var weeklyStats = function(path) {
//   //console.log(path);
//   var spazaString = nelisa.readData(path);
//   var soldProducts = nelisa.GroupingData(spazaString);
//   var categoryWeek = nelisa.getMapCategory(productCategories, soldProducts);
//   var PurchasedForWeek = nelisa.GroupPurchaseData(spazaStringPurchase);
//   var totalSellingWeek = nelisa.totalSellingGroupData(spazaString);
//   var purchasedAdded = nelisa.weekPurchases(PurchasedForWeek);
//   var Profit = nelisa.getProfit(purchasedAdded, totalSellingWeek);
//   var categoryProfit = nelisa.getMapCategory(productCategories, Profit);
//   var mostPopular = nelisa.mostPopular(soldProducts),
//     leastPopular = nelisa.leastPopular(soldProducts),
//     popularCategory = nelisa.mostPopular(categoryWeek),
//     notPopularCategory = nelisa.leastPopular(categoryWeek),
//     mostProfitableProduct = nelisa.mostPopular(Profit),
//     profitCategory = nelisa.mostPopular(categoryProfit);
//   var stats = [mostPopular, leastPopular, popularCategory, notPopularCategory, mostProfitableProduct, profitCategory];
//   var statsDescription = ["Most popular product", "Least popular product", "Popular category",
//     "Least popular category", "Most profitable product", "Profit category"
//   ];
//   stats.forEach(function(stat, index) {
//     stat.description = statsDescription[index];
//   });
//   return {
//     mostPopular: stats[0],
//     leastPopular: stats[1],
//     popularCategory: stats[2],
//     notPopularCategory: stats[3],
//     mostProfitableProduct: stats[4],
//     profitCategory: stats[5]
//   }
// }
// var weeklyStatsWeekFor1 = weeklyStats("../files/week1.csv")
// var weeklyStatsWeekFor2 = weeklyStats("../files/week2.csv")
// var weeklyStatsWeekFor3 = weeklyStats("../files/week3.csv")
// var weeklyStatsWeekFor4 = weeklyStats("../files/week4.csv")



//..............................................................................

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// create a route
app.get('/', function (req, res) {
 res.send(weekStats(path));
});

// var weekStat = {
//   week1: weeklyStatsWeekFor1,
//   week2: weeklyStatsWeekFor2,
//   week3: weeklyStatsWeekFor3,
//   week4: weeklyStatsWeekFor4
// }

app.get('/sales/:weekName', function(req, res){

  var week = req.params.week;
  console.log(week);
  var path = "../files/" + week + ".csv";

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

  return result = {
    mostPopular: stats[0],
    leastPopular: stats[1],
    popularCategory: stats[2],
    notPopularCategory: stats[3],
    mostProfitableProduct: stats[4],
    profitCategory: stats[5]
  };
console.log(result);
  res.render("index",result);
});

var server = app.listen(3000, function () {
 var host = server.address().address;
 var port = server.address().port;
 console.log('Example app listening at http://%s:%s', host, port);

});
// app.get('/sales/:week', function(req, res){
//    var week = req.params.weekStat;
//   console.log(week);
//   res.render("index", weekStat[req.params.week]);
// });
