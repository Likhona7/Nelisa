var fs = require("fs");
var handlebars = require("handlebars");
var nelisa = require("./nelisa");
var categoryWeek1 = {
  "Baked_Goods": 45,
  "Canned_Goods": 40,
  "Dairy": 69,
  "Fruit": 83,
  "Hygiene": 15,
  "Starch": 17,
  "Meat": 22,
  "Soft_Drink": 109,
  "Sweets": 49
};

var spazaString = nelisa.readData('./files/week1.csv');
var soldProducts = nelisa.GroupingData(spazaString);
var data = nelisa.mostPopular(categoryWeek1);
var mostPopular = nelisa.mostPopular(soldProducts);
var leastPopular = nelisa.leastPopular(soldProducts);

console.log(mostPopular);
 console.log(leastPopular);
 console.log(data);
var source = fs.readFileSync("./index.handlebars", 'utf8');
var template = handlebars.compile(source);
var category = {
  description : "most popular category",
  product : data.product,
  quantity : data.quantity
};
var results = template({key: [mostPopular, leastPopular, category]});
fs.writeFileSync("index.html", results)
