var fs = require("fs");
var handlebars = require("handlebars");
var nelisa = require("./nelisa");
var productCategories = {
  "Bananas - loose": "Fruit",
  "Apples - loose": "Fruit",
  "Heart Chocolates ": "Sweets",
  "Imasi": "Dairy",
  "Bread": "Baked_Goods",
  "Chakalaka Can": "Canned_Goods",
  "Coke 500ml": "Soft_Drink",
  "Cream Soda 500ml": "Soft_Drink",
  "Fanta 500ml": "Soft_Drink",
  "Gold Dish Vegetable Curry Can": "Canned_Goods",
  "Iwisa Pap 5kg": "Starch",
  "Milk 1l": "Dairy",
  "Mixed Sweets 5s": "Sweets",
  "Shampoo 1 litre": "Hygiene",
  "Soap Bar": "Hygiene",
  "Top Class Soy Mince": "Meat",
  "Heart Chocolates": "Sweets",
  "Valentine Cards": "Other",
  "Rose (plastic)": "Other"
};

var spazaString = nelisa.readData('./files/week1.csv');
var soldProducts = nelisa.GroupingData(spazaString);
var mostPopular = nelisa.mostPopular(soldProducts);
var leastPopular = nelisa.leastPopular(soldProducts);
//..............................................................................
var categoryWeek1 = nelisa.getMapCategory(productCategories, soldProducts);
var data = nelisa.mostPopular(categoryWeek1);
var data2 = nelisa.leastPopular(categoryWeek1);

//..............................................................................
var spazaStringPurchase = nelisa.readData('./files/purchases.csv');
var data3 = nelisa.GroupPurchaseData(spazaStringPurchase);
var totalSelling2 = nelisa.totalSellingGroupData(spazaString)
var purchasedAdded = nelisa.weekPurchases(data3);
var Profit = nelisa.getProfit(purchasedAdded, totalSelling2)
var mostProfitableProduct = nelisa.mostPopular(Profit);
//..............................................................................

//..............................................................................
//console.log(mostProfitableProduct);
//console.log(leastPopular);
//console.log(data2);
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
  product: data.product,
  quantity: data.quantity
};
////////////////////////////////////////////////////////////////////////////////
var notpopularCategory = {
  description: "least popular category",
  product: data2.product,
  quantity: data2.quantity
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
var results = template({
  key: [mostPopular, leastPopular, popularCategory, notpopularCategory, profitableProduct]
});
fs.writeFileSync("index.html", results)
