var fs = require("fs");

var handlebars = require("handlebars");

var nelisa = require("./nelisa");
var spazaString = nelisa.readData('./files/week1.csv');
var soldProducts = nelisa.GroupingData(spazaString);
var mostPopular = nelisa.mostPopular(soldProducts);





var source = fs.readFileSync("./index.handlebars", 'utf8');

var template = handlebars.compile(source);

var results = template(mostPopular);

fs.writeFileSync("nelisa.html", results)
