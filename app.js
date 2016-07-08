var fs = require("fs");
var handlebars = require("handlebars");
var nelisa = require("./nelisa");
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
 "Least popular category", "Most profitable product", "Profit category"];

stats.forEach(function(stat, index){
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






var source = fs.readFileSync("./index.handlebars", 'utf8');


var template = handlebars.compile(source);

//console.log(weeklyStatsWeekFor1);

var results = template(weekStat.week1);


console.log(results);
var week = function(path){


 fs.writeFileSync(path + ".html", results);
 }
week("week1");
week("week2");



//..............................................................................



//
// ////////////////////////////////////////////////////////////////////////////////
//
//
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
//
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
