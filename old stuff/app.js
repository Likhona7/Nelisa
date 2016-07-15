var fs = require("fs");
var handlebars = require("handlebars");
var nelisa = require("../nelisa");
var exphbs = require('express-handlebars');
var express = require('express');
var app = express();

var productCategories = require("./files/category.json");
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


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/sales/:week', function(req, res){
   var week = req.params.weekStat;
  // console.log(week);
  res.render("index", weekStat[req.params.week]);
});



var server = app.listen(3000, function () {
 var host = server.address().address;
 var port = server.address().port;
 console.log('Example app listening at http://%s:%s', host, port);

});























// var week = function(weekName) {
//   var weekStat = weeklyStats('./files/' + weekName + '.csv')
//   var source = fs.readFileSync("./index.handlebars", 'utf8');
//
//
//   var template = handlebars.compile(source);
//   var results = template(weekStat);
//
// //console.log(results);
//   fs.writeFileSync(weekName + ".html", results);
// }
// //...........................................................................
//
//
// week("week1");
// week("week2");
// week("week3");
// week("week4");
