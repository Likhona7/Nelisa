var fs = require("fs");
var handlebars = require("handlebars");
var nelisa = require("./nelisa");
var productCategories = require("./files/category.json");
 var spazaStringPurchase = nelisa.readData('./files/purchases.csv');


var weeklyStats = function(path) {

  var spazaString = nelisa.readData(path);
  var soldProducts = nelisa.GroupingData(spazaString);
  var PurchasedForWeek = nelisa.GroupPurchaseData(spazaStringPurchase);
//  var totalSellingWeek = nelisa.totalSellingGroupData(spazaString);
  var purchasedAdded = nelisa.weekPurchases(PurchasedForWeek);
  var Profit = nelisa.getProfit(purchasedAdded, totalSellingWeek);
  var categoryProfit = nelisa.getMapCategory(productCategories, Profit);
  return {
    mostPopular: nelisa.mostPopular(soldProducts),
    leastPopular: nelisa.leastPopular(soldProducts),

    mostProfitableProduct: nelisa.mostPopular(Profit),
    profitCategory: nelisa.mostPopular(categoryProfit)
  }
}
for(var key in weeklyStats){

  console.log(weeklyStats);
}
var weeklyStatsWeekFor1 = weeklyStats("./files/week1.csv")
console.log(weeklyStatsWeekFor1);
var weeklyStatsWeekFor2 = weeklyStats("./files/week2.csv")
var weeklyStatsWeekFor3 = weeklyStats("./files/week3.csv")
var weeklyStatsWeekFor4 = weeklyStats("./files/week4.csv")


//console.log(weeklyStatsWeekFor1);





// var wk = process.argv[2];
//
// var filePath = './files/' + wk + '.csv';
// var spazaString = nelisa.readData(filePath);
// var soldProducts = nelisa.GroupingData(spazaString);
// var mostPopular = nelisa.mostPopular(soldProducts);
// var mostPopular = {
//   description: "Most popular product",
//   product: mostPopular.product,
//   quantity: mostPopular.quantity
// };
// var leastPopular = nelisa.leastPopular(soldProducts);
// var leastPopular = {
//   description: "Least popular product",
//   product: leastPopular.product,
//   quantity: leastPopular.quantity
// };
//
// var categoryWeek = nelisa.getMapCategory(productCategories, soldProducts);
// var popularCategory = nelisa.mostPopular(categoryWeek);
// var notpopularCategory = nelisa.leastPopular(categoryWeek);
//
//   var popularCategory = {
//     description: "most popular category",
//     product: popularCategory.product,
//     quantity: popularCategory.quantity
//   };
//
//   var notpopularCategory = {
//     description: "least popular category",
//     product: notpopularCategory.product,
//     quantity: notpopularCa.quantity
//   };
//
// console.log(notpopularCategory);
//   var source = fs.readFileSync("./index.handlebars", 'utf8');
// var template = handlebars.compile(source);
//
// var results = template(mostPopular);
//
// fs.writeFileSync(wk + ".html", results);

// var spazaString = nelisa.readData('./files/week1.csv');
// var spazaString2 = nelisa.readData('./files/week2.csv');
// var spazaString3 = nelisa.readData('./files/week3.csv');
// var spazaString4 = nelisa.readData('./files/week4.csv');


//..............................................................................



// //var soldProductsWeek1 = nelisa.G"./files/week1.csv"groupingData(spazaString);
//
// var soldProductsWeek2 = nelisa.GroupingData(spazaString2);
// var soldProductsWeek3 = nelisa.GroupingData(spazaString3);
// var soldProductsWeek4 = nelisa.GroupingData(spazaString4);
// //console.log(soldProductsWeek4);
// //var weeklyStats = nelisa.GroupingData(spazaString)
// //weeklyStats(spazaString);
// //console.log(weeklyStats);
// var soldProducts = nelisa.GroupingData(spazaString);
//
// var mostPopular = nelisa.mostPopular(soldProducts);
// var leastPopular = nelisa.leastPopular(soldProducts);
// var categoryWeek = nelisa.getMapCategory(productCategories, soldProducts);
// var dataMostPopular = nelisa.mostPopular(categoryWeek);
// var dataLeastPopular = nelisa.leastPopular(categoryWeek);
// //console.log(dataLeastPopular);
//
// //..............................................................................
// var PurchasedForWeek = nelisa.GroupPurchaseData(spazaStringPurchase);
// var totalSellingWeek = nelisa.totalSellingGroupData(spazaString);
// var purchasedAdded = nelisa.weekPurchases(PurchasedForWeek);
// var Profit = nelisa.getProfit(purchasedAdded, totalSellingWeek);
// var mostProfitableProduct = nelisa.mostPopular(Profit);
// //..............................................................................
// var categoryProfit = nelisa.getMapCategory(productCategories, Profit);
// var profitCategory = nelisa.mostPopular(categoryProfit);
// //console.log(profitCategory);
// ////////////////////////////////////////////////////////////////////////////////
// // console.log(mostPopular);
// // console.log(mostProfitableProduct);
// // console.log(leastPopular);
// // console.log(dataLeastPopular);
// var source = fs.readFileSync("./index.handlebars", 'utf8');
// var template = handlebars.compile(source);
// ////////////////////////////////////////////////////////////////////////////////
// var mostPopular = {
//   description: "Most popular product",
//   product: mostPopular.product,
//   quantity: mostPopular.quantity
// };
// //////////////////////////////////////////////////////////////////////////////
// var popularCategory = {
//   description: "most popular category",
//   product: dataMostPopular.product,
//   quantity: dataMostPopular.quantity
// };
// ////////////////////////////////////////////////////////////////////////////////
// var notpopularCategory = {
//   description: "least popular category",
//   product: dataLeastPopular.product,
//   quantity: dataLeastPopular.quantity
// };.
// ///////////////////////////////////////////////////////////////////////////////
// var leastPopular = {
//   description: "Least popular product",
//   product: leastPopular.product,
//   quantity: leastPopular.quantity
// };
// ////////////////////////////////////////////////////////////////////////////////
// var profitableProduct = {
//     description: "Most profitable Product",
//     product: mostProfitableProduct.product,
//     quantity: mostProfitableProduct.quantity
//   }
//   ////////////////////////////////////////////////////////////////////////////////
// var profitablecategory = {
//     description: "Most profitable category",
//     product: profitCategory.product,
//     quantity: profitCategory.quantity
//   }
//   //console.log();
//
// ////////////////////////////////////////////////////////////////////////////////
// var results = template({
//   key: [mostPopular, leastPopular, popularCategory, notpopularCategory, profitableProduct, profitablecategory]
// });
// fs.writeFileSync("week1.html", results);
// fs.writeFileSync("week2.html", results);
// fs.writeFileSync("week3.html", results);
// fs.writeFileSync("week4.html", results);
//
//
// var weeklyStats = function(filePath) {
//   fs.writeFileSync(filePath, results);
//
//   // var spazaString = nelisa.readData(path);
//   // var soldProducts = nelisa.GroupingData(spazaString);
//   //
//   // return {
//   //     mostPopular : nelisa.mostPopular(soldProducts),
//   //     leastPopular : nelisa.leastPopular(soldProducts)
//   // }
//
// }
//
// // fs.writeFileSync("week1.html", results);
// // fs.writeFileSync("week2.html", results);
// // fs.writeFileSync("week3.html", results);
// // fs.writeFileSync("week4.html", results);
//
//
// // weeklyStats('week1');
// // weeklyStats('week2');
// // weeklyStats('week3');
// // weeklyStats('week4');
// //
// //
