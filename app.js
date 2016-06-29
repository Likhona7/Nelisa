var fs = require("fs");

var handlebars = require("handlebars");
var nelisa = require("./nelisa");

var spazaString = nelisa.readData('./files/week1.csv');
var soldProducts = nelisa.GroupingData(spazaString);
var mostPopular = nelisa.mostPopular(soldProducts);
console.log(mostPopular);
console.log(leastPopular);

var leastPopular = nelisa.leastPopular(soldProducts);

var source = fs.readFileSync("./index.handlebars", 'utf8');

var template = handlebars.compile(source);

var results = template({key:[mostPopular, leastPopular]});

fs.writeFileSync("index.html", results)
