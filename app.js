var fs = require("fs");
var handlebars = require("handlebars");
var nelisa = require("./nelisa");
var productCategories = require("./files/category.json");




var spazaString = nelisa.readData('./files/week1.csv');
var spazaString2 = nelisa.readData('./files/week2.csv');
var spazaString3 = nelisa.readData('./files/week3.csv');
var spazaString4 = nelisa.readData('./files/week4.csv');

//..............................................................................

var soldProducts = nelisa.GroupingData(spazaString);
var soldProducts2 = nelisa.GroupingData(spazaString2);
var soldProducts3 = nelisa.GroupingData(spazaString3);
var soldProducts4 = nelisa.GroupingData(spazaString4);

//..............................................................................

var mostPopular = nelisa.mostPopular(soldProducts);
var mostPopular2 = nelisa.mostPopular(soldProducts2);
var mostPopular3 = nelisa.mostPopular(soldProducts3);
var mostPopular4 = nelisa.mostPopular(soldProducts4);

//..............................................................................

var leastPopular = nelisa.leastPopular(soldProducts);
var leastPopular2 = nelisa.leastPopular(soldProducts2);
var leastPopular3 = nelisa.leastPopular(soldProducts3);
var leastPopular4 = nelisa.leastPopular(soldProducts4);

//..............................................................................
var categoryWeek1 = nelisa.getMapCategory(productCategories, soldProducts);
var categoryWeek2 = nelisa.getMapCategory(productCategories, soldProducts2);
var categoryWeek3 = nelisa.getMapCategory(productCategories, soldProducts3);
var categoryWeek4 = nelisa.getMapCategory(productCategories, soldProducts4);

//..............................................................................

var dataMostPopular = nelisa.mostPopular(categoryWeek1);
var dataMostPopular2 = nelisa.mostPopular(categoryWeek2);
var dataMostPopular3 = nelisa.mostPopular(categoryWeek3);
var dataMostPopular4 = nelisa.mostPopular(categoryWeek4);

//..............................................................................
var dataLeastPopular = nelisa.leastPopular(categoryWeek1);
var dataLeastPopular2 = nelisa.leastPopular(categoryWeek2);
var dataLeastPopular3 = nelisa.leastPopular(categoryWeek3);
var dataLeastPopular4 = nelisa.leastPopular(categoryWeek4);


//..............................................................................
var spazaStringPurchase = nelisa.readData('./files/purchases.csv');



var PurchasedForWeek1 = nelisa.GroupPurchaseData(spazaStringPurchase);

var totalSellingWeek1 = nelisa.totalSellingGroupData(spazaString);
console.log(totalSellingWeek1);

var purchasedAdded = nelisa.weekPurchases(PurchasedForWeek1);

var Profit = nelisa.getProfit(purchasedAdded, totalSellingWeek1);

var mostProfitableProduct = nelisa.mostPopular(Profit);


//..............................................................................
var categoryProfit = nelisa.getMapCategory(productCategories, Profit);
var profitCategory = nelisa.mostPopular(categoryProfit);
//console.log(profitCategory);
//..............................................................................
//console.log(mostProfitableProduct);
//console.log(leastPopular);
//console.log(dataLeastPopular);
var source = fs.readFileSync("./index.handlebars", 'utf8');
var template = handlebars.compile(source);
////////////////////////////////////////////////////////////////////////////////
var mostPopular = {
  description: "Most popular product",
  product: mostPopular.product,
  quantity: mostPopular.quantity
};
//////////////////////////////////////////////////////////////////////////////
var popularCategory = {
  description: "most popular category",
  product: dataMostPopular.product,
  quantity: dataMostPopular.quantity
};
////////////////////////////////////////////////////////////////////////////////
var notpopularCategory = {
  description: "least popular category",
  product: dataLeastPopular.product,
  quantity: dataLeastPopular.quantity
};
///////////////////////////////////////////////////////////////////////////////
var leastPopular = {
  description: "Least popular product",
  product: leastPopular.product,
  quantity: leastPopular.quantity
};
////////////////////////////////////////////////////////////////////////////////
var profitableProduct = {
    description: "Most profitable Product",
    product: mostProfitableProduct.product,
    quantity: mostProfitableProduct.quantity
  }
  ////////////////////////////////////////////////////////////////////////////////
var profitablecategory = {
    description: "Most profitable category",
    product: profitCategory.product,
    quantity: profitCategory.quantity
  }
  //console.log();

  ////////////////////////////////////////////////////////////////////////////////
var results = template({key:
  [mostPopular, leastPopular, popularCategory, notpopularCategory, profitableProduct, profitablecategory]
});

fs.writeFileSync("week1.html", results)


// weeklyStats('week1');
// weeklyStats('week2');
// weeklyStats('week3');
// weeklyStats('week4');
//
//
// var getProductStats = function(path){
//
//     var spazaString = nelisa.readData(path);
//     var soldProducts = nelisa.GroupingData(spazaString);
//
//     return {
//         mostPopular : nelisa.mostPopular(soldProducts),
//         leastPopular : nelisa.leastPopular(soldProducts)
//     }
//
// }
