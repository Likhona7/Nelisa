var fs = require("fs");
var handlebars = require("handlebars");
var nelisa = require("../nelisa");
var productCategories = require("../files/category.json");
var spazaString = nelisa.readData('../files/week1.csv');
var soldProducts = nelisa.GroupingData(spazaString);
var mostPopular = nelisa.mostPopular(soldProducts);
var leastPopular = nelisa.leastPopular(soldProducts);

//..............................................................................
var categoryWeek1 = nelisa.getMapCategory(productCategories, soldProducts);
//console.log(productCategories);
var data = nelisa.mostPopular(categoryWeek1);
var data2 = nelisa.leastPopular(categoryWeek1);
//..............................................................................
var spazaStringPurchase = nelisa.readData('../files/purchases.csv');
var data3 = nelisa.GroupPurchaseData(spazaStringPurchase);
var totalSelling2 = nelisa.totalSellingGroupData(spazaString);
var purchasedAdded = nelisa.weekPurchases(data3);
var Profit = nelisa.getProfit(purchasedAdded, totalSelling2);
var mostProfitableProduct = nelisa.mostPopular(Profit);
//..............................................................................
var categoryProfit = nelisa.getMapCategory(productCategories, Profit);
var profitCategory = nelisa.mostPopular(categoryProfit);
//console.log(profitCategory);
//..............................................................................
//console.log(mostProfitableProduct);
//console.log(leastPopular);
//console.log(data2);
var source = fs.readFileSync("../index.handlebars", 'utf8');
var template = handlebars.compile(source);
//..............................................................................
var mostPopular = {
  description: "Most popular product",
  product: mostPopular.product,
  quantity: mostPopular.quantity
};
//..............................................................................
var popularCategory = {
  description: "most popular category",
  product: data.product,
  quantity: data.quantity
};
//..............................................................................
var notpopularCategory = {
  description: "least popular category",
  product: data2.product,
  quantity: data2.quantity
};
//..............................................................................
var leastPopular = {
  description: "Least popular product",
  product: leastPopular.product,
  quantity: leastPopular.quantity
};
//..............................................................................
var profitableProduct = {
    description: "Most profitable Product",
    product: mostProfitableProduct.product,
    quantity: mostProfitableProduct.quantity
  }
//..............................................................................
var profitablecategory = {
    description: "Most profitable category",
    product: profitCategory.product,
    quantity: profitCategory.quantity
  }
  ////////////////////////////////////////////////////////////////////////////////
var results = template({key:
  [mostPopular, leastPopular, popularCategory, notpopularCategory, profitableProduct, profitablecategory]
});


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
